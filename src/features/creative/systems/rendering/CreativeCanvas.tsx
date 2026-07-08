"use client"

import * as React from "react"
import { Canvas } from "@react-three/fiber"
import { PerformanceMonitor } from "./PerformanceMonitor"
import { RendererManager } from "./RendererManager"

import { WorldManager } from "../world/WorldManager"

import { CameraController } from "../camera/CameraController"
import { DebugMode } from "./DebugMode"

interface CreativeCanvasProps {
  children?: React.ReactNode
}

export function CreativeCanvas({ children }: CreativeCanvasProps) {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: false }}
        dpr={[1, 2]} // Start with adaptive 1-2 DPR, PerformanceMonitor will handle throttling
        style={{ width: "100%", height: "100%" }}
      >
        <PerformanceMonitor />
        <RendererManager>
          {/* Default environment for foundational tests */}
          <WorldManager environmentId="launch-pad" />
          
          {/* Scroll-driven cinematic camera engine */}
          <CameraController />

          <DebugMode />

          {children}
        </RendererManager>
      </Canvas>
    </div>
  )
}
