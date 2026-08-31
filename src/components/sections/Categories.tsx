"use client"
import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { categories } from "@/lib/data"
export default function Categories(){
  const [ref, api] = useEmblaCarousel({ align:"start", dragFree:true })
  return (
    <section id="categories" className="bg-[var(--bg-light)] pb-8 lg:pb-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="bg-[var(--green-dark)] rounded-[24px] p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-white text-xl lg:text-2xl font-bold">Bidang & Ekstrakurikuler Unggulan</h2>
            <div className="flex gap-2">
              <button onClick={()=>api?.scrollPrev()} className="w-9 h-9 rounded-full bg-white/10 text-white grid place-items-center hover:bg-white hover:text-[var(--green-dark)] transition-colors"><ChevronLeft size={16}/></button>
              <button onClick={()=>api?.scrollNext()} className="w-9 h-9 rounded-full bg-white text-[var(--green-dark)] grid place-items-center hover:bg-[var(--yellow)] transition-colors"><ChevronRight size={16}/></button>
            </div>
          </div>
          <div className="overflow-hidden" ref={ref}>
            <div className="flex gap-4">
              {categories.map(c=>(
                <div key={c.title} className={`min-w-[220px] flex-1 rounded-2xl p-6 border flex flex-col gap-3 ${c.active ? "bg-[var(--yellow)] border-[var(--yellow)]" : "bg-white border-white"}`}>
                  <div className="text-2xl">{c.icon}</div>
                  <div><div className="font-bold leading-tight">{c.title}</div><div className="text-xs opacity-60">{c.desc}</div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
