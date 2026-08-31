"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { faqs } from "@/lib/data"
import { PhotoPlaceholder } from "@/components/illustrations/PhotoPlaceholder"
export default function FAQ(){
  const [open,setOpen]=useState(0)
  return (
    <section id="faq" className="bg-white py-12 lg:py-20">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div initial={{opacity:0,y:16}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}} className="relative">
            <div className="rounded-[24px] overflow-hidden aspect-[4/3.2] relative border"><PhotoPlaceholder label="Suasana Sekolah" seed="sman5_faq"/><img src="https://picsum.photos/seed/sman5_faq/700/540" alt="Suasana sekolah" className="absolute inset-0 w-full h-full object-cover" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/></div>
            <div className="absolute bottom-4 left-4 bg-[var(--green-dark)] text-white rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2">? Video Profil Sekolah</div>
          </motion.div>
          <div>
            <p className="text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">FAQ</p>
            <h2 className="mt-2 text-[clamp(26px,4vw,36px)] font-bold leading-tight">Pertanyaan yang Sering Diajukan</h2>
            <div className="mt-6 divide-y border rounded-2xl overflow-hidden">
              {faqs.map((f,i)=>(
                <div key={f.q} className="bg-white">
                  <button onClick={()=>setOpen(open===i?-1:i)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                    <span className="font-semibold text-sm">{f.q}</span>
                    <span className={`w-8 h-8 rounded-full grid place-items-center text-sm shrink-0 border transition-colors ${open===i?"bg-[var(--green-dark)] text-white border-[var(--green-dark)]":"bg-white"}`}>{open===i?"-":"+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open===i && <motion.div initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:0.25}} className="overflow-hidden"><p className="px-5 pb-5 text-sm leading-relaxed text-black/60">{f.a}</p></motion.div>}
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
