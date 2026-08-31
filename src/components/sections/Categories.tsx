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
    <section className="py-12 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">KATEGORI</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Jelajahi Minat & Bakat</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
          {list.map((c:any)=>(
            <div key={c.title} className={"rounded-2xl border p-5 text-center transition "+(c.active?"bg-[var(--green)] text-white border-[var(--green)] shadow":"bg-[var(--bg-light)]")}>
              <div className="text-2xl">{c.icon}</div><p className="font-semibold text-sm mt-2">{c.title}</p><p className={"text-xs mt-1 "+(c.active?"text-white/80":"text-black/50")}>{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
