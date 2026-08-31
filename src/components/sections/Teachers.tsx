"use client"
import { motion } from "framer-motion"
import { teachers } from "@/lib/data"
export default function Teachers(){
  return (
    <section id="teachers" className="bg-[var(--bg-light)] py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Best Talented Teachers</h2>
        <p className="text-center text-sm text-black/50 mt-2">Learn from the best educators worldwide</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, margin:"-80px"}} variants={{hidden:{},visible:{transition:{staggerChildren:0.07}}}} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map(t=>(
            <motion.div key={t.name} variants={{hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:0.6}}}} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="aspect-[3/3.6] overflow-hidden"><img src={t.image} alt={t.name} className="w-full h-full object-cover" loading="lazy"/></div>
              <div className="p-4 text-center"><div className="font-bold">{t.name}</div><div className="text-xs text-black/50">{t.role}</div></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
