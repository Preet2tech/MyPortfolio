export interface MissionConfig {
  id: string
  contentRef: string // Maps to src/content/data/projects.ts slug or experience id
  associatedSceneId: string
}

export const missionRegistry: Record<string, MissionConfig> = {
  // Architecture stub. 
  // Maps a regular portfolio project (e.g. "horizon-branding") into a Cinematic Mission
}
