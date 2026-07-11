"use client"

import * as React from "react"
import { m, useTransform, MotionValue } from "framer-motion"
import { useWorkspace } from "../providers/workspace-provider"
import { WORKSPACE_SHAPES, WhiteboardElement } from "../config/workspace-registry"

export function FloatingElements() {
  const { mouseX, mouseY } = useWorkspace()

  return (
    <>
      {WORKSPACE_SHAPES.map((shape) => (
        <FloatingShapeItem key={shape.id} shape={shape} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </>
  )
}

function FloatingShapeItem({ 
  shape, 
  mouseX, 
  mouseY 
}: { 
  shape: WhiteboardElement
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
}) {
  // Calculate parallax offsets based on mouse positions and element depth
  const xOffset = useTransform(mouseX, (val: number) => val * 120 * shape.depth)
  const yOffset = useTransform(mouseY, (val: number) => val * 120 * shape.depth)

  if (shape.type === "guide") {
    return (
      <m.div
        className="absolute inset-y-0 w-px border-l border-dashed border-muted/30 pointer-events-none hidden lg:block"
        style={{
          left: `${shape.x}%`,
          x: xOffset
        }}
        aria-hidden="true"
      />
    )
  }

  if (shape.type === "sticky") {
    // Random subtle tilt for sticky note realism
    const rotation = shape.id === "s2" ? -2 : 3

    return (
      <m.div
        className="absolute z-15 pointer-events-none hidden md:block"
        style={{
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          x: xOffset,
          y: yOffset,
          width: shape.width,
          height: shape.height,
          rotate: rotation,
          boxShadow: "0 6px 16px rgba(0,0,0,0.06)"
        }}
        aria-hidden="true"
      >
        <div 
          className="w-full h-full p-4 flex flex-col justify-between border text-[11px] font-mono leading-relaxed text-foreground/80 overflow-hidden"
          style={{ 
            backgroundColor: shape.color || "#ffffff",
            borderColor: "rgba(0,0,0,0.06)"
          }}
        >
          <p className="m-0 select-none">{shape.text}</p>
          <div className="flex justify-between items-center text-[9px] text-muted-foreground select-none font-bold uppercase mt-2">
            <span>Sticky Note</span>
            <span>Pin ✓</span>
          </div>
        </div>
      </m.div>
    )
  }

  if (shape.type === "frame") {
    return (
      <m.div
        className="absolute z-10 pointer-events-none border-2 border-dashed border-primary/10 rounded-lg hidden xl:block"
        style={{
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          x: xOffset,
          y: yOffset,
          width: shape.width,
          height: shape.height
        }}
        aria-hidden="true"
      >
        <div className="absolute -top-6 left-0 bg-primary/10 border border-primary/20 text-primary text-[9px] font-mono font-bold px-1.5 py-0.5 rounded select-none">
          {shape.label}
        </div>
      </m.div>
    )
  }

  if (shape.type === "shape") {
    // Represents a blue selection overlay box in design software
    return (
      <m.div
        className="absolute z-10 pointer-events-none border border-primary/45 bg-primary/2 hidden lg:block"
        style={{
          left: `${shape.x}%`,
          top: `${shape.y}%`,
          x: xOffset,
          y: yOffset,
          width: shape.width,
          height: shape.height
        }}
        aria-hidden="true"
      >
        {/* Resize Handles (little squares in corners) */}
        <div className="absolute -top-1 -left-1 w-2.5 h-2.5 border border-primary bg-background" />
        <div className="absolute -top-1 -right-1 w-2.5 h-2.5 border border-primary bg-background" />
        <div className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border border-primary bg-background" />
        <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border border-primary bg-background" />
        
        <div className="absolute -top-5 left-0 bg-primary text-background text-[9px] font-mono font-bold px-1 py-0.5 rounded select-none">
          {shape.label}
        </div>
      </m.div>
    )
  }

  return null
}
