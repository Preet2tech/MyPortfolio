"use client"

import * as React from "react"
import type { TerrainPreset } from "../../systems/world/registry"

export function GroundManager({ preset }: { preset?: TerrainPreset }) {
  if (!preset) return null

  return (
    <group name="ground-system">
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100, 32, 32]} />
        <meshStandardMaterial 
          color={preset.color}
          roughness={preset.roughness}
        />
      </mesh>
    </group>
  )
}
