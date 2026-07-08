import * as THREE from "three"

// Architecture stub for generating physically based materials
export class MaterialManager {
  private cache: Map<string, THREE.Material> = new Map()

  public getMetalMaterial(): THREE.MeshStandardMaterial {
    if (this.cache.has("metal")) return this.cache.get("metal") as THREE.MeshStandardMaterial
    
    const mat = new THREE.MeshStandardMaterial({
      metalness: 0.9,
      roughness: 0.2,
      color: "#888888"
    })
    this.cache.set("metal", mat)
    return mat
  }

  public getGlassMaterial(): THREE.MeshPhysicalMaterial {
    if (this.cache.has("glass")) return this.cache.get("glass") as THREE.MeshPhysicalMaterial
    
    const mat = new THREE.MeshPhysicalMaterial({
      metalness: 0.1,
      roughness: 0.05,
      transmission: 0.9,
      thickness: 1.0,
      ior: 1.5
    })
    this.cache.set("glass", mat)
    return mat
  }

  public dispose() {
    this.cache.forEach((material) => material.dispose())
    this.cache.clear()
  }
}

export const materialManager = new MaterialManager()
