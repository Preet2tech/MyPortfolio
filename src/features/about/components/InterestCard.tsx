import * as React from "react"
import { cn } from "@/lib/utils"
import { CheckCircle2 } from "lucide-react"

interface InterestCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: string
}

export function InterestCard({ item, className, ...props }: InterestCardProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 p-4 rounded-xl border bg-card text-card-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground",
        className
      )}
      {...props}
    >
      <CheckCircle2 className="h-5 w-5 text-primary shrink-0" />
      <span className="font-medium text-sm md:text-base">{item}</span>
    </div>
  )
}
