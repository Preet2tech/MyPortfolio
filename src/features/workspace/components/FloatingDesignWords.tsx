"use client"

import * as React from "react"
import { m, useTransform, MotionValue } from "framer-motion"
import { useWorkspace } from "../providers/workspace-provider"
import { WORKSPACE_WORDS, DesignWord } from "../config/workspace-registry"
import { cn } from "@/lib/utils"

export function FloatingDesignWords() {
  const { mouseX, mouseY } = useWorkspace()

  return (
    <>
      {WORKSPACE_WORDS.map((word) => (
        <WordItem key={word.id} word={word} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </>
  )
}

function WordItem({ 
  word, 
  mouseX, 
  mouseY 
}: { 
  word: DesignWord
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  const xOffset = useTransform(mouseX, (val: number) => val * 80 * word.depth)
  const yOffset = useTransform(mouseY, (val: number) => val * 80 * word.depth)

  return (
    <m.div
      className="absolute z-5 pointer-events-none select-none opacity-30 whitespace-nowrap"
      style={{
        left: `${word.x}%`,
        top: `${word.y}%`,
        x: xOffset,
        y: yOffset
      }}
      aria-hidden="true"
    >
      <span 
        className={cn(
          "font-mono text-muted-foreground font-medium uppercase tracking-wider",
          word.size === "xs" && "text-[9px]",
          word.size === "sm" && "text-xs",
          word.size === "md" && "text-sm text-foreground/80 font-bold"
        )}
      >
        {word.text}
      </span>
    </m.div>
  )
}
