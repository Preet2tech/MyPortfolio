import * as React from "react"
import { cn } from "@/lib/utils"
import { TimelineItem } from "./TimelineItem"
import type { ExperienceItem as ExperienceItemType } from "@/types/content.types"

interface TimelineProps extends React.HTMLAttributes<HTMLDivElement> {
  items: ExperienceItemType[]
}

export function Timeline({ items, className, ...props }: TimelineProps) {
  if (!items || items.length === 0) return null

  return (
    <div className={cn("flex flex-col w-full max-w-4xl mx-auto", className)} {...props}>
      {items.map((item, index) => (
        <TimelineItem 
          key={item.id} 
          item={item} 
          isLast={index === items.length - 1} 
        />
      ))}
    </div>
  )
}
