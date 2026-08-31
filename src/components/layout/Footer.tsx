import { GraduationCap, Phone, Mail, MapPin } from "lucide-react"
export default function Footer(){
  return (
    <footer id="contact" className="bg-[var(--green-dark)] text-white">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="py-8 flex flex-wrap gap-6 justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-2.5 font-extrabold"><span className="w-9 h-9 rounded-xl bg-white text-[var(--green-dark)] grid place-items-center"><GraduationCap size={20}/></span><span className="flex flex-col leading-none"><span>SMA NEGERI 5</span><span className="text-[10px] tracking-[0.18em] opacity-70">REMBANG</span></span></div>
          <div className="flex flex-wrap gap-6 text-sm">
            <span className="flex items-center gap-2 opacity-90"><Phone size={16} className="text-[var(--yellow)]"/> 0295-123456</span>
            <span className="flex items-center gap-2 opacity-90"><Mail size={16} className="text-[var(--yellow)]"/> sman5rembang@sch.id</span>
            <span className="flex items-center gap-2 opacity-90"><MapPin size={16} className="text-[var(--yellow)]"/> Jl. Pemuda No. 45, Rembang, Jateng 59211</span>
          </div>
        </div>
        <div className="py-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
          <div><p className="opacity-70 leading-relaxed">Sekolah unggul berkarakter — mencetak generasi berprestasi, berakhlak, dan siap bersaing global sejak 1994.</p><div className="flex gap-3 mt-4">{["X","in","IG","YT"].map(s=><a key={s} href="#" className="w-8 h-8 rounded-full bg-white/10 grid place-items-center hover:bg-[var(--yellow)] hover:text-[var(--green-dark)] transition-colors text-xs">{s}</a>)}</div></div>
          {[
            {h:"Profil", links:["Sejarah","Visi Misi","Guru & Tendik","Fasilitas"]},
            {h:"Akademik", links:["Program Unggulan","Ekstrakurikuler","Prestasi","Alumni"]},
            {h:"Bantuan", links:["PPDB Online","Kontak","Lokasi","Kebijakan Privasi"]},
          ].map(col=>(
            <div key={col.h}><h4 className="font-semibold mb-3">{col.h}</h4><ul className="space-y-2 opacity-70">{col.links.map(l=><li key={l}><a href="#" className="hover:text-[var(--yellow)] transition-colors">{l}</a></li>)}</ul></div>
          ))}
        </div>
        <div className="py-6 border-t border-white/10 text-xs opacity-60 text-center">© 2026 SMA Negeri 5 Rembang. All rights reserved. Template portofolio by Andreas (zzdree).</div>
      </div>
    </footer>
  )
}
