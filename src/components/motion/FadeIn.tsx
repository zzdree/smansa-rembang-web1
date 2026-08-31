"use client"
import { motion } from "framer-motion"
const ease=[0.22,1,0.36,1] as const
export function FadeIn({ children, delay=0, y=16, className="" }: any){
  return <motion.div initial={{opacity:0,y}} whileInView={{opacity:1,y:0}} viewport={{once:true, margin:"-80px"}} transition={{duration:0.6, ease, delay}} className={className}>{children}</motion.div>
}
export function Stagger({ children, className="" }: any){
  return <motion.div initial="hidden" whileInView="visible" viewport={{once:true, margin:"-80px"}} variants={{hidden:{}, visible:{transition:{staggerChildren:0.08}}}} className={className}>{children}</motion.div>
}
export const item = { hidden:{opacity:0,y:16}, visible:{opacity:1,y:0, transition:{duration:0.6, ease:[0.22,1,0.36,1]}} }
