"use client"
import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Star, Clock, Users, SearchX } from "lucide-react"
import { courses as fallback } from "@/lib/data"
import { PhotoPlaceholder, AvatarSilhouette } from "@/components/illustrations/PhotoPlaceholder"
import { client } from "@/sanity/client"
import { qCourses } from "@/sanity/queries"
import { sanityImg } from "@/sanity/image"
import { useSearch } from "@/components/search/SearchContext"
import { DetailModal } from "@/components/ui/Modals"

export default function Courses(){
  const [courses,setCourses]=useState<any[]|null>(null)
  const [active,setActive]=useState<any|null>(null)
  const { q, setQ } = useSearch()
  useEffect(()=>{ client.fetch(qCourses).then((r:any)=>{ if(r?.length) setCourses(r)}).catch(()=>{}) },[])
  const list = useMemo(()=>{
    const base = courses ?? fallback
    if(!q.trim()) return base
    const s=q.toLowerCase()
    return base.filter((c:any)=>`${c.title} ${c.instructor} ${c.price}`.toLowerCase().includes(s))
  },[courses,q])
  return (
    <section id="courses" className="bg-[var(--bg-light)] py-14 lg:py-20 scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">PROGRAM UNGGULAN</p>
        <h2 className="text-center mt-2 text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em] leading-tight">Kegiatan & Pembinaan Prestasi</h2>
        <p className="text-center text-sm text-black/50 mt-2.5 max-w-[60ch] mx-auto leading-relaxed">Enam program unggulan yang mengasah akademik, karakter, dan bakat — gratis untuk seluruh peserta didik.</p>
        <motion.div layout className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          <AnimatePresence mode="popLayout">
          {list.length ? list.map((c:any)=> {
            const img = c.image && typeof c.image === 'object' ? sanityImg(c.image,600) : c.image
            const ava = c.avatar && typeof c.avatar === 'object' ? sanityImg(c.avatar,100) : c.avatar
            return (
            <motion.button layout key={c.title} type="button" onClick={()=>setActive(c)} initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:0.96}} transition={{duration:0.35, ease:[0.22,1,0.36,1]}} className="text-left bg-white rounded-[20px] overflow-hidden border border-black/5 shadow-sm card-hover w-full flex flex-col h-full group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-bright)] focus-visible:ring-offset-2">
              <div className="aspect-[16/10] overflow-hidden relative bg-[var(--bg-light)]">
                <PhotoPlaceholder label={c.title} seed={c.title} />
                {img && <img src={img} alt={c.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" loading="lazy" decoding="async" onLoad={(e:any)=>{(e.target as HTMLImageElement).previousElementSibling?.classList.add("hidden")}} onError={(e:any)=>{(e.target as HTMLImageElement).style.display="none"}}/>}
              </div>
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-1.5 text-xs font-semibold"><Star size={14} className="fill-[var(--yellow)] text-[var(--yellow)]"/>{c.rating ?? '—'} <span className="text-black/30 font-normal">• Program</span></div>
                <h3 className="mt-2 font-bold leading-tight line-clamp-2 min-h-[2.75rem] tracking-tight group-hover:text-[var(--green-dark)] transition-colors">{c.title}</h3>
                <div className="mt-2 flex items-center gap-4 text-xs text-black/45"><span className="inline-flex items-center gap-1"><Clock size={12}/>{c.duration ?? '-'}</span><span className="inline-flex items-center gap-1"><Users size={12}/>{c.students ?? '-'} siswa</span></div>
                <div className="mt-auto flex items-center justify-between border-t border-black/5 pt-4">
                  <span className="flex items-center gap-2 text-sm font-medium"><span className="w-7 h-7 rounded-full overflow-hidden border border-black/5 bg-[var(--bg-light)] shrink-0">{ava ? <img src={ava} alt="" className="w-full h-full object-cover"/> : <AvatarSilhouette/>}</span><span className="truncate max-w-[110px]">{c.instructor ?? '-'}</span></span>
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 shrink-0">{c.price ?? 'Gratis'}</span>
                </div>
              </div>
            </motion.button>
          )}) : (
            <motion.div layout key="empty" initial={{opacity:0}} animate={{opacity:1}} className="col-span-full py-12 flex flex-col items-center text-center">
              <span className="w-12 h-12 rounded-2xl bg-white border border-black/5 grid place-items-center shadow-sm"><SearchX size={20} className="text-black/30"/></span>
              <p className="mt-3 font-semibold text-sm">Tidak ada program untuk “{q}”</p>
              <p className="text-xs text-black/50 mt-1">Coba kata kunci lain atau reset pencarian.</p>
              <button onClick={()=>setQ("")} className="mt-4 h-9 px-5 rounded-full bg-[var(--green-dark)] text-white text-sm font-semibold hover:bg-black active:scale-[0.97] transition">Reset pencarian</button>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.div>
        <DetailModal open={!!active} onClose={()=>setActive(null)} title={active?.title ?? ""}>
          {active && (
            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-xl overflow-hidden bg-[var(--bg-light)] relative">
                {(() => { const im = active.image && typeof active.image==='object' ? sanityImg(active.image,800) : active.image; return im ? <img src={im} alt={active.title} className="w-full h-full object-cover"/> : <PhotoPlaceholder label={active.title} seed={active.title}/> })()}
              </div>
              <div className="flex flex-wrap gap-2 text-xs"><span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-semibold">{active.price}</span><span className="px-2.5 py-1 rounded-full bg-black/5 border text-black/60">{active.instructor}</span></div>
              <p className="text-sm leading-relaxed text-black/60">Program {active.title} — pembinaan intensif, pendampingan guru berprestasi, dan jalur prestasi. Hubungi kesiswaan untuk pendaftaran & jadwal seleksi.</p>
              <a href="#contact" onClick={()=>setActive(null)} className="inline-flex h-10 px-6 rounded-full bg-[var(--green-dark)] text-white text-sm font-bold hover:bg-black active:scale-[0.97] transition">Daftar / Tanya</a>
            </div>
          )}
        </DetailModal>
      </div>
    </section>
  )
}
