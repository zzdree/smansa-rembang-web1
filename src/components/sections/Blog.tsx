"use client"
import { useEffect, useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SearchX } from "lucide-react"
import { posts as fallback } from "@/lib/data"
import { client } from "@/sanity/client"
import { qPosts } from "@/sanity/queries"
import { sanityImg } from "@/sanity/image"
import { useSearch } from "@/components/search/SearchContext"
import { DetailModal } from "@/components/ui/Modals"
export default function Blog(){
  const [posts,setPosts]=useState<any[]|null>(null)
  const [active,setActive]=useState<any|null>(null)
  const { q, setQ } = useSearch()
  useEffect(()=>{ client.fetch(qPosts).then((r:any)=>{ if(r?.length) setPosts(r)}).catch(()=>{}) },[])
  const list = useMemo(()=>{
    const base = posts ?? fallback
    if(!q.trim()) return base
    const s=q.toLowerCase()
    return base.filter((p:any)=>`${p.title} ${p.excerpt} ${p.date ?? ""}`.toLowerCase().includes(s))
  },[posts,q])
  return (
    <section id="blog" className="py-14 lg:py-20 bg-white scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">BERITA & INFORMASI</p>
        <h2 className="text-center mt-2 text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em] leading-tight">Kabar Terbaru SMA Negeri X Rembang</h2>
        <motion.div layout className="mt-8 grid md:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
          {list.length ? list.map((p:any)=> {
            const im = p.image && typeof p.image==='object' ? sanityImg(p.image,600) : p.image
            return (
            <motion.button layout key={p.title} type="button" onClick={()=>setActive(p)} initial={{opacity:0,y:14}} animate={{opacity:1,y:0}} exit={{opacity:0,scale:0.96}} transition={{duration:0.35, ease:[0.22,1,0.36,1]}} className="text-left rounded-[20px] overflow-hidden border border-black/5 bg-white shadow-sm card-hover group w-full flex flex-col h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-bright)] focus-visible:ring-offset-2">
              <div className="aspect-[16/10] bg-[var(--bg-light)] relative overflow-hidden">
                {im ? <img src={im} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-500" loading="lazy" decoding="async" /> : <div className="w-full h-full grid place-items-center text-black/20 text-xs">Foto</div>}
                <span className="absolute left-3 top-3 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur text-[11px] font-bold border border-black/5 shadow-sm">{p.date ? new Date(p.date).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) : '—'}</span>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="font-bold leading-snug line-clamp-2 min-h-[2.75rem] tracking-tight group-hover:text-[var(--green-dark)] transition-colors">{p.title}</h3>
                <p className="text-sm text-black/55 leading-relaxed line-clamp-2 mt-2 flex-1">{p.excerpt ?? ""}</p>
                <span className="mt-4 inline-flex text-sm font-bold text-[var(--green-bright)] group-hover:gap-1 transition-all">Baca selengkapnya →</span>
              </div>
            </motion.button>
          )}) : (
            <motion.div layout key="empty" initial={{opacity:0}} animate={{opacity:1}} className="col-span-full py-12 flex flex-col items-center text-center">
              <span className="w-12 h-12 rounded-2xl bg-[var(--bg-light)] border border-black/5 grid place-items-center"><SearchX size={20} className="text-black/30"/></span>
              <p className="mt-3 font-semibold text-sm">Tidak ada berita untuk “{q}”</p>
              <button onClick={()=>setQ("")} className="mt-4 h-9 px-5 rounded-full bg-[var(--green-dark)] text-white text-sm font-semibold hover:bg-black active:scale-[0.97] transition">Reset pencarian</button>
            </motion.div>
          )}
          </AnimatePresence>
        </motion.div>
        <DetailModal open={!!active} onClose={()=>setActive(null)} title={active?.title ?? ""}>
          {active && <div className="space-y-4">
            {(() => { const im = active.image && typeof active.image==='object' ? sanityImg(active.image,800) : active.image; return im ? <img src={im} alt={active.title} className="w-full aspect-[16/10] object-cover rounded-xl"/> : null })()}
            <p className="text-xs text-black/50">{active.date ? new Date(active.date).toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'}) : ''}</p>
            <p className="text-sm leading-relaxed text-black/70">{active.excerpt ?? ""}</p>
            <p className="text-sm leading-relaxed text-black/60">Informasi lengkap hubungi TU / wali kelas. Berita diterbitkan oleh Humas SMA Negeri X Rembang.</p>
          </div>}
        </DetailModal>
      </div>
    </section>
  )
}
