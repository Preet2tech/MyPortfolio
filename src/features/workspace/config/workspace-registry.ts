"use client"

export interface Collaborator {
  id: string
  name: string
  color: string
  startX: number // percentage
  startY: number // percentage
  duration: number
  delay: number
}

export interface DesignComment {
  id: string
  author: string
  avatar: string
  text: string
  color: string
  x: number // percentage
  y: number // percentage
  depth: number // parallax speed multiplier
}

export interface DesignWord {
  id: string
  text: string
  x: number // percentage
  y: number // percentage
  depth: number
  size: "xs" | "sm" | "md"
}

export interface WhiteboardElement {
  id: string
  type: "frame" | "sticky" | "guide" | "shape"
  label?: string
  text?: string
  color?: string
  x: number // percentage
  y: number // percentage
  width?: number
  height?: number
  depth: number
}

export const WORKSPACE_COLLABORATORS: Collaborator[] = [
  { id: "c1", name: "Sarah (UX)", color: "#18a0fb", startX: 15, startY: 20, duration: 14, delay: 0 },
  { id: "c2", name: "David (Dev)", color: "#0acf83", startX: 85, startY: 15, duration: 17, delay: 1.5 },
  { id: "c3", name: "Elena (Prod)", color: "#ff7262", startX: 10, startY: 80, duration: 12, delay: 0.5 },
  { id: "c4", name: "Marcus (Visual)", color: "#a259ff", startX: 90, startY: 75, duration: 15, delay: 2 },
  { id: "c5", name: "Aria (Writer)", color: "#f2c94c", startX: 75, startY: 85, duration: 13, delay: 1.2 },
  { id: "c6", name: "Lucas (Motion)", color: "#e05194", startX: 25, startY: 90, duration: 16, delay: 0.8 }
]

export const WORKSPACE_COMMENTS: DesignComment[] = [
  {
    id: "m1",
    author: "Sarah",
    avatar: "S",
    text: "Nice spacing here!",
    color: "#18a0fb",
    x: 8,
    y: 40,
    depth: 0.04
  },
  {
    id: "m2",
    author: "David",
    avatar: "D",
    text: "Approved. Ready to ship.",
    color: "#0acf83",
    x: 88,
    y: 45,
    depth: 0.03
  },
  {
    id: "m3",
    author: "Elena",
    avatar: "E",
    text: "Can we check the contrast ratio?",
    color: "#ff7262",
    x: 12,
    y: 70,
    depth: 0.05
  },
  {
    id: "m4",
    author: "Marcus",
    avatar: "M",
    text: "Pixel perfect layout!",
    color: "#a259ff",
    x: 86,
    y: 22,
    depth: 0.02
  }
]

export const WORKSPACE_WORDS: DesignWord[] = [
  { id: "w1", text: "Spacing: 32px", x: 12, y: 15, depth: 0.015, size: "xs" },
  { id: "w2", text: "Contrast ratio: 4.5:1", x: 80, y: 10, depth: 0.02, size: "xs" },
  { id: "w3", text: "DESIGN SYSTEM // V1", x: 6, y: 55, depth: 0.01, size: "sm" },
  { id: "w4", text: "refine_v2.svg", x: 92, y: 60, depth: 0.025, size: "xs" },
  { id: "w5", text: "GRID: 8px", x: 22, y: 82, depth: 0.012, size: "sm" },
  { id: "w6", text: "WIP // 60fps animations", x: 78, y: 92, depth: 0.018, size: "xs" },
  { id: "w7", text: "Refine", x: 5, y: 30, depth: 0.03, size: "md" },
  { id: "w8", text: "Craft", x: 92, y: 32, depth: 0.02, size: "md" }
]

export const WORKSPACE_SHAPES: WhiteboardElement[] = [
  // Surrounding frames
  {
    id: "s1",
    type: "frame",
    label: "Main Page Canvas",
    x: 3,
    y: 8,
    width: 250,
    height: 120,
    depth: 0.01
  },
  {
    id: "s2",
    type: "sticky",
    text: "Remember: accessibility is key 🎨",
    color: "#fefe9c", // Sticky yellow
    x: 7,
    y: 82,
    width: 140,
    height: 140,
    depth: 0.04
  },
  {
    id: "s3",
    type: "sticky",
    text: "FigJam theme updates: V2 stable",
    color: "#ffc2eb", // Pink
    x: 88,
    y: 70,
    width: 130,
    height: 130,
    depth: 0.03
  },
  // Selection box
  {
    id: "s4",
    type: "shape",
    label: "Header Component",
    x: 80,
    y: 28,
    width: 200,
    height: 70,
    depth: 0.015
  },
  // Guidelines
  {
    id: "s5",
    type: "guide",
    x: 18,
    y: 0, // Vertical guideline span
    depth: 0.005
  },
  {
    id: "s6",
    type: "guide",
    x: 82,
    y: 0,
    depth: 0.005
  }
]
