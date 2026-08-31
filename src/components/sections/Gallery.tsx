"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { PhotoPlaceholder } from "@/components/illustrations/PhotoPlaceholder"
import { Lightbox } from "@/components/ui/Modals"
const pics=[
  { src:"/images/gallery/3b1071aab964e89dd25da7a9038c5fa9.jpg", cap:"Gedung SMA N 1 Rembang — Jl. Gajah Mada No.5" },
  { src:"/images/gallery/31236a6ca4b64d5ff9aa644502b57498.jpg", cap:"Kegiatan siswa & upacara bendera" },
  { src:"/images/gallery/88099fff5402d32cb61689380134e700.jpg", cap:"Prestasi siswa — piala & piagam" },
  { src:"/images/gallery/12108bbbc13568d02d4949a406f36b5b.jpg", cap:"Fasilitas sekolah" },
  { src:"/images/gallery/ccec9ca3aaeb1796a28eaabf8dcb1a62.jpg", cap:"Perpustakaan digital" },
  { src:"/images/gallery/0ebcb65adab27065623df6b274095758.jpg", cap:"Lapangan & olahraga" },
  { src:"/images/gallery/86f6378892c28953823ba1a3c4841bac.jpg", cap:"Lab IPA — praktikum" },
  { src:"/images/gallery/99472b6d5d1df8325a5f0e2880f4efc3.jpg", cap:"Ruang kelas modern" },
  { src:"/images/gallery/8091f720499814cbb9d94c52f6414e9e.jpg", cap:"Ekstrakurikuler & pramuka" },
  { src:"/images/gallery/c330c438fd2b078317d60395c289fb78.jpg", cap:"Kegiatan keagamaan — musholla" },
  { src:"/images/gallery/ace4b393463cdbde2ddd211f127773c9.jpg", cap:"Laboratorium TIK / komputer" },
  { src:"/images/gallery/ad7286dd300c40fd04883db5d8ea3781.jpg", cap:"Tata usaha & ruang guru" },
]
export default function Gallery(){
  const [light,setLight]=useState<{src:string;cap:string}|null>(null)
  return (
    <section id="galeri" className="bg-[var(--bg-light)] py-12 lg:py-16 scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div><p className="text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">GALERI</p><h2 className="text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em] leading-tight mt-1">Momen di SMA N 1 Rembang</h2></div>
          <span className="text-[11px] tracking-[0.14em] font-semibold text-black/35">29 FOTO • 2025/2026 — klik untuk perbesar</span>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-[220px]">
          {pics.map((p,i)=>(
            <motion.button key={p.src} type="button" onClick={()=>setLight(p)} initial={{opacity:0,scale:0.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:(i%6)*0.05,duration:0.5, ease:[0.22,1,0.36,1]}} className={`relative overflow-hidden rounded-[20px] border border-black/5 bg-white text-left group card-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-bright)] focus-visible:ring-offset-2 ${i===0?"lg:row-span-2 lg:col-span-1":""} ${i===4?"lg:col-span-2":""} ${i===10?"lg:col-span-2":""}`}>
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
