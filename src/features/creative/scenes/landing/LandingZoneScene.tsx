"use client"

import * as React from "react"
import { Spacecraft } from "../../entities/spacecraft/Spacecraft"
import { ParticleSystem } from "../../systems/rendering/ParticleSystem"

export function LandingZoneScene() {
  return (
    <group name="landing-zone-scene">
      {/* Background Mountains */}
      <group position={[0, -2, -150]}>
        <mesh position={[-60, 20, 0]} castShadow receiveShadow>
          <coneGeometry args={[40, 50, 4]} />
          <meshStandardMaterial color="#4a3525" roughness={0.9} />
        </mesh>
        <mesh position={[40, 15, -20]} castShadow receiveShadow>
          <coneGeometry args={[30, 40, 5]} />
          <meshStandardMaterial color="#3a2515" roughness={0.95} />
        </mesh>
      </group>

      {/* Landing Platform & Ground Decals */}
      <group position={[0, 0.05, 0]}>
        {/* Burn/Scorched marks from engine */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <circleGeometry args={[8, 32]} />
          <meshStandardMaterial color="#111111" roughness={1} opacity={0.6} transparent />
        </mesh>
        
        {/* Landing Ring */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
          <ringGeometry args={[6, 7, 32]} />
          <meshStandardMaterial color="#ff7700" emissive="#ff7700" emissiveIntensity={0.2} transparent opacity={0.5} />
        </mesh>
      </group>

      {/* Scientific Exploration Markers */}
      <group position={[15, 0, 10]}>
        <mesh position={[0, 1, 0]} castShadow>
          <cylinderGeometry args={[0.1, 0.1, 2]} />
          <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.2} />
        </mesh>
        <pointLight position={[0, 2, 0]} color="#00aaff" intensity={0.5} distance={10} />
      </group>

      <group position={[-12, 0, -5]}>
        <mesh position={[0, 0.5, 0]} castShadow>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#e0e0e0" metalness={0.5} roughness={0.5} />
        </mesh>
        <pointLight position={[0, 1.5, 0]} color="#00ff00" intensity={0.3} distance={5} />
      </group>

      <Spacecraft />
      
      {/* Subtle blowing dust across the landing pad */}
      <group position={[0, 0, 0]}>
        <ParticleSystem count={300} />
      </group>
      
      {/* Tiny heat shimmer near engine (represented by dense floating particles) */}
      <group position={[0, 1, 0]}>
        <ParticleSystem count={50} />
      </group>
    </group>
  )
}
