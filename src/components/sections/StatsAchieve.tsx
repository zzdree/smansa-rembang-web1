"use client"
import { motion } from "framer-motion"
import { Trophy, GraduationCap, Users, Award } from "lucide-react"
const stats=[
  { k:"98%", l:"Kelulusan SNBP/SNBT", icon:GraduationCap },
  { k:"28", l:"Prestasi Kab/Prov 2025", icon:Trophy },
  { k:"1.200+", l:"Siswa Aktif", icon:Users },
  { k:"32 Thn", l:"Mengabdi untuk Rembang", icon:Award },
]
export default function StatsAchieve(){
  return (
    <section className="bg-[var(--yellow)] py-7 lg:py-8 relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle at 1px 1px, black 1px, transparent 0)", backgroundSize:"20px 20px"}}/>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {stats.map((s,i)=>(
            <motion.div key={s.l} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05, duration:0.5, ease:[0.22,1,0.36,1]}} className="flex items-center gap-3 bg-white rounded-2xl px-4 lg:px-5 py-3.5 lg:py-4 border border-black/5 shadow-sm">
              <span className="w-10 h-10 rounded-xl bg-[var(--bg-light)] border border-black/5 grid place-items-center shrink-0"><s.icon className="text-[var(--green-dark)]" size={18}/></span>
              <div className="min-w-0"><div className="font-extrabold text-[17px] leading-none tracking-tight">{s.k}</div><div className="text-[11px] lg:text-xs text-black/55 leading-tight font-medium truncate">{s.l}</div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
