"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { projectsData } from "@/content"
import { 
  FeaturedProject, 
  ProjectGrid, 
  ProjectFilter 
} from "./components"

export function Projects() {
  const [activeCategory, setActiveCategory] = React.useState<string>("All")

  // Find the featured project (or fallback to the first one)
  const featuredProject = projectsData.find(p => p.isFeatured) || projectsData[0]
  
  // Filter the grid projects (excluding the featured one so we don't duplicate it)
  const gridProjects = projectsData.filter(p => p.id !== featuredProject.id)
  
  // Calculate unique categories for the filter from all projects
  const uniqueCategories = Array.from(new Set(projectsData.map(p => p.category)))

  // Apply the active filter to the grid
  const filteredGridProjects = activeCategory === "All" 
    ? gridProjects 
    : gridProjects.filter(p => p.category === activeCategory)

  return (
    <Section id="projects" className="py-24 md:py-32">
      <Container>
        <SectionHeader 
          title="My Work" 
          subtitle="A showcase of brand identities, digital experiences, and creative explorations."
        />
        
        {/* Featured Project */}
        {activeCategory === "All" && (
          <div className="mt-12 mb-16 md:mb-20">
            <FeaturedProject project={featuredProject} />
          </div>
        )}

        {/* Filter Navigation */}
        <div className="flex flex-col gap-8 md:gap-10">
          <ProjectFilter 
            categories={uniqueCategories}
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
          
          {/* Project Grid */}
          <ProjectGrid projects={filteredGridProjects} />
        </div>
        
      </Container>
    </Section>
  )
}
