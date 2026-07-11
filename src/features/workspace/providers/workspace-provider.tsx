"use client"

import * as React from "react"
import { useMotionValue, useSpring, MotionValue } from "framer-motion"

interface WorkspaceContextProps {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  isReducedMotion: boolean
}

const WorkspaceContext = React.createContext<WorkspaceContextProps | undefined>(undefined)

export function WorkspaceProvider({ children }: { children: React.ReactNode }) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Configure a spring to smooth out mouse movement lag for subtle parallax drift
  const springConfig = { damping: 45, stiffness: 120, mass: 0.6 }
  const smoothMouseX = useSpring(mouseX, springConfig)
  const smoothMouseY = useSpring(mouseY, springConfig)

  const [isReducedMotion, setIsReducedMotion] = React.useState(false)

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    const handleChange = () => {
      setIsReducedMotion(mediaQuery.matches)
    }

    const timer = setTimeout(() => {
      setIsReducedMotion(mediaQuery.matches)
    }, 0)
    
    mediaQuery.addEventListener("change", handleChange)

    // Track mouse coordinates normalized relative to window center (-0.5 to 0.5)
    const handleMouseMove = (event: MouseEvent) => {
      if (mediaQuery.matches) return
      
      const x = (event.clientX / window.innerWidth) - 0.5
      const y = (event.clientY / window.innerHeight) - 0.5
      
      mouseX.set(x)
      mouseY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      clearTimeout(timer)
      mediaQuery.removeEventListener("change", handleChange)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [mouseX, mouseY])

  return (
    <WorkspaceContext.Provider 
      value={{ 
        mouseX: smoothMouseX, 
        mouseY: smoothMouseY, 
        isReducedMotion 
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const context = React.useContext(WorkspaceContext)
  if (!context) {
    throw new Error("useWorkspace must be used within a WorkspaceProvider")
  }
  return context
}
