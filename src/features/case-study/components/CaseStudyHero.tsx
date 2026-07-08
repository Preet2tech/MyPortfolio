import * as React from "react"
import { cn } from "@/lib/utils"
import { ProjectThumbnail } from "@/features/projects"
import { ProjectTags } from "@/features/projects"
import type { Project } from "@/types/content.types"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

interface CaseStudyHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
}

export function CaseStudyHero({ project, className, ...props }: CaseStudyHeroProps) {
  return (
    <div className={cn("flex flex-col", className)} {...props}>
      <div className="mb-8 md:mb-12">
        <Link 
          href="/#projects" 
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group w-fit"
        >
          <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </div>

      <div className="flex flex-col gap-6 md:gap-8 mb-10 md:mb-16">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {project.title}
          </h1>
        </div>

        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4 border-t border-border/50">
          {project.year && (
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Year</span>
              <span className="text-sm font-medium text-foreground">{project.year}</span>
            </div>
          )}
          {project.role && (
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Role</span>
              <span className="text-sm font-medium text-foreground">{project.role}</span>
            </div>
          )}
          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-col gap-1">
              <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Tags</span>
              <ProjectTags tags={project.tags} />
            </div>
          )}
        </div>
      </div>

      <div className="w-full aspect-video md:aspect-[21/9] rounded-3xl overflow-hidden shadow-sm border border-border">
        <ProjectThumbnail 
          src={project.coverImage || project.thumbnail} 
          alt={project.title}
          aspectRatio="video"
          className="h-full w-full !aspect-auto" 
        />
      </div>
    </div>
  )
}
