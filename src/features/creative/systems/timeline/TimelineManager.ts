export type TimelinePhase = 
  | "MISSION_START"
  | "LAUNCH"
  | "TRAVEL"
  | "APPROACH"
  | "LANDING"
  | "EXPLORATION"
  | "MISSION_COMPLETE"

export interface TimelineConfig {
  phase: TimelinePhase
  startScroll: number // 0 to 1
  endScroll: number // 0 to 1
  cameraPresetId: string
}

export const storyTimeline: TimelineConfig[] = [
  { phase: "MISSION_START", startScroll: 0.0, endScroll: 0.1, cameraPresetId: "hero" },
  { phase: "LAUNCH", startScroll: 0.1, endScroll: 0.3, cameraPresetId: "launch" },
  { phase: "TRAVEL", startScroll: 0.3, endScroll: 0.5, cameraPresetId: "orbit" },
  { phase: "APPROACH", startScroll: 0.5, endScroll: 0.7, cameraPresetId: "research" },
  { phase: "LANDING", startScroll: 0.7, endScroll: 0.9, cameraPresetId: "landing" },
  { phase: "EXPLORATION", startScroll: 0.9, endScroll: 0.95, cameraPresetId: "archive" },
  { phase: "MISSION_COMPLETE", startScroll: 0.95, endScroll: 1.0, cameraPresetId: "communication" },
]

export function getActiveTimelinePhase(scrollProgress: number): TimelineConfig {
  // Clamp progress
  const progress = Math.max(0, Math.min(1, scrollProgress))
  
  // Find the active phase
  for (const config of storyTimeline) {
    if (progress >= config.startScroll && progress <= config.endScroll) {
      return config
    }
  }
  
  // Fallback to last phase if exactly 1.0 boundary case misses
  return storyTimeline[storyTimeline.length - 1]
}

/**
 * Returns the spacecraft altitude (Y position) based on scroll progress.
 * The rocket stays grounded until LAUNCH (scroll > 0.1), then accelerates upwards.
 */
export function getSpacecraftAltitude(scrollProgress: number): number {
  if (scrollProgress <= 0.14) return 0
  
  // Return to surface level (parked) during LANDING (0.28 - 0.42), LAB (0.56 - 0.70)
  if (scrollProgress >= 0.28 && scrollProgress < 0.70) {
    // We could add hops between landing and lab if needed, but keeping it simple:
    // Actually, in the previous sprint we did a hop between 0.6 and 0.7. 
    // Let's adjust the hop to sit between 0.42 (Services) and 0.56 (Tools) 
    if (scrollProgress >= 0.42 && scrollProgress < 0.56) {
       const t = (scrollProgress - 0.42) / 0.14
       return (1 - Math.pow(2 * t - 1, 2)) * 100
    }
    return 0
  }

  // Expedition Route: Rover hover mode (0.70 - 0.85)
  // Spacecraft hovers low to the ground
  if (scrollProgress >= 0.70 && scrollProgress < 0.85) return 2 
  
  // Start ascending rapidly after 14% scroll, using an exponential curve for gravity feel
  const normalizedAscent = (scrollProgress - 0.14) / 0.14 // From 0.14 to 0.28
  return Math.pow(Math.min(1, normalizedAscent), 2.5) * 500 // Max altitude 500 units
}

/**
 * Returns the engine glow point light intensity.
 * Starts glowing slightly before launch, maxes out during ascent.
 */
export function getEngineGlowIntensity(scrollProgress: number): number {
  if (scrollProgress < 0.05) return 0
  if (scrollProgress < 0.1) return (scrollProgress - 0.05) * 40 // Fade in 0 to 2
  return 2.0 // Hold max intensity during ascent
}

/**
 * Returns the normalized density/scale of the exhaust particle system.
 * 0 = no smoke, 1 = max smoke.
 */
export function getExhaustDensity(scrollProgress: number): number {
  if (scrollProgress < 0.08) return 0
  if (scrollProgress > 0.8) return Math.max(0, 1 - (scrollProgress - 0.8) * 5) // Fade out in orbit
  return 1.0 // Max smoke during main ascent
}
/**
 * Returns the active environment string based on scroll progress.
 * Switches from launch-pad to deep-space mid-flight.
 */
export function getEnvironmentId(scrollProgress: number): string {
  if (scrollProgress < 0.14) return "launch-pad"
  if (scrollProgress < 0.28) return "deep-space"
  if (scrollProgress < 0.42) return "landing-zone"
  if (scrollProgress < 0.56) return "research-station" // Placeholder for Services
  if (scrollProgress < 0.70) return "engineering-laboratory"
  if (scrollProgress < 0.85) return "expedition-route" // Experience
  return "discovery-valley" // Projects placeholder
}

/**
 * Returns Earth's scale dynamically. 
 * As scroll increases in deep space, Earth shrinks to simulate distance.
 */
export function getEarthScale(scrollProgress: number): number {
  if (scrollProgress < 0.4) return 1.0
  const distance = (scrollProgress - 0.4) / 0.6 // 0 to 1
  return Math.max(0.01, 1.0 - distance * 0.95) 
}

/**
 * Returns Earth's Y position to naturally fall away from the camera.
 */
export function getEarthPosition(scrollProgress: number): number {
  if (scrollProgress < 0.4) return -100 // Out of frame below launch pad
  const distance = (scrollProgress - 0.4) / 0.6
  return -100 - (distance * 1000) // Drops rapidly away
}

/**
 * Unknown Planet opacity mapping. Fades in only at the very end of the sequence.
 */
export function getPlanetOpacity(scrollProgress: number): number {
  if (scrollProgress < 0.8) return 0
  return Math.min(1.0, (scrollProgress - 0.8) * 5) // Fades in quickly 0.8 -> 1.0
}
