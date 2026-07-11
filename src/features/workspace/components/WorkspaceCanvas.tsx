"use client"

import * as React from "react"
import { WorkspacePresenceEngine } from "./WorkspacePresenceEngine"

export function WorkspaceCanvas() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden select-none -z-20">
      {/* 1. Infinite Dotted Grid Pattern Background using high-DPI vector SVG */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.5] dark:opacity-[0.3] text-border"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern id="dotted-canvas-grid" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1" fill="currentColor" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dotted-canvas-grid)" />
      </svg>

      {/* 2. Ambient Paper Grain Noise Overlay (lightweight inline SVG fractal noise filter) */}
      <div 
        className="absolute inset-0 opacity-[0.025] dark:opacity-[0.015] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 250 250' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      
      {/* 3. Coordinated Collaborator Presence Layer */}
      <WorkspacePresenceEngine />
    </div>
  )
}
