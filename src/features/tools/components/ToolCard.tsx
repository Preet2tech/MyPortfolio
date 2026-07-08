import * as React from "react"
import { cn } from "@/lib/utils"
import { ToolIcon } from "./ToolIcon"
import type { Tool } from "@/types/content.types"

interface ToolCardProps extends React.HTMLAttributes<HTMLDivElement> {
  tool: Tool
}

export function ToolCard({ tool, className, ...props }: ToolCardProps) {
  return (
    <div 
      className={cn(
        "group relative flex flex-col gap-4 p-5 md:p-6 rounded-2xl bg-card border border-border text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 h-full",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted/50 border transition-transform duration-300 group-hover:scale-105">
          <ToolIcon name={tool.iconName} className="h-6 w-6 text-foreground" />
        </div>
        {tool.experienceLevel && (
          <span className="text-[10px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-full bg-primary/10 text-primary">
            {tool.experienceLevel}
          </span>
        )}
      </div>
      
      <div className="flex flex-col gap-1.5 flex-grow mt-2">
        <h3 className="text-lg font-semibold tracking-tight text-foreground flex items-center gap-2">
          {tool.name}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {tool.description}
        </p>
      </div>
    </div>
  )
}
