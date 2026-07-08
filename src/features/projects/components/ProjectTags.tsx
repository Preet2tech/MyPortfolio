import * as React from "react"
import { cn } from "@/lib/utils"

interface ProjectTagsProps extends React.HTMLAttributes<HTMLDivElement> {
  tags?: string[]
}

export function ProjectTags({ tags, className, ...props }: ProjectTagsProps) {
  if (!tags || tags.length === 0) return null

  return (
    <div className={cn("flex flex-wrap gap-2", className)} {...props}>
      {tags.map((tag) => (
        <span 
          key={tag} 
          className="inline-flex items-center px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground text-[10px] font-semibold uppercase tracking-widest"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}
