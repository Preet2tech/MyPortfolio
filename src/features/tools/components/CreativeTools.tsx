"use client"

import * as React from "react"
import { m, useScroll, useTransform } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import type { Tool } from "@/types/content.types"
import { Wrench } from "lucide-react"

interface CreativeToolsProps {
  data: Tool[]
}

export function CreativeTools({ data }: CreativeToolsProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Parallax fades for HUD elements based on scroll in the Laboratory phase
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6, 0.8], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0.2, 0.4], [50, 0])

  // Extract unique categories from data
  const categories = Array.from(new Set(data.map((t) => t.category)))
  
  // HUD-style category labels mapping
  const categoryLabels: Record<string, string> = {
    "Design": "Engineering Equipment",
    "Development": "Mission Toolkit",
    "Data": "Operational Systems",
    "Productivity": "Operational Systems",
    "Learning": "Research Software"
  }

  return (
    <Section id="tools" className="py-32 relative min-h-[150vh]" ref={containerRef}>
      {/* Pure presentation layer over the 3D canvas */}
      <Container className="h-full flex items-center">
        <m.div 
          style={{ opacity, y }}
          className="w-full max-w-4xl mx-auto backdrop-blur-sm bg-background/10 border border-primary/20 p-8 md:p-12 rounded-3xl"
        >
          {/* Mission Header */}
          <div className="flex items-center gap-3 mb-10 border-b border-primary/20 pb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
              <Wrench size={20} />
            </div>
            <div>
              <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-1">
                System Status // ONLINE
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Engineering Laboratory
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {categories.map((category) => {
              const categoryTools = data.filter((t) => t.category === category)
              const hudLabel = categoryLabels[category] || "Systems"
              
              return (
                <div key={category} className="space-y-6">
                  <h4 className="text-xs font-mono text-primary/70 uppercase tracking-wider border-b border-primary/20 pb-2">
                    [ SYS.{hudLabel.replace(" ", "_").toUpperCase()} ]
                  </h4>
                  <div className="grid grid-cols-1 gap-4">
                    {categoryTools.map((tool) => (
                      <div 
                        key={tool.id} 
                        className="bg-primary/5 border border-primary/20 p-4 rounded-xl hover:bg-primary/10 transition-colors flex flex-col gap-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-foreground font-medium font-mono text-sm">{tool.name}</span>
                          {tool.experienceLevel && (
                            <span className="text-[10px] uppercase font-mono tracking-widest text-primary/60 border border-primary/20 px-2 py-1 rounded bg-background/50">
                              {tool.experienceLevel}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {tool.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </m.div>
      </Container>
    </Section>
  )
}
