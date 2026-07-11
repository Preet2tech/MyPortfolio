"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { aboutData } from "@/content"
import {
  WorkspaceFrame,
  SelectionOutline,
  MeasurementGuide,
  ConnectorLine,
  StickyNote,
  CommentBubble,
  PropertyChip
} from "@/features/workspace/components"

export function About() {
  return (
    <Section id="about" className="py-20 relative overflow-hidden select-none">
      <Container>
        
        {/* Workspace Frame around the entire About Section */}
        <WorkspaceFrame 
          title="Frame: About Me // preet_profile" 
          className="p-6 sm:p-8 md:p-12 relative" 
          isSelected={true}
        >
          
          {/* Section Frame Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-10 border-b border-border/40 pb-6">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight m-0 text-foreground">
              About <span className="font-light text-muted-foreground">Me</span>
            </h2>
            <PropertyChip label="Format" value="Whiteboard" variant="info" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
            
            {/* Left Column: Biography, Education & Skills (7 cols) */}
            <div className="lg:col-span-7 space-y-8 relative">
              
              {/* Comment Bubble pointing to biography */}
              <CommentBubble 
                author="Alex" 
                avatar="A" 
                text="Great introduction, very clear!" 
                color="#0ACF83" 
                variant="approval" 
                className="absolute -left-20 top-20 hidden xl:block pointer-events-none select-none"
              />

              {/* Biography Text Block */}
              <div className="space-y-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground select-none">
                  Biography & Creative Goal
                </h3>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans font-medium m-0 max-w-xl">
                  {aboutData.biography}
                </p>
                <div className="p-5 rounded-lg border border-border/70 bg-muted/10 max-w-xl">
                  <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-foreground mb-1 select-none">
                    Design Philosophy
                  </h4>
                  <p className="text-sm text-muted-foreground m-0 font-sans italic">
                    &ldquo;{aboutData.designPhilosophy}&rdquo;
                  </p>
                </div>
              </div>

              {/* Measurement Guide showing margin specs */}
              <MeasurementGuide 
                type="horizontal" 
                label="Padding-Y: 32px" 
                length={180} 
                className="opacity-40 pl-4 py-2 pointer-events-none select-none" 
              />

              {/* Focus Areas & Interests (rendered as Property Chips) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                
                {/* Education Section */}
                <div className="space-y-4">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground select-none">
                    Education
                  </h3>
                  {aboutData.education.map((edu) => (
                    <div key={edu.degree} className="space-y-1">
                      <div className="text-sm font-bold text-foreground">
                        {edu.degree}
                      </div>
                      <div className="text-xs text-muted-foreground flex items-center justify-between font-mono">
                        <span>{edu.institution}</span>
                        <span>{edu.year}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Focus areas */}
                <div className="space-y-4">
                  <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground select-none">
                    Current Focus
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {aboutData.currentlyLearning.map((focus) => (
                      <PropertyChip key={focus} label={focus} variant="success" />
                    ))}
                  </div>
                </div>

              </div>

              {/* Interests Block */}
              <div className="space-y-4 pt-4">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground select-none">
                  Core Interests
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {aboutData.interests.map((interest) => (
                    <PropertyChip key={interest} label={interest} />
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column: Visual Image Asset (5 cols) */}
            <div className="lg:col-span-5 w-full max-w-sm mx-auto lg:max-w-none relative pt-4">
              
              {/* Profile Image Asset inside Selection Outline */}
              <SelectionOutline 
                label="Image Asset: profile_pic.jpg" 
                className="w-full aspect-[4/5] md:aspect-square bg-muted/20 border border-border/80 flex items-center justify-center rounded-lg shadow-sm"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none" />
                <div className="text-center p-6 space-y-2 pointer-events-none select-none">
                  <span className="block text-muted-foreground/30 font-mono text-[9px] tracking-widest uppercase">
                    Asset Placeholder
                  </span>
                  <span className="block text-muted-foreground/20 text-[9px] font-mono">
                    W: 420px | H: 420px | r: 8px
                  </span>
                </div>
              </SelectionOutline>

              {/* Floating Pink Sticky Note */}
              <StickyNote 
                color="pink" 
                text="Always improving. Stay curious, stay creative." 
                author="Preet" 
                rotate={-3} 
                className="absolute -right-8 -bottom-12 hidden xl:flex pointer-events-none select-none shadow-lg"
              />

              {/* Dashed connector line between Sticky Note and Selection border */}
              <ConnectorLine 
                type="curved" 
                styleType="dashed" 
                width={80} 
                height={30} 
                className="absolute -right-6 -bottom-3 hidden xl:block text-pink-400" 
              />

            </div>

          </div>

        </WorkspaceFrame>
        
      </Container>
    </Section>
  )
}
