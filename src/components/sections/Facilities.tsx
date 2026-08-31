"use client"
import { motion } from "framer-motion"
import { Blob, RingGrid } from "@/components/illustrations/Ornaments"
const items=[
  { t:"Laboratorium IPA", d:"Fisika, Kimia, Biologi — alat lengkap & aman", icon:"🧪", img:"/images/gallery/86f6378892c28953823ba1a3c4841bac.jpg" },
  { t:"Lab Komputer & TIK", d:"40+ unit, internet fiber & multimedia", icon:"💻", img:"/images/gallery/ace4b393463cdbde2ddd211f127773c9.jpg" },
  { t:"Perpustakaan Digital", d:"Koleksi 8.000+ buku & e-library", icon:"📚", img:"/images/gallery/ccec9ca3aaeb1796a28eaabf8dcb1a62.jpg" },
  { t:"Lapangan Olahraga", d:"Futsal, basket, voli & atletik", icon:"🏟️", img:"/images/gallery/0ebcb65adab27065623df6b274095758.jpg" },
  { t:"Musholla Sekolah", d:"Kapasitas 600 jamaah, kajian rutin", icon:"🕌", img:"/images/gallery/c330c438fd2b078317d60395c289fb78.jpg" },
  { t:"Aula Serbaguna", d:"800 kursi, sound & proyektor — kegiatan besar", icon:"🎤", img:"/images/gallery/12108bbbc13568d02d4949a406f36b5b.jpg" },
]
export default function Facilities(){
  return (
    <section id="fasilitas" className="relative bg-white py-14 lg:py-20 overflow-hidden scroll-mt-[64px]">
      <Blob className="absolute -right-24 -top-24 w-[520px] text-[var(--green-dark)] pointer-events-none opacity-[0.08]" />
      <RingGrid className="absolute left-6 top-10 w-28 text-[var(--green-dark)] pointer-events-none hidden lg:block opacity-20" />
      <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">FASILITAS</p>
        <h2 className="mt-2 text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em] leading-tight">Lengkap untuk belajar & berkarya</h2>
        <p className="mt-2.5 text-sm text-black/55 max-w-[60ch] leading-relaxed">Foto asli SMAN 1 Rembang — sarana modern terawat untuk akademik, ibadah, olahraga & kreativitas.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {items.map((x,i)=>(
            <motion.div key={x.t} initial={{opacity:0,y:14}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.04,duration:0.5, ease:[0.22,1,0.36,1]}} className="group rounded-[20px] overflow-hidden border border-black/5 bg-white card-hover">
              <div className="aspect-[16/10] overflow-hidden bg-[var(--bg-light)] relative">
                <img src={x.img} alt={x.t} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" loading="lazy" decoding="async" onError={(e:any)=>e.currentTarget.style.opacity="0.3"} />
                <span className="absolute left-3 top-3 w-9 h-9 rounded-xl bg-white/95 backdrop-blur border border-black/5 grid place-items-center text-[16px] shadow-sm">{x.icon}</span>
              </div>
              <div className="p-5">
                <div className="font-bold leading-tight tracking-tight">{x.t}</div>
                <div className="text-sm text-black/55 leading-relaxed mt-1">{x.d}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
