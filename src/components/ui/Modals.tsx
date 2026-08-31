"use client"
import { useEffect, useRef } from "react"
export function Lightbox({ src, alt, onClose }: { src:string; alt:string; onClose:()=>void }){
  const btnRef = useRef<HTMLButtonElement>(null)
  useEffect(()=>{ const h=(e:KeyboardEvent)=>{ if(e.key==="Escape") onClose() }; window.addEventListener("keydown",h); btnRef.current?.focus(); return ()=>window.removeEventListener("keydown",h) },[onClose])
  return (
    <div onClick={onClose} role="dialog" aria-modal="true" aria-label={alt} className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out">
      <div onClick={e=>e.stopPropagation()} className="relative max-w-[1100px] w-full">
        <img src={src} alt={alt} className="w-full max-h-[85vh] object-contain rounded-2xl bg-white" />
        <button ref={btnRef} onClick={onClose} aria-label="Tutup lightbox" className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white grid place-items-center shadow-lg hover:scale-105 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white">✕</button>
        <p className="mt-3 text-center text-white/90 text-sm">{alt}</p>
      </div>
    </div>
  )
}
export function DetailModal({ open, onClose, children, title }:{ open:boolean; onClose:()=>void; children:React.ReactNode; title:string }){
  const btnRef = useRef<HTMLButtonElement>(null)
  useEffect(()=>{ if(!open) return; const h=(e:KeyboardEvent)=>{ if(e.key==="Escape") onClose() }; window.addEventListener("keydown",h); btnRef.current?.focus(); const prev=document.body.style.overflow; document.body.style.overflow="hidden"; return ()=>{ window.removeEventListener("keydown",h); document.body.style.overflow=prev } },[open,onClose])
  if(!open) return null
  return (
    <div onClick={onClose} role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm grid place-items-center p-4">
      <div onClick={e=>e.stopPropagation()} className="bg-white rounded-2xl max-w-[680px] w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-bold leading-tight pr-4">{title}</h3>
          <button ref={btnRef} onClick={onClose} aria-label="Tutup dialog" className="w-8 h-8 rounded-full border grid place-items-center hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500">✕</button>
        </div>
        <div className="overflow-auto p-6">{children}</div>
      </div>
    </div>
  )
}
