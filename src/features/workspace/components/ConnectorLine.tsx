"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface ConnectorLineProps extends React.SVGProps<SVGSVGElement> {
  type?: "straight" | "curved" | "angled"
  styleType?: "solid" | "dashed" | "dotted"
  direction?: "right" | "left" | "down" | "up"
  width?: number | string
  height?: number | string
  color?: string
}

export function ConnectorLine({
  type = "straight",
  styleType = "dashed",
  width = 120,
  height = 40,
  color = "currentColor",
  className,
  ...props
}: ConnectorLineProps) {
  const isDashed = styleType === "dashed"
  const isDotted = styleType === "dotted"

  // Generate SVG path code based on connector type
  const getPath = () => {
    if (type === "curved") {
      return "M 5,5 Q 60,35 115,5" // S-curve/Bezier path shape
    }
    if (type === "angled") {
      return "M 5,5 L 5,35 L 115,35" // Right-angle path shape
    }
    // Default straight
    return "M 5,5 L 115,5"
  };

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 120 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("pointer-events-none opacity-40 text-muted-foreground z-10", className)}
      aria-hidden="true"
      {...props}
    >
      <defs>
        <marker
          id="arrowhead"
          viewBox="0 0 10 10"
          refX="6"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path d="M 0 1.5 L 7 5 L 0 8.5 z" fill={color} />
        </marker>
      </defs>

      <path
        d={getPath()}
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray={isDashed ? "4,4" : isDotted ? "1,3" : undefined}
        markerEnd="url(#arrowhead)"
      />
    </svg>
  )
}
