"use client"

import * as React from "react"
import type { AtmospherePreset } from "../../systems/world/registry"

export function SkyManager({ preset }: { preset?: AtmospherePreset }) {
  if (!preset) return null

  return (
    <group name="sky-system">
      {/* 
        Future: Mount Drei's <Sky /> or <Environment /> HDR maps here based on preset
        Example: <Sky sunPosition={[100, 20, 100]} turbidity={0.1} />
      */}
    </group>
  )
}
