"use client"
import { useEffect, useState } from "react"
import { faqs as fallback } from "@/lib/data"
import { client } from "@/sanity/client"
import { qFaqs } from "@/sanity/queries"
export default function FAQ(){
  const [faqs,setFaqs]=useState<any[]|null>(null)
  useEffect(()=>{ client.fetch(qFaqs).then((r:any)=>{ if(r?.length) setFaqs(r)}).catch(()=>{}) },[])
  const list = faqs ?? fallback
  const [open,setOpen]=useState<number|null>(0)
  return (
    <section className="py-14 bg-white">
      <div className="max-w-[860px] mx-auto px-6">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">FAQ</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Pertanyaan Umum</h2>
        <div className="mt-8 divide-y border rounded-2xl overflow-hidden">
          {list.map((f:any,i:number)=>(
            <div key={f.q} className="bg-white">
              <button onClick={()=>setOpen(open===i?null:i)} className="w-full text-left px-5 py-4 flex justify-between gap-4">
                <span className="font-semibold text-sm">{f.q}</span><span className={"shrink-0 transition "+(open===i?'rotate-180':'')}>⌄</span>
              </button>
              {open===i && <p className="px-5 pb-4 text-sm text-black/60 leading-relaxed">{f.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
