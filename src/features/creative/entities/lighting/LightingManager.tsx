"use client"

import * as React from "react"
import type { LightingPreset } from "../../systems/world/registry"

export function LightingManager({ preset }: { preset?: LightingPreset }) {
  if (!preset) return null

  return (
    <group name="lighting-system">
      <ambientLight intensity={preset.ambientIntensity} />
      <directionalLight
        castShadow
        position={preset.directionalPosition}
        intensity={preset.directionalIntensity}
        shadow-mapSize={[1024, 1024]}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <hemisphereLight 
        intensity={preset.hemisphereIntensity} 
        color={preset.hemisphereColor}
        groundColor={preset.hemisphereGround}
      />
    </group>
  )
}
