"use client"
import { motion } from "framer-motion"
import { Play, ArrowRight, Award, Sparkles } from "lucide-react"
import { PhotoPlaceholder, AvatarSilhouette } from "@/components/illustrations/PhotoPlaceholder"
const ease=[0.22,1,0.36,1] as const
export default function Hero(){
  return (
    <section id="beranda" className="bg-[var(--green-dark)] text-white relative overflow-visible scroll-mt-[64px]">
      {/* subtle texture */}
      <div aria-hidden className="absolute inset-0 opacity-[0.04]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize:"24px 24px"}}/>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 py-14 lg:py-20 items-center">
          <div>
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease}} className="inline-flex items-center gap-2 text-[11px] tracking-[0.18em] text-[var(--yellow)] font-bold bg-white/[0.08] border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur"><Award size={12}/> AKREDITASI A — KEMDIKBUD</motion.p>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,ease,delay:0.08}} className="mt-4 text-[clamp(32px,6vw,56px)] font-extrabold leading-[0.92] tracking-[-0.03em]">Sekolah Unggul<br/>Berkarakter,<br/><span className="text-[var(--yellow)]">Berprestasi.</span></motion.h1>
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease,delay:0.18}} className="mt-4 text-white/65 max-w-[48ch] leading-relaxed text-[15px]">SMA Negeri 5 Rembang — membina 1.200+ peserta didik dengan kurikulum merdeka, fasilitas modern & pembinaan prestasi nasional.</motion.p>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease,delay:0.28}} className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="h-11 px-7 rounded-full bg-[var(--yellow)] text-[var(--green-dark)] font-bold inline-flex items-center gap-2 hover:brightness-[1.04] active:scale-[0.97] transition-all shadow-[0_8px_24px_rgba(255,184,0,0.35)] btn-press">Daftar PPDB <ArrowRight size={16}/></a>
              <a href="#about" className="h-11 px-6 rounded-full bg-white/10 border border-white/15 inline-flex items-center gap-2 hover:bg-white/15 active:scale-[0.97] transition-all backdrop-blur"><span className="w-7 h-7 rounded-full bg-[var(--green-bright)] grid place-items-center shadow-sm"><Play size={12} fill="white" className="ml-[1px]"/></span> Profil Sekolah</a>
            </motion.div>
            <div className="mt-8 flex items-center gap-3 text-[11px] tracking-[0.2em] text-white/25 font-medium"><span className="text-white">01</span> 02 03 04 <span className="ml-2 h-px w-12 bg-white/15 hidden sm:block"/><span className="hidden sm:inline-flex items-center gap-1.5 text-white/50 normal-case tracking-normal text-xs ml-1"><Sparkles size={12}/> PPDB 2026/2027 segera dibuka</span></div>
          </div>
          <div className="relative">
            <motion.div initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} transition={{duration:0.8,ease,delay:0.12}} className="relative aspect-[4/3.2] rounded-[24px] overflow-hidden bg-white border border-white/10 shadow-[0_24px_64px_rgba(0,0,0,0.35)]">
              <PhotoPlaceholder label="Gedung SMA N 5 Rembang" seed="sman5_hero" />
              <img src="/images/hero/hero-1.jpg" alt="Gedung SMA Negeri 5 Rembang — Kabupaten Rembang" width={640} height={480} fetchPriority="high" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"/>
            </motion.div>
            <motion.div animate={{y:[-5,5]}} transition={{duration:3.8,repeat:Infinity,repeatType:"reverse",ease:"easeInOut"}} className="absolute -bottom-4 left-2 sm:left-4 bg-white text-[var(--text-dark)] rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.18)] px-4 py-3 flex items-center gap-3 border border-black/5">
              <div className="flex -space-x-2">{[10,11,12].map(v=><span key={v} className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[var(--bg-light)] shadow-sm"><AvatarSilhouette color={v===10?"#1A6B2E":v===11?"#0EA5E9":"#7C3AED"}/></span>)}</div>
              <div><div className="font-bold text-sm leading-none">1.200+ Siswa</div><div className="text-xs text-black/50">Aktif & berprestasi</div></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
