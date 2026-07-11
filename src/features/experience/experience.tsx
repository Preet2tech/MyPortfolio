"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { experienceData } from "@/content"
import { cn } from "@/lib/utils"
import { Calendar, Briefcase, GraduationCap, Compass } from "lucide-react"
import {
  WorkspaceFrame,
  SelectionOutline,
  StickyNote,
  ConnectorLine,
  MeasurementGuide,
  PropertyChip,
  CommentBubble
} from "@/features/workspace/components"
import { m } from "framer-motion"

export function Experience() {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)

  return (
    <Section id="experience" className="py-20 relative overflow-hidden select-none">
      <Container>
        
        <m.div
          initial={{ opacity: 0.85, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Journey Map Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-border/40 pb-6">
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
                Canvas: Creative Timeline // journey_map
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground m-0">
                My Design <span className="font-light text-muted-foreground">Journey</span>
              </h2>
            </div>
            <PropertyChip label="Milestones" value="6 Blocks" variant="info" />
          </div>

          {/* Spacing guideline */}
          <MeasurementGuide 
            type="horizontal" 
            label="spacing-gap: 56px" 
            length={190} 
            className="opacity-30 my-6 pl-4 pointer-events-none select-none" 
          />

          {/* 2-Column Staggered Whiteboard Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 items-start mt-12 relative z-10 group">
          
          {/* Visual Connectors drawing pathways between staggered nodes on desktop */}
          <div className="absolute inset-0 pointer-events-none hidden xl:block" aria-hidden="true">
            {/* Connector 1 -> 2 */}
            <ConnectorLine 
              type="curved" 
              width={140} 
              height={50} 
              className="absolute left-[40%] top-[10%] text-border/60" 
            />
            {/* Connector 2 -> 3 */}
            <ConnectorLine 
              type="angled" 
              width={140} 
              height={50} 
              className="absolute right-[40%] top-[28%] text-border/60 -scale-x-100" 
            />
            {/* Connector 3 -> 4 */}
            <ConnectorLine 
              type="curved" 
              width={140} 
              height={50} 
              className="absolute left-[40%] top-[45%] text-border/60" 
            />
            {/* Connector 4 -> 5 */}
            <ConnectorLine 
              type="angled" 
              width={140} 
              height={50} 
              className="absolute right-[40%] top-[62%] text-border/60 -scale-x-100" 
            />
            {/* Connector 5 -> 6 */}
            <ConnectorLine 
              type="curved" 
              width={140} 
              height={50} 
              className="absolute left-[40%] top-[80%] text-border/60" 
            />
          </div>

          {/* Started Here Sticky Note pinned near Milestone 1 */}
          <div className="absolute -left-20 -top-24 hidden xl:block z-20 pointer-events-none select-none">
            <StickyNote 
              color="pink" 
              text="Started Here! First admission to SVIT College. 🎓" 
              author="Preet" 
              rotate={-4}
              width={120}
              height={120}
            />
            <ConnectorLine 
              type="curved" 
              width={60} 
              height={20} 
              className="absolute -right-6 bottom-2 text-pink-400 rotate-45" 
            />
          </div>

          {/* Comment bubble next to the final Data Science milestone */}
          <div className="absolute -right-16 bottom-[10%] hidden xl:flex z-20 pointer-events-none select-none">
            <CommentBubble 
              author="Noah" 
              avatar="N" 
              text="Exploring data statistics, high growth rate! 📈" 
              color="#18A0FB" 
              variant="review" 
            />
            <ConnectorLine 
              type="curved" 
              width={70} 
              height={20} 
              className="absolute -left-6 top-6 text-blue-400 rotate-180" 
            />
          </div>

          {experienceData.map((item, index) => {
            const isHovered = hoveredId === item.id

            // Alternate icons based on milestone content
            const isAcademic = item.id.includes("student") || item.id.includes("uiux")
            const Icon = isAcademic ? GraduationCap : item.id.includes("data") ? Compass : Briefcase

            // Alternate grid staggering
            const staggerClass = cn(
              index % 2 === 1 && "md:translate-y-8"
            )

            // Dynamic badges
            const isCurrent = item.endDate === "Present"
            const statusLabel = isCurrent ? "Active" : "Ongoing"
            const statusVariant = isCurrent ? "success" : "info"

            return (
              <div
                key={item.id}
                className={cn("relative transition-all duration-200", staggerClass)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Figma Selection Outlines */}
                <SelectionOutline
                  label={`Layer: Milestone [00${index + 1}]`}
                  isSelected={isHovered}
                  isHovered={isHovered}
                  className="h-full"
                >
                  <WorkspaceFrame
                    title={`Milestone // v1.${index}`}
                    showBorders={!isHovered}
                    className="p-6 h-full bg-background/50 backdrop-blur-[1px] hover:shadow-xl transition-shadow"
                  >
                    
                    {/* Header: Date & Status */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground font-mono">
                        <Calendar className="w-3.5 h-3.5 text-muted-foreground/60" />
                        <span>{item.endDate}</span>
                      </div>
                      <PropertyChip label={statusLabel} variant={statusVariant} />
                    </div>

                    {/* Content Body */}
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded bg-primary/5 text-primary border border-primary/10 shrink-0">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-base font-bold text-foreground tracking-tight m-0">
                            {item.role}
                          </h3>
                          <div className="text-xs text-muted-foreground font-mono mt-0.5">
                            {item.company}
                          </div>
                        </div>
                      </div>

                      <p className="text-xs md:text-sm text-muted-foreground leading-relaxed m-0 font-sans font-medium">
                        {item.description}
                      </p>
                    </div>

                  </WorkspaceFrame>
                </SelectionOutline>
              </div>
            )
          })}

        </div>

        </m.div>
      </Container>
    </Section>
  )
}
