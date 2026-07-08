export interface CameraPreset {
  id: string
  position: [number, number, number]
  target: [number, number, number]
  fov: number
  movementSpeed: number
  transitionType: "smooth" | "linear" | "cinematic"
}

export const cameraPresets: Record<string, CameraPreset> = {
  "hero": {
    id: "hero",
    position: [0, 2, 10],
    target: [0, 0, 0],
    fov: 45,
    movementSpeed: 0.1,
    transitionType: "smooth"
  },
  "launch": {
    id: "launch",
    position: [0, -5, 20],
    target: [0, 10, 0],
    fov: 55,
    movementSpeed: 0.15,
    transitionType: "cinematic"
  },
  "orbit": {
    id: "orbit",
    position: [50, 20, 50],
    target: [0, 0, 0],
    fov: 35,
    movementSpeed: 0.05,
    transitionType: "smooth"
  },
  "research": {
    id: "research",
    position: [10, 5, -10],
    target: [0, 2, 0],
    fov: 50,
    movementSpeed: 0.1,
    transitionType: "smooth"
  },
  "landing": {
    id: "landing",
    position: [-20, 5, 20],
    target: [-5, 0, 5],
    fov: 45,
    movementSpeed: 0.1,
    transitionType: "cinematic"
  },
  "archive": {
    id: "archive",
    position: [0, 2, 5],
    target: [0, 2, -5],
    fov: 40,
    movementSpeed: 0.1,
    transitionType: "smooth"
  },
  "communication": {
    id: "communication",
    position: [0, 10, -20],
    target: [0, 0, 0],
    fov: 60,
    movementSpeed: 0.2,
    transitionType: "smooth"
  }
}
