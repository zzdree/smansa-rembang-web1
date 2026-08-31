export function PhotoPlaceholder({ label, seed }: { label: string; seed: string }){
  // deterministic hue from seed
  let h=0; for(let i=0;i<seed.length;i++) h=(h*31+seed.charCodeAt(i))%360
  const h2=(h+28)%360
  return (
    <div className="w-full h-full grid place-items-center p-6 text-center" style={{background:`linear-gradient(135deg, hsl(${h} 70% 88%), hsl(${h2} 70% 72%))`}}>
      <div>
        <div className="mx-auto w-14 h-14 rounded-2xl bg-white/80 border grid place-items-center text-xl">🖼️</div>
        <div className="mt-3 text-xs font-bold tracking-wide text-black/60">{label}</div>
        <div className="text-[10px] tracking-widest text-black/30">{seed}</div>
      </div>
    </div>
  )
}
export function AvatarSilhouette({ color="#1A6B2E" }: { color?: string }){
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden>
      <rect width="100" height="100" rx="16" fill={color} opacity={0.14}/>
      <circle cx="50" cy="38" r="18" fill="#E8D9C8"/>
      <path d="M18 88 C18 62 30 52 50 52 C70 52 82 62 82 88Z" fill={color}/>
    </svg>
  )
}
