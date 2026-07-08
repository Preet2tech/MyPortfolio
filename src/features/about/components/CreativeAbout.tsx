"use client"

import * as React from "react"
import { m, useScroll, useTransform } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import type { AboutData } from "@/types/content.types"
import { Terminal } from "lucide-react"

interface CreativeAboutProps {
  data: AboutData
}

export function CreativeAbout({ data }: CreativeAboutProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Parallax fades for HUD elements based on scroll in the Landing phase
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])

  return (
    <Section id="about" className="py-32 relative min-h-[120vh]" ref={containerRef}>
      {/* 
        This is a pure presentation layer over the 3D canvas.
        No backgrounds, just glowing HUD typography and layouts.
      */}
      <Container className="h-full flex items-center">
        <m.div 
          style={{ opacity, y }}
          className="w-full max-w-4xl mx-auto backdrop-blur-sm bg-background/10 border border-primary/20 p-8 md:p-12 rounded-3xl"
        >
          {/* Mission Header */}
          <div className="flex items-center gap-3 mb-10 border-b border-primary/20 pb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
              <Terminal size={20} />
            </div>
            <div>
              <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-1">
                Log Entry // 004
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Mission Brief & Explorer Profile
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            {/* Left Column: Mission Brief */}
            <div className="space-y-8">
              <div>
                <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-3">
                  [ System.Biography ]
                </h4>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {data.biography}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-3">
                  [ System.Current_Directive ]
                </h4>
                <div className="bg-primary/5 border border-primary/20 p-4 rounded-xl">
                  <p className="text-foreground/90 font-medium text-sm m-0">
                    {data.goal}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Research Log */}
            <div className="space-y-8">
              
              <div>
                <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-3">
                  [ Profile.Specializations ]
                </h4>
                <ul className="space-y-2">
                  {data.interests.map((interest, idx) => (
                    <li key={`interest-${idx}`} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                      {interest}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider mb-3">
                  [ Research.Active_Logs ]
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data.currentlyLearning.map((topic, idx) => (
                    <span 
                      key={`topic-${idx}`}
                      className="px-3 py-1.5 rounded-md bg-primary/10 border border-primary/20 text-primary text-xs font-mono"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Data Streams / Stats */}
              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-primary/20">
                {data.statistics.slice(0, 2).map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl font-bold text-foreground font-mono">{stat.value}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </m.div>
      </Container>
    </Section>
  )
}
