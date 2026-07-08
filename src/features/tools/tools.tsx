"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { toolsData } from "@/content"
import { ToolCategory, CreativeTools } from "./components"
import { useCreativeMode } from "@/features/creative/providers/creative-provider"

export function Tools() {
  const { isCreativeMode } = useCreativeMode()

  if (isCreativeMode) {
    return <CreativeTools data={toolsData} />
  }

  // Extract unique categories from data
  const categories = Array.from(new Set(toolsData.map((t) => t.category)))

  return (
    <Section id="tools" className="py-24 md:py-32">
      <Container>
        <SectionHeader 
          title="Tools I Use" 
          subtitle="The software, platforms, and technologies behind my workflow."
        />
        
        <div className="flex flex-col gap-16 md:gap-20 mt-12">
          {categories.map((category) => {
            const categoryTools = toolsData.filter((t) => t.category === category)
            
            return (
              <ToolCategory 
                key={category} 
                category={category} 
                tools={categoryTools} 
              />
            )
          })}
        </div>
        
      </Container>
    </Section>
  )
}
