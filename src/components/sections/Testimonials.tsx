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
    <section className="py-14 bg-[var(--bg-light)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">TESTIMONI</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Apa Kata Mereka</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {list.map((t:any)=> {
            const av = t.avatar && typeof t.avatar==='object' ? sanityImg(t.avatar,100) : t.avatar
            return (
            <div key={t.name+t.quote.slice(0,20)} className="bg-white rounded-2xl p-6 border">
              <p className="text-sm leading-relaxed text-black/70">"{t.quote}"</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="w-9 h-9 rounded-full overflow-hidden bg-[var(--bg-light)] border shrink-0">{av ? <img src={av} alt={t.name} className="w-full h-full object-cover"/> : <AvatarSilhouette/>}</span>
                <span><p className="text-sm font-semibold leading-none">{t.name}</p><p className="text-xs text-black/50">{t.role}</p></span>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
