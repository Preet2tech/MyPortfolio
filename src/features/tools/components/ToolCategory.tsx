import * as React from "react"
import { cn } from "@/lib/utils"
import { ToolGrid } from "./ToolGrid"
import type { Tool, ToolCategory as CategoryType } from "@/types/content.types"

interface ToolCategoryProps extends React.HTMLAttributes<HTMLDivElement> {
  category: CategoryType | string
  tools: Tool[]
}

export function ToolCategory({ category, tools, className, ...props }: ToolCategoryProps) {
  if (!tools || tools.length === 0) return null

  return (
    <div className={cn("flex flex-col gap-6 md:gap-8", className)} {...props}>
      <h3 className="text-2xl font-bold tracking-tight text-foreground border-b pb-4">
        {category}
      </h3>
      <ToolGrid tools={tools} />
    </div>
  )
}
