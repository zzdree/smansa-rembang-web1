# 🎓 PRD — SMA Negeri 5 Rembang

> **Project:** `smanma-rembang-web` — Website Sekolah Modern (CMS-Driven + High Animation + Super Responsive)
> **Brand di UI:** **SMA Negeri 5 Rembang**
> **Owner:** zzdree (Andreas) — Portofolio
> **Repo:** https://github.com/zzdree/smanma-rembang-web
> **Referensi Visual:** https://dribbble.com/shots/24675256-LMS-Education-Website (adaptasi layout — bukan brand SMA N 5 Rembang)
> **Catatan:** Dokumen referensi internal (GEMINI.md) sudah dihapus; yang berlaku adalah versi SMA N 5 Rembang ini
> **Tanggal:** 31 Agustus 2026
> **Versi:** 0.3 — SMA N 5 Rembang (rebrand dari referensi)

---

## 1. Visi & Posisi

**Tagline:** *Developing Thoughts for the Future — Belajar Tumbuh Bersama Alam.*

**Tujuan Bisnis:**
1. Portofolio *high-end* pixel-perfect: Next.js, Headless CMS, Motion Design (Framer Motion + Lenis), Performance (Lighthouse ≥95), Responsive (mobile-first).
2. Template yang bisa dipakai untuk sekolah SD-SMA — ganti identitas sekolah lain hanya via tokens/CMS.
3. Admin non-teknis bisa kelola konten tanpa coding (Sanity/MDX).

**USP:**
- **CMS-first tapi agency-grade** — bukan template sekolah kaku.
- **Animasi kaya tapi 60fps** — hanya `transform`/`opacity`, GPU layer, `prefers-reduced-motion`.
- **100% Responsive** — mobile bukan afterthought.

---

## 2. Target Pengguna & Persona

| Persona | Usia | Kebutuhan | Pain Point |
|---------|------|-----------|------------|
| **Orang Tua Calon Siswa** | 28-45 | Info program, biaya, fasilitas, testimoni, cara daftar | Website sekolah berantakan, lambat, tidak mobile-friendly |
| **Siswa (SMP-SMA/Kursus)** | 13-24 | Kelas populer, kategori, guru, blog | Ingin web kekinian, bukan jadul |
| **Admin/Guru (Editor CMS)** | 25-50 | Update berita/kursus, pengumuman, FAQ, PPDB | Takut merusak web, tidak ngerti coding |
| **Kepala Sekolah** | 40-60 | Kredibilitas, akreditasi, visi misi, partner | Butuh web meyakinkan saat visitasi |

**Jobs To Be Done:**
- Sebagai orang tua, saya ingin melihat biaya & alur PPDB dalam <2 klik.
- Sebagai admin, saya ingin posting berita + upload foto tanpa minta bantuan developer.

---

## 3. Referensi Analisis — Dribbble (24675256) — Diadaptasi

Referensi adalah **LMS Education Landing Page** dengan 11 section berurutan (diadaptasi untuk profil SMA):

1. **Header/Navbar:** Kiri Logo SMA N 5 Rembang | Tengah: Beranda, Profil, Program, Berita, Kontak | Kanan: Search + tombol PPDB/Kontak.
2. **Hero (bg Dark Green `#093A27`):** 2 kolom — Kiri: tag "LMS EDUCATION", H1 "Developing Thoughts for the Future" (putih), deskripsi abu terang, CTA "Let's Talk Us" (kuning `#FFB800`) + "How it Works" (hijau + play icon) | Kanan: foto mahasiswa wisuda masking kreatif + floating widget "120+ Tutors" (avatar stack) + indikator slider "01 02 03 04" di bawah.
3. **Trusted Companies:** Bar putih, teks "Trusted By Companies All Over The World", logo grayscale (Cambrian, DocuSign, Crompton, Seclock, Software, Aumni).
4. **About Us:** 2 kolom — Kiri kolase (toga + badge lingkaran kuning "25 Years of experience" + foto lain) | Kanan tag "ABOUT US", H2 "Empower Your Learning Journey Everyday", paragraf, 3 stats ("5K+ Online Classes", "7K+ Students each year", "24+ Award Winning"), tombol hijau "View More Details".
5. **Popular Categories (bg Dark Green rounded):** Headline kiri "Our Popular Categories" + panah slider kanan, kartu: Artist, Graphic & Multimedia (active kuning), AI.
6. **Most Popular Courses (center H2):** Grid 3 kolom, card: thumbnail, rating bintang, judul bold, durasi & siswa (ikon jam/profil), avatar instruktur + nama, harga $32.50.
7. **Testimonial (bg Dark Green):** 2 kolom — Kiri "What Our Students Says", quote icon besar, 5 bintang, ulasan, nama "Jessamine Mumtaz", avatar slider | Kanan foto besar dengan frame.
8. **Best Talented Teachers (center):** Grid 3 kolom portrait, nama bold + role (Headteacher, Math Teacher, English Teacher), shadow tipis.
9. **FAQ:** 2 kolom — Kiri foto kelompok + overlay hijau "Video Guide" | Kanan Accordion "Frequently Asked Questions" (+ untuk expand).
10. **Blog & Articles:** Headline kiri "Our Latest Blogs & Articles" + panah kanan, grid 3 kolom, card: thumbnail, badge kuning "Education", judul tebal, meta (Penulis, Tanggal, Komentar).
11. **Footer (bg Dark Green):** Atas: kontak (Phone, Email, Address) + logo | Bawah: copyright, deskripsi singkat, sosmed, links (Home, About Us, Courses, Help Centre, News, Contact).

**Adaptasi SMA N 5 Rembang:** Brand aktif adalah SMA Negeri 5 Rembang; layout referensi dipertahankan, copy & asset dikelola via CMS `siteSettings`.

---

## 4. Scope — Fitur Utama (Mapping 1:1 ke 11 Section Dribbble)

### 4.1. Public Website — Satu Halaman Home + Halaman Detail (CMS)

| # | Modul (nama Dribbble) | Deskripsi | Prioritas | Sumber CMS |
|---|------------------------|-----------|-----------|------------|
| 1 | **Header/Navbar** | Logo SMA N 5 Rembang, nav, search, CTA PPDB | P0 | `siteSettings.navigation` |
| 2 | **Hero** | Dark bg `#093A27`, 2 kolom, floating tutors, slider indicator | P0 | `hero` |
| 3 | **Trusted Companies** | Logo grayscale bar | P1 | `partners[]` |
| 4 | **About Us** | Kolase + badge 25 Years + 3 stats | P0 | `about` |
| 5 | **Popular Categories** | Dark rounded bg, slider kategori (Artist, Graphic & Multimedia, AI) | P0 | `categories[]` |
| 6 | **Most Popular Courses** | Grid 3, card lengkap (rating, durasi, siswa, instruktur, harga) | P0 | `courses[]` |
| 7 | **Testimonial** | Dark bg, quote + rating + avatar slider + foto frame | P0 | `testimonials[]` |
| 8 | **Best Talented Teachers** | Grid 3 portrait | P0 | `teachers[]` |
| 9 | **FAQ** | Foto + Video Guide + accordion | P0 | `faqs[]` |
| 10 | **Blog & Articles** | Grid 3, badge Education + meta | P0 | `posts[]` |
| 11 | **Footer** | Kontak bar + links + sosmed | P0 | `siteSettings.footer` |

Tambahan SMA N 5 Rembang (opsional P2): `/ppdb`, `/program/[slug]`, `/berita/[slug]` untuk detail.

### 4.2. CMS — Content Model

**Pilihan:** Sanity v3 (recommended) atau MDX/Contentlayer untuk v1 cepat. Struktur sama.

**Schemas:**
- `hero { tag, headline, subheadline, ctaPrimary{label,href}, ctaSecondary{label,href,icon}, image{asset,alt}, floatingWidget{label,avatars[]} }`
- `partner { name, logo{asset}, url }`
- `about { tag, headline, description, collageImages[], badge{label}, stats[]{value,label}, cta }`
- `category { title, slug, icon, color, featured }`
- `course { title, slug, thumbnail{asset,alt}, rating, duration, students, instructor->teacher, price, category->category }`
- `teacher { name, slug, photo{asset,alt}, role, bio }`
- `testimonial { name, avatar{asset}, rating, quote, role }`
- `faq { question, answer, order }`
- `post { title, slug, cover{asset,alt}, category, excerpt, body, author->author, publishedAt, commentsCount }`
- `siteSettings { logo, navigation[], contact{phone,email,address}, footerLinks[], socials[] }`

**Fitur CMS:** Role Admin/Editor, Draft Preview (`/api/draft`), ISR revalidate (`/api/revalidate`), image CDN, scheduling.

### 4.3. Nice to Have (P2)
- Portal Siswa mini (mockup)
- Search global (Fuse.js)
- Multi-bahasa ID/EN (next-intl)
- Dark mode

---

## 5. Information Architecture & Sitemap

```
Home (/) — 11 sections berurutan (anchor scroll):
  #hero → #trusted → #about → #categories → #courses → #testimonials → #teachers → #faq → #blog → footer

Halaman Detail (CMS-driven):
  /courses/[slug]
  /teachers/[slug]
  /blog/[slug]
  /tentang, /ppdb, /kontak (opsional SMA N 5 Rembang)

API:
  /api/revalidate
  /api/draft
```

**Navigation:** Desktop floating pill / solid (putih di atas hero dark) → sticky on scroll. Mobile: hamburger → full-screen drawer stagger, CTA sticky bottom.

---

## 6. Non-Functional Requirements

### 6.1. Performance — Anti-Lag
| Metrik | Target |
|--------|--------|
| Lighthouse Performance | ≥95 Mobile & Desktop |
| LCP | <2.0s |
| CLS | <0.05 |
| TBT | <150ms |
| Bundle First Load | <120KB gzipped |
| Animasi | 60fps, hanya `transform` & `opacity` |

**Strategi:**
- Framer Motion + CSS transform only.
- `will-change` short-lived, `viewport={{once:true, margin:"-80px"}}`.
- Lazy `next/image`, `IntersectionObserver`, `dynamic()` untuk carousel/lightbox/map.
- Lenis smooth scroll hanya desktop + `prefers-reduced-motion: no-preference`.
- Respect `prefers-reduced-motion`.

### 6.2. Responsive
- Mobile-first, container `max-w-[1280px]` center.
- Grid: Courses/Blog/Teachers `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`; About/Hero/FAQ/Testimonial `1 col mobile → 2 col desktop`.
- Breakpoints `640/768/1024/1280`.
- Tap target ≥44px, font body 15-16px.

### 6.3. SEO & A11y
- Semantic H1 (hero) → H2 per section → H3 card.
- Meta dari CMS, OG 1200x630 via `next/og`, JSON-LD (Course, Article, FAQ).
- `alt` wajib, keyboard nav, focus ring visible, kontras AA.

---

## 7. Tech Stack

| Layer | Pilihan | Alasan |
|-------|---------|--------|
| Framework | **Next.js 15 (App Router)** | SEO, ISR, Image Opt, Server Components |
| Styling | **Tailwind CSS v4** + CSS Variables | Cepat, konsisten, theming presisi |
| Animasi | **Framer Motion** + **Lenis** + CSS | Deklaratif, performant |
| CMS | **Sanity v3** (atau MDX v1) | Portofolio-grade / simple fallback |
| Deploy | Vercel | Next.js native |
| Form | React Hook Form + Zod | Validasi |
| Icon | Lucide React | Ringan, konsisten |
| Font | **Inter / Poppins / Outfit** via `next/font` | Sesuai GEMINI spec, self-host |
| Carousel | Embla Carousel | Ringan untuk Categories/Testimonial/Blog slider |
| Placeholder | `via.placeholder.com` / Unsplash | Sesuai instruksi Gemini |

---

## 8. Content Model Ringkas
```ts
// lihat §4.2 untuk schema lengkap
```

---

## 9. User Flow Kritis

**Flow Kursus:** Hero CTA → #courses → filter kategori → card → /courses/[slug] → daftar (WA/Form).
**Flow Blog:** #blog → /blog → filter → /blog/[slug] → share WA → related.
**Flow FAQ:** #faq → accordion expand → CTA "Let's Talk Us" (WA).

---

## 10. Design Tokens Ringkas (Detail di DESIGN.md)

- Primary Dark Green `#093A27` (hero, categories, testimonial, footer bg)
- Primary Bright Green `#00B014` (CTA, ikon highlight)
- Accent Yellow `#FFB800` (CTA sekunder, rating, badge)
- Bg Light `#F4F7F6`, Text Dark `#1A1A1A`, Muted `#6B7280`, White `#FFFFFF`
- Radius `xl/2xl` (12-16px), shadow soft, container 1280.

---

## 11. Roadmap

| Fase | Durasi | Output |
|------|--------|--------|
| F0 Setup | 0.5h | Next.js + Tailwind + repo push, Sanity/MDX init |
| F1 Layout | 1h | Tokens, Navbar, Footer, Container |
| F2 Home 11 Sections | 2h | Header→Footer pixel-perfect + animasi |
| F3 CMS | 1.5h | Schemas, fetch, ISR, preview, seed dummy |
| F4 Detail Pages | 1.5h | /courses/[slug], /blog/[slug], /teachers |
| F5 Polish & Perf | 1h | Lenis, reduced-motion, Lighthouse 95+ |
| F6 Deploy & Docs | 0.5h | Vercel, README, screenshots |

Total ~8 hari fokus (3-4 hari sprint jika MDX).

---

## 12. Acceptance Criteria

- [ ] 11 sections urut sesuai GEMINI spec, pixel-perfect di 1280 & 375px
- [ ] Warna presisi `#093A27`/`#00B014`/`#FFB800`/`#F4F7F6`
- [ ] Lighthouse ≥95, 60fps, no lag (4x CPU throttle)
- [ ] CMS kelola semua konten tanpa redeploy
- [ ] Mobile drawer + keyboard nav lulus axe (0 critical)
- [ ] No CLS (Next Image + aspect-ratio)

---

## 13. Risiko & Mitigasi

| Risiko | Mitigasi |
|--------|----------|
| Animasi lag HP kentang | `transform/opacity` only, `once:true`, reduced-motion |
| Sanity overkill v1 | Fallback MDX |
| Konten kosong demo | Seed 12 posts + 8 teachers + 20 foto Unsplash |

---

*Next: `DESIGN.md` (visual & motion spec presisi).*

