"use client"
import { motion } from "framer-motion"
import { stats } from "@/lib/data"
export default function About(){
  return (
    <section id="about" className="bg-[var(--bg-light)] py-12 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.6}} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img src="https://picsum.photos/seed/sman5_gedung/500/640" alt="Gedung SMA N 5 Rembang" className="rounded-2xl object-cover h-[280px] w-full"/>
              <img src="https://picsum.photos/seed/sman5_siswa/500/480" alt="Kegiatan siswa" className="rounded-2xl object-cover h-[220px] w-full mt-8"/>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[var(--yellow)] rounded-full w-[104px] h-[104px] grid place-items-center text-center shadow-lg">
              <div><div className="font-extrabold text-xl leading-none">32</div><div className="text-[10px] leading-tight font-semibold">Tahun<br/>mengabdi</div></div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}}>
            <p className="text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">TENTANG KAMI</p>
            <h2 className="mt-2 text-[clamp(26px,4vw,36px)] font-bold leading-tight">Mencetak Generasi Unggul<br/>Sejak 1994</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-black/60">SMA Negeri 5 Rembang berkomitmen menghadirkan pendidikan berkualitas, lingkungan asri, dan pembinaan karakter. Akreditasi A, guru profesional, dan puluhan prestasi tiap tahun.</p>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map(s=>(
                <div key={s.label} className="bg-white rounded-2xl p-4 border shadow-sm text-center">
                  <div className="text-[22px] font-extrabold">{s.value}</div><div className="text-xs text-black/50 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
            <a href="#courses" className="mt-6 inline-flex h-11 px-7 rounded-full bg-[var(--green-bright)] text-white font-semibold hover:bg-[#009610] transition-colors">Lihat Program Unggulan</a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
