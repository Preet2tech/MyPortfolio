"use client"

import * as React from "react"
import { AdaptiveDpr, AdaptiveEvents, PerformanceMonitor as DreiPerformanceMonitor } from "@react-three/drei"
import { useThree } from "@react-three/fiber"

export function PerformanceMonitor() {
  const setDpr = useThree((state) => state.setDpr)

  return (
    <>
      <DreiPerformanceMonitor 
        onIncline={() => setDpr(2)} 
        onDecline={() => setDpr(1)} 
      />
      {/* Automatically downscales rendering resolution based on performance metrics */}
      <AdaptiveDpr pixelated />
      
      {/* Throttle event raycasting when the scene is moving aggressively */}
      <AdaptiveEvents />
    </>
  )
}
