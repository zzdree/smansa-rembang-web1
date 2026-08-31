"use client"
import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { faqs as fallback } from "@/lib/data"
import { client } from "@/sanity/client"
import { qFaqs } from "@/sanity/queries"
export default function FAQ(){
  const [faqs,setFaqs]=useState<any[]|null>(null)
  useEffect(()=>{ client.fetch(qFaqs).then((r:any)=>{ if(r?.length) setFaqs(r)}).catch(()=>{}) },[])
  const list = faqs ?? fallback
  const [open,setOpen]=useState<number|null>(0)
  return (
    <section className="py-14 lg:py-16 bg-white">
      <div className="max-w-[860px] mx-auto px-6">
        <p className="text-center text-xs tracking-[0.16em] font-bold text-[var(--green-bright)]">FAQ</p>
        <h2 className="text-center mt-2 text-[clamp(28px,4vw,38px)] font-extrabold tracking-[-0.02em] leading-tight">Pertanyaan Umum</h2>
        <p className="text-center text-sm text-black/50 mt-2">Jawaban cepat seputar PPDB, akademik & fasilitas.</p>
        <div className="mt-8 border border-black/5 rounded-[20px] overflow-hidden divide-y divide-black/5">
          {list.map((f:any,i:number)=>{
            const isOpen = open===i
            return (
            <div key={f.q} className={"bg-white transition "+(isOpen?"":"hover:bg-black/[0.02]")}>
              <button onClick={()=>setOpen(isOpen?null:i)} aria-expanded={isOpen} className="w-full text-left px-5 py-4 flex justify-between gap-4 items-center focus-visible:outline-none focus-visible:bg-black/[0.03]">
                <span className="font-bold text-sm leading-snug tracking-tight">{f.q}</span>
                <span className={"shrink-0 w-7 h-7 rounded-full border border-black/10 grid place-items-center transition "+(isOpen?"rotate-180 bg-[var(--green-dark)] text-white border-[var(--green-dark)]":"bg-white text-black/50")}><ChevronDown size={14}/></span>
              </button>
              <div className={"grid transition-all "+(isOpen?"grid-rows-[1fr] opacity-100":"grid-rows-[0fr] opacity-0")}>
                <div className="overflow-hidden"><p className="px-5 pb-4 text-sm text-black/60 leading-relaxed">{f.a}</p></div>
              </div>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
