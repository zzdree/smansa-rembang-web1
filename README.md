# SMA Negeri 1 Rembang — `smansa-rembang-web1`

> Website profil sekolah modern untuk **SMA Negeri 1 Rembang (SMANSA)** — animasi halus, 100% responsive, performa ngebut, dan **Sanity CMS** live. Template **#1** dari seri `smansa-rembang-web{N}`. Dibuat dengan ♥ oleh alumni.

<p align="center">

[![Live — Website](https://img.shields.io/badge/LIVE-smansa--rembang--web1.pages.dev-0ea5e9?style=for-the-badge&logo=cloudflare&logoColor=white)](https://smansa-rembang-web1.pages.dev)
[![CMS — Sanity Studio](https://img.shields.io/badge/CMS-smansa--rembang--web1.sanity.studio-ff615b?style=for-the-badge&logo=sanity&logoColor=white)](https://smansa-rembang-web1.sanity.studio)
[![Repo](https://img.shields.io/badge/REPO-github.com%2Fzzdree%2Fsmansa--rembang--web1-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/zzdree/smansa-rembang-web1)

</p>

<p align="center">

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Sanity](https://img.shields.io/badge/Sanity-CMS-ff615b?style=flat-square&logo=sanity)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-ff0055?style=flat-square&logo=framer)
![Lenis](https://img.shields.io/badge/Lenis-Smooth_Scroll-111?style=flat-square)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-f48120?style=flat-square&logo=cloudflare)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square&logo=apache)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/zzdree/smansa-rembang-web1?style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/zzdree/smansa-rembang-web1?style=flat-square)
![Stars](https://img.shields.io/github/stars/zzdree/smansa-rembang-web1?style=flat-square)
![Issues](https://img.shields.io/github/issues/zzdree/smansa-rembang-web1?style=flat-square)
![Top Language](https://img.shields.io/github/languages/top/zzdree/smansa-rembang-web1?style=flat-square)

</p>

---

## 📑 Daftar Isi

- [🔗 Link Penting](#-link-penting)
- [✨ Kenapa Template Ini](#-kenapa-template-ini)
- [🧩 Fitur Lengkap (13 Section)](#-fitur-lengkap-13-section)
- [🖼️ Preview](#️-preview)
- [🧱 Tech Stack](#-tech-stack)
- [🗂️ Struktur Project](#️-struktur-project)
- [🚀 Quick Start](#-quick-start)
- [🔌 CMS — Sanity Studio](#-cms--sanity-studio)
- [☁️ Deploy ke Cloudflare Pages](#️-deploy-ke-cloudflare-pages)
- [🎨 Design System](#-design-system)
- [🗺️ Roadmap Template Series](#️-roadmap-template-series)
- [🤝 Contributing](#-contributing)
- [📄 License — Apache 2.0](#-license--apache-20)
- [🙏 Credits](#-credits)

---

## 🔗 Link Penting

|  | URL | Untuk siapa? |
|---|---|---|
| 🌐 **Website Utama** | **https://smansa-rembang-web1.pages.dev** | Pengunjung, calon siswa & orang tua |
| 🛠️ **CMS — Sanity Studio** | **https://smansa-rembang-web1.sanity.studio** | Admin — kelola berita, guru, galeri, FAQ |
| 💻 **Repository** | **https://github.com/zzdree/smansa-rembang-web1** | Developer — `git clone` lalu `npm run dev` |
| 📊 **Sanity Manage** | **https://www.sanity.io/manage/project/g061zdty** | Owner project `g061zdty` dataset `production` |
| 🏫 **Website Resmi SMANSA** | **https://smansarembang.sch.id** | Referensi data & konten |
| 📸 **Instagram SMANSA** | **https://www.instagram.com/smansarembangofficial** | Kegiatan siswa |
| 🎥 **YouTube SMANSA** | **https://www.youtube.com/@smansarembang8720** | Video profil |

> **Alamat:** Jl. Gajah Mada No.5, Mundu, Magersari, Kec. Rembang, Kab. Rembang, Jateng 59214 · **Telp:** (0295) - 691375 · **Email:** sma1rbg@yahoo.co.id · **Kepsek:** Bu Endang Sri Lestari, S.Pd. · **Guru 61 · Pegawai 20**

---

## ✨ Kenapa Template Ini?

| Masalah sekolah | Solusi di template ini |
|---|---|
| Website jadul, berat, tidak mobile-friendly | **Next.js 16 static export** + Tailwind v4 + `clamp()` — Lighthouse tinggi, 100% responsive |
| Update berita harus lewat developer | **Sanity CMS live** — guru/admin edit sendiri dari Studio, langsung tampil tanpa deploy ulang |
| Foto placeholder abu-abu `picsum` | **28 foto SMA real** di `public/images/` — tinggal ganti file |
| Animasi kaku / pusing | **Framer Motion + Lenis** — `whileInView` + `once:true`, easing `[0.22,1,0.36,1]` |
| Bingung mulai dari nol | **13 section siap pakai** — Hero → Trusted → Stats → About → Fasilitas → Kategori → Courses → Gallery → Testimonials → Teachers → FAQ → Blog → CTA |

---

## 🧩 Fitur Lengkap (13 Section)

```
Hero → TrustedBy → Stats → About → Facilities → Categories
     → Courses (Program Unggulan) → Gallery (masonry + lightbox)
     → Testimonials → Teachers → FAQ (accordion) → Blog (Berita)
     → CTA + Maps (Jl. Gajah Mada No.5)
     + Navbar (sticky, drawer) + Footer (kontak real)
     + 404 custom + SEO (OG, sitemap, robots)
```

- ✅ Responsive penuh — mobile-first, grid adaptif, `max-w-7xl`
- ✅ SEO & A11y — semantic HTML, single `h1`, alt text, OG `hero-1.jpg`, `sitemap.ts` & `robots.ts`
- ✅ Gambar anti-broken — `PhotoPlaceholder` + `AvatarSilhouette`
- ✅ Sanity schema: `post` · `teacher` · `course` · `testimonial` · `faq` · `category`
- ✅ Static export — `output: "export"` + `images.unoptimized` → Cloudflare Pages tanpa server
- ✅ Smooth UX — Lenis + Framer stagger `0.08s`, GPU-only transforms, respect `prefers-reduced-motion`

---

## 🖼️ Preview

| Hero — Sekolah Unggul | Galeri & Prestasi |
|---|---|
| Gradien hijau–kuning `#123A1A → #00C012`, CTA PPDB, floating stat **1.200+ siswa** | Masonry 6 foto + lightbox |

> Foto di `public/images/hero/hero-1.jpg` & `public/images/gallery/g*.jpg` — ganti file, `npm run build` + `wrangler pages deploy`.

**Coba langsung:** [Website Live](https://smansa-rembang-web1.pages.dev) · [CMS Studio](https://smansa-rembang-web1.sanity.studio) · [Repo](https://github.com/zzdree/smansa-rembang-web1)

---

## 🧱 Tech Stack

| Layer | Teknologi |
|---|---|
| Framework | Next.js 16.3 (App Router, Turbopack) `output: export` |
| UI | React 19 + Tailwind CSS v4 + `lucide-react` |
| Motion | Framer Motion 13 + Lenis 1.3 |
| CMS | Sanity 6 + `next-sanity` — project `g061zdty`, dataset `production` |
| Hosting | Cloudflare Pages — `wrangler pages deploy out --project-name smansa-rembang-web1` |
| Language | TypeScript 5 strict |
| Testing | Playwright 1.62 |

---

## 🗂️ Struktur Project

```
smansa-rembang-web1/
├── src/app/page.tsx                 # urutan 13 section
├── src/components/layout/{Navbar,Footer}.tsx
├── src/components/sections/         # Hero, About, Courses, Gallery, Blog, FAQ, ...
├── src/lib/{data,sanity.client,sanity.queries}.ts
├── src/sanity/schemaTypes/          # course, post, teacher, testimonial, faq, category
├── public/images/{hero,gallery,blog,teachers,courses,facilities}/
├── sanity.config.ts / sanity.cli.ts # studioHost: smansa-rembang-web1
├── next.config.ts                   # output: export
└── out/                             # hasil build → Cloudflare Pages
```

---

## 🚀 Quick Start

```bash
git clone https://github.com/zzdree/smansa-rembang-web1.git
cd smansa-rembang-web1
npm install          # --legacy-peer-deps kalau peer protes
npm run dev          # http://localhost:3000
npm run build        # output ke /out
```

`.env.local` (lihat `.env.example`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=g061zdty
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=sk...          # jangan commit!
SANITY_REVALIDATE_SECRET=changeme-smansa1
NEXT_PUBLIC_SITE_URL=https://smansa-rembang-web1.pages.dev
```

---

## 🔌 CMS — Sanity Studio

1. Buka **https://smansa-rembang-web1.sanity.studio** → login Sanity (owner `g061zdty`).
2. Tambah **Post / Teacher / Course / Testimonial / FAQ / Category** → Publish.
3. Refresh **https://smansa-rembang-web1.pages.dev** — langsung muncul (fallback tetap jalan kalau kosong).

```bash
npm run sanity:dev      # http://localhost:3333
npm run sanity:deploy   # deploy ke smansa-rembang-web1.sanity.studio
```

---

## ☁️ Deploy ke Cloudflare Pages

> Bukan Vercel — hosting di **Cloudflare Pages** (static export).

```bash
npm run build
npx wrangler pages deploy out --project-name smansa-rembang-web1 --commit-dirty=true
# atau via Dashboard → Pages → Create → Connect to Git
# Build: npm run build / Output: out
```

Pages: `smansa-rembang-web1` → https://smansa-rembang-web1.pages.dev

---

## 🎨 Design System

- Referensi: [Dribbble — LMS Education Website](https://dribbble.com/shots/24675256-LMS-Education-Website)
- Palet: `--green-dark #123A1A` · `--green-bright #00C012` · `--yellow #FFD600` · `--bg-light #F6F7F2`
- Easing: `[0.22, 1, 0.36, 1]`, stagger `0.08s`, respect `prefers-reduced-motion`

Detail: [`DESIGN.md`](./DESIGN.md) & [`PRD.md`](./PRD.md).

---

## 🗺️ Roadmap Template Series

| Template | Status | Link |
|---|---|---|
| **web1** (ini) | ✅ Live | [smansa-rembang-web1.pages.dev](https://smansa-rembang-web1.pages.dev) |
| **web2** | 🔜 Next — layout & palet beda total | — |
| **web3** | 💡 Planned | — |

> Semua `web{N}` share Sanity `g061zdty` (atau pisah dataset) — tinggal fork repo ini.

---

## 🤝 Contributing

```bash
git checkout -b feat/ide-kamu
npm run build && npm run lint
git commit -m "feat: ..."
gh pr create --fill
```

Topics: `nextjs` `tailwindcss` `sanity-cms` `cloudflare-pages` `school-website` `smansa` `rembang` `education`

---

## 📄 License — Apache 2.0

[Apache License 2.0](./LICENSE) — bebas pakai, modifikasi, komersial dengan atribusi.

```
Copyright 2026 Andreas — SMANSA Rembang (zzdree)
Licensed under the Apache License, Version 2.0
http://www.apache.org/licenses/LICENSE-2.0
```

---

## 🙏 Credits

- **SMA Negeri 1 Rembang** — Jl. Gajah Mada No.5, Rembang · [smansarembang.sch.id](https://smansarembang.sch.id) · [@smansarembangofficial](https://www.instagram.com/smansarembangofficial)
- Dibuat ♥ oleh **Andreas (zzdree)** — alumni SMANSA, untuk pendidikan.

<p align="center">
  <a href="https://smansa-rembang-web1.pages.dev">🌐 Website</a> ·
  <a href="https://smansa-rembang-web1.sanity.studio">🛠️ CMS</a> ·
  <a href="https://github.com/zzdree/smansa-rembang-web1">💻 Repo</a> ·
  <a href="https://smansarembang.sch.id">🏫 SMANSA Resmi</a>
</p>

<p align="center"><sub>Made for Rembang — Berpretasi, Berjati diri, dan Berakhlak Mulia</sub></p>
