# SMA Negeri 5 Rembang — Green School Web

> Website profil sekolah modern untuk **SMA Negeri 5 Rembang**. Animasi halus, 100% responsive, performa ngebut, dan sudah terhubung **Sanity CMS** — kelola berita, guru & galeri langsung dari browser tanpa coding.

<p>

[![Live — Website Utama](https://img.shields.io/badge/LIVE-green--school--web.pages.dev-0ea5e9?style=for-the-badge&logo=cloudflare&logoColor=white)](https://smanma-rembang-web.pages.dev)
[![CMS — Sanity Studio](https://img.shields.io/badge/CMS-green--school--web.sanity.studio-ff615b?style=for-the-badge&logo=sanity&logoColor=white)](https://smanma-rembang-web.sanity.studio)

</p>

<p>

![Next.js](https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-149eca?style=flat-square&logo=react)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Sanity](https://img.shields.io/badge/Sanity-CMS-ff615b?style=flat-square&logo=sanity)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-13-ff0055?style=flat-square&logo=framer)
![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-f48120?style=flat-square&logo=cloudflare)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178c6?style=flat-square&logo=typescript)
![License](https://img.shields.io/badge/License-Apache_2.0-blue?style=flat-square&logo=apache)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=flat-square)
![Last Commit](https://img.shields.io/github/last-commit/zzdree/smanma-rembang-web?style=flat-square)
![Repo Size](https://img.shields.io/github/repo-size/zzdree/smanma-rembang-web?style=flat-square)
![Stars](https://img.shields.io/github/stars/zzdree/smanma-rembang-web?style=flat-square)

</p>

---

## 🔗 Live Links

| | URL | Deskripsi |
|---|---|---|
| 🌐 **Website Utama** | **https://smanma-rembang-web.pages.dev** | Landing + profil lengkap (untuk pengunjung & calon siswa) |
| 🛠️ **CMS — Sanity Studio** | **https://smanma-rembang-web.sanity.studio** | Kelola konten (berita, guru, galeri, FAQ) — login pakai akun Sanity owner project |

> Repo: **https://github.com/zzdree/smanma-rembang-web** — `git clone` lalu `npm run dev`.

---

## ✨ Kenapa Template Ini?

- **Dibuat untuk sekolah beneran** — 13 section lengkap: Hero → Trusted → Stats → About → Fasilitas → Kategori → Program Unggulan → Galeri → Testimoni → Guru → FAQ → Berita → CTA. Tidak perlu ngerakit dari nol.
- **CMS beneran, bukan dummy** — Sanity Live (`next-sanity` + SWR). Edit berita/guru/galeri dari `smanma-rembang-web.sanity.studio`, langsung tampil di web tanpa deploy ulang. Ada fallback kalau CMS belum diisi.
- **Foto real, bukan placeholder abu-abu** — 28 foto SMA asli (kelas, lab, lapangan, perpustakaan, close-up guru) di `public/images/`. Gak pakai `picsum` lagi.
- **Cepat & halus** — Static export (`output: export`) ke Cloudflare Pages, Lenis smooth scroll, Framer Motion (`whileInView` + `once:true`), transform GPU-only, respect `prefers-reduced-motion`.

---

## 🧩 Fitur

- **13 section siap pakai** — tinggal ganti teks/foto di CMS atau `src/lib/data.ts`
- **Responsive penuh** — mobile-first, grid adaptif, typography `clamp()`
- **SEO & Aksesibilitas** — semantic HTML, heading hierarchy, alt text, OG image
- **Gambar anti-broken** — `PhotoPlaceholder` + `AvatarSilhouette` (gradien deterministik dari seed)
- **Sanity schema lengkap** — `course` · `post` · `teacher` · `testimonial` · `faq` · `category` (+ profil sekolah, galeri, PPDB di `PRD.md`)

---

## 🖼️ Preview

| Hero — Sekolah Unggul | Galeri & Prestasi |
|---|---|
| Gradien hijau–kuning, CTA PPDB, floating stat **1.200+ siswa** | Masonry 6 foto kegiatan + lightbox |

> `public/images/hero/hero-1.jpg` & `public/images/gallery/g*.jpg` — ganti file-nya, web otomatis pakai yang baru.

---

## 🗂️ Struktur

```
src/
  app/page.tsx                 # urutan 13 section
  components/
    illustrations/Ornaments.tsx
    illustrations/PhotoPlaceholder.tsx
    sections/                  # Hero, About, Courses, Gallery, Blog, FAQ, ...
  lib/
    data.ts                    # fallback content (dipakai kalau Sanity kosong)
    sanity.client.ts           # client + dataset g061zdty
    sanity.queries.ts          # GROQ
    sanity.image.ts            # urlFor helper
  sanity/
    schemaTypes/               # course, post, teacher, testimonial, faq, category
public/images/                 # foto real (hero, courses, blog, gallery, teachers)
sanity.config.ts / sanity.cli.ts
```

---

## 🚀 Quick Start

```bash
npm install          # --legacy-peer-deps kalau peer next-sanity protes
npm run dev          # http://localhost:3000
npm run build        # output statis ke /out
```

Buat file `.env.local` (sudah ada contoh di `.env.example`):

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=g061zdty
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_API_READ_TOKEN=sk...   # read token Sanity (jangan commit)
```

### Deploy ke Cloudflare Pages

```bash
npm run build
npx wrangler pages deploy out --project-name smanma-rembang-web --branch master
# atau hubungkan repo di Cloudflare Dashboard → Pages → Create → Git
# Build command: npm run build / Output: out
```

### Buka Sanity Studio Lokal (opsional)

```bash
npm run sanity:dev   # http://localhost:3333
# deploy studio ke cloud (sudah live di smanma-rembang-web.sanity.studio):
npm run sanity:deploy
```

---

## 🎨 Desain

- Referensi: [Dribbble — LMS Education Website](https://dribbble.com/shots/24675256-LMS-Education-Website)
- Palet: `--green-dark #123A1A` · `--green-bright #00C012` · `--yellow #FFD600` · `--bg-light #F6F7F2`
- Motion: `ease [0.22,1,0.36,1]`, stagger `0.08s`, semua animasi respect `prefers-reduced-motion`

Detail ada di [`DESIGN.md`](./DESIGN.md) & kebutuhan produk di [`PRD.md`](./PRD.md).

---

## 🔌 CMS — Cara Pakai

1. Buka **https://smanma-rembang-web.sanity.studio** → login pakai akun Sanity yang punya project `g061zdty`.
2. Tambah **Post / Teacher / Course / Testimonial / FAQ / Category** → Publish.
3. Refresh **https://smanma-rembang-web.pages.dev** — konten baru langsung muncul (ISR/SWR, fallback tetap jalan kalau kosong).

Skema ada di `src/sanity/schemaTypes/`. Tambah field baru → `npm run sanity:schema:extract` biar typed.

---

## 📄 Lisensi

[Apache License 2.0](./LICENSE) — bebas pakai, modifikasi, komersial dengan atribusi. © 2026 Andreas (zzdree).

---

<p align="center">
  Dibuat dengan ♥ untuk pendidikan — PR & issue sangat welcome!
  <br/>
  <a href="https://smanma-rembang-web.pages.dev">🌐 Website</a> · <a href="https://smanma-rembang-web.sanity.studio">🛠️ CMS</a> · <a href="https://github.com/zzdree/smanma-rembang-web">💻 Repo</a>
</p>

