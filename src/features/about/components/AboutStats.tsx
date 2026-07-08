import * as React from "react"
import { cn } from "@/lib/utils"

interface StatItem {
  label: string
  value: string
}

interface AboutStatsProps extends React.HTMLAttributes<HTMLDivElement> {
  stats: StatItem[]
}

export function AboutStats({ stats, className, ...props }: AboutStatsProps) {
  if (!stats || stats.length === 0) return null

  return (
    <div className={cn("grid grid-cols-2 gap-4 pt-6 border-t mt-8", className)} {...props}>
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col gap-1">
          <span className="text-3xl font-bold text-foreground tracking-tight">
            {stat.value}
          </span>
          <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  )
}
