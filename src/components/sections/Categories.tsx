"use client"
import { useEffect, useState } from "react"
import { categories as fallback } from "@/lib/data"
import { client } from "@/sanity/client"
import { qCategories } from "@/sanity/queries"
export default function Categories(){
  const [cats,setCats]=useState<any[]|null>(null)
  useEffect(()=>{ client.fetch(qCategories).then((r:any)=>{ if(r?.length) setCats(r.map((c:any)=>({ title:c.title, desc:c.desc||c.title, icon:c.icon||'📚', active: !!c.featured })))}).catch(()=>{}) },[])
  const list = cats ?? fallback
  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">KATEGORI</p>
        <h2 className="text-center mt-2 text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em]">Jelajahi Minat & Bakat</h2>
        <p className="text-center text-sm text-black/50 mt-2">Temukan jalurmu — akademik, seni, olahraga & karakter.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3 lg:gap-4">
          {list.map((c:any)=>(
            <div key={c.title} className={"group flex flex-col items-center justify-center rounded-[20px] border p-6 text-center transition-all duration-200 min-h-[140px] w-[calc(50%-6px)] sm:w-[200px] lg:flex-1 lg:min-w-0 card-hover "+(c.active?"bg-[var(--green-dark)] text-white border-[var(--green-dark)] shadow-[0_12px_32px_rgba(9,58,39,0.25)]":"bg-[var(--bg-light)] border-black/5 hover:border-black/10 hover:bg-white")}>
              <div className={"w-11 h-11 rounded-2xl grid place-items-center text-xl shadow-sm "+(c.active?"bg-white text-[var(--green-dark)]":"bg-white border border-black/5")}>{c.icon}</div>
              <p className="font-bold text-sm mt-3 leading-tight tracking-tight">{c.title}</p>
              <p className={"text-xs mt-1 leading-relaxed "+(c.active?"text-white/70":"text-black/50")}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
   )
}
