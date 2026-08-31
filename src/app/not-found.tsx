import Link from "next/link"
export const dynamic = "force-static"
export default function NotFound(){
  return (
    <div className="min-h-[70vh] grid place-items-center bg-[var(--bg-light)] px-6 py-16">
      <div className="max-w-[560px] w-full bg-white border rounded-[24px] p-8 sm:p-10 text-center shadow-sm">
        <div className="mx-auto w-14 h-14 rounded-2xl bg-[var(--green-dark)] text-[var(--yellow)] grid place-items-center font-extrabold text-xl">404</div>
        <h1 className="mt-4 text-[28px] font-extrabold leading-tight">Halaman tidak ditemukan</h1>
        <p className="mt-2 text-sm leading-relaxed text-black/60">Alamat dipindahkan atau salah ketik. Kembali ke beranda atau hubungi TU SMA N 1 Rembang.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Link href="/" className="h-11 px-7 rounded-full bg-[var(--green-bright)] text-white font-semibold inline-flex items-center hover:bg-[#009610] transition-colors">Kembali ke Beranda</Link>
          <a href="/#contact" className="h-11 px-7 rounded-full bg-white border inline-flex items-center font-semibold hover:bg-black/[0.04] transition-colors">Hubungi TU</a>
        </div>
        <p className="mt-6 text-xs text-black/30">SMA Negeri 1 Rembang - Akreditasi A - Rembang, Jawa Tengah</p>
      </div>
    </div>
  )
}