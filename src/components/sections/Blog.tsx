"use client"
import { motion } from "framer-motion"
import { posts } from "@/lib/data"
export default function Blog(){
  return (
    <section id="blog" className="bg-[var(--bg-light)] py-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div><p className="text-xs tracking-[0.16em] font-semibold text-[var(--green-bright)]">BERITA & PRESTASI</p><h2 className="text-[clamp(26px,4vw,36px)] font-bold leading-tight">Kabar Terbaru Sekolah</h2></div>
          <a href="#" className="h-10 px-6 rounded-full border-2 border-[var(--green-dark)] font-semibold text-sm hover:bg-[var(--green-dark)] hover:text-white transition-colors inline-grid place-items-center">Lihat Semua</a>
        </div>
        <motion.div initial="hidden" whileInView="visible" viewport={{once:true, margin:"-80px"}} variants={{hidden:{},visible:{transition:{staggerChildren:0.08}}}} className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map(p=>(
            <motion.article key={p.title} variants={{hidden:{opacity:0,y:16},visible:{opacity:1,y:0,transition:{duration:0.6}}}} className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-shadow">
              <div className="aspect-[16/10] overflow-hidden relative"><img src={p.image} alt={p.title} className="w-full h-full object-cover" loading="lazy"/><span className="absolute top-3 left-3 bg-[var(--yellow)] text-[var(--green-dark)] text-xs font-bold px-3 py-1 rounded-full">{p.cat}</span></div>
              <div className="p-5">
                <h3 className="font-bold leading-tight line-clamp-2">{p.title}</h3>
                <div className="mt-3 flex items-center gap-3 text-xs text-black/50"><span>{p.author}</span><span>•</span><span>{p.date}</span><span>•</span><span>{p.comments} komentar</span></div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
