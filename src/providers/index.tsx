"use client"

import * as React from "react"
import { ThemeProvider } from "./theme-provider"
import { MotionProvider } from "./motion-provider"
import { CursorProvider } from "./cursor-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <MotionProvider>
        <CursorProvider>
          {children}
        </CursorProvider>
      </MotionProvider>
    </ThemeProvider>
  )
}
