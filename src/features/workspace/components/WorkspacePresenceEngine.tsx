"use client"

import * as React from "react"
import { m, AnimatePresence } from "framer-motion"
import { useWorkspace } from "../providers/workspace-provider"

interface CursorState {
  id: string
  name: string
  color: string
  x: number // percentage
  y: number // percentage
  scale: number
  activeComment: string | null
  status?: string
}

// Coordinate quads to keep cursors strictly in outer margins (preventing text overlap)
const quads = {
  emma: { minX: 4, maxX: 18, minY: 6, maxY: 25 },     // Left-Top
  alex: { minX: 82, maxX: 95, minY: 6, maxY: 25 },    // Right-Top
  noah: { minX: 4, maxX: 18, minY: 65, maxY: 88 },    // Left-Bottom
  sophia: { minX: 82, maxX: 95, minY: 60, maxY: 85 }, // Right-Bottom
  mia: { minX: 60, maxX: 78, minY: 80, maxY: 94 }     // Bottom-Center
}

const COMMENTS_PRESET = [
  "Looks clean",
  "Nice spacing",
  "Approved",
  "Ship it",
  "Typography ✓",
  "Review complete",
  "Perfect gap specs"
]

const HIGHLIGHT_ELEMENTS = [
  "about-frame",
  "graphic-design",
  "brand-identity",
  "social-media",
  "poster-design",
  "photo-editing",
  "ui-design",
  "figma",
  "vscode",
  "python",
  "sql",
  "horizon-branding",
  "stellar-ui",
  "social-campaign-x",
  "cyber-art",
  "eco-poster"
]

export function WorkspacePresenceEngine() {
  const { isReducedMotion, setActiveHighlightId } = useWorkspace()
  const [windowWidth, setWindowWidth] = React.useState(1200)

  // Initialize 5 cursors staggered in their respective quads
  const [cursors, setCursors] = React.useState<CursorState[]>([
    { id: "emma", name: "Emma (UX)", color: "#FF7262", x: 10, y: 15, scale: 1, activeComment: null, status: "Designing" },
    { id: "alex", name: "Alex (Dev)", color: "#0ACF83", x: 88, y: 12, scale: 1, activeComment: null },
    { id: "noah", name: "Noah (PM)", color: "#18A0FB", x: 8, y: 75, scale: 1, activeComment: null, status: "Reviewing" },
    { id: "sophia", name: "Sophia", color: "#A259FF", x: 90, y: 68, scale: 1, activeComment: null },
    { id: "mia", name: "Mia", color: "#F2C94C", x: 68, y: 85, scale: 1, activeComment: null }
  ])

  // Track window resizing asynchronously to respect responsive guidelines
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setWindowWidth(window.innerWidth)
    }, 0)
    
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Viewport checks
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isMobile = windowWidth < 768

  // 1. Orchester cursor movement logic
  React.useEffect(() => {
    if (isReducedMotion || isMobile) return

    const intervalTime = isTablet ? 14000 : 8000 // Slow down frequencies on tablet, freeze on mobile

    const interval = setInterval(() => {
      setCursors(prev =>
        prev.map(c => {
          const rand = Math.random()
          const bounds = quads[c.id as keyof typeof quads] || { minX: 10, maxX: 90, minY: 10, maxY: 90 }

          // 65% chance to move cursor
          if (rand < 0.65) {
            const nextX = bounds.minX + Math.random() * (bounds.maxX - bounds.minX)
            const nextY = bounds.minY + Math.random() * (bounds.maxY - bounds.minY)
            
            // Decouple comment fadeout triggers when moving
            return {
              ...c,
              x: nextX,
              y: nextY,
              scale: 1,
              activeComment: null
            }
          }
          // 20% chance to simulate click event
          else if (rand >= 0.65 && rand < 0.85) {
            return { ...c, scale: 0.85 } // Shrinks cursor scale momentarily
          }
          // Remaining 15%: Idle
          return c
        })
      )

      // Normalize click scales back to standard size after 150ms
      setTimeout(() => {
        setCursors(prev => prev.map(c => (c.scale === 0.85 ? { ...c, scale: 1 } : c)))
      }, 150)

    }, intervalTime)

    return () => clearInterval(interval)
  }, [isReducedMotion, isMobile, isTablet])

  // 2. Orchestrate comments generation
  React.useEffect(() => {
    if (isReducedMotion || isMobile) return

    const interval = setInterval(() => {
      // Pick a random cursor
      const targetIndex = Math.floor(Math.random() * cursors.length)
      
      setCursors(prev => {
        // Enforce max 3 simultaneously active comment bubbles
        const activeCount = prev.filter(c => c.activeComment !== null).length
        if (activeCount >= 3) return prev

        const target = prev[targetIndex]
        if (target.activeComment) return prev // Skip if already commenting

        const comment = COMMENTS_PRESET[Math.floor(Math.random() * COMMENTS_PRESET.length)]
        
        return prev.map((c, idx) => 
          idx === targetIndex ? { ...c, activeComment: comment } : c
        )
      })

      // Remove comment bubble after 6 seconds
      setTimeout(() => {
        setCursors(prev =>
          prev.map((c, idx) => (idx === targetIndex ? { ...c, activeComment: null } : c))
        )
      }, 6000)

    }, 15000)

    return () => clearInterval(interval)
  }, [cursors.length, isReducedMotion, isMobile])

  // 3. Orchestrate component selection highlights
  React.useEffect(() => {
    if (isReducedMotion || isMobile) return

    const interval = setInterval(() => {
      // Randomly select target component element ID
      const targetId = HIGHLIGHT_ELEMENTS[Math.floor(Math.random() * HIGHLIGHT_ELEMENTS.length)]
      
      setActiveHighlightId(targetId)

      // Clear outline selections after 4.5 seconds to fade outline cleanly
      setTimeout(() => {
        setActiveHighlightId(null)
      }, 4500)

    }, 18000)

    return () => clearInterval(interval)
  }, [isReducedMotion, isMobile, setActiveHighlightId])

  if (isMobile) return null // Hide presence layers on mobile to preserve layout simplicity

  return (
    <>
      {cursors.map(cursor => (
        <m.div
          key={cursor.id}
          className="absolute z-40 pointer-events-none"
          aria-hidden="true"
          style={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`
          }}
          animate={{
            left: `${cursor.x}%`,
            top: `${cursor.y}%`,
            scale: cursor.scale
          }}
          transition={{
            type: "spring",
            damping: 35,
            stiffness: 70,
            mass: 0.9
          }}
        >
          <div className="flex flex-col items-start gap-1 relative">
            
            {/* Reusable cursor pointer */}
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
                fill={cursor.color}
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>

            {/* Name & Status tag */}
            <div 
              className="px-1.5 py-0.5 rounded-[3px] text-[8px] font-mono font-medium text-white shadow-sm flex items-center gap-1 whitespace-nowrap"
              style={{ backgroundColor: cursor.color }}
            >
              <span className="w-1 h-1 bg-white rounded-full animate-pulse" />
              <span>{cursor.name}</span>
              {cursor.status && (
                <span className="opacity-60 border-l border-white/30 pl-1 text-[7px] uppercase font-bold">
                  {cursor.status}
                </span>
              )}
            </div>

            {/* Comment Bubble overlay appearing next to cursor */}
            <AnimatePresence>
              {cursor.activeComment && (
                <m.div
                  className="absolute left-6 top-6 bg-background border border-border/80 rounded-2xl rounded-tl-none p-2.5 shadow-xl opacity-90 z-50 origin-top-left"
                  initial={{ opacity: 0, scale: 0.85, y: -5 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -5 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <div className="flex items-center gap-1.5">
                    <div 
                      className="w-3.5 h-3.5 rounded-full flex items-center justify-center text-[7px] font-mono font-bold text-white shrink-0"
                      style={{ backgroundColor: cursor.color }}
                    >
                      {cursor.name[0]}
                    </div>
                    <div className="text-[10px] font-sans text-foreground/80 font-semibold leading-none">
                      {cursor.activeComment}
                    </div>
                  </div>
                </m.div>
              )}
            </AnimatePresence>

          </div>
        </m.div>
      ))}
    </>
  )
}
