import { useGLTF, useTexture } from "@react-three/drei"

// Wrapper around Drei's loaders to ensure consistent caching, error boundary handling, and streaming.
export class AssetLoader {
  
  // Preloads a 3D model into the browser cache before a scene mounts
  public preloadModel(url: string) {
    useGLTF.preload(url)
  }

  // Preloads texture sets
  public preloadTexture(url: string) {
    useTexture.preload(url)
  }

  public clearCache(url: string | string[]) {
    useGLTF.clear(url)
    useTexture.clear(url)
  }
}

export const assetLoader = new AssetLoader()
