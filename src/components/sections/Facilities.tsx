"use client"
import { motion } from "framer-motion"
import { Blob, RingGrid } from "@/components/illustrations/Ornaments"
const items=[
  { t:"Laboratorium IPA", d:"Fisika, Kimia, Biologi — alat lengkap & aman", icon:"🧪", img:"/images/facilities-lab.jpg" },
  { t:"Lab Komputer", d:"40+ unit, internet fiber & multimedia", icon:"💻", img:"/images/blog/berita2.jpg" },
  { t:"Perpustakaan Digital", d:"Koleksi 8.000+ buku & e-library", icon:"📚", img:"/images/facilities-library.jpg" },
  { t:"Lapangan Olahraga", d:"Futsal, basket, voli & atletik", icon:"🏟️", img:"/images/facilities-field.jpg" },
  { t:"Masjid Al-Ilmu", d:"Kapasitas 600 jamaah, kajian rutin", icon:"🕌", img:"/images/gallery/g3.jpg" },
  { t:"Aula Serbaguna", d:"800 kursi, sound & proyektor 4K", icon:"🎤", img:"/images/gallery/g4.jpg" },
]
export default function Facilities(){
  return (
    <section id="fasilitas" className="relative bg-white py-12 lg:py-20 overflow-hidden scroll-mt-[64px]">
      <Blob className="absolute -right-24 -top-24 w-[520px] text-[var(--green-dark)] pointer-events-none" />
      <RingGrid className="absolute left-6 top-10 w-28 text-[var(--green-dark)] pointer-events-none hidden lg:block" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">FASILITAS</p>
        <h2 className="mt-2 text-[clamp(26px,4vw,36px)] font-bold">Lengkap untuk belajar & berkarya</h2>
        <p className="mt-2 text-sm text-black/50 max-w-[60ch]">Sarana modern terawat — mendukung akademik, ibadah, olahraga & kreativitas siswa.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((x,i)=>(
            <motion.div key={x.t} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05,duration:0.5}} className="rounded-2xl overflow-hidden border bg-white hover:shadow-md hover:-translate-y-1 transition-all">
              <div className="aspect-[16/10] overflow-hidden bg-[var(--bg-light)] relative">
                <img src={x.img} alt={x.t} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                <span className="absolute left-3 top-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur border grid place-items-center text-lg shadow-sm">{x.icon}</span>
              </div>
              <div className="p-5">
                <div className="font-bold leading-tight">{x.t}</div>
                <div className="text-sm text-black/60 leading-relaxed mt-1">{x.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}



