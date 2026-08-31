import { GraduationCap, Phone, Mail, MapPin } from "lucide-react"
export default function Footer(){
  return (
    <footer id="contact" className="bg-[var(--green-dark)] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="py-8 flex flex-wrap gap-6 justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-2 font-extrabold text-xl"><span className="w-9 h-9 rounded-xl bg-white text-[var(--green-dark)] grid place-items-center"><GraduationCap size={20}/></span> EduVen</div>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2 opacity-90"><Phone size={16} className="text-[var(--yellow)]"/> +1 234 567 890</span>
            <span className="flex items-center gap-2 opacity-90"><Mail size={16} className="text-[var(--yellow)]"/> hello@eduven.com</span>
            <span className="flex items-center gap-2 opacity-90"><MapPin size={16} className="text-[var(--yellow)]"/> 123 Green Street, Education City</span>
          </div>
        </div>
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div><p className="opacity-70 leading-relaxed">Empowering learners worldwide with quality education since 1999. Join 7K+ students.</p><div className="flex gap-3 mt-4">{["X","in","IG","YT"].map(s=><a key={s} href="#" className="w-8 h-8 rounded-full bg-white/10 grid place-items-center hover:bg-[var(--yellow)] hover:text-[var(--green-dark)] transition-colors text-xs">{s}</a>)}</div></div>
          {[
            {h:"Explore", links:["Home","About Us","Courses","Teachers"]},
            {h:"Resources", links:["Blog","FAQ","Help Centre","Privacy"]},
            {h:"Contact", links:["Support","Partnership","Careers","News"]},
          ].map(col=>(
            <div key={col.h}><h4 className="font-semibold mb-3">{col.h}</h4><ul className="space-y-2 opacity-70">{col.links.map(l=><li key={l}><a href="#" className="hover:text-[var(--yellow)] transition-colors">{l}</a></li>)}</ul></div>
          ))}
        </div>
        <div className="py-6 border-t border-white/10 text-xs opacity-60 text-center">© 2026 EduVen — Green School Web. All rights reserved. Built for portfolio.</div>
      </div>
    </footer>
  )
}
