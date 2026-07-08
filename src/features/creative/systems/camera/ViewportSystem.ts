export function getViewportScaleFactor(width: number): number {
  if (width < 768) return 1.5 // Mobile: pull camera back 1.5x
  if (width < 1024) return 1.2 // Tablet: pull camera back 1.2x
  return 1.0 // Desktop: base zoom
}
