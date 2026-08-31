"use client"
import { useEffect, useState } from "react"
import { testimonials as fallback } from "@/lib/data"
import { AvatarSilhouette } from "@/components/illustrations/PhotoPlaceholder"
import { client } from "@/sanity/client"
import { qTestimonials } from "@/sanity/queries"
import { sanityImg } from "@/sanity/image"
export default function Testimonials(){
  const [items,setItems]=useState<any[]|null>(null)
  useEffect(()=>{ client.fetch(qTestimonials).then((r:any)=>{ if(r?.length) setItems(r)}).catch(()=>{}) },[])
  const list = items ?? fallback
  return (
    <section className="py-14 lg:py-16 bg-[var(--bg-light)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">TESTIMONI</p>
        <h2 className="text-center mt-2 text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em] leading-tight">Apa Kata Mereka</h2>
        <p className="text-center text-sm text-black/50 mt-2">Alumni, orang tua & mitra tentang SMA Negeri X Rembang.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-5 lg:gap-6">
          {list.map((t:any)=> {
            const av = t.avatar && typeof t.avatar==='object' ? sanityImg(t.avatar,100) : t.avatar
            return (
            <div key={t.name+t.quote.slice(0,20)} className="bg-white rounded-[20px] p-6 border border-black/5 shadow-sm card-hover flex flex-col">
              <p className="text-sm leading-relaxed text-black/70 flex-1">“{t.quote}”</p>
              <div className="mt-5 flex items-center gap-3 pt-4 border-t border-black/5">
                <span className="w-9 h-9 rounded-full overflow-hidden bg-[var(--bg-light)] border border-black/5 shrink-0">{av ? <img src={av} alt={t.name} className="w-full h-full object-cover"/> : <AvatarSilhouette/>}</span>
                <span><p className="text-sm font-bold leading-none tracking-tight">{t.name}</p><p className="text-xs text-black/50 mt-0.5">{t.role}</p></span>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
