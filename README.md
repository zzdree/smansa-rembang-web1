# SMA Negeri 5 Rembang — Green School Web

> Template website sekolah modern, animasi halus, responsive, dan CMS-ready. Dibuat untuk portofolio & bisa dipakai ulang untuk profil sekolah mana pun.

[![Live](https://img.shields.io/badge/Live-green--school--web.pages.dev-0ea5e9?style=for-the-badge)](https://green-school-web.pages.dev)
[![Next.js](https://img.shields.io/badge/Next.js-16.3.3-black?logo=next.js)](https://nextjs.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue?logo=apache)](./LICENSE)

`Next.js 16 + React 19 + Tailwind v4 + Framer Motion + Lenis + Embla` — deploy statis ke **Cloudflare Pages**. Semua gambar punya **fallback SVG** (tidak blank walau CDN down).

---

## ✨ Preview

| Hero — Sekolah Unggul | Galeri & Prestasi |
|---|---|
| Gradien hijau–kuning, CTA PPDB, floating stat 1.200+ siswa | Masonry 6 foto + placeholder SVG kalau offline |

> Live: **https://green-school-web.pages.dev** · Repo: **https://github.com/zzdree/green-school-web**

---

## 🧩 Fitur

- **13 section** siap pakai: Hero → Trusted → StatsAchieve → About → Fasilitas → Kategori → Program Unggulan → Galeri → Testimoni → Guru → FAQ → Berita → CTA
- **Animasi tidak lag**: Framer Motion (`whileInView` + `once:true`), Lenis smooth scroll, GPU-only transforms
- **Responsive penuh**: mobile-first, grid adaptif, tipografi fluid `clamp()`
- **Aksesibilitas & SEO**: semantic HTML, heading hierarchy, alt text, sitemap-friendly static export
- **Fallback gambar**: `PhotoPlaceholder` + `AvatarSilhouette` — gradien deterministik dari seed, tampil instan sebelum foto CDN load
- **CMS-ready**: struktur data di `src/lib/data.ts` + skema Sanity di `PRD.md` (tinggal colok headless CMS)

## 🗂️ Struktur

```
src/
  app/page.tsx              # urutan 13 section
  components/
    illustrations/
      Ornaments.tsx         # Blob, RingGrid, Wave (SVG)
      PhotoPlaceholder.tsx  # fallback gradien + AvatarSilhouette
      Silhouette.tsx        # ilustrasi orang
    sections/               # Hero, About, Courses, Gallery, Blog, FAQ, ...
  lib/data.ts               # semua konten (nav, courses, posts, guru, FAQ)
public/
  favicon, og-image (todo)
```

## 🚀 Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # output statis ke /out
```

### Deploy ke Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy out --project-name green-school-web --branch main
# atau connect repo di Cloudflare Dashboard → Pages → Create → Git → build: npm run build / output: out
```

## 🎨 Desain

- Referensi: [Dribbble — LMS Education Website](https://dribbble.com/shots/24675256-LMS-Education-Website)
- Palet: `--green-dark #123A1A`, `--green-bright #00C012`, `--yellow #FFD600`, `--bg-light #F6F7F2`
- Motion: `ease [0.22,1,0.36,1]`, stagger 0.08s, semua animasi respect `prefers-reduced-motion`

Lihat detail di [`DESIGN.md`](./DESIGN.md) dan kebutuhan produk di [`PRD.md`](./PRD.md).

## 🔌 Rencana CMS

`PRD.md` sudah berisi skema Sanity untuk: profil sekolah, berita, program, guru, testimoni, galeri, FAQ, PPDB. Tinggal `sanity init` dan mapping `src/lib/data.ts` → GROQ.

## 📄 Lisensi

[Apache License 2.0](./LICENSE) — bebas pakai, modifikasi, dan komersial dengan atribusi. © 2026 Andreas (zzdree).
