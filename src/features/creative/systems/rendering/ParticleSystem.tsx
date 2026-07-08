"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { Object3D, InstancedMesh } from "three"
import { useScroll } from "framer-motion"
import { getExhaustDensity } from "../timeline/TimelineManager"

interface ParticleSystemProps {
  count?: number
}

export function ParticleSystem({ count = 200 }: ParticleSystemProps) {
  const meshRef = React.useRef<InstancedMesh>(null)
  const dummy = React.useMemo(() => new Object3D(), [])
  const { scrollYProgress } = useScroll()

  // Pre-calculate random offsets and velocities for each particle
  const [particles] = React.useState(() => {
    return Array.from({ length: count }, () => ({
      x: (Math.random() - 0.5) * 4,
      y: (Math.random() - 0.5) * 2,
      z: (Math.random() - 0.5) * 4,
      velocity: Math.random() * 0.2 + 0.1,
      scale: Math.random() * 2 + 1,
      offset: Math.random() * 100,
    }))
  })

  useFrame((state) => {
    if (!meshRef.current) return

    const time = state.clock.elapsedTime
    const progress = scrollYProgress.get()
    const density = getExhaustDensity(progress)

    // Skip heavy calculations if smoke is mathematically invisible
    if (density <= 0.01) {
      meshRef.current.visible = false
      return
    }
    meshRef.current.visible = true

    particles.forEach((particle, i) => {
      // Create downward flow and turbulent spread
      const t = time * particle.velocity + particle.offset
      
      const px = particle.x + Math.sin(t) * 2
      // Particles flow downwards rapidly relative to the engine
      const py = particle.y - ((t * 15) % 20) 
      const pz = particle.z + Math.cos(t) * 2

      // Scale dynamically based on scroll density timeline
      const currentScale = particle.scale * density

      dummy.position.set(px, py, pz)
      dummy.scale.set(currentScale, currentScale, currentScale)
      
      // Plumes expand as they fall
      const fallExpansion = Math.max(1, Math.abs(py) * 0.2)
      dummy.scale.multiplyScalar(fallExpansion)
      
      dummy.updateMatrix()
      meshRef.current!.setMatrixAt(i, dummy.matrix)
    })
    meshRef.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]} castShadow receiveShadow>
      <sphereGeometry args={[1, 8, 8]} />
      {/* 
        Using standard material with high roughness for volumetric smoke feel.
        Transparent = true allows edge blending, though we avoid heavy depth-sorting by keeping it basic. 
      */}
      <meshStandardMaterial 
        color="#dddddd" 
        roughness={1} 
        transparent 
        opacity={0.4} 
        depthWrite={false}
      />
    </instancedMesh>
  )
}
