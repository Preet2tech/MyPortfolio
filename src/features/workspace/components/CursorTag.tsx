"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CursorTagProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  color: string
  status?: string
}

export function CursorTag({
  name,
  color,
  status,
  className,
  ...props
}: CursorTagProps) {
  return (
    <div
      className={cn("flex flex-col items-start gap-0.5 pointer-events-none select-none z-30", className)}
      aria-hidden="true"
      {...props}
    >
      <svg
        width="12"
        height="16"
        viewBox="0 0 14 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.15))" }}
      >
        <path
          d="M0.5 0V17.5L4.5 13.5H12L0.5 0Z"
          fill={color}
          stroke="white"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </svg>
      <div 
        className="px-1.5 py-0.5 rounded-[3px] text-[8px] font-mono font-medium text-white shadow-sm flex items-center gap-1 whitespace-nowrap"
        style={{ backgroundColor: color }}
      >
        {status && <span className="w-1 h-1 bg-white rounded-full animate-pulse" />}
        <span>{name}</span>
      </div>
    </div>
  )
}
