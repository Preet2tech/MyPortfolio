"use client"

import * as React from "react"
import { m, useTransform } from "framer-motion"
import { useWorkspace } from "../providers/workspace-provider"
import { cn } from "@/lib/utils"

interface StickyNoteProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart"> {
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
  const { mouseX, mouseY, isReducedMotion } = useWorkspace()
  const styles = colorMap[color] || colorMap.yellow

  // Map pointer spring values to soft translations (magnetic depth feedback)
  const transX = useTransform(mouseX, [-0.5, 0.5], [-3, 3])
  const transY = useTransform(mouseY, [-0.5, 0.5], [-3, 3])

  return (
    <m.div
      className={cn(
        "p-4 border flex flex-col justify-between shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-sm select-none z-15 pointer-events-auto cursor-pointer transition-all duration-200 hover:shadow-[0_12px_24px_rgba(0,0,0,0.08)]",
        styles.bg,
        styles.border,
        className
      )}
      style={{
        width,
        height,
        x: isReducedMotion ? 0 : transX,
        y: isReducedMotion ? 0 : transY
      }}
      animate={{
        rotate: isReducedMotion ? rotate : [rotate, rotate + 1.2, rotate - 1.2, rotate]
      }}
      whileHover={isReducedMotion ? {} : {
        y: -3,
        rotate: 0,
        scale: 1.02
      }}
      transition={{
        duration: 12,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      aria-hidden="true"
      {...props}
    >
      <p className={cn("m-0 text-xs font-mono font-medium leading-normal select-none overflow-hidden", styles.text)}>
        {text}
      </p>
      
      {(author || date) && (
        <div className={cn("flex justify-between items-center text-[8px] font-mono font-bold uppercase tracking-wider select-none mt-2", styles.tag)}>
          <span>{author || "Draft"}</span>
          <span>{date || "Pin ✓"}</span>
        </div>
      )}
    </m.div>
  )
}
