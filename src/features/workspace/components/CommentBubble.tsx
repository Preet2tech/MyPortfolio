"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

interface CommentBubbleProps extends React.HTMLAttributes<HTMLDivElement> {
  author: string
  avatar: string
  text: string
  color?: string
  variant?: "default" | "approval" | "question" | "reminder" | "review"
}

const variantLabelMap = {
  default: "Comment",
  approval: "Approval ✓",
  question: "Question ?",
  reminder: "Reminder ⏳",
  review: "Review 👀"
}

export function CommentBubble({
  author,
  avatar,
  text,
  color = "#18A0FB",
  variant = "default",
  className,
  ...props
}: CommentBubbleProps) {
  return (
    <div
      className={cn(
        "flex items-start gap-2.5 max-w-[200px] bg-background/80 backdrop-blur-[3px] border border-border/80 rounded-2xl rounded-tl-none p-3 shadow-[0_4px_12px_rgba(0,0,0,0.03)] pointer-events-none select-none opacity-70 z-20",
        className
      )}
      aria-hidden="true"
      {...props}
    >
      {/* Avatar Badge */}
      <div
        className="w-5.5 h-5.5 rounded-full flex items-center justify-center text-[9px] font-mono font-bold text-white shrink-0 shadow-sm"
        style={{ backgroundColor: color }}
      >
        {avatar}
      </div>

      {/* Message Info */}
      <div className="space-y-0.5 min-w-0">
        <div className="flex items-center gap-1.5 leading-none">
          <span className="text-[9px] font-mono font-bold text-foreground/80 truncate">
            {author}
          </span>
          <span 
            className="text-[7px] font-mono font-semibold px-1 py-0.2 rounded-[3px] shrink-0 uppercase tracking-wider select-none border border-current"
            style={{ color, backgroundColor: `${color}0A` }}
          >
            {variantLabelMap[variant]}
          </span>
        </div>
        <p className="text-[10.5px] text-muted-foreground leading-snug m-0 font-medium break-words font-sans">
          {text}
        </p>
      </div>
    </div>
  )
}
