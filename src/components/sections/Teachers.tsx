"use client"
import { useEffect, useState } from "react"
import { teachers as fallback } from "@/lib/data"
import { AvatarSilhouette } from "@/components/illustrations/PhotoPlaceholder"
import { client } from "@/sanity/client"
import { qTeachers } from "@/sanity/queries"
import { sanityImg } from "@/sanity/image"
export default function Teachers(){
  const [teachers,setTeachers]=useState<any[]|null>(null)
  useEffect(()=>{ client.fetch(qTeachers).then((r:any)=>{ if(r?.length) setTeachers(r)}).catch(()=>{}) },[])
  const list = teachers ?? fallback
  return (
    <section className="py-14 bg-[var(--bg-light)]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">GURU & TENDIK</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Tenaga Pendidik Berdedikasi</h2>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {list.map((t:any)=> {
            const img = t.image && typeof t.image==='object' ? sanityImg(t.image,400) : t.image
            return (
            <div key={t.name} className="text-center">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border relative">
                <div className="absolute inset-0 grid place-items-center bg-[var(--bg-light)]"><AvatarSilhouette/></div>
                {img && <img src={img} alt={t.name} className="absolute inset-0 w-full h-full object-cover" loading="lazy" onLoad={(e:any)=>e.currentTarget.previousElementSibling?.classList.add('hidden')} onError={(e:any)=>e.currentTarget.style.display='none'} />}
              </div>
              <p className="font-semibold text-sm mt-3 leading-tight">{t.name}</p><p className="text-xs text-black/50">{t.role}</p>
            </div>
          )})}
        </div>
      </div>
    </section>
  )
}
