# 🎨 DESIGN.md — SMA Negeri 5 Rembang

> Turunan dari `PRD.md` — blueprint visual & motion sebelum coding.
> Referensi visual: https://dribbble.com/shots/24675256-LMS-Education-Website (adaptasi untuk SMA — bukan LMS komersial)
> Branding aktif: **SMA Negeri 5 Rembang**

---

## 1. Analisis Referensi → Translasi

### 1.1. DNA Visual (Adaptasi Referensi)
11 section berurutan dengan gaya clean, rounded-xl/2xl, shadow soft, whitespace lega, sans-serif bold, palet dark green dominan.

### 1.2. Translasi
| Referensi | Adaptasi | Catatan |
|-----------|----------|---------|
| Course Card | Program Unggulan SMA (Ekskul / Mapel unggulan) | Konten via CMS |
| Instructor | Guru/Teacher Card | Foto portrait, role (Headteacher, Math, English) |
| Category Pills | Kategori (Artist, Graphic & Multimedia active kuning, AI) | Horizontal slider dark bg |

Brand aktif = **SMA Negeri 5 Rembang**. Palet & layout diadaptasi dari referensi; rebrand sekolah lain tinggal ganti tokens/copy via CMS tanpa ubah struktur.

---

## 2. Creative Direction — "SMA N 5 Rembang — Pro + Organic Touch"

**Kata kunci:** *Kredibel · Modern · Energik*

- **Kredibel:** Dark green `#093A27` sebagai hero/footer/categories/testimonial — kesan premium & akademik.
- **Modern:** Grid rapi, rounded 2xl, shadow tipis, animasi stagger mahal.
- **Energik:** Aksen kuning `#FFB800` + hijau terang `#00B014` untuk CTA & highlight.

---

## 3. Design Tokens (Merged: Gemini Presisi + Green School Variant)

### 3.1. Warna

```css
:root {
  /* === Palet Utama (adaptasi referensi) === */
  --green-dark: #093A27;    /* Hero, Categories bg, Testimonial bg, Footer */
  --green-bright: #00B014;  /* Tombol utama, icon highlight, aksen */
  --yellow: #FFB800;        /* Tombol sekunder, rating bintang, badge */
  --bg-light: #F4F7F6;      /* Body background utama */
  --text-dark: #1A1A1A;     /* Heading di area terang */
  --text-muted: #6B7280;    /* Paragraf sekunder */
  --white: #FFFFFF;

  /* === Ekstensi Green School (varian organik, opsional) === */
  --green-900: #0E2E0E;
  --green-700: #1A5D1A;
  --green-400: #6BBE8A;
  --green-100: #E8F5E9;     /* Blob organik alternative */
  --cream-50: #FFFBF5;
  --amber-500: #FFB347;     /* Varian warm dari #FFB800 */

  /* Semantic */
  --border: #E7E5E0;
  --shadow: 0 8px 30px rgba(9,58,39,0.08);
  --shadow-lg: 0 16px 48px rgba(9,58,39,0.14);
}
```

**Aturan:**
- Teks di atas `--green-dark` wajib `--white` (kontras AAA).
- CTA kuning `#FFB800` hanya untuk button/badge, bukan bg section luas.
- Jangan pakai `--green-bright` sebagai bg teks panjang — untuk button/icon saja.

### 3.2. Tipografi (Gemini Spec)

```css
--font-heading: "Inter", "Poppins", "Outfit", sans-serif; /* Bold/SemiBold 700/600 */
--font-body: "Inter", sans-serif;                         /* Regular 400, 15-16px */
```

Via `next/font` (self-host, LCP optimal). Set aktif: **Inter** — konsisten di seluruh halaman.

**Scale (fluid):**
- H1 Hero: `clamp(32px, 6vw, 56px)` / 1.05 / -0.02em / 700
- H2 Section: `clamp(26px, 4vw, 36px)` / 1.15 / 600-700
- H3 Card: `18px` / 1.3 / 700
- Body: `15-16px` / 1.7
- Small/Meta: `13px` / 1.5 / uppercase 0.08em (tag "ABOUT US", "LMS EDUCATION")

### 3.3. Radius, Shadow, Spacing
- Radius: `xl (12px)` card/button, `2xl (16px)` container hero/categories, `pill (999px)` badge, `input 12px`
- Shadow: 2 level (`shadow` & `shadow-lg`) saja.
- Spacing base 8px, section padding `80px` desktop / `48px` mobile.
- Container `max-w-[1280px]` center + `px-6 lg:px-8`. Body bg `var(--bg-light)`.

---

## 4. Layout System

### 4.1. Grid
- 12 kolom, gap `24px` desktop / `16px` mobile.
- 2-kolom sections (Hero, About, Testimonial, FAQ) → stack 1 kolom di `<1024px`.

### 4.2. Navbar (Gemini Spec)
- **Desktop:** Bar putih solid di atas hero dark, sticky on scroll dengan shadow. Kiri: Logo SMA N 5 Rembang (ikon hijau + teks tebal) | Tengah: Home, Courses, Pages, Blog, Contact (+ dropdown chevron di Home/Courses/Pages/Blog) | Kanan: Search icon + tombol outline hijau terang "Login/Register".
- **Mobile:** Hamburger → full-screen drawer stagger, search di drawer, CTA sticky bottom.

### 4.3. Footer (Gemini Spec)
- Bg `var(--green-dark)`, teks putih.
- Atas: bar kontak (Phone, Email, Address) sejajar logo SMA N 5 Rembang.
- Bawah: copyright + deskripsi singkat + sosmed icons + links (Home, About Us, Courses, Help Centre, News, Contact).

---

## 5. Komponen — Spec Visual (11 Section Presisi)

### 5.1. Hero (Dark Green `#093A27`)
```
[ Tag: "LMS EDUCATION" (kecil, muted, tracking wide) ]
[ H1: "Developing Thoughts for the Future" (putih, 700) ]
[ Desc: 16px abu terang ]
[ CTA Row: "Let''s Talk Us" (kuning #FFB800) + "How it Works" (hijau + play icon) ]
[ Slider indicator: "01 02 03 04" (01 active putih, lainnya muted) — bottom section ]

[Kanan: Foto mahasiswa wisuda masking kreatif + floating widget "120+ Tutors" (avatar stack) + blob]
```
- Tinggi `min-h-[86vh]` desktop, stack mobile (teks atas, foto bawah).
- Floating widget: absolute, putih, `backdrop-blur`, animasi `y: [-6,6]` infinite 3.5s.

### 5.2. Trusted Companies
- Section putih, teks kecil center "Trusted By Companies All Over The World" (muted, uppercase).
- Logo grayscale (Cambrian, DocuSign, Crompton, Seclock, Software, Aumni) — flex wrap, `filter grayscale opacity 0.6`.

### 5.3. About Us
- 2 kolom. Kiri: kolase (toga + badge lingkaran kuning "25 Years of experience" + foto lain). Kanan: tag "ABOUT US" (green-bright), H2 "Empower Your Learning Journey Everyday", paragraf, 3 stats sejajar ("5K+ Online Classes" | "7K+ Students each year" | "24+ Award Winning"), tombol hijau "View More Details".
- Stats angka `32px` bold, label `13px` muted.

### 5.4. Popular Categories (Dark Green rounded container)
- Container `bg: var(--green-dark)` + `rounded-2xl` + padding `48px`.
- Headline kiri putih "Our Popular Categories" + panah slider kanan (bulat putih/ghost).
- Kartu: putih / kuning active (Graphic & Multimedia kuning `#FFB800`), icon, title. Horizontal scroll/slide (Embla).

### 5.5. Most Popular Courses (Center)
- H2 center "Most Popular Courses".
- Grid `1 / 2 / 3` kolom. Card: thumbnail 16:10 `rounded-xl overflow-hidden`, rating bintang kuning + angka, judul bold 16px, durasi & siswa (ikon Clock/Users, 13px muted), divider, avatar instruktur 28px + nama (kiri) + harga `$32.50` hijau bold (kanan).

### 5.6. Testimonial (Dark Green)
- 2 kolom. Kiri: tag, H2 "What Our Students Says", quote icon besar `opacity 0.15`, 5 bintang kuning, paragraf ulasan, nama "Jessamine Mumtaz" + role, avatar slider nav (bulat kecil) di bawah. Kanan: foto besar dengan frame/rounded + border kuning tipis.
- Bg `var(--green-dark)`, teks putih.

### 5.7. Best Talented Teachers (Center)
- H2 center "Best Talented Teachers".
- Grid 3 kolom portrait `aspect-[3/4]`, foto rounded-xl, nama bold 16px + role 13px muted (Headteacher, Math Teacher, English Teacher), shadow tipis, hover lift.

### 5.8. FAQ
- 2 kolom. Kiri: foto kelompok belajar + overlay tombol hijau "Video Guide" (play icon, rounded pill, absolute bottom-left). Kanan: H2 "Frequently Asked Questions" + accordion — item `border rounded-xl`, header `flex justify-between` + `+`/`−` icon, expand `max-height` + `opacity` (transform only), jawaban 14px muted.

### 5.9. Blog & Articles
- Header row: H2 kiri "Our Latest Blogs & Articles" + panah slider kanan.
- Grid 3 kolom. Card: thumbnail, badge kuning "Education" absolute top-left, judul bold 16px 2 lines, meta row (avatar penulis + nama | tanggal | komentar count dengan ikon) 13px muted.

### 5.10. Trusted & Footer sudah di §4.3/5.

---

## 6. Motion Design — Kaya tapi Anti-Lag

### 6.1. Prinsip (Wajib)
1. Hanya `transform` & `opacity` (GPU).
2. `viewport={{once:true, margin:"-80px"}}` — tidak re-animate.
3. `prefers-reduced-motion` → downgrade ke fade 0.2s atau none.
4. Lenis smooth scroll hanya desktop (`min-width:1024px` + no-preference).
5. `will-change` short-lived.

### 6.2. Tokens
```js
const ease = [0.22, 1, 0.36, 1];
const dur = { fast: 0.35, base: 0.6, slow: 0.85 };
const stagger = 0.08;
```

### 6.3. Spec per Section
| Section | Animasi | Detail |
|---------|---------|--------|
| Navbar | Slide down 0.5s | `y:-16→0, opacity` |
| Hero H1 | Split words stagger | `y:24→0, opacity`, delay `i*0.06` |
| Hero floating | Float infinite | `y:[-6,6]` 3.5s |
| Hero slider indicator | Active dot scale | `scale 1→1.2` |
| Trusted logos | Fade stagger | `opacity 0→1`, delay 0.06 |
| About badge | Pop + rotate | `scale 0.8→1, rotate -6→0` 0.6s |
| Categories cards | Horizontal stagger | `x:16→0, opacity` |
| Courses grid | Stagger inView | `y:16→0, opacity`, `staggerChildren 0.1` |
| Testimonial | Slide + drag | Embla `drag:"x"` |
| Teachers | Fade lift | Sama courses |
| FAQ accordion | Height + opacity | `grid-rows 0fr→1fr` atau `max-height` via transform |
| Blog | Fade stagger | Sama courses |
| Footer | Fade in | `opacity 0→1` 0.6s |

**Tidak dilakukan:** scroll listener tiap frame tanpa throttle, `backdrop-blur` animasi, Lottie berat.

### 6.4. Micro-interactions
- Button hover `scale 1.02` + shadow, active `0.98`.
- Card hover `translateY(-4px)` + `shadow-lg` (GPU).
- Link underline `scaleX 0→1`.

---

## 7. Responsive Strategy

| Breakpoint | Hero | About/FAQ/Testimonial | Courses/Blog/Teachers | Nav |
|------------|------|------------------------|------------------------|-----|
| 360-639 | Stack | Stack | 1 col | Drawer |
| 640-767 | Stack | Stack | 2 col | Drawer |
| 768-1023 | 2 col | Stack | 2 col | Drawer |
| 1024+ | 2 col | 2 col | 3 col | Full nav + dropdown |
| 1280+ | Container 1280 | — | — | — |

Mobile checklist: tap ≥44px, font ≥15px, `sizes="(max-width:768px) 100vw, 33vw"` via next/image, drawer `overflow-hidden` body, focus trap, ESC close, `aria-modal`.

---

## 8. Aksesibilitas & SEO

- `alt` wajib (Sanity validation), fallback `title`.
- Overlay foto → `linear-gradient(rgba(0,0,0,0) 40%, rgba(0,0,0,0.55))` + teks putih.
- Focus ring `outline: 2px solid var(--green-bright); offset 2px`.
- H1 hanya hero, per section H2, card H3.
- OG via `next/og` 1200x630 (template dark green + kuning).

---

## 9. Asset & Konten Dummy

- Foto: Unsplash keywords `student graduation`, `college students`, `online learning` + `via.placeholder.com/400x300` fallback.
- Icon: Lucide `GraduationCap`, `Clock`, `Users`, `Star`, `Quote`, `Search`, `Play`, `ChevronDown`, `Plus`.
- Avatar stack: `i.pravatar.cc` atau DiceBear.
- Logos: placeholder grayscale text (Cambrian, DocuSign, dll) — ganti SVG real saat produksi.

---

## 10. Build Plan — Komponen React

```
/app/(public)/page.tsx — Home compose 11 sections berurutan
/components/ui — Button, Card, Badge, Input, Container
/components/layout — Navbar (dengan dropdown), Footer, MobileDrawer, Section
/components/sections — Hero, Trusted, About, Categories, Courses, Testimonials, Teachers, FAQ, Blog
/components/motion — FadeIn, Stagger, CountUp
/lib — utils, cms client
/styles/globals.css — tokens (Gemini palette) + base
```

Urutan build: Tokens → Navbar/Footer → Hero → Trusted → About → Categories → Courses → Testimonial → Teachers → FAQ → Blog → Polish (Lenis, reduced-motion, Lighthouse).

---

## 11. Definition of Done Visual

- [ ] 11 sections urut, pixel-perfect 1280 & 375px, warna presisi `#093A27`/`#00B014`/`#FFB800`/`#F4F7F6`
- [ ] Animasi stagger terasa premium (ease custom) bukan linear asal
- [ ] 55-60fps di Redmi (4x CPU throttle, no long tasks >50ms)
- [ ] `prefers-reduced-motion: reduce` → fade 0.2s/none
- [ ] Screenshots 3 viewports di README

---

*Siap eksekusi — branding SMA N 5 Rembang.*