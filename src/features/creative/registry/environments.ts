export interface EnvironmentConfig {
  id: string
  name: string
  // Represents a unique structural set (e.g. Planet Surface, Orbit, Base)
  type: "PLANET" | "SPACE" | "STATION"
}

export const environmentRegistry: Record<string, EnvironmentConfig> = {
  // Architecture stub for future environments
}
