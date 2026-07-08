"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { aboutData } from "@/content"
import {
  AboutContent,
  AboutImage,
  AboutStats,
  AboutCards,
  CreativeAbout
} from "./components"
import { useCreativeMode } from "@/features/creative/providers/creative-provider"

export function About() {
  const { isCreativeMode } = useCreativeMode()

  if (isCreativeMode) {
    return <CreativeAbout data={aboutData} />
  }

  return (
    <Section id="about" className="py-24 md:py-32">
      <Container>
        <SectionHeader 
          title="About Me" 
          subtitle="A brief look into my background, interests, and continuous learning."
        />
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mt-12">
          
          {/* Left Column: Biography & Goals */}
          <AboutContent className="lg:col-span-7">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Designing with purpose.
            </h3>
            
            {/* Split the long biography by newlines if applicable, or render as is */}
            <p>
              {aboutData.biography}
            </p>
            
            <div className="mt-6 p-6 rounded-xl bg-accent/50 border border-border/50">
              <h4 className="font-semibold text-foreground mb-2">My Current Goal</h4>
              <p className="text-muted-foreground m-0">
                {aboutData.goal}
              </p>
            </div>
            
            <AboutStats stats={aboutData.statistics} />
          </AboutContent>
          
          {/* Right Column: Visual */}
          <div className="lg:col-span-5 w-full">
            <AboutImage />
          </div>
          
        </div>
        
        {/* Bottom Cards Grid */}
        <AboutCards aboutData={aboutData} />
        
      </Container>
    </Section>
  )
}
