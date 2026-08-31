"use client"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Menu, X, ChevronDown, GraduationCap } from "lucide-react"
import { navItems } from "@/lib/data"

export default function Navbar(){
  const [open,setOpen]=useState(false)
  const [q,setQ]=useState("")
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-black/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-[64px] flex items-center justify-between gap-6">
        <a href="#" className="flex items-center gap-2 font-extrabold text-lg tracking-tight">
          <span className="w-8 h-8 rounded-lg bg-[var(--green-dark)] grid place-items-center text-white"><GraduationCap size={18}/></span>
          EduVen
        </a>
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map(n=>(
            <div key={n.label} className="relative group">
              <a href={n.href} className="flex items-center gap-1 px-3 py-2 text-sm font-medium hover:text-[var(--green-bright)] transition-colors">{n.label} {n.children && <ChevronDown size={14} className="opacity-60 group-hover:rotate-180 transition-transform"/>}</a>
              {n.children && <div className="absolute top-full left-0 hidden group-hover:block bg-white rounded-xl shadow-lg border p-2 min-w-[160px]">{n.children.map(c=><a key={c} href="#" className="block px-3 py-2 text-sm rounded-lg hover:bg-[var(--bg-light)]">{c}</a>)}</div>}
            </div>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <label className="relative">
            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-black/40"/>
            <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search" className="h-9 pl-9 pr-4 rounded-full border bg-[var(--bg-light)] text-sm w-[160px] focus:w-[220px] transition-all outline-none focus:border-[var(--green-bright)]"/>
          </label>
          <a href="#" className="h-9 px-5 grid place-items-center rounded-full border-2 border-[var(--green-bright)] text-[var(--green-bright)] text-sm font-semibold hover:bg-[var(--green-bright)] hover:text-white transition-colors">Login / Register</a>
        </div>
        <button onClick={()=>setOpen(!open)} className="lg:hidden w-10 h-10 grid place-items-center rounded-xl border">{open?<X size={18}/>:<Menu size={18}/>}</button>
      </div>
      <AnimatePresence>
        {open && <motion.div initial={{opacity:0,height:0}} animate={{opacity:1,height:"auto"}} exit={{opacity:0,height:0}} className="lg:hidden border-t bg-white overflow-hidden">
          <div className="px-6 py-4 space-y-1">
            {navItems.map(n=><a key={n.label} href={n.href} onClick={()=>setOpen(false)} className="block py-3 font-medium border-b border-black/5 last:border-0">{n.label}</a>)}
            <a href="#" className="mt-3 block text-center h-11 leading-[44px] rounded-full bg-[var(--yellow)] font-semibold">Login / Register</a>
          </div>
        </motion.div>}
      </AnimatePresence>
    </header>
  )
}
