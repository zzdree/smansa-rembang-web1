"use client"
import { motion } from "framer-motion"
import { teachers } from "@/lib/data"
import { PersonSilhouette } from "@/components/illustrations/Silhouette"
const shirts=["#1A6B2E","#123A1A","#0B5C2F","#2E7D32","#0EA5E9","#7C3AED"]
export default function Teachers(){
  return (
    <section id="teachers" className="bg-[var(--bg-light)] py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">TENAGA PENDIDIK</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Guru Profesional & Berdedikasi</h2>
        <p className="text-center text-sm text-black/50 mt-2">Didukung 65+ guru bersertifikasi dan berpengalaman</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, margin:"-80px"}} variants={{hidden:{},visible:{transition:{staggerChildren:0.07}}}} className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((t,i)=>(
            <motion.div key={t.name} variants={{hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:0.6}}}} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all">
              <div className="aspect-[4/3.6] bg-gradient-to-br from-[var(--bg-light)] to-white grid place-items-center p-6">
                <PersonSilhouette className="w-28 h-28 drop-shadow-sm" shirt={shirts[i % shirts.length]} />
              </div>
              <div className="p-4 text-center"><div className="font-bold text-sm">{t.name}</div><div className="text-xs text-black/50">{t.role}</div></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


