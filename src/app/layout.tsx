import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import SmoothScroll from "@/components/motion/SmoothScroll";
import { SearchProvider } from "@/components/search/SearchContext";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://smanma-rembang-web.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "SMA Negeri 5 Rembang — Sekolah Unggul, Berkarakter, Berprestasi", template: "%s | SMA N 5 Rembang" },
  description: "Website resmi SMA Negeri 5 Rembang. Sekolah unggul berkarakter di Kabupaten Rembang, Jawa Tengah. Informasi PPDB, profil, akademik & prestasi.",
  keywords: ["SMA N 5 Rembang","SMA Rembang","sekolah Rembang","PPDB Rembang","Jawa Tengah"],
  alternates: { canonical: "/" },
  openGraph: { title: "SMA Negeri 5 Rembang", description: "Sekolah Unggul, Berkarakter, Berprestasi — Kabupaten Rembang, Jawa Tengah", type: "website", url: siteUrl, siteName: "SMA N 5 Rembang", locale: "id_ID", images: [{ url: "/images/hero/hero-1.jpg", width: 1200, height: 630, alt: "Gedung SMA N 5 Rembang" }] },
  twitter: { card: "summary_large_image", title: "SMA Negeri 5 Rembang", description: "Sekolah Unggul, Berkarakter, Berprestasi", images: ["/images/hero/hero-1.jpg"] },
  robots: { index: true, follow: true },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "HighSchool",
    name: "SMA Negeri 5 Rembang",
    url: siteUrl,
    address: { "@type": "PostalAddress", addressLocality: "Rembang", addressRegion: "Jawa Tengah", addressCountry: "ID" },
    description: "SMA Negeri 5 Rembang — Sekolah Unggul, Berkarakter, Berprestasi. Akreditasi A.",
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


