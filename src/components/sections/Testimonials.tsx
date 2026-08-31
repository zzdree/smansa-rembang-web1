"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "@/lib/data"
export default function Testimonials(){
  const [idx,setIdx]=useState(0)
  const t=testimonials[idx]
  return (
    <section className="bg-[var(--green-dark)] text-white py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
            <p className="text-xs tracking-[0.16em] font-semibold text-[var(--yellow)]">TESTIMONI</p>
            <h2 className="mt-2 text-[clamp(26px,4vw,36px)] font-bold leading-tight">Apa Kata Alumni & Wali Murid</h2>
            <div className="mt-6 bg-white text-[var(--text-dark)] rounded-2xl p-6 relative">
              <Quote className="text-[var(--yellow)] fill-[var(--yellow)]" size={28}/>
              <p className="mt-3 leading-relaxed text-[15px] text-black/70">“{t.quote}”</p>
              <div className="mt-4 flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover"/>
                <div><div className="font-bold text-sm">{t.name}</div><div className="text-xs text-black/50">{t.role}</div></div>
                <div className="ml-auto flex gap-0.5">{Array.from({length:t.rating}).map((_,i)=><Star key={i} size={12} className="fill-[var(--yellow)] text-[var(--yellow)]"/>)}</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">{testimonials.map((_,i)=><button key={i} onClick={()=>setIdx(i)} className={`h-2 rounded-full transition-all ${i===idx?"w-8 bg-[var(--yellow)]":"w-2 bg-white/30"}`}/>)}</div>
          </motion.div>
          <motion.div initial={{opacity:0,scale:0.96}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.6,delay:0.1}} className="relative hidden lg:block">
            <div className="rounded-[24px] overflow-hidden aspect-[4/3.4] border border-white/10"><img src="https://picsum.photos/seed/sman5_testi/700/600" alt="Siswa berprestasi" className="w-full h-full object-cover"/></div>
            <div className="absolute -bottom-4 -left-4 bg-[var(--yellow)] rounded-2xl px-5 py-4 text-[var(--green-dark)] shadow-xl"><div className="font-extrabold text-xl leading-none">98%</div><div className="text-xs font-semibold">Kelulusan SNBP/SNBT</div></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
