export type CreativePhase = 
  | "LOADING"
  | "LAUNCH_PAD"
  | "LAUNCH"
  | "ORBIT"
  | "PLANET_ENTRY"
  | "LANDING"
  | "MISSION_ACTIVE"
  | "MISSION_COMPLETE"
  | "THEME_TRANSITION"

export interface CreativeState {
  isActive: boolean
  phase: CreativePhase
  progress: number // 0 to 100 for loading or phase progress
  currentSceneId: string | null
  currentEnvironmentId: string | null
  
  // Actions
  activate: () => void
  deactivate: () => void
  setPhase: (phase: CreativePhase) => void
  setProgress: (progress: number) => void
  setScene: (sceneId: string) => void
  setEnvironment: (envId: string) => void
}

// In a real implementation with Zustand, this would be a store hook.
// For architecture setup, we provide the robust types and interfaces.
