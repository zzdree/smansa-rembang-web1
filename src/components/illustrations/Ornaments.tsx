export function Blob({ className="" }: { className?: string }){
  return (
    <svg viewBox="0 0 400 380" className={className} aria-hidden>
      <path d="M210 20 C300 30 380 90 360 190 C340 290 270 360 170 350 C70 340 10 260 20 170 C30 80 110 10 210 20Z" fill="currentColor" opacity={0.14}/>
      <path d="M120 60 C180 40 260 70 280 140 C300 210 240 280 170 290 C100 300 50 240 60 170 C70 100 70 80 120 60Z" fill="currentColor" opacity={0.10}/>
    </svg>
  )
}
export function RingGrid({ className="" }: { className?: string }){
  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden>
      {Array.from({length:5}).map((_,r)=>Array.from({length:5}).map((__,c)=><circle key={`${r}-${c}`} cx={12+c*24} cy={12+r*24} r={2.8} fill="none" stroke="currentColor" strokeWidth={1.2} opacity={0.25}/>))}
    </svg>
  )
}
export function Wave({ className="" }: { className?: string }){
  return (
    <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className={className} aria-hidden>
      <path d="M0 60 C240 10 480 110 720 60 C960 10 1200 110 1440 60 L1440 120 L0 120Z" fill="currentColor"/>
    </svg>
  )
}
