"use client"

import * as React from "react"
import { m, useScroll, useTransform } from "framer-motion"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import type { ExperienceItem } from "@/types/content.types"
import { Map, MapPin } from "lucide-react"

interface CreativeExperienceProps {
  data: ExperienceItem[]
}

export function CreativeExperience({ data }: CreativeExperienceProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  
  // Tie HUD element animations to the scroll progression of this container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })
  
  const opacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0])

  return (
    <Section id="experience" className="py-32 relative min-h-[200vh]" ref={containerRef}>
      <Container className="h-full flex items-center">
        <m.div 
          style={{ opacity }}
          className="w-full max-w-4xl mx-auto backdrop-blur-sm bg-background/10 border border-primary/20 p-8 md:p-12 rounded-3xl"
        >
          {/* HUD Header */}
          <div className="flex items-center gap-3 mb-10 border-b border-primary/20 pb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/50 text-primary">
              <Map size={20} />
            </div>
            <div>
              <h2 className="text-sm font-mono text-primary tracking-widest uppercase mb-1">
                Expedition Route // ACTIVE
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Journey Records & Milestones
              </h3>
            </div>
          </div>

          {/* Sequential Milestones Display */}
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-primary/30 before:to-transparent">
            {data.map((item) => {
              return (
                <div key={item.id} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                  {/* Marker Point */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary/20 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary),0.3)] z-10">
                    <MapPin size={16} className="text-primary" />
                  </div>
                  
                  {/* Milestone Card */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] bg-primary/5 border border-primary/20 p-6 rounded-xl hover:bg-primary/10 transition-colors">
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="text-xs font-mono text-primary/70 uppercase tracking-widest">
                        {item.endDate}
                      </span>
                      <h4 className="text-lg font-bold text-foreground font-mono">
                        {item.role}
                      </h4>
                      <h5 className="text-sm text-primary/80">
                        {item.company}
                      </h5>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed border-t border-primary/10 pt-3">
                      {item.description}
                    </p>
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
