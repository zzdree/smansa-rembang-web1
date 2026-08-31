"use client"
import { motion } from "framer-motion"
import { Star, Clock, Users } from "lucide-react"
import { courses } from "@/lib/data"
export default function Courses(){
  return (
    <section id="courses" className="bg-[var(--bg-light)] py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Most Popular Courses</h2>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, margin:"-80px"}} variants={{hidden:{},visible:{transition:{staggerChildren:0.08}}}} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map(c=>(
            <motion.div key={c.title} variants={{hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}}} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden"><img src={c.image} alt={c.title} className="w-full h-full object-cover" loading="lazy"/></div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs"><Star size={14} className="fill-[var(--yellow)] text-[var(--yellow)]"/>{c.rating}</div>
                <h3 className="mt-2 font-bold leading-tight line-clamp-2">{c.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-black/50"><span className="flex items-center gap-1"><Clock size={12}/>{c.duration}</span><span className="flex items-center gap-1"><Users size={12}/>{c.students} Students</span></div>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <span className="flex items-center gap-2 text-sm"><img src={c.avatar} alt="" className="w-7 h-7 rounded-full object-cover"/>{c.instructor}</span>
                  <span className="font-extrabold text-[var(--green-bright)]">{c.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
