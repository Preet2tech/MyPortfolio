"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface MeasurementGuideProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: "horizontal" | "vertical"
  label: string
  length?: string | number // CSS width/height
  dashed?: boolean
}

export function MeasurementGuide({
  type = "horizontal",
  label,
  length = "100%",
  dashed = true,
  className,
  ...props
}: MeasurementGuideProps) {
  const isHorizontal = type === "horizontal"

  return (
    <div
      className={cn(
        "flex items-center justify-center pointer-events-none select-none opacity-60 z-10",
        isHorizontal ? "flex-col w-full h-8" : "flex-row h-full w-8",
        className
      )}
      style={{
        width: isHorizontal ? length : undefined,
        height: !isHorizontal ? length : undefined
      }}
      aria-hidden="true"
      {...props}
    >
      {/* Starting cap */}
      <div className={cn("bg-red-400 dark:bg-red-500", isHorizontal ? "w-px h-2.5" : "h-px w-2.5")} />

      {/* Spacing Vector Line */}
      <div
        className={cn(
          "flex-grow flex items-center justify-center",
          isHorizontal ? "w-full flex-row" : "h-full flex-col"
        )}
      >
        <div 
          className={cn(
            "flex-grow bg-red-400 dark:bg-red-500", 
            isHorizontal ? "h-px w-full" : "w-px h-full",
            dashed && (isHorizontal ? "border-t border-dashed" : "border-l border-dashed")
          )} 
        />
        
        {/* Pixel Value / Spacing Tag */}
        <div className="mx-1.5 my-1.5 bg-red-500/10 border border-red-500/25 text-red-500 text-[8px] font-mono font-bold px-1.5 py-0.5 rounded shadow-sm shrink-0 whitespace-nowrap">
          {label}
        </div>
        
        <div 
          className={cn(
            "flex-grow bg-red-400 dark:bg-red-500", 
            isHorizontal ? "h-px w-full" : "w-px h-full",
            dashed && (isHorizontal ? "border-t border-dashed" : "border-l border-dashed")
          )} 
        />
      </div>

      {/* Ending cap */}
      <div className={cn("bg-red-400 dark:bg-red-500", isHorizontal ? "w-px h-2.5" : "h-px w-2.5")} />
    </div>
  )
}
