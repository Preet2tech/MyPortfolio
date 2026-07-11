"use client"

import * as React from "react"
import { m } from "framer-motion"
import { WORKSPACE_COLLABORATORS } from "../config/workspace-registry"

export function CollaboratorCursors() {
  // SVG cursor arrow definition
  const CursorArrow = ({ color }: { color: string }) => (
    <svg
      width="14"
      height="19"
      viewBox="0 0 14 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ filter: "drop-shadow(1px 2px 2px rgba(0,0,0,0.15))" }}
    >
      <path
        d="M0.5 0V17.5L4.5 13.5H12L0.5 0Z"
        fill={color}
        stroke="white"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  )

  // Predefined waypoint paths that stay in margins to avoid content overlap
  const paths: Record<string, { x: number[]; y: number[] }> = {
    c1: { x: [12, 18, 18, 8, 8, 12], y: [15, 25, 25, 10, 10, 15] },
    c2: { x: [85, 85, 78, 88, 88, 85], y: [12, 12, 28, 20, 20, 12] },
    c3: { x: [8, 16, 16, 6, 12, 8], y: [72, 85, 85, 78, 78, 72] },
    c4: { x: [92, 84, 84, 94, 94, 92], y: [78, 65, 65, 82, 82, 78] },
    c5: { x: [72, 72, 85, 76, 70, 72], y: [85, 85, 92, 88, 88, 85] },
    c6: { x: [22, 12, 12, 28, 16, 22], y: [88, 76, 76, 92, 92, 88] }
  }

  return (
    <>
      {WORKSPACE_COLLABORATORS.map((collab) => {
        const path = paths[collab.id] || { x: [collab.startX], y: [collab.startY] }
        
        const duration = collab.duration
        const delay = collab.delay

        return (
          <m.div
            key={collab.id}
            className="absolute z-40 pointer-events-none hidden sm:block"
            aria-hidden="true"
            style={{
              left: `${collab.startX}%`,
              top: `${collab.startY}%`
            }}
            animate={{
              left: path.x.map(val => `${val}%`),
              top: path.y.map(val => `${val}%`)
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
              repeatType: "mirror"
            }}
          >
            <div className="flex flex-col items-start gap-1">
              <CursorArrow color={collab.color} />
              
              {/* Name Tag */}
              <div 
                className="px-2 py-0.5 rounded text-[10px] font-mono font-medium text-white shadow-sm flex items-center gap-1.5 whitespace-nowrap"
                style={{ backgroundColor: collab.color }}
              >
                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                {collab.name}
              </div>
            </div>
          </m.div>
        )
      })}
    </>
  )
}
