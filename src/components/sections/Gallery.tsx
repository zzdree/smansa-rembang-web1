"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { PhotoPlaceholder } from "@/components/illustrations/PhotoPlaceholder"
import { Lightbox } from "@/components/ui/Modals"
const pics=[
  { src:"/images/gallery/g1.jpg", cap:"Upacara Senin — disiplin & nasionalisme" },
  { src:"/images/gallery/g2.jpg", cap:"Praktikum IPA di laboratorium" },
  { src:"/images/gallery/g3.jpg", cap:"Latihan Paskibra & baris-berbaris" },
  { src:"/images/gallery/g4.jpg", cap:"Kegiatan Pramuka di alam terbuka" },
  { src:"/images/gallery/g5.jpg", cap:"Lomba futsal antar kelas" },
  { src:"/images/gallery/g6.jpg", cap:"Pentas seni & budaya Jawa" },
]
export default function Gallery(){
  const [light,setLight]=useState<{src:string;cap:string}|null>(null)
  return (
    <section id="galeri" className="bg-[var(--bg-light)] py-12 lg:py-16 scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div><p className="text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">GALERI</p><h2 className="text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em] leading-tight mt-1">Momen di SMA N 5 Rembang</h2></div>
          <span className="text-[11px] tracking-[0.14em] font-semibold text-black/35">FOTO KEGIATAN • 2025/2026</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px]">
          {pics.map((p,i)=>(
            <motion.button key={p.src} type="button" onClick={()=>setLight(p)} initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.05,duration:0.5, ease:[0.22,1,0.36,1]}} className={`relative overflow-hidden rounded-[20px] border border-black/5 bg-white text-left group card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-bright)] focus-visible:ring-offset-2 ${i===0?"lg:row-span-2 lg:col-span-1":""} ${i===4?"lg:col-span-2":""}`}>
              <PhotoPlaceholder label={p.cap} seed={p.src}/>
              <img src={p.src} alt={p.cap} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition duration-700" loading="lazy" decoding="async" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/>
              <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-4 text-white text-xs leading-tight text-left font-medium">{p.cap}</span>
            </motion.button>
          ))}
        </div>
        {light && <Lightbox src={light.src} alt={light.cap} onClose={()=>setLight(null)} />}
      </div>
    </section>
  )
}
