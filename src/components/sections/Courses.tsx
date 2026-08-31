"use client"
import { useEffect, useState, useMemo } from "react"
import { motion } from "framer-motion"
import { Star, Clock, Users } from "lucide-react"
import { courses as fallback } from "@/lib/data"
import { PhotoPlaceholder, AvatarSilhouette } from "@/components/illustrations/PhotoPlaceholder"
import { client } from "@/sanity/client"
import { qCourses } from "@/sanity/queries"
import { sanityImg } from "@/sanity/image"
import { useSearch } from "@/components/search/SearchContext"

export default function Courses(){
  const [courses,setCourses]=useState<any[]|null>(null)
  const { q } = useSearch()
  useEffect(()=>{ client.fetch(qCourses).then((r:any)=>{ if(r?.length) setCourses(r)}).catch(()=>{}) },[])
  const list = useMemo(()=>{
    const base = courses ?? fallback
    if(!q.trim()) return base
    const s=q.toLowerCase()
    return base.filter((c:any)=>`${c.title} ${c.instructor} ${c.price}`.toLowerCase().includes(s))
  },[courses,q])
  return (
    <section id="courses" className="bg-[var(--bg-light)] py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">PROGRAM UNGGULAN</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Kegiatan & Pembinaan Prestasi</h2>
        <p className="text-center text-sm text-black/50 mt-2 max-w-[60ch] mx-auto">Enam program unggulan yang mengasah akademik, karakter, dan bakat — gratis untuk seluruh peserta didik.</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, margin:"-80px"}} variants={{hidden:{},visible:{transition:{staggerChildren:0.08}}}} className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {list.map((c:any)=> {
            const img = c.image && typeof c.image === 'object' ? sanityImg(c.image,600) : c.image
            const ava = c.avatar && typeof c.avatar === 'object' ? sanityImg(c.avatar,100) : c.avatar
            return (
            <motion.div key={c.title} variants={{hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:0.6,ease:[0.22,1,0.36,1]}}}} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden relative bg-[var(--bg-light)]">
                <PhotoPlaceholder label={c.title} seed={c.title} />
                {img && <img src={img} alt={c.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/>}
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1 text-xs"><Star size={14} className="fill-[var(--yellow)] text-[var(--yellow)]"/>{c.rating ?? '—'}</div>
                <h3 className="mt-2 font-bold leading-tight line-clamp-2">{c.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-black/50"><span className="flex items-center gap-1"><Clock size={12}/>{c.duration ?? '-'}</span><span className="flex items-center gap-1"><Users size={12}/>{c.students ?? '-'} siswa</span></div>
                <div className="mt-4 flex items-center justify-between border-t pt-4">
                  <span className="flex items-center gap-2 text-sm"><span className="w-7 h-7 rounded-full overflow-hidden border bg-[var(--bg-light)]">{ava ? <img src={ava} alt="" className="w-full h-full object-cover"/> : <AvatarSilhouette/>}</span>{c.instructor ?? '-'}</span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">{c.price ?? 'Gratis'}</span>
                </div>
              </div>
            </motion.div>
          )})}
        </motion.div>
      </div>
    </section>
  )
}
