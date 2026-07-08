export interface ScrollProgress {
  scrollY: number
  scrollProgress: number // 0 to 1
  sectionProgress: Record<string, number> // Map of section IDs to their local progress
}

// In the future, this registry will hook into Framer Motion's useScroll
// or React Three Fiber's ScrollControls to drive camera animation timelines.
export const scrollRegistry = {
  // Architecture stub
}
