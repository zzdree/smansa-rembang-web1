"use client"
import { motion } from "framer-motion"
import { Play, ArrowRight } from "lucide-react"
const ease=[0.22,1,0.36,1] as const
export default function Hero(){
  return (
    <section className="bg-[var(--green-dark)] text-white overflow-hidden relative">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-6 py-12 lg:py-16 items-center">
          <div>
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease}} className="text-xs tracking-[0.18em] text-white/60 mb-4 font-semibold">LMS EDUCATION</motion.p>
            <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,ease,delay:0.1}} className="text-[clamp(32px,6vw,56px)] font-bold leading-[0.95] tracking-tight">Developing<br/>Thoughts for<br/>the Future</motion.h1>
            <motion.p initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease,delay:0.2}} className="mt-4 text-white/70 max-w-[44ch] leading-relaxed text-[15px]">Empower your learning journey with world-class courses, expert mentors, and a vibrant community.</motion.p>
            <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{duration:0.6,ease,delay:0.3}} className="mt-7 flex flex-wrap gap-3">
              <a href="#courses" className="h-11 px-7 rounded-full bg-[var(--yellow)] text-[var(--green-dark)] font-semibold inline-flex items-center gap-2 hover:brightness-105 active:scale-[0.98] transition-all">Let&apos;s Talk Us <ArrowRight size={16}/></a>
              <a href="#faq" className="h-11 px-6 rounded-full bg-white/10 border border-white/20 inline-flex items-center gap-2 hover:bg-white/15 transition-colors"><span className="w-7 h-7 rounded-full bg-[var(--green-bright)] grid place-items-center"><Play size={12} fill="white" className="ml-[1px]"/></span> How it Works</a>
            </motion.div>
            <div className="mt-8 flex items-center gap-3 text-xs tracking-[0.2em] text-white/30"><span className="text-white">01</span> 02 03 04 <span className="ml-2 h-px w-12 bg-white/20 hidden sm:block"/></div>
          </div>
          <div className="relative">
            <motion.div initial={{opacity:0,scale:0.96}} animate={{opacity:1,scale:1}} transition={{duration:0.8,ease,delay:0.15}} className="relative aspect-[4/3.2] rounded-[24px] overflow-hidden bg-white/5 border border-white/10">
              <img src="https://picsum.photos/seed/hero/800/640" alt="Graduation" className="w-full h-full object-cover"/>
            </motion.div>
            <motion.div animate={{y:[-6,6]}} transition={{duration:3.5,repeat:Infinity,repeatType:"reverse",ease:"easeInOut"}} className="absolute -bottom-4 -left-2 sm:left-2 bg-white text-[var(--text-dark)] rounded-2xl shadow-xl px-4 py-3 flex items-center gap-3">
              <div className="flex -space-x-2">{[1,2,3].map(i=><img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover"/>)}</div>
              <div><div className="font-bold text-sm leading-none">120+ Tutors</div><div className="text-xs text-black/50">Expert mentors</div></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
