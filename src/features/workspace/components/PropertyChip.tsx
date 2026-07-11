"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface PropertyChipProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string
  value?: string
  icon?: React.ReactNode
  variant?: "default" | "success" | "warning" | "info"
}

export function PropertyChip({
  label,
  value,
  icon,
  variant = "default",
  className,
  ...props
}: PropertyChipProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 border rounded px-2 py-0.5 text-[8px] font-mono font-medium tracking-tight select-none opacity-60 bg-background/60 shadow-sm z-10",
        variant === "default" && "border-border text-muted-foreground",
        variant === "success" && "border-emerald-500/20 text-emerald-600 bg-emerald-500/5",
        variant === "warning" && "border-amber-500/20 text-amber-600 bg-amber-500/5",
        variant === "info" && "border-blue-500/20 text-blue-600 bg-blue-500/5",
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {icon && <span className="shrink-0 size-2 flex items-center justify-center">{icon}</span>}
      <span className="uppercase tracking-wider">{label}</span>
      {value && (
        <span className="font-bold border-l border-current/25 pl-1.5 text-foreground dark:text-foreground/90">
          {value}
        </span>
      )}
    </div>
  )
}
