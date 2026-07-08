"use client"

import * as React from "react"
import { Stats } from "@react-three/drei"
import { useControls } from "leva"
import { useScroll } from "framer-motion"
import { getActiveTimelinePhase } from "../timeline/TimelineManager"
import { useFrame } from "@react-three/fiber"

export function DebugMode() {
  const isDev = process.env.NODE_ENV === "development"
  const { scrollYProgress } = useScroll()
  const [phaseInfo, setPhaseInfo] = React.useState("")

  // Update leva panel strictly for development visualization
  useFrame(() => {
    if (!isDev) return
    const p = scrollYProgress.get()
    const phase = getActiveTimelinePhase(p)
    setPhaseInfo(`Progress: ${(p * 100).toFixed(1)}% | Phase: ${phase.phase} | Camera: ${phase.cameraPresetId}`)
  })

  useControls("Cinematic Camera Engine", () => ({
    timeline: { value: phaseInfo, editable: false },
  }), [phaseInfo])

  if (!isDev) return null

  return (
    <>
      <Stats className="!absolute !right-0 !left-auto" />
    </>
  )
}
