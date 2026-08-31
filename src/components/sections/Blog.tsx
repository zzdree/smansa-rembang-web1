"use client"
import { useEffect, useState, useMemo } from "react"
import { posts as fallback } from "@/lib/data"
import { PhotoPlaceholder } from "@/components/illustrations/PhotoPlaceholder"
import { client } from "@/sanity/client"
import { qPosts } from "@/sanity/queries"
import { sanityImg } from "@/sanity/image"
import { useSearch } from "@/components/search/SearchContext"
export default function Blog(){
  const [posts,setPosts]=useState<any[]|null>(null)
  const { q } = useSearch()
  useEffect(()=>{ client.fetch(qPosts).then((r:any)=>{ if(r?.length) setPosts(r.map((p:any)=>({ ...p, date: p.date ? new Date(p.date).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}) : p.date, comments: p.comments ?? 0 })))}).catch(()=>{}) },[])
  const list = useMemo(()=>{
    const base = posts ?? fallback
    if(!q.trim()) return base
    const s=q.toLowerCase(); return base.filter((p:any)=>`${p.title} ${p.cat} ${p.author}`.toLowerCase().includes(s))
  },[posts,q])
  return (
    <section id="blog" className="py-14 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">BERITA & INFORMASI</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Kabar Terbaru Sekolah</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {list.map((p:any)=> {
            const img = p.image && typeof p.image === 'object' ? sanityImg(p.image,600) : p.image
            return (
            <article key={p.title} className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition">
              <div className="aspect-[16/10] relative bg-[var(--bg-light)] overflow-hidden"><PhotoPlaceholder label={p.title} seed={p.title}/>{img && <img src={img} alt={p.title} className="absolute inset-0 w-full h-full object-cover" loading="lazy" onLoad={(e:any)=>e.currentTarget.previousElementSibling?.classList.add('hidden')} onError={(e:any)=>e.currentTarget.style.display='none'} />}</div>
              <div className="p-5"><span className="text-xs font-semibold text-[var(--green-bright)]">{p.cat}</span><h3 className="font-bold mt-1 line-clamp-2">{p.title}</h3><p className="text-xs text-black/40 mt-2">{p.date} • {p.author} {p.comments? '• '+p.comments+' komentar':''}</p></div>
            </article>
          )})}
        </div>
      </div>
    </section>
  )
}
