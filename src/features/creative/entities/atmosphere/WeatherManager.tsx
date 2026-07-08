"use client"

import * as React from "react"
import type { AtmospherePreset } from "../../systems/world/registry"

export function WeatherManager({ preset }: { preset?: AtmospherePreset }) {
  if (!preset) return null

  return (
    <group name="weather-system">
      {/* 
        Future: InstancedMesh particle emitters for dust/snow based on preset parameters
      */}
    </group>
  )
}
