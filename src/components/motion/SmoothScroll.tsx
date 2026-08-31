"use client"
import { useEffect } from "react"
import Lenis from "lenis"
export default function SmoothScroll(){
  useEffect(()=>{
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if(window.innerWidth < 1024) return
    const lenis = new Lenis({ autoRaf:true, lerp:0.08 })
    return ()=> lenis.destroy()
  },[])
  return null
}
