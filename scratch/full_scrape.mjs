import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';
const base='https://smansarembang.sch.id';
const pages=[
  '/', '/pages/2-profil-sekolah.html','/pages/3-makna-lambang.html','/pages/9-mars-dan-himne.html','/pages/5-fasilitas.html','/pages/8-struktur-organisasi.html','/blog','/pengumuman','/team/guru','/team/pegawai','/agenda','/gallery','/video','/download','/siswa','/kontak'
];
const b=await chromium.launch({headless:true});
const p=await b.newPage({userAgent:'Mozilla/5.0'});
const results=[];
for(const u of pages){
  const url=base+u;
  console.log('GET',url);
  try{
    await p.goto(url,{waitUntil:'domcontentloaded',timeout:30000});
    await p.waitForTimeout(1500);
    const title=await p.title();
    const text=await p.evaluate(()=>document.body.innerText.slice(0,12000));
    const html=await p.content();
    const imgs=await p.evaluate(()=>[...document.querySelectorAll('img')].map(i=>i.src).filter(s=>s).slice(0,80));
    const links=await p.evaluate(()=>[...document.querySelectorAll('a')].map(a=>a.href).filter(h=>h.includes('smansarembang')).slice(0,80));
    results.push({url,title,textLen:text.length,imgs:imgs.length,links:links.length});
    fs.writeFileSync(`scratch/raw2_${u.replace(/[^a-z0-9]/gi,'_')}.txt`, `URL: ${url}\nTITLE: ${title}\n\n---TEXT---\n${text}\n\n---IMGS---\n${imgs.join('\n')}\n\n---LINKS---\n${links.join('\n')}\n`);
    fs.writeFileSync(`scratch/html2_${u.replace(/[^a-z0-9]/gi,'_')}.html`, html);
    console.log(` -> ${title} | text ${text.length} | imgs ${imgs.length}`);
  }catch(e){ console.log('ERR',url,e.message); results.push({url,err:e.message}); }
}
// collect all image urls
const allImgs=new Set();
for(const f of fs.readdirSync('scratch').filter(f=>f.startsWith('raw2_'))){
  const c=fs.readFileSync('scratch/'+f,'utf8');
  const m=c.match(/https:\/\/smansarembang\.sch\.id\/[^\s"']+\.(png|jpg|jpeg|webp)/gi)||[];
  m.forEach(x=>allImgs.add(x.replace(/&amp;/g,'&')));
}
console.log('\nUNIQUE IMGS',allImgs.size);
for(const u of allImgs) console.log(u);
fs.writeFileSync('scratch/all_images.txt', [...allImgs].join('\n'));
console.log(JSON.stringify(results,null,2));
await b.close();
