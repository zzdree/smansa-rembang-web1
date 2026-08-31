"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, ChevronDown, GraduationCap, ArrowRight } from "lucide-react"
import { navItems } from "@/lib/data"
import { useSearch } from "@/components/search/SearchContext"

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [expanded,setExpanded]=useState<string|null>(null)
  const { q, setQ } = useSearch()
  return (
    <>
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
        <a href="#beranda" className="flex items-center gap-2.5 font-extrabold tracking-tight leading-none shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-bright)] rounded-xl">
          <span className="w-9 h-9 rounded-xl bg-[var(--green-dark)] grid place-items-center text-white shadow-sm"><GraduationCap size={18}/></span>
          <span className="flex flex-col"><span className="text-[15px] leading-none tracking-tight">SMA NEGERI 1</span><span className="text-[11px] tracking-[0.18em] text-[var(--green-bright)] font-bold leading-none">REMBANG</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(n=>(
            <div key={n.label} className="relative group">
              <a href={n.href} className="flex items-center gap-1 px-3 py-2 text-[13.5px] font-medium text-black/70 hover:text-[var(--green-dark)] transition-colors rounded-full hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-bright)]">{n.label} {n.children && <ChevronDown size={14} className="opacity-50 group-hover:rotate-180 transition-transform duration-200"/>}</a>
              {n.children && <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block pt-2 z-50"><div className="bg-white rounded-2xl shadow-[0_16px_40px_rgba(0,0,0,0.12)] border border-black/5 p-1.5 min-w-[200px]"><div className="py-1">{n.children.map(c=><a key={c.label} href={c.href} className="flex items-center px-3 py-2.5 text-[13px] rounded-xl hover:bg-[var(--bg-light)] hover:text-[var(--green-dark)] font-medium transition-colors">{c.label}</a>)}</div></div></div>}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <label className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/35 pointer-events-none"/>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari program / berita..." className="h-9 pl-9 pr-4 rounded-full border border-black/10 bg-[var(--bg-light)] text-[13px] w-[168px] focus:w-[232px] transition-all outline-none focus:border-[var(--green-bright)] focus:bg-white placeholder:text-black/35"/>
          </label>
          <a href="#contact" className="h-9 px-5 inline-flex items-center gap-1.5 rounded-full bg-[var(--yellow)] text-[var(--green-dark)] text-[13px] font-bold hover:brightness-[1.03] active:scale-[0.97] transition-all shadow-sm btn-press">PPDB Online <ArrowRight size={14}/></a>
        </div>
        <button aria-label={open?"Tutup menu":"Buka menu"} aria-expanded={open} onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 grid place-items-center rounded-xl border border-black/10 bg-white hover:bg-black/5 active:scale-[0.97] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--green-bright)]">{open?<X size={18}/>:<Menu size={18}/>}</button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:0.22, ease:[0.22,1,0.36,1]}} className="lg:hidden border-t border-black/5 bg-white overflow-hidden">
          <div className="px-6 py-2">
            {navItems.map(n=>(
              <div key={n.label} className="border-b border-black/5 last:border-0">
                <div className="flex items-center">
                  <a href={n.href} onClick={()=>setOpen(false)} className="flex-1 py-3.5 font-medium text-[15px] hover:text-[var(--green-dark)]">{n.label}</a>
                  {n.children && (
                    <button aria-label={`Toggle ${n.label}`} onClick={()=>setExpanded(expanded===n.label?null:n.label)} className="w-10 h-10 grid place-items-center -mr-2 rounded-xl hover:bg-black/5 active:scale-95 transition">
                      <ChevronDown size={16} className={`transition-transform duration-200 ${expanded===n.label?"rotate-180":""}`}/>
                    </button>
                  )}
                </div>
                {n.children && (
                  <AnimatePresence>
                    {expanded===n.label && (
                      <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} transition={{duration:0.2}} className="overflow-hidden pb-2">
                        <div className="ml-2 pl-3 border-l-2 border-[var(--bg-light)] space-y-0.5 py-1">
                          {n.children.map(c=>(
                            <a key={c.label} href={c.href} onClick={()=>setOpen(false)} className="block py-2.5 text-[13px] text-black/60 hover:text-[var(--green-dark)] font-medium">{c.label}</a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <div className="pt-3 pb-4 space-y-3">
              <label className="relative block">
                <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-black/35"/>
                <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari program / berita..." className="w-full h-11 pl-10 pr-4 rounded-2xl border border-black/10 bg-[var(--bg-light)] text-sm outline-none focus:border-[var(--green-bright)] focus:bg-white"/>
              </label>
              <a href="#contact" onClick={()=>setOpen(false)} className="flex items-center justify-center gap-2 h-11 rounded-full bg-[var(--yellow)] font-bold text-[var(--green-dark)] hover:brightness-105 active:scale-[0.98] transition-all">PPDB Online <ArrowRight size={16}/></a>
            </div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </header>
    {/* Mobile floating PPDB — conversion: only <640px, auto-hide when CTA in view via CTA observer could be added later */}
    <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 p-3 pb-[max(12px,env(safe-area-inset-bottom))] bg-gradient-to-t from-white via-white to-white/80 backdrop-blur border-t border-black/5">
      <div className="flex gap-2">
        <a href="tel:0295123456" className="flex-1 h-11 grid place-items-center rounded-full border border-black/10 bg-white font-semibold text-sm active:scale-[0.98] transition">Hubungi TU</a>
        <a href="#contact" className="flex-[1.4] h-11 inline-flex items-center justify-center gap-1.5 rounded-full bg-[var(--yellow)] text-[var(--green-dark)] font-bold text-sm shadow-md active:scale-[0.98] transition">Daftar PPDB <ArrowRight size={14}/></a>
      </div>
    </div>
    </>
  )
}
