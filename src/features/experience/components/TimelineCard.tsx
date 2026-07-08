import * as React from "react"
import { cn } from "@/lib/utils"
import type { ExperienceItem } from "@/types/content.types"

interface TimelineCardProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ExperienceItem
}

export function TimelineCard({ item, className, ...props }: TimelineCardProps) {
  return (
    <div 
      className={cn(
        "group flex flex-col gap-3 p-6 rounded-2xl bg-card border border-border text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30",
        className
      )}
      {...props}
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div className="flex flex-col">
          <h3 className="text-xl font-semibold tracking-tight text-foreground">
            {item.role}
          </h3>
          <p className="text-base font-medium text-primary mt-1">
            {item.company}
          </p>
        </div>
        <span className="text-sm font-medium text-muted-foreground whitespace-nowrap bg-muted/50 px-3 py-1 rounded-full w-fit">
          {item.endDate}
        </span>
      </div>
      
      <p className="text-muted-foreground leading-relaxed mt-2">
        {item.description}
      </p>
    </div>
  )
}
