import * as React from "react"
import { cn } from "@/lib/utils"
import { ToolCard } from "./ToolCard"
import type { Tool } from "@/types/content.types"

interface ToolGridProps extends React.HTMLAttributes<HTMLDivElement> {
  tools: Tool[]
}

export function ToolGrid({ tools, className, ...props }: ToolGridProps) {
  if (!tools || tools.length === 0) return null

  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
        className
      )}
      {...props}
    >
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  )
}
