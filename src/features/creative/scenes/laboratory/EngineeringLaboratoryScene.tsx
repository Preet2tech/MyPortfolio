"use client"

import * as React from "react"
import { Spacecraft } from "../../entities/spacecraft/Spacecraft"

export function EngineeringLaboratoryScene() {
  return (
    <group name="engineering-laboratory-scene">
      {/* 
        The GroundManager handles the flat concrete terrain via the registry.
        This scene focuses on architectural assets, racks, and the spacecraft.
      */}
      
      {/* Main Engineering Facility Building */}
      <group position={[0, 0, -40]}>
        {/* Foundation / Platform */}
        <mesh position={[0, 1, 0]} castShadow receiveShadow>
          <boxGeometry args={[120, 2, 40]} />
          <meshStandardMaterial color="#444444" roughness={0.8} />
        </mesh>
        
        {/* Glass & Steel Maintenance Bay */}
        <mesh position={[0, 16, -10]} castShadow receiveShadow>
          <boxGeometry args={[100, 30, 20]} />
          <meshStandardMaterial color="#111111" metalness={0.9} roughness={0.1} transparent opacity={0.6} />
        </mesh>
        
        {/* Support Pillars */}
        {[-40, -20, 0, 20, 40].map((x, idx) => (
          <mesh key={`pillar-${idx}`} position={[x, 16, 0]} castShadow>
            <cylinderGeometry args={[1, 1, 30]} />
            <meshStandardMaterial color="#aaaaaa" metalness={0.8} roughness={0.4} />
          </mesh>
        ))}
        
        {/* Facility Interior Lights */}
        <pointLight position={[0, 20, -10]} color="#ffffff" intensity={2.0} distance={100} />
        <pointLight position={[-30, 20, -10]} color="#ffffff" intensity={1.5} distance={100} />
        <pointLight position={[30, 20, -10]} color="#ffffff" intensity={1.5} distance={100} />
      </group>

      {/* Solar Array (Left Flank) */}
      <group position={[-50, 0, 0]}>
        {[0, 10, 20].map((z, idx) => (
          <group key={`solar-${idx}`} position={[0, 4, z]}>
            <mesh position={[0, -2, 0]} castShadow>
              <cylinderGeometry args={[0.2, 0.2, 4]} />
              <meshStandardMaterial color="#555555" />
            </mesh>
            <mesh rotation={[-Math.PI / 4, 0, 0]} castShadow receiveShadow>
              <boxGeometry args={[15, 0.2, 8]} />
              <meshStandardMaterial color="#001133" metalness={0.9} roughness={0.1} />
            </mesh>
          </group>
        ))}
      </group>

      {/* Equipment Racks & Testing Platform (Right Flank) */}
      <group position={[40, 0, 10]}>
        <mesh position={[0, 0.5, 0]} receiveShadow>
          <boxGeometry args={[30, 1, 30]} />
          <meshStandardMaterial color="#333333" roughness={0.9} />
        </mesh>
        
        {/* Racks */}
        {[-10, 0, 10].map((x, idx) => (
          <group key={`rack-${idx}`} position={[x, 3, -10]}>
            <mesh castShadow receiveShadow>
              <boxGeometry args={[6, 6, 4]} />
              <meshStandardMaterial color="#666666" metalness={0.5} roughness={0.5} />
            </mesh>
            <pointLight position={[0, 1, 3]} color="#00ffff" intensity={0.5} distance={5} />
            {/* Blinking server lights */}
            <mesh position={[2, 2, 2.1]}>
              <boxGeometry args={[0.2, 0.2, 0.1]} />
              <meshStandardMaterial color="#00ff00" emissive="#00ff00" emissiveIntensity={0.8} />
            </mesh>
          </group>
        ))}

        {/* Small Rover Placeholder */}
        <group position={[0, 2, 5]}>
          <mesh castShadow>
            <boxGeometry args={[4, 2, 6]} />
            <meshStandardMaterial color="#cccccc" metalness={0.7} roughness={0.3} />
          </mesh>
          <mesh position={[2.5, -1, 2]} rotation={[0, 0, Math.PI/2]} castShadow><cylinderGeometry args={[1, 1, 0.5]} /><meshStandardMaterial color="#111" /></mesh>
          <mesh position={[-2.5, -1, 2]} rotation={[0, 0, Math.PI/2]} castShadow><cylinderGeometry args={[1, 1, 0.5]} /><meshStandardMaterial color="#111" /></mesh>
          <mesh position={[2.5, -1, -2]} rotation={[0, 0, Math.PI/2]} castShadow><cylinderGeometry args={[1, 1, 0.5]} /><meshStandardMaterial color="#111" /></mesh>
          <mesh position={[-2.5, -1, -2]} rotation={[0, 0, Math.PI/2]} castShadow><cylinderGeometry args={[1, 1, 0.5]} /><meshStandardMaterial color="#111" /></mesh>
        </group>
      </group>

      {/* Exterior Work Area / Landing Pad markings */}
      <mesh position={[0, 0.1, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[15, 16, 32]} />
        <meshStandardMaterial color="#ffffff" opacity={0.3} transparent />
      </mesh>
      
      {/* 
        The Spacecraft remains at the local origin [0,0,0].
        During transition (0.6 -> 0.7 scroll), the TimelineManager will drive a parabolic hop.
      */}
      <Spacecraft />
      
    </group>
  )
}
