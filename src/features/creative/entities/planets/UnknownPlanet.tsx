"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "framer-motion"
import { MathUtils, MeshStandardMaterial } from "three"
import { getPlanetOpacity } from "../../systems/timeline/TimelineManager"

export function UnknownPlanet() {
  const materialRef = React.useRef<MeshStandardMaterial>(null)
  const { scrollYProgress } = useScroll()

  useFrame((state, delta) => {
    if (!materialRef.current) return
    
    // Fade in based on scroll progress (e.g. 80% to 100%)
    const progress = scrollYProgress.get()
    const targetOpacity = getPlanetOpacity(progress)
    
    materialRef.current.opacity = MathUtils.lerp(materialRef.current.opacity, targetOpacity, delta * 5)
  })

  return (
    <group name="unknown-planet" position={[0, 4000, -8000]}>
      {/* Distant Planet */}
      <mesh receiveShadow>
        <sphereGeometry args={[800, 64, 64]} />
        <meshStandardMaterial 
          ref={materialRef}
          color="#1c1c1c" // Dark, mysterious rocky surface
          roughness={0.9}
          metalness={0.2}
          transparent
          opacity={0} // Starts invisible
        />
      </mesh>
    </group>
  )
}
