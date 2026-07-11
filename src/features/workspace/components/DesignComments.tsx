"use client"

import * as React from "react"
import { m, useTransform, MotionValue } from "framer-motion"
import { useWorkspace } from "../providers/workspace-provider"
import { WORKSPACE_COMMENTS, DesignComment } from "../config/workspace-registry"

export function DesignComments() {
  const { mouseX, mouseY } = useWorkspace()

  return (
    <>
      {WORKSPACE_COMMENTS.map((comment) => (
        <CommentItem key={comment.id} comment={comment} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </>
  )
}

function CommentItem({ 
  comment, 
  mouseX, 
  mouseY 
}: { 
  comment: DesignComment
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  const xOffset = useTransform(mouseX, (val: number) => val * 100 * comment.depth)
  const yOffset = useTransform(mouseY, (val: number) => val * 100 * comment.depth)

  return (
    <m.div
      className="absolute z-20 pointer-events-none hidden md:block"
      style={{
        left: `${comment.x}%`,
        top: `${comment.y}%`,
        x: xOffset,
        y: yOffset,
        filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.04))"
      }}
      aria-hidden="true"
    >
      <div className="flex items-start gap-2 max-w-xs bg-background/70 backdrop-blur-[3px] border border-border/80 rounded-2xl rounded-tl-none p-3 select-none opacity-60">
        {/* Avatar badge */}
        <div 
          className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-mono font-bold text-white shrink-0"
          style={{ backgroundColor: comment.color }}
        >
          {comment.avatar}
        </div>
        
        {/* Text */}
        <div className="space-y-0.5">
          <div className="text-[9px] font-mono font-bold text-muted-foreground">
            {comment.author}
          </div>
          <p className="text-xs text-foreground/90 leading-tight m-0 font-medium font-sans">
            {comment.text}
          </p>
        </div>
      </div>
    </m.div>
  )
}
