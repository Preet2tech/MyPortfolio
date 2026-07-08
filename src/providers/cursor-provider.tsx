"use client"

import * as React from "react"

interface CursorContextType {
  cursorType: string
  setCursorType: (type: string) => void
}

const CursorContext = React.createContext<CursorContextType | undefined>(undefined)

export function CursorProvider({ children }: { children: React.ReactNode }) {
  const [cursorType, setCursorType] = React.useState("default")

  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  )
}

export function useCursor() {
  const context = React.useContext(CursorContext)
  if (context === undefined) {
    throw new Error("useCursor must be used within a CursorProvider")
  }
  return context
}
