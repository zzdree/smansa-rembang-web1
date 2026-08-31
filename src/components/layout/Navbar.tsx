"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, ChevronDown, GraduationCap } from "lucide-react"
import { navItems } from "@/lib/data"
import { useSearch } from "@/components/search/SearchContext"

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [expanded,setExpanded]=useState<string|null>(null)
  const { q, setQ } = useSearch()
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
        <a href="#beranda" className="flex items-center gap-2.5 font-extrabold tracking-tight leading-none">
          <span className="w-9 h-9 rounded-xl bg-[var(--green-dark)] grid place-items-center text-white"><GraduationCap size={18}/></span>
          <span className="flex flex-col"><span className="text-[15px] leading-none">SMA NEGERI 5</span><span className="text-[11px] tracking-[0.18em] text-[var(--green-bright)] font-bold leading-none">REMBANG</span></span>
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(n=>(
            <div key={n.label} className="relative group">
              <a href={n.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-[var(--green-bright)] transition-colors">{n.label} {n.children && <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform"/>}</a>
              {n.children && <div className="absolute top-full left-0 hidden group-hover:block bg-white rounded-xl shadow-lg border p-2 min-w-[180px] z-50">{n.children.map(c=><a key={c.label} href={c.href} className="block px-3 py-2 text-sm rounded-lg hover:bg-[var(--bg-light)] hover:text-[var(--green-dark)]">{c.label}</a>)}</div>}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <label className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"/>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari informasi..." className="h-9 pl-9 pr-4 rounded-full border bg-[var(--bg-light)] text-sm w-[160px] focus:w-[220px] transition-all outline-none focus:border-[var(--green-bright)]"/>
          </label>
          <a href="#contact" className="h-9 px-5 grid place-items-center rounded-full bg-[var(--green-dark)] text-white text-sm font-semibold hover:bg-black transition-colors">PPDB Online</a>
        </div>
        <button aria-label={open?"Tutup menu":"Buka menu"} aria-expanded={open} onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 grid place-items-center rounded-xl border bg-white">{open?<X size={18}/>:<Menu size={18}/>}</button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="lg:hidden border-t bg-white overflow-hidden">
          <div className="px-6 py-2">
            {navItems.map(n=>(
              <div key={n.label} className="border-b border-black/5 last:border-0">
                <div className="flex items-center">
                  <a href={n.href} onClick={()=>setOpen(false)} className="flex-1 py-3.5 font-medium text-[15px]">{n.label}</a>
                  {n.children && (
                    <button aria-label={`Toggle ${n.label}`} onClick={()=>setExpanded(expanded===n.label?null:n.label)} className="w-10 h-10 grid place-items-center -mr-2">
                      <ChevronDown size={16} className={`transition-transform ${expanded===n.label?"rotate-180":""}`}/>
                    </button>
                  )}
                </div>
                {n.children && (
                  <AnimatePresence>
                    {expanded===n.label && (
                      <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="overflow-hidden pb-2">
                        <div className="ml-2 pl-3 border-l-2 border-[var(--bg-light)] space-y-1">
                          {n.children.map(c=>(
                            <a key={c.label} href={c.href} onClick={()=>setOpen(false)} className="block py-2 text-sm text-black/70 hover:text-[var(--green-dark)] font-medium">{c.label}</a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <div className="pt-3 pb-4">
              <label className="relative block">
                <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"/>
                <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Cari informasi..." className="w-full h-11 pl-10 pr-4 rounded-full border bg-[var(--bg-light)] text-sm outline-none focus:border-[var(--green-bright)]"/>
              </label>
              <a href="#contact" onClick={()=>setOpen(false)} className="mt-3 block text-center h-11 leading-[44px] rounded-full bg-[var(--yellow)] font-bold">PPDB Online</a>
            </div>
          </div>
        </motion.div>}
      </AnimatePresence>
    </header>
  )
}
