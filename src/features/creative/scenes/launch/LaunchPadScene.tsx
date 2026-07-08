"use client"

import * as React from "react"
import { Spacecraft } from "../../entities/spacecraft/Spacecraft"
import { LaunchTower } from "../../entities/structures/LaunchTower"

export function LaunchPadScene() {
  return (
    <group name="launch-pad-scene">
      {/* 
        The GroundManager handles the concrete floor mathematically via the registry,
        so this scene component strictly focuses on placing the unique architectural assets.
      */}
      <Spacecraft />
      <LaunchTower />
    </group>
  )
}
