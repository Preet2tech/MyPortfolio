"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface StickyNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: "yellow" | "pink" | "blue" | "green" | "orange"
  text: string
  author?: string
  date?: string
  rotate?: number
  width?: string | number
  height?: string | number
}

const colorMap = {
  yellow: {
    bg: "bg-[#FEFE9C] dark:bg-yellow-950/80",
    border: "border-yellow-200/50 dark:border-yellow-900/50",
    text: "text-yellow-900 dark:text-yellow-100",
    tag: "text-yellow-600/80 dark:text-yellow-400/80"
  },
  pink: {
    bg: "bg-[#FFC2EB] dark:bg-pink-950/80",
    border: "border-pink-200/50 dark:border-pink-900/50",
    text: "text-pink-900 dark:text-pink-100",
    tag: "text-pink-600/80 dark:text-pink-400/80"
  },
  blue: {
    bg: "bg-[#C2EBFF] dark:bg-blue-950/80",
    border: "border-blue-200/50 dark:border-blue-900/50",
    text: "text-blue-900 dark:text-blue-100",
    tag: "text-blue-600/80 dark:text-blue-400/80"
  },
  green: {
    bg: "bg-[#C2FFEB] dark:bg-emerald-950/80",
    border: "border-emerald-200/50 dark:border-emerald-900/50",
    text: "text-emerald-900 dark:text-emerald-100",
    tag: "text-emerald-600/80 dark:text-emerald-400/80"
  },
  orange: {
    bg: "bg-[#FFD2C2] dark:bg-orange-950/80",
    border: "border-orange-200/50 dark:border-orange-900/50",
    text: "text-orange-900 dark:text-orange-100",
    tag: "text-orange-600/80 dark:text-orange-400/80"
  }
}

export function StickyNote({
  color = "yellow",
  text,
  author,
  date,
  rotate = 0,
  width = 140,
  height = 140,
  className,
  ...props
}: StickyNoteProps) {
  const styles = colorMap[color] || colorMap.yellow

  return (
    <div
      className={cn(
        "p-4 border flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-sm pointer-events-none select-none transition-transform z-15",
        styles.bg,
        styles.border,
        className
      )}
      style={{
        width,
        height,
        transform: rotate ? `rotate(${rotate}deg)` : undefined
      }}
      aria-hidden="true"
      {...props}
    >
      <p className={cn("m-0 text-xs font-mono font-medium leading-relaxed leading-normal select-none overflow-hidden", styles.text)}>
        {text}
      </p>
      
      {(author || date) && (
        <div className={cn("flex justify-between items-center text-[8px] font-mono font-bold uppercase tracking-wider select-none mt-2", styles.tag)}>
          <span>{author || "Draft"}</span>
          <span>{date || "Pin ✓"}</span>
        </div>
      )}
    </div>
  )
}
