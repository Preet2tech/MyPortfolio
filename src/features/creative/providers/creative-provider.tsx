"use client"

import * as React from "react"
import type { CreativePhase } from "../store/creative-state"
import { useTheme } from "next-themes"

interface CreativeContextValue {
  isCreativeMode: boolean
  phase: CreativePhase
  toggleCreativeMode: () => void
  setPhase: (phase: CreativePhase) => void
}

const CreativeContext = React.createContext<CreativeContextValue | undefined>(undefined)

export function CreativeProvider({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme()
  const [phase, setPhase] = React.useState<CreativePhase>("LOADING")
  
  // To avoid hydration mismatch, track mounted state if needed, 
  // but since theme is handled by next-themes it might be fine.
  const [mounted, setMounted] = React.useState(false)
  // eslint-disable-next-line react-hooks/set-state-in-effect
  React.useEffect(() => setMounted(true), [])

  const isCreativeMode = mounted && theme === "creative"

  const toggleCreativeMode = React.useCallback(() => {
    const nextTheme = theme === "creative" ? "minimal" : "creative"
    setTheme(nextTheme)
    
    // When activating, reset phase to LOADING to kick off the asset pipeline
    if (nextTheme === "creative") {
      setPhase("LOADING")
    }
  }, [theme, setTheme])

  return (
    <CreativeContext.Provider 
      value={{ 
        isCreativeMode, 
        phase, 
        toggleCreativeMode, 
        setPhase 
      }}
    >
      {children}
    </CreativeContext.Provider>
  )
}

export function useCreativeMode() {
  const context = React.useContext(CreativeContext)
  if (context === undefined) {
    throw new Error("useCreativeMode must be used within a CreativeProvider")
  }
  return context
}
