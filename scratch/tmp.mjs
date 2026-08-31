import fs from 'fs'
const c = fs.readFileSync('scratch/html_home.html','utf8')
let imgs=[...c.matchAll(/src="([^"]+)"/g)].map(m=>m[1]).filter(s=>/\.(jpg|jpeg|png|webp)/i.test(s))
console.log(imgs.slice(0,30).join('\n'))
let uniq=[...new Set(imgs)]
console.log('TOTAL',uniq.length)
let full = uniq.map(u=> u.startsWith('http')?u : 'https://smansarembang.sch.id/'+u.replace(/^\//,'')).join('\n')
fs.writeFileSync('scratch/tmp_imgs.txt', full)
console.log(full.slice(0,2000))
