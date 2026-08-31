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
              <div className="rounded-[20px] overflow-hidden h-[300px] lg:h-[380px] border border-black/5 shadow-sm relative bg-white"><PhotoPlaceholder label="Gedung SMA N 1 Rembang" seed="sman5_gedung"/><img src="/images/gallery/3b1071aab964e89dd25da7a9038c5fa9.jpg" alt="Gedung SMA N 1 Rembang" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/></div>
              <div className="rounded-[20px] overflow-hidden h-[240px] lg:h-[300px] mt-8 border border-black/5 shadow-sm relative bg-white"><PhotoPlaceholder label="Kegiatan Siswa" seed="sman5_siswa"/><img src="/images/gallery/31236a6ca4b64d5ff9aa644502b57498.jpg" alt="Kegiatan siswa SMA N 1 Rembang" loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/></div>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 bg-[var(--yellow)] rounded-full w-[118px] h-[118px] grid place-items-center text-center shadow-[0_12px_32px_rgba(255,184,0,0.35)] border-4 border-white">
              <div><div className="font-extrabold text-[22px] leading-none tracking-tight">1961</div><div className="text-[10px] leading-tight font-bold tracking-wide">Sejak<br/>berdiri</div></div>
            </div>
          </motion.div>
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.08, ease:[0.22,1,0.36,1]}}>
            <p className="text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">TENTANG KAMI</p>
            <h2 className="mt-2 text-[clamp(28px,4vw,38px)] font-extrabold leading-[1.05] tracking-[-0.02em]">Berjatidiri dan Maju<br/>dalam Prestasi</h2>
            <p className="mt-3 text-[15px] leading-relaxed text-black/60 max-w-[52ch]">SMA Negeri 1 Rembang berdiri 1961 (SMA ABC Rembang), dinegerikan 1962. Kini di Jl. Gajah Mada No.5 — RSBI 2007 (1 dari 99 se-Indonesia), SMA Rujukan 2016-2018, Akreditasi A. Membina &gt;1.200 peserta didik.</p>
            <div id="visi" className="mt-6 rounded-2xl bg-white border border-black/5 p-5 lg:p-6 shadow-sm scroll-mt-[80px]">
              <h3 className="font-bold text-sm">Visi</h3><p className="text-sm text-black/60 mt-1.5 leading-relaxed">“Berjatidiri dan Maju dalam Prestasi”</p>
              <h3 className="font-bold text-sm mt-4">Misi</h3>
              <ul className="text-sm text-black/60 mt-1.5 leading-relaxed list-disc pl-5 space-y-1">
                <li>Mewujudkan lembaga pendidikan bernuansa keagamaan, kebangsaan, keilmuan &amp; wawasan lingkungan.</li>
                <li>Mewujudkan lembaga berdaya saing hingga tingkat internasional.</li>
              </ul>
              <h3 id="sejarah" className="font-bold text-sm mt-5 scroll-mt-[80px]">Sejarah Singkat</h3><p className="text-sm text-black/60 mt-1.5 leading-relaxed">1961 prakarsa Bupati R. Islan Soebroto → SMA ABC di gedung PGRI. 1 Agu 1962 dinegerikan (filial SMA N Pati, SK 21/SK/B/III). 1963 pindah Jl. Sudirman 127, 1975 sebagian jadi SMA N 2, 6 Apr 1978 pembebasan tanah Magersari (910 m²) — logo oleh Sukemi Sisworaharjo. RSBI 2007 (SK 697/C4/MN/2007), SMA Rujukan 2016. Detail lengkap di <a href="#sejarah-full" className="underline decoration-[var(--green-bright)] underline-offset-2">bawah</a>.</p>
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
