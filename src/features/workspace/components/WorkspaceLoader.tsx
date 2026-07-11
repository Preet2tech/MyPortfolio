"use client"

import * as React from "react"
import { m, AnimatePresence } from "framer-motion"
import { Loader2 } from "lucide-react"

const LOADING_STATUSES = [
  "Preparing workspace...",
  "Loading design assets...",
  "Organizing layers...",
  "Almost ready..."
]

export function WorkspaceLoader() {
  const [statusIndex, setStatusIndex] = React.useState(0)
  const [isVisible, setIsVisible] = React.useState(true)

  // Cycle through loader status messages
  React.useEffect(() => {
    if (statusIndex >= LOADING_STATUSES.length - 1) return

    const interval = setTimeout(() => {
      setStatusIndex(prev => prev + 1)
    }, 900)

    return () => clearTimeout(interval)
  }, [statusIndex])

  // Fade out loader and restore document scrolling
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      document.body.style.overflow = ""
    }, 3800)

    document.body.style.overflow = "hidden" // Lock page scrolling on mount

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = ""
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <m.div
          className="fixed inset-0 z-50 bg-background flex flex-col items-center justify-center p-6 select-none pointer-events-auto"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.45, 0.15, 1.0] }}
          aria-live="polite"
          aria-busy="true"
        >
          {/* Subtle warm loading grid overlay matching whiteboard */}
          <div 
            className="absolute inset-0 opacity-[0.035] pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="space-y-6 text-center max-w-sm relative z-10">
            {/* Spinning load icon */}
            <div className="flex justify-center">
              <Loader2 className="w-6 h-6 text-foreground/45 animate-spin" />
            </div>

            <div className="space-y-2">
              <h1 className="text-xs font-mono font-bold tracking-widest uppercase text-foreground/80 leading-none">
                Preet Patel // Workspace
              </h1>
              
              {/* Transitioning status note */}
              <AnimatePresence mode="wait">
                <m.p
                  key={statusIndex}
                  className="text-[10px] font-mono text-muted-foreground/60 leading-none h-4 uppercase tracking-wider"
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                >
                  {LOADING_STATUSES[statusIndex]}
                </m.p>
              </AnimatePresence>
            </div>

            {/* Premium minimalist progress bar */}
            <div className="w-32 h-[1px] bg-border/40 mx-auto rounded overflow-hidden relative">
              <m.div 
                className="absolute left-0 top-0 h-full bg-foreground/60"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 3.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </m.div>
      )}
    </AnimatePresence>
  )
}
