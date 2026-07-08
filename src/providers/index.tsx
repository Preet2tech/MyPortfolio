"use client"

import * as React from "react"
import { ThemeProvider } from "./theme-provider"
import { MotionProvider } from "./motion-provider"
import { CursorProvider } from "./cursor-provider"
import { CreativeProvider } from "@/features/creative/providers/creative-provider"

import { CreativeLayout } from "@/features/creative/components/CreativeLayout"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="minimal"
      enableSystem={true}
      disableTransitionOnChange
      themes={["minimal", "creative"]}
    >
      <CreativeProvider>
        <CreativeLayout>
          <MotionProvider>
            <CursorProvider>
              {children}
            </CursorProvider>
          </MotionProvider>
        </CreativeLayout>
      </CreativeProvider>
    </ThemeProvider>
  )
}
