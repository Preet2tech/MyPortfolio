"use client"

import * as React from "react"
import { useFrame, useThree } from "@react-three/fiber"
import { MathUtils, Vector3, PerspectiveCamera } from "three"
import { getActiveTimelinePhase, getSpacecraftAltitude } from "../timeline/TimelineManager"
import { cameraPresets } from "./CameraRegistry"
import { getViewportScaleFactor } from "./ViewportSystem"
import { useScroll } from "framer-motion"

export function CameraController() {
  const { camera, size } = useThree()
  const { scrollYProgress } = useScroll()
  
  // Create stable instances of vectors to avoid garbage collection loops inside useFrame
  const targetPosition = React.useMemo(() => new Vector3(), [])
  const targetLookAt = React.useMemo(() => new Vector3(), [])
  const currentLookAt = React.useMemo(() => new Vector3(), [])

  useFrame((state, delta) => {
    // 1. Get the abstract normalized scroll progress (0 to 1) directly from DOM
    const progress = scrollYProgress.get()

    // 2. Map progress to the current abstract story phase
    const timelinePhase = getActiveTimelinePhase(progress)

    // 3. Look up the cinematic camera preset for this phase
    const preset = cameraPresets[timelinePhase.cameraPresetId]
    if (!preset) return

    // 4. Calculate responsiveness
    const scaleFactor = getViewportScaleFactor(size.width)
    
    // 5. Track dynamic spacecraft altitude for cinematic tracking shots
    const currentAltitude = getSpacecraftAltitude(progress)

    // 6. Calculate ideal target vectors with subtle cinematic breathing
    const time = state.clock.elapsedTime
    const breatheX = Math.sin(time * 0.5) * 0.2
    const breatheY = Math.cos(time * 0.4) * 0.2
    
    // During launch/orbit phases, shift the camera up to follow the rocket
    const cameraYOffset = (timelinePhase.phase === "LAUNCH" || timelinePhase.phase === "TRAVEL" || timelinePhase.phase === "APPROACH") 
      ? currentAltitude * 0.8 // Camera follows slightly below the rocket for heroic angle
      : 0
      
    targetPosition.set(
      (preset.position[0] + breatheX) * scaleFactor, 
      (preset.position[1] + breatheY + cameraYOffset) * scaleFactor, 
      preset.position[2] * scaleFactor
    )
    
    // LookAt breathes very slightly and tracks the rocket's exact altitude
    targetLookAt.set(
      preset.target[0] + breatheX * 0.1,
      preset.target[1] + breatheY * 0.1 + currentAltitude,
      preset.target[2]
    )

    // 7. Smoothly interpolate the actual Three.js Camera towards the ideal targets
    const lerpFactor = preset.movementSpeed * delta * 60 // normalized for 60fps
    camera.position.lerp(targetPosition, lerpFactor)
    currentLookAt.lerp(targetLookAt, lerpFactor)
    
    // 7. Apply rotation lock to the lookAt target
    camera.lookAt(currentLookAt)
    
    // 8. Handle FOV changes seamlessly
    const perspectiveCamera = camera as PerspectiveCamera
    if (perspectiveCamera.fov !== undefined) {
      // eslint-disable-next-line react-hooks/immutability
      perspectiveCamera.fov = MathUtils.damp(perspectiveCamera.fov, preset.fov, preset.movementSpeed * 10, delta)
      camera.updateProjectionMatrix()
    }
  })

  return null
}
