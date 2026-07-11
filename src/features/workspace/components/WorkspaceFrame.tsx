"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface WorkspaceFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  isSelected?: boolean
  showBorders?: boolean
  dashed?: boolean
  children: React.ReactNode
}

export function WorkspaceFrame({
  title,
  isSelected = false,
  showBorders = true,
  dashed = false,
  children,
  className,
  ...props
}: WorkspaceFrameProps) {
  return (
    <div
      className={cn(
        "relative rounded-xl transition-all duration-200",
        showBorders && (dashed ? "border border-dashed border-border" : "border border-border/80"),
        isSelected && "border-primary bg-primary/[0.01] ring-1 ring-primary/30",
        className
      )}
      {...props}
    >
      {/* Figma Selection Corners */}
      {isSelected && (
        <>
          <div className="absolute -top-1 -left-1 w-2 h-2 border border-primary bg-background z-10" aria-hidden="true" />
          <div className="absolute -top-1 -right-1 w-2 h-2 border border-primary bg-background z-10" aria-hidden="true" />
          <div className="absolute -bottom-1 -left-1 w-2 h-2 border border-primary bg-background z-10" aria-hidden="true" />
          <div className="absolute -bottom-1 -right-1 w-2 h-2 border border-primary bg-background z-10" aria-hidden="true" />
        </>
      )}

      {/* Frame Header Label */}
      {title && (
        <div 
          className={cn(
            "absolute -top-6 left-2 font-mono text-[9px] font-bold px-1.5 py-0.5 rounded select-none uppercase tracking-wider z-10",
            isSelected 
              ? "bg-primary text-primary-foreground" 
              : "bg-muted border border-border text-muted-foreground"
          )}
          aria-hidden="true"
        >
          {title}
        </div>
      )}

      {children}
    </div>
  )
}
