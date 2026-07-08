"use client"

import * as React from "react"
import { useThree } from "@react-three/fiber"
import * as THREE from "three"

interface RendererManagerProps {
  children: React.ReactNode
}

export function RendererManager({ children }: RendererManagerProps) {
  const { gl, scene } = useThree()

  React.useEffect(() => {
    // Configure Physically Based Rendering (PBR) settings
    // eslint-disable-next-line react-hooks/immutability
    gl.outputColorSpace = THREE.SRGBColorSpace
    gl.toneMapping = THREE.ACESFilmicToneMapping
    gl.toneMappingExposure = 1.0
    // eslint-disable-next-line react-hooks/immutability
    gl.shadowMap.enabled = true
    gl.shadowMap.type = THREE.PCFSoftShadowMap

    // Cleanup memory when component unmounts
    return () => {
      scene.clear()
      gl.dispose()
    }
  }, [gl, scene])

  return <React.Suspense fallback={null}>{children}</React.Suspense>
}
