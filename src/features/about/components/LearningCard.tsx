import * as React from "react"
import { cn } from "@/lib/utils"
import { Lightbulb } from "lucide-react"

interface LearningCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: string
}

export function LearningCard({ item, className, ...props }: LearningCardProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 p-4 rounded-xl border border-primary/20 bg-primary/5 text-card-foreground shadow-sm transition-colors hover:bg-primary/10",
        className
      )}
      {...props}
    >
      <Lightbulb className="h-5 w-5 text-primary shrink-0" />
      <span className="font-medium text-sm md:text-base">{item}</span>
    </div>
  )
}
