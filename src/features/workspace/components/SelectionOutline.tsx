"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface SelectionOutlineProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string
  isSelected?: boolean
  isHovered?: boolean
  children?: React.ReactNode
}

export function SelectionOutline({
  label,
  isSelected = true,
  isHovered = false,
  children,
  className,
  ...props
}: SelectionOutlineProps) {
  return (
    <div
      className={cn(
        "relative rounded transition-all duration-150",
        isSelected && "border border-primary bg-primary/[0.01]",
        isHovered && !isSelected && "border border-primary/40 bg-primary/[0.005]",
        className
      )}
      {...props}
    >
      {/* Figma Selection Corners */}
      {isSelected && (
        <>
          <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border border-primary bg-background z-20" aria-hidden="true" />
          <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border border-primary bg-background z-20" aria-hidden="true" />
          <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border border-primary bg-background z-20" aria-hidden="true" />
          <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border border-primary bg-background z-20" aria-hidden="true" />
        </>
      )}

      {/* Frame / Layer Metadata Tag */}
      {label && (isSelected || isHovered) && (
        <div 
          className={cn(
            "absolute -top-5 left-0 font-mono text-[8px] font-bold px-1 py-0.5 rounded select-none uppercase tracking-wider z-20",
            isSelected 
              ? "bg-primary text-primary-foreground" 
              : "bg-primary/20 text-primary border border-primary/30"
          )}
          aria-hidden="true"
        >
          {label}
        </div>
      )}

      {children}
    </div>
  )
}
