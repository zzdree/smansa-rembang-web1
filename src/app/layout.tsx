import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: "SMA Negeri 5 Rembang — Sekolah Unggul, Berkarakter, Berprestasi",
  description: "Website resmi SMA Negeri 5 Rembang. Sekolah unggul berkarakter di Kabupaten Rembang, Jawa Tengah. Informasi PPDB, profil, akademik & prestasi.",
  openGraph: { title: "SMA Negeri 5 Rembang", description: "Sekolah Unggul, Berkarakter, Berprestasi — Kabupaten Rembang, Jawa Tengah", type: "website" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <SmoothScroll />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
