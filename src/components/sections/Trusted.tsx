"use client"
import { motion } from "framer-motion"
const partners=[
  { name:"ITB", src:"/images/powered/Logo_itb.png" },
  { name:"ITS", src:"/images/powered/Logo_its.png" },
  { name:"UNNES", src:"/images/powered/Logo_unnes.png" },
  { name:"UNDIP", src:"/images/powered/undip-logo.png" },
  { name:"UNS", src:"/images/powered/Logo_UNS.png" },
  { name:"UGM", src:"/images/powered/UGM-Logo.png" },
  { name:"UI", src:"/images/powered/logo-ui.png" },
  { name:"PIP", src:"/images/powered/logo-pip.png" },
]
export default function Trusted(){
  return (
    <section className="bg-white border-y border-black/5">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-7 lg:py-8">
        <p className="text-center text-[11px] tracking-[0.18em] text-black/35 font-bold">DIDUKUNG & BERMITRA — ALUMNI DITERIMA DI</p>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true}} variants={{hidden:{},visible:{transition:{staggerChildren:0.06}}}} className="mt-4 flex flex-wrap justify-center gap-3 lg:gap-4">
          {partners.map(p=>(
            <motion.div key={p.name} variants={{hidden:{opacity:0,y:8},visible:{opacity:1,y:0,transition:{duration:0.5, ease:[0.22,1,0.36,1]}}}} className="h-11 px-3 pr-4 rounded-full border border-black/5 bg-[var(--bg-light)] flex items-center gap-2.5 hover:border-black/10 transition-colors">
              <span className="w-8 h-8 rounded-full bg-white border border-black/5 grid place-items-center overflow-hidden shrink-0">
                <img src={p.src} alt={p.name} className="w-6 h-6 object-contain" loading="lazy" onError={(e:any)=>{e.currentTarget.style.display="none"}}/>
              </span>
              <span className="text-xs font-bold tracking-wide text-black/60">{p.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
