export function PersonSilhouette({ className="", skin="#E8D9C8", shirt="#1A6B2E" }: { className?:string; skin?:string; shirt?:string }){
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden>
      <circle cx="50" cy="32" r="18" fill={skin}/>
      <path d="M18 92 C18 62 32 52 50 52 C68 52 82 62 82 92Z" fill={shirt}/>
      <circle cx="50" cy="34" r="14" fill={skin} opacity={0.95}/>
      <path d="M36 30 C40 24 60 24 64 30" stroke="#000" strokeOpacity={0.08} strokeWidth={1.2} fill="none"/>
    </svg>
  )
}
