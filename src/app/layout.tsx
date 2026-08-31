import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { SearchProvider } from "@/components/search/SearchContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://webschool-01.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SMA Negeri X Rembang — Template CMS Sekolah Modern", template: "%s | SMA Negeri X Rembang" },
  description: "Template CMS sekolah modern untuk SMA — profil, akademik, berita, galeri, dan manajemen konten via Sanity. Mudah dikustom untuk sekolah mana pun.",
  keywords: ["template sekolah","CMS sekolah","SMA","website sekolah","Sanity CMS","Next.js"],
  alternates: { canonical: "/" },
  openGraph: { title: "SMA Negeri X Rembang — Template CMS Sekolah", description: "Template website sekolah modern, cepat, dan mudah dikelola.", type: "website", url: siteUrl, siteName: "SMA Negeri X Rembang", locale: "id_ID", images: [{ url: "/images/gallery/3b1071aab964e89dd25da7a9038c5fa9.jpg", width: 1200, height: 630, alt: "Gedung sekolah" }] },
  twitter: { card: "summary_large_image", title: "SMA Negeri X Rembang", description: "Template CMS sekolah modern", images: ["/images/gallery/3b1071aab964e89dd25da7a9038c5fa9.jpg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.png", shortcut: "/favicon.png", apple: "/favicon.png" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HighSchool",
    name: "SMA Negeri X Rembang",
    url: siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Rembang", addressRegion: "Jawa Tengah", addressCountry: "ID" },
    description: "SMA Negeri X Rembang — Template CMS Sekolah Modern. Akreditasi A.",
  }
  return (
    <html lang="id" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <a href="#beranda" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[90] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-full focus:shadow">Lompat ke konten</a>
        <SearchProvider>
          <SmoothScroll />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SearchProvider>
      </body>
    </html>
  );
}

