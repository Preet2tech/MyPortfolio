"use client"

import * as React from "react"
import * as THREE from "three"
import { useFrame } from "@react-three/fiber"
import { useScroll } from "framer-motion"
import { Spacecraft } from "../../entities/spacecraft/Spacecraft"

export function ExpeditionRouteScene() {
  const terrainRef = React.useRef<THREE.Group>(null)
  
  // Tie terrain movement directly to global scroll progress to simulate forward travel
  const { scrollYProgress } = useScroll()

  useFrame(() => {
    if (!terrainRef.current) return
    const scroll = scrollYProgress.get()
    
    // Only move terrain if we are in or near the expedition route segment (0.70 - 0.85)
    // We'll normalize the movement so the terrain slides backwards underneath the camera/spacecraft
    if (scroll > 0.65 && scroll < 0.90) {
      // Normalize progress between 0.70 and 0.85
      const progress = (scroll - 0.70) / 0.15 
      
      // Move terrain along Z axis. Spacecraft stays at origin.
      // E.g., moving terrain from Z = 0 to Z = 200
      terrainRef.current.position.z = progress * 200
    }
  })

  // Procedural rock generation helper
  const generateRocks = (count: number, zOffset: number) => {
    return Array.from({ length: count }).map((_, i) => {
      const x = (Math.random() - 0.5) * 80
      const z = (Math.random() - 0.5) * 400 - zOffset
      const scale = Math.random() * 5 + 1
      const rot = [Math.random() * Math.PI, Math.random() * Math.PI, 0] as [number, number, number]
      
      // Keep clear of the center path (x between -10 and 10)
      const adjustedX = Math.abs(x) < 10 ? (x > 0 ? x + 15 : x - 15) : x

      return (
        <mesh key={i} position={[adjustedX, scale / 2, z]} rotation={rot} castShadow receiveShadow>
          <dodecahedronGeometry args={[scale, 1]} />
          <meshStandardMaterial color="#5c3317" roughness={0.9} />
        </mesh>
      )
    })
  }

  // Precompute rocks so they don't regenerate on re-renders
  const [rocks] = React.useState(() => generateRocks(150, 100))

  return (
    <group name="expedition-route-scene">
      {/* Moving Terrain Group */}
      <group ref={terrainRef}>
        {/* Canyon Floor Extension */}
        <mesh position={[0, -0.1, -100]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <planeGeometry args={[200, 600, 32, 32]} />
          <meshStandardMaterial color="#3a1f0d" roughness={1} />
        </mesh>

        {/* Procedural Rocks and Canyon Walls */}
        {rocks}
        
        {/* Canyon Walls Left & Right */}
        <mesh position={[-60, 20, -100]} receiveShadow castShadow>
          <boxGeometry args={[40, 60, 600]} />
          <meshStandardMaterial color="#4a2610" roughness={1.0} />
        </mesh>
        <mesh position={[60, 20, -100]} receiveShadow castShadow>
          <boxGeometry args={[40, 60, 600]} />
          <meshStandardMaterial color="#4a2610" roughness={1.0} />
        </mesh>

        {/* Research Markers / Milestones */}
        {[50, 150, 250, 350].map((zDist, idx) => (
          <group key={`marker-${idx}`} position={[-15, 0, -zDist]}>
            <mesh position={[0, 4, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.2, 8]} />
              <meshStandardMaterial color="#aaaaaa" metalness={0.8} />
            </mesh>
            <mesh position={[0, 8, 0]}>
              <sphereGeometry args={[0.8, 16, 16]} />
              <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={2} />
            </mesh>
            <pointLight position={[0, 8, 0]} color="#00ffff" intensity={2} distance={20} />
          </group>
        ))}
      </group>

      {/* The Spacecraft remains at the local origin [0,y,0].
          Altitude is driven by getSpacecraftAltitude(scroll), which hovers it at y=2 during this phase. */}
      <Spacecraft />
    </group>
  )
}
