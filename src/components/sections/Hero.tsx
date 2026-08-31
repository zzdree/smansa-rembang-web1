"use client"
import { motion } from "framer-motion"
import { Play, ArrowRight, Award } from "lucide-react"
import { PhotoPlaceholder, AvatarSilhouette } from "@/components/illustrations/PhotoPlaceholder"
const ease=[0.22,1,0.36,1] as const
export default function Hero(){
  return (
    <section id="beranda" className="bg-[var(--green-dark)] text-white overflow-hidden relative scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 py-12 lg:py-16 items-center">
          <div>
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease}} className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[var(--yellow)] mb-4 font-bold bg-white/10 border border-white/10 px-3 py-1 rounded-full"><Award size={12}/> AKREDITASI A — KEMDIKBUD</motion.p>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,ease,delay:0.1}} className="text-[clamp(30px,6vw,54px)] font-bold leading-[0.95] tracking-tight">Sekolah Unggul<br/>Berkarakter,<br/><span className="text-[var(--yellow)]">Berprestasi.</span></motion.h1>
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease,delay:0.2}} className="mt-4 text-white/70 max-w-[46ch] leading-relaxed text-[15px]">SMA Negeri 5 Rembang — membina 1.200+ peserta didik dengan kurikulum merdeka, fasilitas modern & pembinaan prestasi nasional.</motion.p>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease,delay:0.3}} className="mt-7 flex flex-wrap gap-3">
              <a href="#contact" className="h-11 px-7 rounded-full bg-[var(--yellow)] text-[var(--green-dark)] font-bold inline-flex items-center gap-2 hover:brightness-105 active:scale-[0.98] transition-all">Daftar PPDB <ArrowRight size={16}/></a>
              <a href="#about" className="h-11 px-6 rounded-full bg-white/10 border border-white/20 inline-flex items-center gap-2 hover:bg-white/15 transition-colors"><span className="w-7 h-7 rounded-full bg-[var(--green-bright)] grid place-items-center"><Play size={12} fill="white" className="ml-[1px]"/></span> Profil Sekolah</a>
            </motion.div>
            <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.2em] text-white/30"><span className="text-white">01</span> 02 03 04 <span className="ml-2 h-px w-12 bg-white/20 hidden sm:block"/></div>
          </div>
          <div className="relative">
            <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.8,ease,delay:0.15}} className="relative aspect-[4/3.2] rounded-[24px] overflow-hidden bg-white border border-white/10">
              <PhotoPlaceholder label="Gedung SMA N 5 Rembang" seed="sman5_hero" />
              <img src="/images/hero/hero-1.jpg" alt="Gedung SMA Negeri 5 Rembang — Kabupaten Rembang" width={640} height={480} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none"/>
            </motion.div>
            <motion.div animate={{y:[-6,6]}} transition={{duration:3.5,repeat:Infinity,repeatType:"reverse",ease:"easeInOut"}} className="absolute -bottom-4 -left-2 sm:left-2 bg-white text-[var(--text-dark)] rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="flex -space-x-2">{[10,11,12].map(v=><span key={v} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[var(--bg-light)]"><AvatarSilhouette color={v===10?"#1A6B2E":v===11?"#0EA5E9":"#7C3AED"}/></span>)}</div>
              <div><div className="font-bold text-sm leading-none">1.200+ Siswa</div><div className="text-xs text-black/50">Aktif & berprestasi</div></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
