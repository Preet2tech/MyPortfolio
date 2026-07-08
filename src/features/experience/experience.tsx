"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { experienceData } from "@/content"
import { Timeline, CreativeExperience } from "./components"
import { useCreativeMode } from "@/features/creative/providers/creative-provider"

export function Experience() {
  const { isCreativeMode } = useCreativeMode()

  if (isCreativeMode) {
    return <CreativeExperience data={experienceData} />
  }

  return (
    <Section id="experience" className="py-24 md:py-32 bg-muted/10">
      <Container>
        <SectionHeader 
          title="My Experience" 
          subtitle="My design and continuous learning journey."
          alignment="center"
        />
        
        <div className="mt-16 md:mt-20">
          <Timeline items={experienceData} />
        </div>
        
      </Container>
    </Section>
  )
}
