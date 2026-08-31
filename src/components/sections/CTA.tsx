"use client"
import { Wave } from "@/components/illustrations/Ornaments"
export default function CTA(){
  return (
    <section id="contact" className="relative bg-[var(--green-dark)] text-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 lg:py-16 relative">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-[clamp(26px,4vw,36px)] font-bold leading-tight">Siap bergabung<br/>di <span className="text-[var(--yellow)]">SMA N 5 Rembang?</span></h2>
            <p className="mt-3 text-white/70 text-sm leading-relaxed max-w-[50ch]">PPDB Jateng segera dibuka. Konsultasi jurusan, beasiswa & asrama — hubungi TU kami.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="h-11 px-7 rounded-full bg-[var(--yellow)] text-[var(--green-dark)] font-bold inline-flex items-center hover:brightness-105 transition">Daftar PPDB Online</a>
              <a href="#" className="h-11 px-7 rounded-full bg-white/10 border border-white/20 inline-flex items-center hover:bg-white/15 transition">Hubungi TU • 0295-123456</a>
            </div>
          </div>
          <div className="bg-white text-[var(--text-dark)] rounded-[20px] p-5 border shadow-xl">
            <div className="text-sm font-bold">Kunjungi Kampus</div>
            <div className="text-xs text-black/60">Jl. Pemuda No. 45, Rembang, Jawa Tengah — 08.00–15.00 WIB</div>
            <div className="mt-4 aspect-[16/9] rounded-xl overflow-hidden bg-[var(--bg-light)] border grid place-items-center text-black/30 text-xs">Peta • Google Maps Embed (placeholder)</div>
          </div>
        </div>
      </div>
      <Wave className="block w-full h-[56px] text-[var(--bg-light)]" />
    </section>
  )
}


