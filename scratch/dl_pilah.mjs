import fs from 'fs';
import path from 'path';

const raw = fs.readFileSync('scratch/all_images.txt','utf8').split('\n').filter(Boolean).map(s=>s.trim());
// deduplicate real galery urls (strip timthumb wrapper)
const urls = new Set();
for(const u of raw){
  // timthumb?src=REAL
  const m = u.match(/timthumb\?src=(https[^&]+)/);
  if(m) urls.add(decodeURIComponent(m[1]));
  else if(!u.includes('timthumb')) urls.add(u);
}
// also add direct galery list from SMANSA old list - ensure all 29 present
const deduped = [...urls].filter(u=>!u.includes('profil_icon.jpeg')); // keep separate
console.log('Unique non-team images:', deduped.length);
console.log(deduped.join('\n'));
fs.writeFileSync('scratch/deduped_images.txt', deduped.join('\n'));

// download
import https from 'https';
import http from 'http';
function dl(url, dest){
  return new Promise((res,rej)=>{
    const mod = url.startsWith('https') ? https : http;
    const req = mod.get(url, {headers:{'User-Agent':'Mozilla/5.0'}}, (r)=>{
      if(r.statusCode>=300 && r.statusCode<400 && r.headers.location){
        dl(r.headers.location, dest).then(res).catch(rej); return;
      }
      if(r.statusCode!==200){ rej(new Error(url+' -> '+r.statusCode)); r.resume(); return; }
      const dir=path.dirname(dest); fs.mkdirSync(dir,{recursive:true});
      const ws=fs.createWriteStream(dest);
      r.pipe(ws); ws.on('finish',()=>res(dest)); ws.on('error',rej);
    });
    req.on('error',rej);
    req.setTimeout(15000, ()=>{ req.destroy(new Error('timeout '+url)); });
  });
}

let ok=0, fail=0;
for(const u of deduped){
  try{
    const filename = path.basename(new URL(u).pathname);
    // pilah
    let dest;
    if(u.includes('/slider/')) dest = `public/images/slider/${filename}`;
    else if(u.includes('/galery/')) dest = `public/images/galery/${filename}`;
    else if(u.includes('/powered/')) dest = `public/images/powered/${filename}`;
    else if(u.includes('/pages/image/')) dest = `public/images/pages/${filename}`;
    else if(u.includes('sw-sw-logoweb')) dest = `public/images/${filename}`;
    else if(u.includes('/avatar/')) dest = `public/images/avatar/${filename}`;
    else if(u.includes('favicon')) dest = `public/favicon.png`;
    else dest = `public/images/misc/${filename}`;
    await dl(u, dest);
    console.log('OK', filename, '->', dest);
    ok++;
  }catch(e){ console.log('FAIL', u, e.message); fail++; }
}
console.log(`Done ok=${ok} fail=${fail}`);
// also ensure gallery alias + hero + logo root
for(const u of deduped.filter(x=>x.includes('/galery/'))){
  const fn=path.basename(new URL(u).pathname);
  const src=`public/images/galery/${fn}`;
  const dst=`public/images/gallery/${fn}`;
  if(fs.existsSync(src) && !fs.existsSync(dst)){ fs.mkdirSync(path.dirname(dst),{recursive:true}); fs.copyFileSync(src,dst); }
}
if(fs.existsSync('public/images/sw-sw-logoweb.png') && !fs.existsSync('public/logo.png')) fs.copyFileSync('public/images/sw-sw-logoweb.png','public/logo.png');
if(!fs.existsSync('public/favicon.png') && fs.existsSync('public/images/favicon.png')) fs.copyFileSync('public/images/favicon.png','public/favicon.png');
// hero from first galery
const first=deduped.find(x=>x.includes('/galery/'));
if(first){ const fn=path.basename(new URL(first).pathname); const src=`public/images/galery/${fn}`; const dst='public/images/hero/hero-1.jpg'; if(fs.existsSync(src)){ fs.mkdirSync(path.dirname(dst),{recursive:true}); fs.copyFileSync(src,dst); console.log('hero ->',dst); } }
