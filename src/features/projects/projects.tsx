"use client"

import * as React from "react"
import Link from "next/link"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { projectsData } from "@/content"
import { cn } from "@/lib/utils"
import { ExternalLink } from "lucide-react"
import {
  WorkspaceFrame,
  SelectionOutline,
  StickyNote,
  ConnectorLine,
  MeasurementGuide,
  PropertyChip,
  CommentBubble
} from "@/features/workspace/components"

// Static review details for projects
const projectSpecs = {
  "horizon-branding": { status: "Approved", version: "v2.4", variant: "success" as const },
  "stellar-ui": { status: "Review", version: "v1.0", variant: "warning" as const },
  "social-campaign-x": { status: "Approved", version: "v1.2", variant: "success" as const },
  "editorial-retouch": { status: "Draft", version: "v0.8", variant: "info" as const },
  "cyber-art": { status: "Approved", version: "v2.0", variant: "success" as const },
  "eco-poster": { status: "Approved", version: "v1.1", variant: "success" as const }
}

export function Projects() {
  const [hoveredId, setHoveredId] = React.useState<string | null>(null)

  return (
    <Section id="projects" className="py-20 relative overflow-hidden select-none">
      <Container>
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-border/40 pb-6">
          <div className="space-y-1">
            <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
              Wall: Selected Work // design_review
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight m-0 text-foreground">
              Selected <span className="font-light text-muted-foreground">Work</span>
            </h2>
          </div>
          <PropertyChip label="Release" value="Production" variant="success" />
        </div>

        {/* Height measurement guideline */}
        <MeasurementGuide 
          type="horizontal" 
          label="spacing-gap: 64px" 
          length={200} 
          className="opacity-30 my-6 pl-4 pointer-events-none select-none" 
        />

        {/* Staggered asymmetrical review wall layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-12 mt-12 relative z-10">
          
          {/* 1. Comment Bubble next to Horizon Branding (Card 0) */}
          <div className="absolute -left-20 top-20 hidden xl:flex z-20 pointer-events-none select-none">
            <CommentBubble 
              author="Emma" 
              avatar="E" 
              text="Typography feels exceptionally strong here! ✓" 
              color="#FF7262" 
              variant="approval" 
            />
            <ConnectorLine 
              type="curved" 
              width={70} 
              height={20} 
              className="absolute -right-6 bottom-4 text-red-400 rotate-12" 
            />
          </div>

          {/* 2. Comment Bubble next to Stellar UI (Card 1) */}
          <div className="absolute right-12 top-[24%] hidden xl:flex z-20 pointer-events-none select-none">
            <CommentBubble 
              author="Alex" 
              avatar="A" 
              text="Double check contrast ratios on Retina." 
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

          {/* 3. Pink Sticky Note next to Eco Poster (Card 5) */}
          <div className="absolute -left-20 bottom-16 hidden xl:block z-20 pointer-events-none select-none">
            <StickyNote 
              color="pink" 
              text="Needs Review // check print proofs with SVIT guidelines before submission." 
              author="Preet" 
              rotate={-3}
              width={130}
              height={130}
            />
            <ConnectorLine 
              type="curved" 
              width={80} 
              height={25} 
              className="absolute -right-6 bottom-4 text-pink-400 rotate-45" 
            />
          </div>

          {/* 4. Measurement guide between column items */}
          <div className="absolute left-[45%] top-[50%] hidden xl:block pointer-events-none select-none opacity-30">
            <MeasurementGuide 
              type="vertical" 
              label="Grid Alignment Gaps" 
              length={140} 
            />
          </div>

          {projectsData.map((project, index) => {
            const isHovered = hoveredId === project.id
            const spec = projectSpecs[project.id as keyof typeof projectSpecs] || { status: "Draft", version: "v1.0", variant: "default" as const }

            // Stagger tilts and vertical shifts dynamically to make cards feel pinned as whiteboard sheets
            const staggeredClass = cn(
              index === 0 && "lg:rotate-1 lg:translate-y-2",
              index === 1 && "lg:-rotate-1 lg:translate-y-10",
              index === 2 && "lg:rotate-2 lg:translate-y-4",
              index === 3 && "lg:-rotate-2 lg:translate-y-12",
              index === 4 && "lg:rotate-1 lg:translate-y-6",
              index === 5 && "lg:-rotate-1 lg:translate-y-16"
            )

            return (
              <div
                key={project.id}
                className={cn("relative transition-all duration-200", staggeredClass)}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Visual Figma Selection Outlines */}
                <SelectionOutline
                  label={`Layer: Project Artboard [00${index + 1}]`}
                  isSelected={isHovered}
                  isHovered={isHovered}
                  className="h-full"
                >
                  <WorkspaceFrame
                    title={`Artboard // ${spec.version}`}
                    showBorders={!isHovered}
                    className="p-6 h-full flex flex-col justify-between min-h-[380px] bg-background/50 backdrop-blur-[1px] hover:shadow-2xl transition-all duration-200"
                  >
                    
                    {/* Artboard Content Wrapper */}
                    <div className="space-y-4">
                      
                      {/* Interactive Visual Thumbnail */}
                      <div className="relative aspect-[16/10] bg-muted/20 border border-border/80 rounded-lg overflow-hidden flex items-center justify-center">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                        <div className="text-center p-4 pointer-events-none select-none space-y-1">
                          <span className="block text-muted-foreground/30 font-mono text-[9px] tracking-widest uppercase">
                            Asset: {project.title}
                          </span>
                          <span className="block text-muted-foreground/20 text-[8px] font-mono">
                            w: 100% | h: 100%
                          </span>
                        </div>
                      </div>

                      {/* Title & Description */}
                      <div className="space-y-2">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-wider">
                            {project.category}
                          </span>
                          <PropertyChip label={spec.status} variant={spec.variant} />
                        </div>
                        <h3 className="text-lg md:text-xl font-bold tracking-tight text-foreground m-0">
                          {project.title}
                        </h3>
                        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed m-0 font-sans font-medium">
                          {project.shortDescription}
                        </p>
                      </div>

                    </div>

                    {/* Bottom Metadata & detail link */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-border/40">
                      
                      {/* Tool Tags */}
                      <div className="flex flex-wrap gap-1">
                        {(project.tags || []).slice(0, 2).map(tag => (
                          <span 
                            key={tag}
                            className="px-1.5 py-0.5 rounded-[4px] bg-muted/65 border border-border/50 text-muted-foreground text-[8px] font-mono uppercase tracking-wider"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Detail anchor action */}
                      <Link
                        href={`/projects/${project.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-mono font-bold hover:text-primary transition-colors text-foreground"
                      >
                        <span>Inspect File</span>
                        <ExternalLink className="w-3 h-3" />
                      </Link>

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
