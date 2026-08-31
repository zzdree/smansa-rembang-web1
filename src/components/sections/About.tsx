"use client"
import { motion } from "framer-motion"
import { stats } from "@/lib/data"
import { PhotoPlaceholder } from "@/components/illustrations/PhotoPlaceholder"
import { ArrowRight } from "lucide-react"
export default function About(){
  return (
    <section id="about" className="bg-[var(--bg-light)] py-14 lg:py-20 scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.6, ease:[0.22,1,0.36,1]}} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-[20px] overflow-hidden h-[300px] lg:h-[340px] border border-black/5 shadow-sm relative bg-white"><PhotoPlaceholder label="Gedung Sekolah" seed="sman5_gedung"/><img src="/images/hero/hero-1.jpg" alt="Gedung SMA N 1 Rembang" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/></div>
              <div className="rounded-[20px] overflow-hidden h-[240px] lg:h-[260px] mt-8 border border-black/5 shadow-sm relative bg-white"><PhotoPlaceholder label="Kegiatan Siswa" seed="sman5_siswa"/><img src="/images/gallery/g2.jpg" alt="Kegiatan siswa" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/></div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[var(--yellow)] rounded-full w-[110px] h-[110px] grid place-items-center text-center shadow-[0_12px_32px_rgba(255,184,0,0.35)] border-4 border-white">
              <div><div className="font-extrabold text-[22px] leading-none tracking-tight">32</div><div className="text-[10px] leading-tight font-bold tracking-wide">Tahun<br/>mengabdi</div></div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.08, ease:[0.22,1,0.36,1]}}>
            <p className="text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">TENTANG KAMI</p>
            <h2 className="mt-2 text-[clamp(28px,4vw,38px)] font-extrabold leading-[1.05] tracking-[-0.02em]">Mencetak Generasi Unggul<br/>Sejak 1994</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-black/60 max-w-[52ch]">SMA Negeri 1 Rembang berkomitmen menghadirkan pendidikan berkualitas, lingkungan asri, dan pembinaan karakter. Akreditasi A, guru profesional, dan puluhan prestasi tiap tahun.</p>
            <div id="visi" className="mt-6 rounded-2xl bg-white border border-black/5 p-5 lg:p-6 shadow-sm scroll-mt-[80px]">
              <h3 className="font-bold text-sm">Visi</h3><p className="text-sm text-black/60 mt-1.5 leading-relaxed">Terwujudnya peserta didik yang beriman, berilmu, berkarakter, dan berdaya saing global berlandaskan budaya Rembang.</p>
              <h3 id="sejarah" className="font-bold text-sm mt-5 scroll-mt-[80px]">Sejarah Singkat</h3><p className="text-sm text-black/60 mt-1.5 leading-relaxed">Berdiri 1994, SMA N 1 Rembang berawal dari 3 ruang kelas. Kini 32 tahun mengabdi dengan akreditasi A, 1.200+ siswa, dan puluhan prestasi tiap tahun.</p>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {stats.map(s=>(
                <div key={s.label} className="bg-white rounded-2xl p-3.5 border border-black/5 shadow-sm text-center">
                  <div className="text-[18px] lg:text-[20px] font-extrabold tracking-tight leading-none">{s.value}</div><div className="text-[11px] text-black/50 leading-tight mt-1 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
            <a href="#courses" className="mt-6 inline-flex h-11 px-7 rounded-full bg-[var(--green-dark)] text-white text-sm font-bold hover:bg-black active:scale-[0.97] transition-all shadow-sm btn-press items-center gap-1.5">Lihat Program Unggulan <ArrowRight size={14}/></a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
