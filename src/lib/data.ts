export const navItems: { label: string; href: string; children?: { label: string; href: string }[] }[] = [
  { label: "Beranda", href: "#beranda", children: [{ label: "Profil Sekolah", href: "#about" }, { label: "Visi Misi", href: "#visi" }] },
  { label: "Profil", href: "#about", children: [{ label: "Sejarah", href: "#sejarah" }, { label: "Guru & Tendik", href: "#teachers" }, { label: "Fasilitas", href: "#fasilitas" }] },
  { label: "Akademik", href: "#courses", children: [{ label: "Program Unggulan", href: "#courses" }, { label: "Ekstrakurikuler", href: "#courses" }] },
  { label: "Berita", href: "#blog", children: [{ label: "Berita Terbaru", href: "#blog" }, { label: "Prestasi", href: "#blog" }] },
  { label: "Kontak", href: "#contact" },
]
export const partners = ["Kemdikbud","Disdik Jateng","Kampus Merdeka","BUMN","Telkom","BRI"]
export const stats = [
  { value: "1.200+", label: "Peserta Didik Aktif" },
  { value: "65+", label: "Guru & Tendik" },
  { value: "28", label: "Prestasi Tahun Ini" },
]
export const categories = [
  { title: "Sains", desc: "12 Program", icon: "🔬" },
  { title: "Bahasa & Sastra", desc: "10 Program", icon: "📚" },
  { title: "Teknologi", desc: "14 Program", icon: "💻" },
  { title: "Seni & Budaya", desc: "9 Program", icon: "🎨" },
  { title: "Olahraga", desc: "11 Program", icon: "⚽" },
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
  { name: "Nadia Putri", role: "Alumni 2024 — Kedokteran UNDIP", quote: "Guru-guru SMA N 5 Rembang sangat suportif. Bimbingan OSN dan tryout intensif bikin aku lolos SNBP impian.", avatar: "/images/teachers/avatar1.jpg", rating: 5 },
  { name: "Bapak Hartono", role: "Wali Murid Kelas XII", quote: "Fasilitas lengkap, lingkungan asri, dan pembinaan karakter yang kuat. Anak saya jadi lebih disiplin dan percaya diri.", avatar: "/images/teachers/avatar2.jpg", rating: 5 },
  { name: "Fajar Nugroho", role: "Alumni 2023 — Teknik Informatika UGM", quote: "Ekskul robotiknya keren! Dari nol sampai ikut lomba nasional. Bekal yang kepakai sampai kuliah.", avatar: "/images/teachers/avatar3.jpg", rating: 5 },
]
export const teachers = [
  { name: "Drs. H. Supriyanto, M.Pd", role: "Kepala Sekolah", image: "/images/teachers/kepsek.jpg" },
  { name: "Dra. Siti Aminah, M.Pd", role: "Waka Kurikulum", image: "/images/teachers/guru1.jpg" },
  { name: "Budi Santoso, S.Kom", role: "Guru Informatika", image: "/images/teachers/guru2.jpg" },
  { name: "Rina Wulandari, M.Pd", role: "Guru Bahasa Inggris", image: "/images/teachers/guru3.jpg" },
  { name: "Sukardi, S.Sn", role: "Guru Seni Budaya", image: "/images/teachers/guru4.jpg" },
  { name: "Hendra Wijaya, S.Pd", role: "Guru Penjasorkes", image: "/images/teachers/guru5.jpg" },
]
export const faqs = [
  { q: "Bagaimana cara daftar PPDB SMA N 5 Rembang?", a: "Pendaftaran via jalur zonasi, afirmasi, perpindahan tugas & prestasi di ppdb.jatengprov.go.id. Info lengkap cek menu PPDB atau hubungi TU sekolah." },
  { q: "Apa saja fasilitas unggulan sekolah?", a: "Lab komputer, lab IPA, perpustakaan digital, aula, lapangan olahraga, masjid, kantin sehat, dan akses WiFi di seluruh area." },
  { q: "Apakah ada asrama atau antar-jemput?", a: "Belum ada asrama. Tersedia koordinasi antar-jemput komite dan rute angkutan umum Rembang kota — Lasem." },
  { q: "Jam belajar dan ekstrakurikuler?", a: "KBM Senin–Jumat 07.00–15.00. Ekskul sore & Sabtu sesuai jadwal masing-masing pembina." },
  { q: "Bagaimana menghubungi sekolah?", a: "Telp/WA 0295-123456, email sman5rembang@sch.id, atau datang langsung Jl. Pemuda No. 45, Rembang, Jawa Tengah." },
]
export const posts = [
  { title: "SMA N 5 Rembang Juara 1 Lomba Cerdas Cermat Jateng 2026", cat: "Prestasi", date: "28 Agu 2026", author: "Humas", image: "/images/blog/berita1.jpg", comments: 12 },
  { title: "Workshop Digital Learning: Guru Siap Kurikulum Merdeka", cat: "Akademik", date: "25 Agu 2026", author: "Kurikulum", image: "/images/blog/berita2.jpg", comments: 8 },
  { title: "Pentas Seni & Bazar Kewirausahaan Meriahkan HUT Sekolah ke-32", cat: "Kesiswaan", date: "22 Agu 2026", author: "OSIS", image: "/images/blog/berita3.jpg", comments: 15 },
]
