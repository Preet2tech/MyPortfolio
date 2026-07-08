"use client"

import * as React from "react"
import { Fog } from "three"
import { useThree } from "@react-three/fiber"
import type { AtmospherePreset } from "../../systems/world/registry"

export function AtmosphereManager({ preset }: { preset?: AtmospherePreset }) {
  const { scene } = useThree()

  React.useEffect(() => {
    if (!preset) return

    // Apply volumetric fog abstraction
    // eslint-disable-next-line react-hooks/immutability
    scene.fog = new Fog(preset.fogColor, preset.fogNear, preset.fogFar)

    return () => {
      scene.fog = null
    }
  }, [preset, scene])

  if (!preset) return null

  return (
    <group name="atmosphere-system">
      {/* Cloud and particulate systems would be mounted here in future sprints using preset.cloudOpacity */}
    </group>
  )
}
