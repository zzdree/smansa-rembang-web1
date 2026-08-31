"use client"
import { useState } from "react"
import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import { testimonials } from "@/lib/data"
export default function Testimonials(){
  const [idx,setIdx]=useState(0)
  const t=testimonials[idx]
  return (
    <section id="testimonials" className="bg-[var(--green-dark)] text-white py-12 lg:py-16">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs tracking-[0.16em] font-semibold text-white/60">TESTIMONIAL</p>
            <h2 className="mt-2 text-[clamp(26px,4vw,36px)] font-bold leading-tight">What Our Students Says</h2>
            <Quote size={40} className="mt-4 opacity-15"/>
            <div className="flex gap-1 mt-2">{Array.from({length:5}).map((_,i)=><Star key={i} size={16} className="fill-[var(--yellow)] text-[var(--yellow)]"/>)}</div>
            <motion.p key={idx} initial={{opacity:0,y:8}} animate={{opacity:1,y:0}} className="mt-4 text-white/80 leading-relaxed">“{t.quote}”</motion.p>
            <div className="mt-5 flex items-center gap-3">
              <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover"/>
              <div><div className="font-semibold text-sm">{t.name}</div><div className="text-xs text-white/60">{t.role}</div></div>
            </div>
            <div className="flex gap-2 mt-6">
              {testimonials.map((_,i)=><button key={i} onClick={()=>setIdx(i)} className={`h-2 rounded-full transition-all ${i===idx?"w-6 bg-[var(--yellow)]":"w-2 bg-white/30"}`}/>)}
            </div>
          </div>
          <div className="relative">
            <div className="rounded-[24px] overflow-hidden border-2 border-[var(--yellow)]/50 aspect-[4/3]">
              <img src={t.avatar.replace("100?","400/500?")} alt={t.name} className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
