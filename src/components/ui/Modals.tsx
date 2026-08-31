"use client"
import Image from "next/image"
export function Lightbox({ src, alt, onClose }: { src:string; alt:string; onClose:()=>void }){
  return (
    <div onClick={onClose} className="fixed inset-0 z-[80] bg-black/70 backdrop-blur-sm grid place-items-center p-6 cursor-zoom-out">
      <div onClick={e=>e.stopPropagation()} className="relative max-w-[1100px] w-full">
        <img src={src} alt={alt} className="w-full max-h-[85vh] object-contain rounded-2xl bg-white" />
        <button onClick={onClose} aria-label="Tutup" className="absolute -top-3 -right-3 w-9 h-9 rounded-full bg-white grid place-items-center shadow-lg hover:scale-105 transition">✕</button>
        <p className="mt-3 text-center text-white/90 text-sm">{alt}</p>
      </div>
    </div>
  )
}
export function DetailModal({ open, onClose, children, title }:{ open:boolean; onClose:()=>void; children:React.ReactNode; title:string }){
  if(!open) return null
  return (
    <div onClick={onClose} className="fixed inset-0 z-[80] bg-black/60 backdrop-blur-sm grid place-items-center p-4">
      <div onClick={e=>e.stopPropagation()} className="bg-white rounded-2xl max-w-[680px] w-full overflow-hidden shadow-2xl max-h-[90vh] flex flex-col">
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <h3 className="font-bold leading-tight pr-4">{title}</h3>
          <button onClick={onClose} aria-label="Tutup" className="w-8 h-8 rounded-full border grid place-items-center hover:bg-black/5">✕</button>
        </div>
        <div className="overflow-auto p-6">{children}</div>
      </div>
    </div>
  )
}
