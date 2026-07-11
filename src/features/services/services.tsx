"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { servicesData } from "@/content"
import { cn } from "@/lib/utils"
import {
  PenTool,
  Fingerprint,
  Share2,
  FileImage,
  Camera,
  Layout,
  Layers
} from "lucide-react"
import {
  WorkspaceFrame,
  SelectionOutline,
  StickyNote,
  ConnectorLine,
  MeasurementGuide,
  PropertyChip
} from "@/features/workspace/components"

// Icon mapping dictionary
const iconMap = {
  PenTool: PenTool,
  Fingerprint: Fingerprint,
  Share2: Share2,
  FileImage: FileImage,
  Camera: Camera,
  Layout: Layout
}

// Tool chips mapping per service
const toolsMap: Record<string, string[]> = {
  "graphic-design": ["Photoshop", "Illustrator", "Print"],
  "brand-identity": ["Illustrator", "Logos", "Typography"],
  "social-media": ["Photoshop", "Banners", "Canva"],
  "poster-design": ["Illustrator", "InDesign", "Poster"],
  "photo-editing": ["Lightroom", "Camera Raw", "Retouch"],
  "ui-design": ["Figma", "Wireframes", "UI/UX"]
}

export function Services() {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)

  return (
    <Section id="services" className="py-20 relative overflow-hidden select-none">
      <Container>
        
        {/* Planning Board Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-border/40 pb-6">
          <div className="space-y-1">
            <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
              Board: Services Planner // cap_brief
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight m-0 text-foreground">
              What I Can Help <span className="font-light text-muted-foreground">You With</span>
            </h2>
          </div>
          <PropertyChip label="Palettes" value="6 Services" variant="info" />
        </div>

        {/* Spacing Guide showing header margin constraint */}
        <MeasurementGuide 
          type="horizontal" 
          label="spacing-y: 64px" 
          length={220} 
          className="opacity-4 opacity-30 my-6 pl-4 pointer-events-none select-none" 
        />

        {/* Staggered asymmetrical Services grid layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10 mt-12 relative z-10">
          
          {/* Yellow sticky process note card on left margins */}
          <div className="absolute -left-20 top-24 hidden xl:block z-20 pointer-events-none select-none">
            <StickyNote 
              color="yellow" 
              text="Creative process: Plan ➔ Design ➔ Refine. Keep it simple and pixel perfect." 
              author="Preet" 
              rotate={4}
              width={130}
              height={130}
            />
            {/* Connector linking sticky note to the first frame */}
            <ConnectorLine 
              type="curved" 
              width={90} 
              height={35} 
              className="absolute -right-8 -bottom-6 text-yellow-400 rotate-12" 
            />
          </div>

          {servicesData.map((service, index) => {
            const Icon = iconMap[service.iconName as keyof typeof iconMap] || Layers
            const tools = toolsMap[service.id] || []
            const isHovered = hoveredId === service.id

            // Stagger placements dynamically using CSS translate offsets to simulate whiteboard nodes
            const staggerClass = cn(
              index % 3 === 0 && "lg:translate-y-2",
              index % 3 === 1 && "lg:-translate-y-4",
              index % 3 === 2 && "lg:translate-y-6"
            )

            // Dynamic status based on service type
            const isLearning = service.id === "ui-design"
            const statusLabel = isLearning ? "Learning" : "Active"
            const statusVariant = isLearning ? "warning" : "success"

            return (
              <div
                key={service.id}
                className={cn("relative transition-all duration-200", staggerClass)}
                onMouseEnter={() => setHoveredId(service.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Figma selection highlight overlay */}
                <SelectionOutline
                  label={`Component: Card [${service.title}]`}
                  isSelected={isHovered}
                  isHovered={isHovered}
                  className="h-full"
                >
                  <WorkspaceFrame
                    title={`Card // 00${index + 1}`}
                    showBorders={!isHovered}
                    className="p-6 h-full flex flex-col justify-between min-h-[220px] bg-background/50 backdrop-blur-[1px] hover:shadow-xl transition-shadow"
                  >
                    {/* Frame Top Details */}
                    <div className="space-y-4">
                      
                      <div className="flex items-center justify-between gap-2">
                        {/* Service Icon Badge */}
                        <div className="p-2.5 rounded-lg bg-primary/5 text-primary border border-primary/10">
                          <Icon className="w-5 h-5" />
                        </div>
                        {/* Status Chip */}
                        <PropertyChip label={statusLabel} variant={statusVariant} />
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold tracking-tight text-foreground m-0">
                          {service.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed m-0 font-medium font-sans">
                          {service.shortDescription}
                        </p>
                      </div>

                    </div>

                    {/* Frame Bottom Details (Chips list) */}
                    <div className="flex flex-wrap gap-1 mt-6 pt-4 border-t border-border/40 select-none">
                      {tools.map(tool => (
                        <span 
                          key={tool} 
                          className="px-1.5 py-0.5 rounded-[4px] bg-muted/65 border border-border/50 text-muted-foreground text-[8px] font-mono uppercase tracking-wider"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                  </WorkspaceFrame>
                </SelectionOutline>
              </div>
            )
          })}

        </div>

      </Container>
    </Section>
  )
}
