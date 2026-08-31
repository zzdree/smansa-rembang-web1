export const navItems: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Beranda", href: "#beranda", children: [{ label: "Profil Sekolah", href: "#about" }, { label: "Visi Misi", href: "#visi" }] },
  { label: "Profil", href: "#about", children: [{ label: "Sejarah", href: "#sejarah" }, { label: "Guru & Tendik", href: "#teachers" }, { label: "Fasilitas", href: "#fasilitas" }] },
  { label: "Akademik", href: "#courses", children: [{ label: "Program Unggulan", href: "#courses" }, { label: "Ekstrakurikuler", href: "#courses" }] },
  { label: "Berita", href: "#blog", children: [{ label: "Berita Terbaru", href: "#blog" }, { label: "Prestasi", href: "#blog" }] },
  { label: "Kontak", href: "#contact" },
]
export const partners = ["ITB","ITS","UNNES","UNDIP","UNS","UGM","UI","PIP"]
export const stats = [
  { value: "1990", label: "Sejak Berdiri" },
  { value: "1.200+", label: "Peserta Didik" },
  { value: "40+", label: "Guru & Tendik" },
]
export const categories = [
  { title: "IPA", desc: "Ilmu Pengetahuan Alam", icon: "🔬" },
  { title: "IPS", desc: "Ilmu Pengetahuan Sosial", icon: "🌿" },
  { title: "Bahasa & Budaya", desc: "Sastra & Bahasa Asing", icon: "🪶" },
  { title: "Prestasi & Olimpiade", desc: "OSN & lomba nasional", icon: "🏆" },
  { title: "Ekstrakurikuler", desc: "26+ ekskul aktif", icon: "⚽" },
]
export const courses = [
  { title: "Kelas Olimpiade Sains Nasional", rating: 4.9, duration: "Setiap Sabtu", students: "42", instructor: "Dra. Siti Aminah, M.Pd", price: "Gratis", image: "/images/courses/course-olimpiade.svg", avatar: "/images/teachers/silhouette-1.svg" },
  { title: "Ekstrakurikuler Robotik & Coding", rating: 4.8, duration: "Jumat Sore", students: "38", instructor: "Budi Santoso, S.Kom", price: "Gratis", image: "/images/courses/course-robotik.svg", avatar: "/images/teachers/silhouette-2.svg" },
  { title: "Bahasa Inggris Intensive + TOEFL Prep", rating: 5.0, duration: "Senin & Rabu", students: "56", instructor: "Rina Wulandari, M.Pd", price: "Gratis", image: "/images/courses/course-english.svg", avatar: "/images/teachers/silhouette-3.svg" },
  { title: "Seni Tari & Gamelan Jawa", rating: 4.7, duration: "Kamis Sore", students: "35", instructor: "Sukardi, S.Sn", price: "Gratis", image: "/images/courses/course-seni.svg", avatar: "/images/teachers/silhouette-4.svg" },
  { title: "Pramuka & Paskibra Prestasi", rating: 4.9, duration: "Sabtu Pagi", students: "78", instructor: "Kapten Agus P.", price: "Gratis", image: "/images/courses/course-pramuka.svg", avatar: "/images/teachers/silhouette-kepsek.svg" },
  { title: "Futsal & Basket – Tim Inti Sekolah", rating: 4.8, duration: "Selasa & Jumat", students: "44", instructor: "Coach Hendra", price: "Gratis", image: "/images/courses/course-futsal.svg", avatar: "/images/teachers/silhouette-5.svg" },
]
export const testimonials = [
  { name: "Nadia Putri", role: "Alumni 2024 — Kedokteran UNDIP", quote: "Guru-guru SMA Negeri X Rembang sangat suportif. Bimbingan OSN dan tryout intensif bikin aku lolos SNBP impian.", avatar: "/images/teachers/silhouette-1.svg", rating: 5 },
  { name: "Bapak Hartono", role: "Wali Murid Kelas XII", quote: "Fasilitas lengkap, lingkungan asri, dan pembinaan karakter yang kuat. Anak saya jadi lebih disiplin dan percaya diri.", avatar: "/images/teachers/silhouette-2.svg", rating: 5 },
  { name: "Fajar Nugroho", role: "Alumni 2023 — Teknik Informatika UGM", quote: "Ekskul robotiknya keren! Dari nol sampai ikut lomba nasional. Bekal yang kepakai sampai kuliah.", avatar: "/images/teachers/silhouette-3.svg", rating: 5 },
]
export const teachers = [
  { name: "Kepala Sekolah", role: "Kepala Sekolah", image: "/images/teachers/silhouette-kepsek.svg" },
  { name: "Dwi Hastuti, M.Pd", role: "Wakasek — Sejarah", image: "/images/teachers/silhouette-2.svg" },
  { name: "Yulianto, S.Pd", role: "Wakasek — B. Inggris", image: "/images/teachers/silhouette-3.svg" },
  { name: "Ulfah Rubiati, M.Pd", role: "Guru Matematika", image: "/images/teachers/silhouette-4.svg" },
  { name: "Naning Sukaningsih, S.Pd", role: "Guru B. Indonesia", image: "/images/teachers/silhouette-5.svg" },
  { name: "Prihandoko Eko Putra, A.Md", role: "Operator Dapodik", image: "/images/teachers/silhouette-1.svg" },
]
export const faqs = [
  { q: "Bagaimana cara daftar PPDB SMA Negeri X Rembang?", a: "Pendaftaran via jalur zonasi, afirmasi, perpindahan tugas & prestasi di ppdb.jatengprov.go.id. Info lengkap cek menu PPDB atau hubungi TU sekolah." },
  { q: "Apa saja fasilitas unggulan sekolah?", a: "Lab komputer, lab IPA, perpustakaan digital, aula, lapangan olahraga, masjid, kantin sehat, dan akses WiFi di seluruh area." },
  { q: "Apakah ada asrama atau antar-jemput?", a: "Belum ada asrama. Tersedia koordinasi antar-jemput komite dan rute angkutan umum Rembang kota — Lasem." },
  { q: "Jam belajar dan ekstrakurikuler?", a: "KBM Senin–Jumat 07.00–15.00. Ekskul sore & Sabtu sesuai jadwal masing-masing pembina." },
  { q: "Bagaimana menghubungi sekolah?", a: "Telp (0295) - 000000, email info@example.sch.id, atau datang langsung Jl. Pendidikan No. X, Rembang 59214." },
]
export const posts = [
  { title: "Laporan Rekap Realisasi Dana BOS Reguler Tahap II 2025", cat: "Pengumuman", date: "06 Jan 2026", author: "Bendahara BOS", image: "/images/courses/course-olimpiade.svg", comments: 0 },
  { title: "Laporan Dana BOS Reguler Tahap I 2025", cat: "Pengumuman", date: "25 Jul 2025", author: "Bendahara BOS", image: "/images/courses/course-english.svg", comments: 0 },
  { title: "Pengadaan Buku Tahun 2023 — 8.48 MB", cat: "Pengadaan", date: "05 Mei 2025", author: "Sarpras", image: "/images/courses/course-pramuka.svg", comments: 11425 },
]
