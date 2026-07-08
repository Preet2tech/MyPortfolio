import * as React from "react"
import { cn } from "@/lib/utils"
import { TimelineCard } from "./TimelineCard"
import { TimelineMarker } from "./TimelineMarker"
import type { ExperienceItem as ExperienceItemType } from "@/types/content.types"

interface TimelineItemProps extends React.HTMLAttributes<HTMLDivElement> {
  item: ExperienceItemType
  isLast?: boolean
}

export function TimelineItem({ item, isLast, className, ...props }: TimelineItemProps) {
  return (
    <div className={cn("relative flex gap-6 md:gap-8", className)} {...props}>
      <TimelineMarker className={cn(isLast && "pb-0", !isLast && "pb-12")} />
      
      <div className={cn("flex-1", isLast ? "" : "pb-12")}>
        <TimelineCard item={item} />
      </div>
    </div>
  )
}
