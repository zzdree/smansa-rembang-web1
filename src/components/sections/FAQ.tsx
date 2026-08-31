"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Plus, Minus, Play } from "lucide-react"
import { faqs } from "@/lib/data"
export default function FAQ(){
  const [open,setOpen]=useState(0)
  return (
    <section id="faq" className="bg-[var(--bg-light)] py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="relative rounded-[24px] overflow-hidden aspect-[4/3] bg-white border">
            <img src="https://picsum.photos/seed/faq/800/600" alt="Students" className="w-full h-full object-cover"/>
            <a href="#" className="absolute bottom-4 left-4 h-10 px-5 rounded-full bg-[var(--green-bright)] text-white inline-flex items-center gap-2 font-semibold shadow-lg"><Play size={14} fill="white"/> Video Guide</a>
          </div>
          <div>
            <h2 className="text-[clamp(26px,4vw,36px)] font-bold leading-tight">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
              {faqs.map((f,i)=>(
                <div key={f.q} className="bg-white rounded-2xl border overflow-hidden">
                  <button onClick={()=>setOpen(open===i?-1:i)} className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm">
                    {f.q} <span className="w-7 h-7 rounded-full border grid place-items-center shrink-0 ml-4">{open===i?<Minus size={14}/>:<Plus size={14}/>}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open===i && <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.3}} className="overflow-hidden"><div className="px-4 pb-4 text-sm leading-relaxed text-black/60">{f.a}</div></motion.div>}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
