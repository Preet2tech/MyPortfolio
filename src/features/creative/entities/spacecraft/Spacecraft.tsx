"use client"

import * as React from "react"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "framer-motion"
import { Group, PointLight, MathUtils } from "three"
import { getSpacecraftAltitude, getEngineGlowIntensity } from "../../systems/timeline/TimelineManager"
import { ParticleSystem } from "../../systems/rendering/ParticleSystem"

export function Spacecraft() {
  const groupRef = React.useRef<Group>(null)
  const engineLightRef = React.useRef<PointLight>(null)
  const navLightLeftRef = React.useRef<PointLight>(null)
  const navLightRightRef = React.useRef<PointLight>(null)
  const { scrollYProgress } = useScroll()

  // Drive animation directly from the DOM scroll progress
  useFrame((state, delta) => {
    if (!groupRef.current) return
    
    const progress = scrollYProgress.get()
    
    // 1. Calculate and apply Altitude Translation
    const targetY = getSpacecraftAltitude(progress)
    // Smooth the ascent mathematically to prevent rigid snapping if the user scrolls abruptly
    groupRef.current.position.y = MathUtils.lerp(groupRef.current.position.y, targetY, delta * 5)
    
    // 1b. Deep space cruising rotation (only rotates when high up)
    if (progress > 0.4 && progress < 0.7) {
      groupRef.current.rotation.z += delta * 0.05
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, 0.1, delta)
    } else {
      // Parked or Launch pad (locked upright)
      groupRef.current.rotation.z = MathUtils.lerp(groupRef.current.rotation.z, 0, delta * 2)
      groupRef.current.rotation.x = MathUtils.lerp(groupRef.current.rotation.x, 0, delta * 2)
    }

    // 2. Calculate and apply Engine Glow intensity
    if (engineLightRef.current) {
      const targetIntensity = getEngineGlowIntensity(progress)
      engineLightRef.current.intensity = MathUtils.lerp(engineLightRef.current.intensity, targetIntensity, delta * 10)
    }

    // 3. Blinking Navigation Lights
    if (navLightLeftRef.current && navLightRightRef.current) {
      // 1Hz blink frequency
      const blink = (state.clock.elapsedTime % 1.0) < 0.1 ? 1 : 0
      navLightLeftRef.current.intensity = blink * 0.8
      navLightRightRef.current.intensity = blink * 0.8
    }
  })

  return (
    <group ref={groupRef} name="spacecraft" position={[0, 0, 0]}>
      {/* Dynamic Engine Glow */}
      <pointLight 
        ref={engineLightRef}
        position={[0, -2, 0]} 
        color="#ff7700" 
        intensity={0} 
        distance={50} 
        decay={2}
      />
      
      {/* Volumetric Engine Exhaust attached to the base */}
      <group position={[0, 0, 0]}>
        <ParticleSystem count={150} />
      </group>

      {/* Navigation Lights (Blinking) */}
      <pointLight ref={navLightLeftRef} position={[1.6, 25, 0]} color="#ff0000" intensity={0} distance={5} decay={2} />
      <pointLight ref={navLightRightRef} position={[-1.6, 25, 0]} color="#00ff00" intensity={0} distance={5} decay={2} />

      {/* Engine Bell */}
      <mesh position={[0, 1, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 2, 2, 32]} />
        <meshStandardMaterial color="#222222" roughness={0.8} metalness={0.5} />
      </mesh>

      {/* Main Booster Stage */}
      <mesh position={[0, 10, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 16, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>
      
      {/* Stage Separator Ring */}
      <mesh position={[0, 18.25, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.52, 1.52, 0.5, 32]} />
        <meshStandardMaterial color="#111111" roughness={0.5} metalness={0.8} />
      </mesh>

      {/* Second Stage */}
      <mesh position={[0, 22.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 8, 32]} />
        <meshStandardMaterial color="#ffffff" roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Payload Fairing Base */}
      <mesh position={[0, 27.5, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[1.5, 1.5, 2, 32]} />
        <meshStandardMaterial color="#f4f4f4" roughness={0.3} metalness={0.1} />
      </mesh>

      {/* Payload Fairing Nosecone */}
      <mesh position={[0, 31, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.1, 1.5, 5, 32]} />
        <meshStandardMaterial color="#f4f4f4" roughness={0.3} metalness={0.1} />
      </mesh>
    </group>
  )
}
