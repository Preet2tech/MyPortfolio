export interface LightingPreset {
  id: string
  ambientIntensity: number
  directionalIntensity: number
  directionalPosition: [number, number, number]
  hemisphereColor: string
  hemisphereGround: string
  hemisphereIntensity: number
}

export interface AtmospherePreset {
  id: string
  fogColor: string
  fogNear: number
  fogFar: number
  cloudOpacity: number
  cloudSpeed: number
}

export interface TerrainPreset {
  id: string
  type: "FLAT" | "ROCK" | "SAND" | "CRATER"
  color: string
  roughness: number
}

export interface CameraPreset {
  id: string
  position: [number, number, number]
  target: [number, number, number]
  fov: number
}

export interface EnvironmentConfig {
  id: string
  name: string
  lighting: string // ID of a LightingPreset
  atmosphere: string // ID of an AtmospherePreset
  terrain: string // ID of a TerrainPreset
  camera: string // ID of a CameraPreset
}

export const environmentRegistry: Record<string, EnvironmentConfig> = {
  "launch-pad": {
    id: "launch-pad",
    name: "Launch Pad",
    lighting: "launch-day",
    atmosphere: "clear-sky",
    terrain: "flat-concrete",
    camera: "hero-view",
  },
  "deep-space": {
    id: "deep-space",
    name: "Deep Space",
    lighting: "stellar-void",
    atmosphere: "pure-vacuum",
    terrain: "none",
    camera: "orbit-view",
  },
  "research-station": {
    id: "research-station",
    name: "Research Station",
    lighting: "interior-lab",
    atmosphere: "thin-dust",
    terrain: "crater-surface",
    camera: "orbit-view",
  },
  "landing-zone": {
    id: "landing-zone",
    name: "Landing Zone",
    lighting: "landing-dusk",
    atmosphere: "landing-haze",
    terrain: "rocky-surface",
    camera: "landing",
  },
  "engineering-laboratory": {
    id: "engineering-laboratory",
    name: "Engineering Laboratory",
    lighting: "laboratory-lighting",
    atmosphere: "laboratory-air",
    terrain: "concrete-facility",
    camera: "landing",
  },
  "expedition-route": {
    id: "expedition-route",
    name: "Expedition Route",
    lighting: "canyon-lighting",
    atmosphere: "dust-storm",
    terrain: "desert-canyon",
    camera: "landing",
  }
}

export const lightingPresets: Record<string, LightingPreset> = {
  "launch-day": {
    id: "launch-day",
    ambientIntensity: 0.3,
    directionalIntensity: 2.0, // Strong morning sun
    directionalPosition: [20, 10, 20], // Low angle
    hemisphereColor: "#d9e8ff", // Cool morning sky
    hemisphereGround: "#1a1a1a",
    hemisphereIntensity: 0.7,
  },
  "stellar-void": {
    id: "stellar-void",
    ambientIntensity: 0.05, // Deep space is dark
    directionalIntensity: 3.0, // But the sun is incredibly bright
    directionalPosition: [-50, 20, 50], // Harsh angle
    hemisphereColor: "#ffffff",
    hemisphereGround: "#000000",
    hemisphereIntensity: 0.1, // Almost zero fill light
  },
  "landing-dusk": {
    id: "landing-dusk",
    ambientIntensity: 0.2,
    directionalIntensity: 1.5, // Low setting sun
    directionalPosition: [50, 5, 20], // Very low angle for long shadows
    hemisphereColor: "#ff9966", // Dusty orange sky
    hemisphereGround: "#2a1508", // Dark rocky ground bounce
    hemisphereIntensity: 0.4,
  },
  "laboratory-lighting": {
    id: "laboratory-lighting",
    ambientIntensity: 0.4,
    directionalIntensity: 1.0,
    directionalPosition: [20, 20, 20],
    hemisphereColor: "#ffffff", // Soft white lighting
    hemisphereGround: "#aa7755", // Subtle warm accents from below
    hemisphereIntensity: 0.5,
  },
  "canyon-lighting": {
    id: "canyon-lighting",
    ambientIntensity: 0.2,
    directionalIntensity: 1.8,
    directionalPosition: [60, 15, 30], // Harsh angle for long shadows
    hemisphereColor: "#ffcc99", // Warm dusty sky
    hemisphereGround: "#331a00", // Dark reddish brown ground bounce
    hemisphereIntensity: 0.5,
  }
}

export const atmospherePresets: Record<string, AtmospherePreset> = {
  "clear-sky": {
    id: "clear-sky",
    fogColor: "#d9e8ff", // Matches hemisphere for seamless horizon blending
    fogNear: 20,
    fogFar: 150,
    cloudOpacity: 0.1,
    cloudSpeed: 0.05,
  },
  "pure-vacuum": {
    id: "pure-vacuum",
    fogColor: "#000000",
    fogNear: 500,
    fogFar: 1500, // Fog pushed very far back to simulate infinite depth
    cloudOpacity: 0,
    cloudSpeed: 0,
  },
  "landing-haze": {
    id: "landing-haze",
    fogColor: "#d3794b", // Dusty rust color
    fogNear: 5,
    fogFar: 60, // Haze restricts visibility to create mystery and scale
    cloudOpacity: 0.2,
    cloudSpeed: 0.02,
  },
  "laboratory-air": {
    id: "laboratory-air",
    fogColor: "#e6ecf0", // Clean, minimal fog
    fogNear: 10,
    fogFar: 100,
    cloudOpacity: 0.05,
    cloudSpeed: 0.01,
  },
  "dust-storm": {
    id: "dust-storm",
    fogColor: "#d39e82", // Dense sandy fog
    fogNear: 2,
    fogFar: 80,
    cloudOpacity: 0.4,
    cloudSpeed: 0.08,
  }
}

export const terrainPresets: Record<string, TerrainPreset> = {
  "flat-concrete": {
    id: "flat-concrete",
    type: "FLAT",
    color: "#888888",
    roughness: 0.8,
  },
  "none": {
    id: "none",
    type: "FLAT",
    color: "#000000",
    roughness: 1.0,
  },
  "rocky-surface": {
    id: "rocky-surface",
    type: "ROCK",
    color: "#4a3525", // Dark reddish brown
    roughness: 0.9,
  },
  "concrete-facility": {
    id: "concrete-facility",
    type: "FLAT",
    color: "#555555", // Concrete grey
    roughness: 0.7,
  },
  "desert-canyon": {
    id: "desert-canyon",
    type: "ROCK",
    color: "#5c3317", // Reddish desert brown
    roughness: 1.0,
  }
}
