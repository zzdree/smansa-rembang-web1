"use client"
import { motion } from "framer-motion"
import { partners } from "@/lib/data"
export default function Trusted(){
  return (
    <section className="bg-white border-y border-black/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-8">
        <p className="text-center text-xs tracking-[0.16em] text-black/40 font-semibold mb-6">DIDUKUNG & BERMITRA</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={{hidden:{},visible:{transition:{staggerChildren:0.06}}}} className="flex flex-wrap justify-center gap-6 lg:gap-10">
          {partners.map(p=>(
            <motion.div key={p} variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:0.5}}}} className="h-9 px-6 rounded-full border bg-[var(--bg-light)] grid place-items-center text-sm font-bold tracking-wide text-black/60">{p}</motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
