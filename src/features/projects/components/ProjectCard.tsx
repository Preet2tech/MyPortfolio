import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { ProjectThumbnail } from "./ProjectThumbnail"
import { ProjectTags } from "./ProjectTags"
import type { Project } from "@/types/content.types"

interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
}

export function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  return (
    <div 
      className={cn(
        "group flex flex-col gap-5 rounded-2xl bg-card border border-border p-5 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20",
        className
      )}
      {...props}
    >
      <ProjectThumbnail 
        src={project.thumbnail} 
        alt={project.title} 
        aspectRatio="video" 
      />
      
      <div className="flex flex-col gap-3 flex-grow">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
            {project.category}
          </p>
          <h3 className="text-xl font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
          {project.shortDescription}
        </p>

        <ProjectTags tags={project.tags} className="mt-2" />
        
        <div className="pt-4 mt-auto border-t border-border/50 flex items-center justify-between">
          <Link href={`/projects/${project.slug}`} className="text-sm font-medium text-foreground hover:text-primary transition-colors after:absolute after:inset-0">
            View Project
          </Link>
          <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
        </div>
      </div>
    </div>
  )
}
