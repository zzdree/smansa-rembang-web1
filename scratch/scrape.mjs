import fs from 'fs'
import path from 'path'
const outDir = path.join(process.cwd(),'scratch')
if(!fs.existsSync(outDir)) fs.mkdirSync(outDir,{recursive:true})
const urls=[
 'https://smansarembang.sch.id/',
 'https://smansarembang.sch.id/pages/2-profil-sekolah.html',
 'https://smansarembang.sch.id/pages/3-makna-lambang.html',
 'https://smansarembang.sch.id/pages/9-mars-dan-himne.html',
 'https://smansarembang.sch.id/pages/5-fasilitas.html',
 'https://smansarembang.sch.id/pages/8-struktur-organisasi.html',
 'https://smansarembang.sch.id/blog',
 'https://smansarembang.sch.id/pengumuman',
 'https://smansarembang.sch.id/team/guru',
 'https://smansarembang.sch.id/team/pegawai',
 'https://smansarembang.sch.id/agenda',
 'https://smansarembang.sch.id/gallery',
 'https://smansarembang.sch.id/video',
 'https://smansarembang.sch.id/download',
];
for(const u of urls){
  try{
    const r=await fetch(u,{headers:{'User-Agent':'Mozilla/5.0'}})
    const html=await r.text()
    const text=html.replace(/<script[\s\S]*?<\/script>/gi,'').replace(/<style[\s\S]*?<\/style>/gi,'').replace(/<[^>]+>/g,' ').replace(/\s+/g,' ').trim()
    const name=(u.replace(/https:\/\/smansarembang\.sch\.id\/?/,'').replace(/[^a-z0-9]/gi,'_')||'home')
    fs.writeFileSync(path.join(outDir,'raw_'+name+'.txt'), text.slice(0,30000),'utf8')
    const bodyMatch=html.match(/<body[\s\S]*?<\/body>/i)
    if(bodyMatch) fs.writeFileSync(path.join(outDir,'html_'+name+'.html'), bodyMatch[0].slice(0,80000),'utf8')
    console.log(name+': '+text.length+' chars status '+r.status)
  }catch(e){ console.log('ERR '+u+': '+e.message)}
}
