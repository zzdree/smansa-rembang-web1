"use client"
import { motion } from "framer-motion"
import { partners } from "@/lib/data"
export default function Trusted(){
  return (
    <section className="bg-white border-y border-black/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-7 lg:py-8">
        <p className="text-center text-[11px] tracking-[0.18em] text-black/35 font-bold">DIDUKUNG & BERMITRA</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={{hidden:{},visible:{transition:{staggerChildren:0.06}}}} className="mt-4 flex flex-wrap justify-center gap-2.5 lg:gap-3">
          {partners.map(p=>(
            <motion.div key={p} variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:0.5, ease:[0.22,1,0.36,1]}}}} className="h-9 px-5 rounded-full border border-black/5 bg-[var(--bg-light)] grid place-items-center text-xs font-bold tracking-wide text-black/55 hover:border-black/10 hover:text-black/70 transition-colors">{p}</motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
