"use client"

import * as React from "react"
import { ThemeProvider } from "./theme-provider"
import { MotionProvider } from "./motion-provider"
import { CursorProvider } from "./cursor-provider"
import { WorkspaceProvider } from "@/features/workspace/providers/workspace-provider"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange
    >
      <WorkspaceProvider>
        <MotionProvider>
          <CursorProvider>
            {children}
          </CursorProvider>
        </MotionProvider>
      </WorkspaceProvider>
    </ThemeProvider>
  )
}
