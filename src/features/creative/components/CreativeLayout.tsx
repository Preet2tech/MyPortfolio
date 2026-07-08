"use client"

import * as React from "react"
import { useCreativeMode } from "../providers/creative-provider"
import dynamic from "next/dynamic"
import { Leva } from "leva"

// Dynamically import the heavy Canvas component so it NEVER bundles in SSG
// or affects the Minimal Mode's initial load time.
const CreativeCanvas = dynamic(
  () => import("../systems/rendering/CreativeCanvas").then((mod) => mod.CreativeCanvas),
  { ssr: false }
)

export function CreativeLayout({ children }: { children: React.ReactNode }) {
  const { isCreativeMode } = useCreativeMode()
  const isDev = process.env.NODE_ENV === "development"

  return (
    <>
      {/* If creative mode is active, mount the Heavy 3D layer behind the UI */}
      {isCreativeMode && (
        <>
          <CreativeCanvas />
          {isDev && <Leva collapsed />}
        </>
      )}

      {/* The main DOM UI (Minimal Portfolio or Creative HUD) */}
      <div className={isCreativeMode ? "relative z-10" : ""}>
        {children}
      </div>
    </>
  )
}
