export interface SceneConfig {
  id: string
  environmentId: string
  cameraPreset: string
  lazyLoad: () => Promise<unknown>
}

// Manages the loading, unloading, and transitions between Heavy 3D scenes.
export class SceneManager {
  private activeScene: string | null = null
  
  public loadScene(sceneId: string) {
    // Architecture stub for dynamically importing R3F Canvas chunks
    console.log(`[SceneManager] Loading scene: ${sceneId}`)
    this.activeScene = sceneId
  }

  public unloadScene() {
    console.log(`[SceneManager] Unloading scene: ${this.activeScene}`)
    this.activeScene = null
  }
}

export const sceneManager = new SceneManager()
