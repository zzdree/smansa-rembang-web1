import { cn } from "@/lib/cn"
export function Button({ children, variant="primary", size="md", className, ...props }: any) {
  const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 active:scale-[0.98] hover:scale-[1.02] focus-visible:outline-none"
  const variants:any = {
    primary: "bg-[var(--yellow)] text-[var(--green-dark)] shadow-md hover:shadow-lg",
    green: "bg-[var(--green-bright)] text-white hover:bg-[#009610]",
    outline: "border-2 border-[var(--green-bright)] text-[var(--green-bright)] hover:bg-[var(--green-bright)] hover:text-white",
    ghost: "text-white/80 hover:text-white hover:bg-white/10",
  }
  const sizes:any = { sm:"h-9 px-5 text-sm", md:"h-11 px-7 text-sm", lg:"h-12 px-8 text-base" }
  return <button className={cn(base, variants[variant], sizes[size], className)} {...props}>{children}</button>
}
