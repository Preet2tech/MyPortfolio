export interface CameraPreset {
  position: [number, number, number]
  target: [number, number, number]
  fov: number
}

// Manages abstract camera mathematics and timelines before piping them into Three.js
export class CameraSystem {
  public currentPreset: CameraPreset | null = null

  public setPreset(preset: CameraPreset) {
    this.currentPreset = preset
  }

  public transitionTo() {
    // Architecture stub for smooth camera transitions
  }
}

export const cameraSystem = new CameraSystem()
