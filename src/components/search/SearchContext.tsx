"use client"
import { createContext, useContext, useState } from "react"
const Ctx = createContext<{q:string,setQ:(s:string)=>void}>({q:"",setQ:()=>{}})
export function SearchProvider({children}:{children:React.ReactNode}){
  const [q,setQ]=useState("")
  return <Ctx.Provider value={{q,setQ}}>{children}</Ctx.Provider>
}
export const useSearch=()=>useContext(Ctx)
