"use client"
import { Phone, Mail } from "lucide-react"
import { Wave } from "@/components/illustrations/Ornaments"
export default function CTA(){
  return (
    <section id="contact" className="relative bg-[var(--green-dark)] text-white overflow-hidden scroll-mt-[64px]">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:"radial-gradient(circle at 1.5px 1.5px, white 1.5px, transparent 0)", backgroundSize:"22px 22px"}}/>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
          <div>
            <p className="text-xs tracking-[0.16em] font-bold text-white/60">PPDB 2026/2027</p>
            <h2 className="mt-2 text-[clamp(28px,4.5vw,42px)] font-extrabold tracking-[-0.02em] leading-[0.95]">Siap bergabung<br/>di <span className="text-[var(--yellow)]">SMA N 1 Rembang?</span></h2>
            <p className="mt-3 text-white/65 text-sm leading-relaxed max-w-[52ch]">PPDB Jateng segera dibuka. Konsultasi jurusan, beasiswa & asrama — hubungi TU kami, chat dibalas jam kerja.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="h-11 px-7 rounded-full bg-[var(--yellow)] text-[var(--green-dark)] font-extrabold inline-flex items-center gap-2 hover:brightness-105 active:scale-[0.97] transition shadow-[0_8px_24px_rgba(255,184,0,0.35)]">Daftar PPDB Online →</a>
              <a href="tel:+62295123456" className="h-11 px-6 rounded-full bg-white/10 border border-white/20 inline-flex items-center gap-2 hover:bg-white/15 active:scale-[0.97] transition text-sm font-semibold"><Phone size={16}/> (0295) - 691375</a>
            </div>
            <div className="mt-5 flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15 inline-flex items-center gap-1.5"><Mail size={12}/> sma1rbg@yahoo.co.id</span>
              <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/15">08.00–15.00 WIB • Senin–Jumat</span>
            </div>
          </div>
          <div className="bg-white text-[var(--text-dark)] rounded-[20px] p-5 border border-black/5 shadow-[0_24px_64px_rgba(0,0,0,0.25)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-extrabold tracking-tight">Kunjungi Kampus</p>
              <span className="text-[11px] font-bold tracking-wide px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">Buka • 08.00–15.00</span>
            </div>
            <p className="text-xs text-black/55 mt-1 leading-relaxed">SMA Negeri 1 Rembang — Jl. Pahlawan No. 68, Tasikagung, Rembang, Jawa Tengah 59212</p>
            <div className="mt-4 aspect-[16/10] rounded-[16px] overflow-hidden bg-[var(--bg-light)] border border-black/5">
              <iframe title="Peta SMA Negeri 1 Rembang" src="https://www.google.com/maps?q=-6.6999767,111.3198523&z=15&output=embed" className="w-full h-full border-0" loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
            <a href="https://www.google.com/maps/search/SMA+Negeri+1+Rembang,+Jawa+Tengah/@-6.6999767,111.3198523,16z" target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex text-xs font-bold text-[var(--green-dark)] underline underline-offset-4 hover:text-black">Buka di Google Maps →</a>
          </div>
        </div>
      </div>
      <Wave className="block w-full h-[56px] text-[var(--bg-light)]" />
    </section>
  )
}
