"use client"
import { useEffect, useState } from "react"
import { teachers as fallback } from "@/lib/data"
import { AvatarSilhouette } from "@/components/illustrations/PhotoPlaceholder"
import { client } from "@/sanity/client"
import { qTeachers } from "@/sanity/queries"
import { sanityImg } from "@/sanity/image"
import { DetailModal } from "@/components/ui/Modals"
export default function Teachers(){
  const [teachers,setTeachers]=useState<any[]|null>(null)
  const [active,setActive]=useState<any|null>(null)
  useEffect(()=>{ client.fetch(qTeachers).then((r:any)=>{ if(r?.length) setTeachers(r)}).catch(()=>{}) },[])
  const list = teachers ?? fallback
  return (
    <section id="teachers" className="py-14 bg-[var(--bg-light)] scroll-mt-[64px]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <p className="text-center text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">GURU & TENDIK</p>
        <h2 className="text-center text-[clamp(26px,4vw,36px)] font-bold">Tenaga Pendidik Berdedikasi</h2>
        <p className="text-center text-sm text-black/50 mt-2">Klik foto untuk profil singkat — semua pengajar bergelar S1/S2 & bersertifikasi.</p>
        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {list.map((t:any)=> {
            const img = t.image && typeof t.image==='object' ? sanityImg(t.image,400) : t.image
            return (
            <button key={t.name} type="button" onClick={()=>setActive(t)} className="text-center group">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-white border relative shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 transition-all">
                <div className="absolute inset-0 grid place-items-center bg-[var(--bg-light)]"><AvatarSilhouette/></div>
                {img && <img src={img} alt={t.name} className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-[1.04] transition duration-500" loading="lazy" onLoad={(e:any)=>e.currentTarget.previousElementSibling?.classList.add('hidden')} onError={(e:any)=>e.currentTarget.style.display='none'} />}
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-white text-[11px] leading-tight opacity-0 group-hover:opacity-100 transition">{t.role}</span>
              </div>
              <p className="font-semibold text-sm mt-3 leading-tight group-hover:text-[var(--green-bright)] transition">{t.name}</p><p className="text-xs text-black/50">{t.role}</p>
            </button>
          )})}
        </div>
        <DetailModal open={!!active} onClose={()=>setActive(null)} title={active?.name ?? ""}>
          {active && <div className="space-y-3">
            {(() => { const im = active.image && typeof active.image==='object' ? sanityImg(active.image,600) : active.image; return im ? <img src={im} alt={active.name} className="w-full aspect-[4/3] object-cover object-top rounded-xl"/> : null })()}
            <p className="text-sm font-semibold">{active.role}</p>
            <p className="text-sm leading-relaxed text-black/60">Pengajar berpengalaman, pembina ekstrakurikuler & pembimbing lomba. Jadwal konsultasi via wali kelas / TU.</p>
          </div>}
        </DetailModal>
      </div>
    </section>
  )
}
