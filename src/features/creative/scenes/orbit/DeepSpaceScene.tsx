"use client"

import * as React from "react"
import { Stars } from "@react-three/drei"
import { Spacecraft } from "../../entities/spacecraft/Spacecraft"
import { Earth } from "../../entities/planets/Earth"
import { UnknownPlanet } from "../../entities/planets/UnknownPlanet"

export function DeepSpaceScene() {
  return (
    <group name="deep-space-scene">
      {/* 
        High-performance procedural starfield. 
        Provides parallax against the static black fog. 
      */}
      <Stars radius={300} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      
      {/* 
        The Spacecraft remains at the local origin [0,0,0] for this scene.
        In deep space, the camera orbits the ship, and the planets move around it,
        rather than translating the ship through infinite coordinate space.
      */}
      <Spacecraft />
      
      {/* Planets */}
      <Earth />
      <UnknownPlanet />
    </group>
  )
}
