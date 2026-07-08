"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "framer-motion"
import { Group, MathUtils, Vector3 } from "three"
import { getEarthScale, getEarthPosition } from "../../systems/timeline/TimelineManager"

const targetScaleVec = new Vector3()

export function Earth() {
  const groupRef = React.useRef<Group>(null)
  const { scrollYProgress } = useScroll()

  useFrame((state, delta) => {
    if (!groupRef.current) return
    
    // 1. Slow, majestic rotation
    groupRef.current.rotation.y += delta * 0.02
    
    // 2. Shrink and fall away based on scroll
    const progress = scrollYProgress.get()
    const targetScale = getEarthScale(progress)
    const targetY = getEarthPosition(progress)
    
    // We update a temp vector to avoid memory allocation every frame
    targetScaleVec.set(targetScale, targetScale, targetScale)
    groupRef.current.scale.lerp(targetScaleVec, delta * 5)
    groupRef.current.position.y = MathUtils.lerp(groupRef.current.position.y, targetY, delta * 5)
  })

  return (
    <group ref={groupRef} name="earth">
      {/* Base Ocean/Landmass Layer */}
      <mesh receiveShadow>
        <sphereGeometry args={[100, 64, 64]} />
        <meshStandardMaterial 
          color="#0b1b36" // Deep ocean blue
          roughness={0.4}
          metalness={0.1}
        />
      </mesh>
      
      {/* Cloud Layer (Slightly larger, slightly transparent) */}
      <mesh receiveShadow>
        <sphereGeometry args={[100.5, 64, 64]} />
        <meshStandardMaterial 
          color="#ffffff"
          roughness={1.0}
          transparent
          opacity={0.3} // A basic stand-in for procedural cloud noise
        />
      </mesh>

      {/* Atmospheric Halo Layer */}
      <mesh>
        <sphereGeometry args={[102, 64, 64]} />
        <meshPhysicalMaterial 
          color="#4287f5"
          transparent
          opacity={0.15}
          roughness={1}
          transmission={0.9} // Glass-like scattering
          thickness={5}
        />
      </mesh>
    </group>
  )
}
