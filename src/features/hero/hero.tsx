"use client"

import * as React from "react"
import { m } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { profileData, heroData } from "@/content"
import { cn } from "@/lib/utils"

interface HeroCursor {
  name: string
  color: string
  x: number[]
  y: number[]
  duration: number
  delay: number
}

const HERO_CURSORS: HeroCursor[] = [
  { name: "Emma", color: "#FF7262", x: [75, 82, 82, 70, 70, 75], y: [12, 22, 22, 16, 16, 12], duration: 15, delay: 0.5 },
  { name: "Alex", color: "#0ACF83", x: [8, 16, 16, 5, 5, 8], y: [42, 52, 52, 38, 38, 42], duration: 12, delay: 1.8 },
  { name: "Noah", color: "#18A0FB", x: [85, 78, 78, 90, 90, 85], y: [68, 78, 78, 62, 62, 68], duration: 16, delay: 0.2 },
  { name: "Sophia", color: "#A259FF", x: [25, 32, 32, 20, 20, 25], y: [78, 88, 88, 82, 82, 78], duration: 14, delay: 1.0 }
]

const HERO_COMMENTS = [
  { id: "hc1", author: "Emma", avatar: "E", text: "Typography is spot on! ✓", color: "#FF7262", x: 74, y: 16, delay: 0.5 },
  { id: "hc2", author: "Alex", avatar: "A", text: "Looks balanced. Ship V2", color: "#0ACF83", x: 6, y: 55, delay: 1.8 }
]

export function Hero() {
  return (
    <Section id="hero" className="relative min-h-[92vh] flex flex-col justify-center py-20 lg:py-32 overflow-hidden select-none">
      
      {/* 1. Local Collaborator Cursors moving in margins */}
      {HERO_CURSORS.map((cursor) => (
        <m.div
          key={cursor.name}
          className="absolute z-30 pointer-events-none hidden sm:block"
          aria-hidden="true"
          style={{
            left: `${cursor.x[0]}%`,
            top: `${cursor.y[0]}%`
          }}
          animate={{
            left: cursor.x.map(val => `${val}%`),
            top: cursor.y.map(val => `${val}%`)
          }}
          transition={{
            duration: cursor.duration,
            delay: cursor.delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "mirror"
          }}
        >
          <div className="flex flex-col items-start gap-0.5">
            <svg
              width="12"
              height="16"
              viewBox="0 0 14 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ filter: "drop-shadow(1px 1px 1px rgba(0,0,0,0.15))" }}
            >
              <path
                d="M0.5 0V17.5L4.5 13.5H12L0.5 0Z"
                fill={cursor.color}
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />
            </svg>
            <div 
              className="px-1.5 py-0.5 rounded-[3px] text-[8px] font-mono font-medium text-white shadow-sm whitespace-nowrap"
              style={{ backgroundColor: cursor.color }}
            >
              {cursor.name}
            </div>
          </div>
        </m.div>
      ))}

      {/* 2. Hero specific comment bubbles */}
      {HERO_COMMENTS.map((comment) => (
        <div
          key={comment.id}
          className="absolute z-20 pointer-events-none hidden lg:block"
          style={{
            left: `${comment.x}%`,
            top: `${comment.y}%`,
            filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.04))"
          }}
          aria-hidden="true"
        >
          <m.div 
            className="flex items-start gap-1.5 bg-background/85 border border-border/80 rounded-xl rounded-tl-none p-2 opacity-70"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: comment.delay }}
          >
            <div 
              className="w-4 h-4 rounded-full flex items-center justify-center text-[8px] font-mono font-bold text-white shrink-0"
              style={{ backgroundColor: comment.color }}
            >
              {comment.avatar}
            </div>
            <div className="text-[10px] leading-tight font-sans text-foreground/80 font-medium">
              {comment.text}
            </div>
          </m.div>
        </div>
      ))}

      {/* 3. Sticky Note in Top-Right Margin */}
      <m.div
        className="absolute right-[8%] top-[12%] z-20 pointer-events-none hidden xl:block"
        style={{ rotate: 3 }}
        animate={{ rotate: [3, 5, 2, 3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      >
        <div className="w-36 h-36 bg-[#fefe9c] dark:bg-yellow-950/80 p-4 border border-yellow-200/50 shadow-[0_4px_12px_rgba(0,0,0,0.05)] text-[10px] font-mono leading-relaxed text-yellow-800 dark:text-yellow-200">
          <p className="m-0 select-none">
            🎨 Portfolio V2.0<br />
            Designer Workspace<br />
            Status: Approved
          </p>
          <div className="text-[8px] text-yellow-600/80 dark:text-yellow-400/80 font-bold uppercase mt-4 select-none">
            Draft // Preet
          </div>
        </div>
      </m.div>

      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Asymmetrical Content Columns */}
          <div className="lg:col-span-9 space-y-12">
            
            {/* Title wrap with Figma-style Bounding Box */}
            <div className="inline-block relative p-3 md:p-6 border border-primary/20 bg-primary/[0.01] rounded-lg">
              
              {/* Selection Box Corner Handles */}
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border border-primary bg-background" aria-hidden="true" />
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border border-primary bg-background" aria-hidden="true" />
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border border-primary bg-background" aria-hidden="true" />
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border border-primary bg-background" aria-hidden="true" />
              
              {/* Layout Size Spec Layer */}
              <div className="absolute -top-6 left-3 bg-primary text-primary-foreground text-[8px] font-mono font-bold px-1.5 py-0.5 rounded uppercase select-none tracking-wider" aria-hidden="true">
                Text Layer: Name // Inter (Light/Bold)
              </div>

              {/* Massive Editorial Name */}
              <h1 className="text-5xl sm:text-7xl md:text-8xl xl:text-[9.5rem] font-light tracking-tighter leading-none m-0 text-foreground">
                Preet <span className="font-extrabold text-primary">Patel</span>
              </h1>
            </div>

            {/* Layout Height Guide Spec */}
            <div className="flex flex-col items-start gap-0.5 pl-6 pointer-events-none select-none opacity-50" aria-hidden="true">
              <div className="h-6 w-px bg-red-400/60 border-l border-dashed" />
              <div className="px-1.5 py-0.5 bg-red-500/10 border border-red-500/20 text-red-500 text-[8px] font-mono rounded">
                Gap: 48px
              </div>
              <div className="h-6 w-px bg-red-400/60 border-l border-dashed" />
            </div>

            {/* Asymmetrical Content Placement (starts at col 3/4) */}
            <div className="grid grid-cols-1 md:grid-cols-8 gap-6 pl-4 md:pl-12">
              <div className="md:col-start-2 md:col-span-6 space-y-6">
                
                {/* Introduction & Role Description */}
                <div className="space-y-2">
                  <h2 className="text-xl font-bold tracking-tight text-foreground uppercase text-xs font-mono opacity-80">
                    {profileData.role}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground font-sans font-medium leading-relaxed m-0 max-w-lg">
                    {heroData.description}
                  </p>
                </div>

                {/* Color swatches & version tag (Micro Details) */}
                <div className="flex flex-wrap items-center gap-2 pt-2" aria-hidden="true">
                  {[
                    { bg: "bg-[#FAF9F6] dark:bg-[#1A1A19]", label: "Canvas" },
                    { bg: "bg-foreground", label: "Primary" },
                    { bg: "bg-muted-foreground", label: "Muted" },
                    { bg: "bg-primary", label: "Accent" }
                  ].map(swatch => (
                    <div key={swatch.label} className="flex items-center gap-1 border border-border/80 bg-background/60 rounded px-1.5 py-0.5 text-[8px] font-mono opacity-60">
                      <div className={cn("w-2.5 h-2.5 rounded-sm border border-border/50", swatch.bg)} />
                      <span>{swatch.label}</span>
                    </div>
                  ))}
                  <div className="text-[8px] font-mono text-muted-foreground/60 border border-border/50 px-1.5 py-0.5 rounded">
                    r: 24px
                  </div>
                  <div className="text-[8px] font-mono text-muted-foreground/60 border border-border/50 px-1.5 py-0.5 rounded">
                    Opacity: 100%
                  </div>
                </div>

                {/* CTA buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-4">
                  {heroData.ctaButtons.map((btn) => (
                    <a
                      key={btn.label}
                      href={btn.href}
                      className={cn(
                        "inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-semibold tracking-tight transition-all duration-200 py-2.5 px-5 select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring border",
                        btn.variant === "primary"
                          ? "bg-foreground text-background border-transparent hover:bg-foreground/90 hover:scale-[1.01]"
                          : "bg-transparent text-foreground border-border hover:bg-muted"
                      )}
                    >
                      {btn.label}
                    </a>
                  ))}
                </div>

              </div>
            </div>

          </div>

          {/* Sidebar Floating Social Links */}
          <div className="hidden lg:flex lg:col-span-3 flex-col items-end justify-center h-full gap-4 pt-10 select-none opacity-70">
            <div className="text-[8px] font-mono font-bold uppercase tracking-widest text-muted-foreground border-b border-border/60 pb-1.5 mb-1 select-none">
              Navigation / Links
            </div>
            {Object.entries(profileData.socials).map(([key, value]) => (
              <a
                key={key}
                href={value}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium hover:text-foreground text-muted-foreground transition-colors uppercase"
              >
                {key} ↗
              </a>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  )
}
