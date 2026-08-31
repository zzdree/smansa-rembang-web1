export const navItems: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Beranda", href: "#beranda", children: [{ label: "Profil Sekolah", href: "#about" }, { label: "Visi Misi", href: "#visi" }] },
  { label: "Profil", href: "#about", children: [{ label: "Sejarah", href: "#sejarah" }, { label: "Guru & Tendik", href: "#teachers" }, { label: "Fasilitas", href: "#fasilitas" }] },
  { label: "Akademik", href: "#courses", children: [{ label: "Program Unggulan", href: "#courses" }, { label: "Ekstrakurikuler", href: "#courses" }] },
  { label: "Berita", href: "#blog", children: [{ label: "Berita Terbaru", href: "#blog" }, { label: "Prestasi", href: "#blog" }] },
  { label: "Kontak", href: "#contact" },
]
export const partners = ["ITB","ITS","UNNES","UNDIP","UNS","UGM","UI","PIP"]
export const stats = [
  { value: "1961", label: "Sejak Berdiri" },
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
  { title: "Kelas Olimpiade Sains Nasional", rating: 4.9, duration: "Setiap Sabtu", students: "42", instructor: "Dra. Siti Aminah, M.Pd", price: "Gratis", image: "/images/courses/olimpiade.jpg", avatar: "/images/teachers/guru1.jpg" },
  { title: "Ekstrakurikuler Robotik & Coding", rating: 4.8, duration: "Jumat Sore", students: "38", instructor: "Budi Santoso, S.Kom", price: "Gratis", image: "/images/courses/robotik.jpg", avatar: "/images/teachers/guru2.jpg" },
  { title: "Bahasa Inggris Intensive + TOEFL Prep", rating: 5.0, duration: "Senin & Rabu", students: "56", instructor: "Rina Wulandari, M.Pd", price: "Gratis", image: "/images/courses/english.jpg", avatar: "/images/teachers/guru3.jpg" },
  { title: "Seni Tari & Gamelan Jawa", rating: 4.7, duration: "Kamis Sore", students: "35", instructor: "Sukardi, S.Sn", price: "Gratis", image: "/images/courses/seni.jpg", avatar: "/images/teachers/guru4.jpg" },
  { title: "Pramuka & Paskibra Prestasi", rating: 4.9, duration: "Sabtu Pagi", students: "78", instructor: "Kapten Agus P.", price: "Gratis", image: "/images/courses/pramuka.jpg", avatar: "/images/teachers/kepsek.jpg" },
  { title: "Futsal & Basket – Tim Inti Sekolah", rating: 4.8, duration: "Selasa & Jumat", students: "44", instructor: "Coach Hendra", price: "Gratis", image: "/images/courses/olahraga.jpg", avatar: "/images/teachers/guru5.jpg" },
]
export const testimonials = [
  { name: "Nadia Putri", role: "Alumni 2024 — Kedokteran UNDIP", quote: "Guru-guru SMA N 1 Rembang sangat suportif. Bimbingan OSN dan tryout intensif bikin aku lolos SNBP impian.", avatar: "/images/teachers/avatar1.jpg", rating: 5 },
  { name: "Bapak Hartono", role: "Wali Murid Kelas XII", quote: "Fasilitas lengkap, lingkungan asri, dan pembinaan karakter yang kuat. Anak saya jadi lebih disiplin dan percaya diri.", avatar: "/images/teachers/avatar2.jpg", rating: 5 },
  { name: "Fajar Nugroho", role: "Alumni 2023 — Teknik Informatika UGM", quote: "Ekskul robotiknya keren! Dari nol sampai ikut lomba nasional. Bekal yang kepakai sampai kuliah.", avatar: "/images/teachers/avatar3.jpg", rating: 5 },
]
export const teachers = [
  { name: "Endang Sri Lestari, S.Pd.", role: "Kepala Sekolah", image: "/images/gallery/86f6378892c28953823ba1a3c4841bac.jpg" },
  { name: "Dwi Hastuti, M.Pd", role: "Wakasek — Sejarah", image: "/images/gallery/99472b6d5d1df8325a5f0e2880f4efc3.jpg" },
  { name: "Yulianto, S.Pd", role: "Wakasek — B. Inggris", image: "/images/gallery/8091f720499814cbb9d94c52f6414e9e.jpg" },
  { name: "Ulfah Rubiati, M.Pd", role: "Guru Matematika", image: "/images/gallery/c330c438fd2b078317d60395c289fb78.jpg" },
  { name: "Naning Sukaningsih, S.Pd", role: "Guru B. Indonesia", image: "/images/gallery/ace4b393463cdbde2ddd211f127773c9.jpg" },
  { name: "Prihandoko Eko Putra, A.Md", role: "Operator Dapodik", image: "/images/gallery/ad7286dd300c40fd04883db5d8ea3781.jpg" },
]
export const faqs = [
  { q: "Bagaimana cara daftar PPDB SMA N 1 Rembang?", a: "Pendaftaran via jalur zonasi, afirmasi, perpindahan tugas & prestasi di ppdb.jatengprov.go.id. Info lengkap cek menu PPDB atau hubungi TU sekolah." },
  { q: "Apa saja fasilitas unggulan sekolah?", a: "Lab komputer, lab IPA, perpustakaan digital, aula, lapangan olahraga, masjid, kantin sehat, dan akses WiFi di seluruh area." },
  { q: "Apakah ada asrama atau antar-jemput?", a: "Belum ada asrama. Tersedia koordinasi antar-jemput komite dan rute angkutan umum Rembang kota — Lasem." },
  { q: "Jam belajar dan ekstrakurikuler?", a: "KBM Senin–Jumat 07.00–15.00. Ekskul sore & Sabtu sesuai jadwal masing-masing pembina." },
  { q: "Bagaimana menghubungi sekolah?", a: "Telp (0295) - 691375, email sma1rbg@yahoo.co.id, atau datang langsung Jl. Gajah Mada No.5, Mundu, Magersari, Rembang 59214." },
]
export const posts = [
  { title: "Laporan Rekap Realisasi Dana BOS Reguler Tahap II 2025", cat: "Pengumuman", date: "06 Jan 2026", author: "Bendahara BOS", image: "/images/gallery/12108bbbc13568d02d4949a406f36b5b.jpg", comments: 0 },
  { title: "Laporan Dana BOS Reguler Tahap I 2025", cat: "Pengumuman", date: "25 Jul 2025", author: "Bendahara BOS", image: "/images/gallery/ccec9ca3aaeb1796a28eaabf8dcb1a62.jpg", comments: 0 },
  { title: "Pengadaan Buku Tahun 2023 — 8.48 MB", cat: "Pengadaan", date: "05 Mei 2025", author: "Sarpras", image: "/images/gallery/0ebcb65adab27065623df6b274095758.jpg", comments: 11425 },
]
