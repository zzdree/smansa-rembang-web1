"use client"
import { motion } from "framer-motion"
import { stats } from "@/lib/data"
import { PhotoPlaceholder } from "@/components/illustrations/PhotoPlaceholder"
export default function About(){
  return (
    <section id="about" className="bg-[var(--bg-light)] py-12 lg:py-20 scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:"-80px"}} transition={{duration:0.6}} className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl overflow-hidden h-[280px] border relative"><PhotoPlaceholder label="Gedung Sekolah" seed="sman5_gedung"/><img src="/images/hero/hero-1.jpg" alt="Gedung SMA N 5 Rembang" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/></div>
              <div className="rounded-2xl overflow-hidden h-[220px] mt-8 border relative"><PhotoPlaceholder label="Kegiatan Siswa" seed="sman5_siswa"/><img src="/images/gallery/g2.jpg" alt="Kegiatan siswa" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/></div>
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[var(--yellow)] rounded-full w-[104px] h-[104px] grid place-items-center text-center shadow-lg">
              <div><div className="font-extrabold text-xl leading-none">32</div><div className="text-[10px] leading-tight font-semibold">Tahun<br/>mengabdi</div></div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}}>
            <p className="text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">TENTANG KAMI</p>
            <h2 className="mt-2 text-[clamp(26px,4vw,36px)] font-bold leading-tight">Mencetak Generasi Unggul<br/>Sejak 1994</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-black/60">SMA Negeri 5 Rembang berkomitmen menghadirkan pendidikan berkualitas, lingkungan asri, dan pembinaan karakter. Akreditasi A, guru profesional, dan puluhan prestasi tiap tahun.</p>
            <div id="visi" className="mt-6 rounded-2xl bg-white border p-5 scroll-mt-[80px]">
              <h3 className="font-bold text-sm">Visi</h3><p className="text-sm text-black/60 mt-1 leading-relaxed">Terwujudnya peserta didik yang beriman, berilmu, berkarakter, dan berdaya saing global berlandaskan budaya Rembang.</p>
              <h3 id="sejarah" className="font-bold text-sm mt-4 scroll-mt-[80px]">Sejarah Singkat</h3><p className="text-sm text-black/60 mt-1 leading-relaxed">Berdiri 1994, SMA N 5 Rembang berawal dari 3 ruang kelas. Kini 32 tahun mengabdi dengan akreditasi A, 1.200+ siswa, dan puluhan prestasi tiap tahun.</p>
            </div>
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
