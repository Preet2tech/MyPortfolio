"use client"

import * as React from "react"

export function LaunchTower() {
  return (
    <group name="launch-tower" position={[-6, 0, 0]}>
      {/* Main Strongback Tower */}
      <mesh position={[0, 18, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 36, 4]} />
        <meshStandardMaterial color="#444444" roughness={0.9} metalness={0.2} />
      </mesh>

      {/* Crew Access Arm (retracted slightly) */}
      <mesh position={[2.5, 29, 0]} castShadow receiveShadow>
        <boxGeometry args={[6, 1.5, 2]} />
        <meshStandardMaterial color="#555555" roughness={0.8} metalness={0.4} />
      </mesh>

      {/* Fueling Umbilical Base */}
      <mesh position={[2, 12, 0]} castShadow receiveShadow>
        <boxGeometry args={[4, 1, 1]} />
        <meshStandardMaterial color="#333333" roughness={0.7} />
      </mesh>
      
      {/* Lightning Mast on top */}
      <mesh position={[0, 41, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.2, 10, 8]} />
        <meshStandardMaterial color="#888888" roughness={0.4} metalness={0.8} />
      </mesh>

      {/* Base Platform / Flame Trench Surround */}
      <mesh position={[3, 1, 0]} castShadow receiveShadow>
        <boxGeometry args={[12, 2, 10]} />
        <meshStandardMaterial color="#2a2a2a" roughness={0.9} />
      </mesh>
    </group>
  )
}
