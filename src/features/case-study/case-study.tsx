import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { notFound } from "next/navigation"
import { projectsData } from "@/content"
import { 
  CaseStudyHero, 
  ContentBlock, 
  ProjectGallery, 
  ProjectNavigation 
} from "./components"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"

interface CaseStudyProps {
  slug: string
}

export function CaseStudy({ slug }: CaseStudyProps) {
  // Find the exact project by slug
  const projectIndex = projectsData.findIndex((p) => p.slug === slug)
  
  if (projectIndex === -1) {
    notFound()
  }

  const project = projectsData[projectIndex]
  
  // Calculate next/prev projects for pagination loop
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : undefined
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : undefined

  return (
    <Section className="py-24 md:py-32">
      <Container>
        
        {/* Hero Section */}
        <CaseStudyHero project={project} />

        {/* Dynamic Content Blocks */}
        <div className="flex flex-col gap-16 md:gap-24 lg:gap-32 mt-16 md:mt-24 lg:mt-32">
          
          {project.overview && (
            <ContentBlock title="Overview">
              <p>{project.overview}</p>
            </ContentBlock>
          )}

          {project.objectives && project.objectives.length > 0 && (
            <ContentBlock title="Objectives">
              <ul className="list-disc pl-6 flex flex-col gap-2">
                {project.objectives.map((obj, i) => (
                  <li key={i}>{obj}</li>
                ))}
              </ul>
            </ContentBlock>
          )}

          {project.research && (
            <ContentBlock title="Research">
              <p>{project.research}</p>
            </ContentBlock>
          )}

          {project.process && (
            <ContentBlock title="Process">
              <p>{project.process}</p>
            </ContentBlock>
          )}

          {project.designSolution && (
            <ContentBlock title="Design Solution">
              <p>{project.designSolution}</p>
            </ContentBlock>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <ContentBlock title="Challenges">
              <ul className="list-disc pl-6 flex flex-col gap-2">
                {project.challenges.map((challenge, i) => (
                  <li key={i}>{challenge}</li>
                ))}
              </ul>
            </ContentBlock>
          )}

          {project.keyLearnings && project.keyLearnings.length > 0 && (
            <ContentBlock title="Key Learnings">
              <ul className="list-disc pl-6 flex flex-col gap-2">
                {project.keyLearnings.map((learning, i) => (
                  <li key={i}>{learning}</li>
                ))}
              </ul>
            </ContentBlock>
          )}

          {/* Gallery Block */}
          {project.gallery && project.gallery.length > 0 && (
            <ContentBlock title="Gallery">
              <ProjectGallery images={project.gallery} />
            </ContentBlock>
          )}

          {/* External Link CTA */}
          {project.liveUrl && (
            <ContentBlock title="Live Project">
              <Link 
                href={project.liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 gap-2 w-fit group"
              >
                View Live Site
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </ContentBlock>
          )}
        </div>

        {/* Footer Navigation */}
        <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
        
      </Container>
    </Section>
  )
}
