"use client"
import { motion } from "framer-motion"
import { PhotoPlaceholder } from "@/components/illustrations/PhotoPlaceholder"
const pics=[
  { seed:"sman5_gal1", cap:"Upacara Senin — disiplin & nasionalisme" },
  { seed:"sman5_gal2", cap:"Praktikum IPA di laboratorium" },
  { seed:"sman5_gal3", cap:"Latihan Paskibra & baris-berbaris" },
  { seed:"sman5_gal4", cap:"Kegiatan Pramuka di alam terbuka" },
  { seed:"sman5_gal5", cap:"Lomba futsal antar kelas" },
  { seed:"sman5_gal6", cap:"Pentas seni & budaya Jawa" },
]
export default function Gallery(){
  return (
    <section id="galeri" className="bg-[var(--bg-light)] py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div><p className="text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">GALERI</p><h2 className="text-[clamp(26px,4vw,36px)] font-bold">Momen di SMA N 5 Rembang</h2></div>
          <span className="text-xs tracking-widest text-black/40">FOTO KEGIATAN • 2025/2026</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px]">
          {pics.map((p,i)=>(
            <motion.figure key={p.seed} initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.05,duration:0.5}} className={`relative overflow-hidden rounded-2xl border bg-white ${i===0?"lg:row-span-2 lg:col-span-1":""} ${i===4?"lg:col-span-2":""}`}>
              <PhotoPlaceholder label={p.cap} seed={p.seed}/>
              <img src={`https://picsum.photos/seed/${p.seed}/700/560`} alt={p.cap} className="absolute inset-0 w-full h-full object-cover" loading="lazy" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/>
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white text-xs leading-tight">{p.cap}</figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
