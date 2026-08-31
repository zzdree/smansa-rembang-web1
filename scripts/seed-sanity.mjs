import fs from 'fs'
const env = Object.fromEntries(fs.readFileSync('.env.local','utf8').split('\n').filter(l=>l.includes('=')).map(l=>{ const i=l.indexOf('='); return [l.slice(0,i).trim(), l.slice(i+1).trim()]}))
const projectId = env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = env.NEXT_PUBLIC_SANITY_DATASET || 'production'
const token = env.SANITY_API_READ_TOKEN
if(!projectId || !token){ console.error('env missing'); process.exit(1)}
const base = `https://${projectId}.api.sanity.io/v2024-01-01/data/mutate/${dataset}`
async function mutate(mutations){ const r=await fetch(base,{method:'POST',headers:{'Content-Type':'application/json','Authorization':'Bearer '+token},body:JSON.stringify({mutations})}); const j=await r.json(); if(!r.ok) throw new Error(JSON.stringify(j).slice(0,800)); return j}
function doc(t, fields){ return {createOrReplace:{_id:t+'-'+fields.slug?.current||t+'-'+Date.now(), _type:t, ...fields}} }
const now=new Date().toISOString()
const mutations=[
  doc('category',{title:'Sains', slug:{_type:'slug',current:'sains'}, icon:'🔬', color:'emerald', featured:false}),
  doc('category',{title:'Bahasa & Sastra', slug:{_type:'slug',current:'bahasa-sastra'}, icon:'📚', color:'amber', featured:true}),
  doc('teacher',{name:'Drs. H. Supriyanto, M.Pd', slug:{_type:'slug',current:'supriyanto'}, role:'Kepala Sekolah'}),
  doc('teacher',{name:'Dra. Siti Aminah, M.Pd', slug:{_type:'slug',current:'siti-aminah'}, role:'Waka Kurikulum'}),
  doc('post',{title:'SMA N 1 Rembang Juara 1 Lomba Cerdas Cermat Jateng 2026', slug:{_type:'slug',current:'juara-cerdas-cermat-2026'}, category:'Prestasi', author:'Humas', publishedAt:now, excerpt:'Tim cerdas cermat raih juara 1 tingkat provinsi.'}),
  doc('post',{title:'Workshop Digital Learning: Guru Siap Kurikulum Merdeka', slug:{_type:'slug',current:'workshop-digital-learning'}, category:'Akademik', author:'Kurikulum', publishedAt:now}),
  doc('faq',{question:'Bagaimana cara daftar PPDB SMA N 1 Rembang?', answer:'Via ppdb.jatengprov.go.id jalur zonasi/afirmasi/prestasi.', order:1}),
  doc('testimonial',{name:'Nadia Putri', role:'Alumni 2024 — Kedokteran UNDIP', quote:'Guru-guru sangat suportif. Bimbingan OSN bikin aku lolos SNBP.', rating:5}),
]
console.log('seeding',mutations.length,'docs...')
mutate(mutations).then(j=>console.log('seed ok', JSON.stringify(j).slice(0,400))).catch(e=>console.error(e.message))
