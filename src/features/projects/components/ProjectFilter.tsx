"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ProjectFilterProps extends React.HTMLAttributes<HTMLDivElement> {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function ProjectFilter({ 
  categories, 
  activeCategory, 
  onCategoryChange, 
  className, 
  ...props 
}: ProjectFilterProps) {
  
  return (
    <div 
      className={cn(
        "flex flex-wrap items-center gap-2 md:gap-3",
        className
      )}
      {...props}
    >
      <button
        suppressHydrationWarning
        onClick={() => onCategoryChange("All")}
        className={cn(
          "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
          activeCategory === "All"
            ? "bg-primary text-primary-foreground shadow-sm"
            : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
        )}
      >
        All Works
      </button>
      
      {categories.map((category) => (
        <button
          key={category}
          suppressHydrationWarning
          onClick={() => onCategoryChange(category)}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
            activeCategory === category
              ? "bg-primary text-primary-foreground shadow-sm"
              : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
          )}
        >
          {category}
        </button>
      ))}
    </div>
  )
}
