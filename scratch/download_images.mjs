import fs from 'fs'
import path from 'path'

const urls = [
  'https://smansarembang.sch.id/sw-content/sw-sw-logoweb.png',
  'https://smansarembang.sch.id/sw-content/sw-sw-logoweb.jpg',
  'https://smansarembang.sch.id/favicon.png',
  ...`3b1071aab964e89dd25da7a9038c5fa9
31236a6ca4b64d5ff9aa644502b57498
88099fff5402d32cb61689380134e700
12108bbbc13568d02d4949a406f36b5b
ccec9ca3aaeb1796a28eaabf8dcb1a62
0ebcb65adab27065623df6b274095758
86f6378892c28953823ba1a3c4841bac
99472b6d5d1df8325a5f0e2880f4efc3
8091f720499814cbb9d94c52f6414e9e
c330c438fd2b078317d60395c289fb78
ace4b393463cdbde2ddd211f127773c9
ad7286dd300c40fd04883db5d8ea3781
fe2f2fa368a1d6e32b0c765db949c5fa
67e66ae4f02283c992284b97bb2ceacd
293005a5d741c661fe52c3b47ce303db
428b5effb3aacd742ebb4e326e81af54
dce156a87f1e634fdc495e5fc1f57398
2a96b6cfa52c459fc12844115413fc5e
756af809a7e0f2c217639de193a8794d
a8b4918f9b29e68e73552afbc828f195
a8013ef2b2df5c98752f818155e54222
38b772fe8c05709a38b226767409e1fc
127790fbbe062dec769c2f26a5b45392
cdfc16eef08ab3dbc7a488930a241347
baf52767aa0b192a8faf1da18496d0d0
25974b5e895095c52efb63bf4b9e3696
e7e75f835299fe5f7ed1dac89b4f2c77
a3fa8017c83dfded6c10de14f548bbfc
05d0e7b29d64e56dc46ac86ef0afb3d7`.split('\n').map(s=>s.trim()).filter(Boolean).map(h=>`https://smansarembang.sch.id/sw-content/upload/galery/${h}.jpg`)
]

const destRoot = path.join(process.cwd(),'public','images','galery')
fs.mkdirSync(destRoot,{recursive:true})
fs.mkdirSync(path.join(process.cwd(),'public','images'),{recursive:true})

for(const u of urls){
  const name = u.includes('sw-sw-logoweb.png') ? 'logo.png'
    : u.includes('sw-sw-logoweb.jpg') ? 'logo.jpg'
    : u.includes('favicon.png') ? 'favicon.png'
    : path.basename(new URL(u).pathname)
  const dest = (name==='logo.png'||name==='logo.jpg'||name==='favicon.png')
    ? path.join(process.cwd(),'public','images',name)
    : path.join(destRoot,name)
  try{
    const r=await fetch(u)
    if(!r.ok){ console.log('FAIL '+r.status+' '+u); continue }
    const buf=Buffer.from(await r.arrayBuffer())
    fs.writeFileSync(dest, buf)
    console.log('OK '+name+' '+buf.length)
  }catch(e){ console.log('ERR '+u+' '+e.message)}
}
console.log('done')
