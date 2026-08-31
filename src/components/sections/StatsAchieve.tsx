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
    <section className="bg-[var(--yellow)] py-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s,i)=>(
            <motion.div key={s.l} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="flex items-center gap-3 bg-white/80 backdrop-blur rounded-2xl px-5 py-4 border">
              <s.icon className="text-[var(--green-dark)]" size={22}/>
              <div><div className="font-extrabold text-lg leading-none">{s.k}</div><div className="text-xs text-black/60 leading-tight">{s.l}</div></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

