"use client"

import * as React from "react"
import { useScroll, useMotionValueEvent } from "framer-motion"
import { environmentRegistry, lightingPresets, atmospherePresets, terrainPresets } from "./registry"
import { AtmosphereManager } from "../../entities/atmosphere/AtmosphereManager"
import { SkyManager } from "../../entities/atmosphere/SkyManager"
import { GroundManager } from "../../entities/terrain/GroundManager"
import { WeatherManager } from "../../entities/atmosphere/WeatherManager"
import { LightingManager } from "../../entities/lighting/LightingManager"

import { LaunchPadScene } from "../../scenes/launch/LaunchPadScene"
import { DeepSpaceScene } from "../../scenes/orbit/DeepSpaceScene"
import { LandingZoneScene } from "../../scenes/landing/LandingZoneScene"
import { EngineeringLaboratoryScene } from "../../scenes/laboratory/EngineeringLaboratoryScene"
import { ExpeditionRouteScene } from "../../scenes/expedition/ExpeditionRouteScene"
import { getEnvironmentId } from "../timeline/TimelineManager"

export function WorldManager({ environmentId: initialEnvironmentId }: { environmentId: string | null }) {
  const [currentEnvId, setCurrentEnvId] = React.useState(initialEnvironmentId)
  const { scrollYProgress } = useScroll()

  // Safely trigger a single React re-render ONLY when the environment crosses the boundary.
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const targetEnvId = getEnvironmentId(latest)
    if (targetEnvId !== currentEnvId) {
      setCurrentEnvId(targetEnvId)
    }
  })

  // If no environment is active, unmount the entire world
  if (!currentEnvId) return null

  const envConfig = environmentRegistry[currentEnvId]
  if (!envConfig) {
    console.warn(`[WorldManager] Environment ID ${currentEnvId} not found in registry.`)
    return null
  }

  // Resolve presets safely
  const lighting = lightingPresets[envConfig.lighting]
  const atmosphere = atmospherePresets[envConfig.atmosphere]
  const terrain = terrainPresets[envConfig.terrain]

  return (
    <group name="world-engine">
      <LightingManager preset={lighting} />
      <SkyManager preset={atmosphere} />
      <AtmosphereManager preset={atmosphere} />
      <WeatherManager preset={atmosphere} />
      <GroundManager preset={terrain} />
      
      {/* Dynamic Scene Injection */}
      {currentEnvId === "launch-pad" && <LaunchPadScene />}
      {currentEnvId === "deep-space" && <DeepSpaceScene />}
      {currentEnvId === "landing-zone" && <LandingZoneScene />}
      {currentEnvId === "engineering-laboratory" && <EngineeringLaboratoryScene />}
      {currentEnvId === "expedition-route" && <ExpeditionRouteScene />}
      
      {/* 
        Future: <CameraManager preset={cameraPresets[envConfig.camera]} />
      */}
    </group>
  )
}
