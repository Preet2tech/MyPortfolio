import * as React from "react"
import { cn } from "@/lib/utils"
import { ArrowUpRight, Star } from "lucide-react"
import Link from "next/link"
import { ProjectThumbnail } from "./ProjectThumbnail"
import { ProjectTags } from "./ProjectTags"
import type { Project } from "@/types/content.types"

interface FeaturedProjectProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project
}

export function FeaturedProject({ project, className, ...props }: FeaturedProjectProps) {
  return (
    <div 
      className={cn(
        "group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 rounded-3xl bg-card border border-border p-6 lg:p-10 text-card-foreground shadow-sm transition-all duration-500 hover:shadow-lg hover:border-primary/20",
        className
      )}
      {...props}
    >
      <div className="relative w-full h-full min-h-[300px] lg:min-h-[400px]">
        <div className="absolute top-4 left-4 z-10 bg-background/90 backdrop-blur-sm text-foreground px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase flex items-center gap-1.5 shadow-sm border border-border/50">
          <Star className="h-3.5 w-3.5 text-primary fill-primary" />
          Featured Work
        </div>
        <ProjectThumbnail 
          src={project.thumbnail} 
          alt={project.title} 
          aspectRatio="video"
          className="h-full rounded-2xl" 
        />
      </div>
      
      <div className="flex flex-col justify-center gap-6">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-3">
            {project.category}
          </p>
          <h3 className="text-3xl lg:text-4xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
        </div>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          {project.shortDescription}
        </p>

        <div className="flex flex-col gap-3 pt-2">
          <span className="text-sm font-medium text-foreground">Technologies & Approaches:</span>
          <ProjectTags tags={project.tags} />
        </div>
        
        <div className="pt-6 mt-4 border-t border-border/50">
          <Link href={`/projects/${project.slug}`} className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 gap-2 w-fit group/btn">
            Explore Case Study
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
          </Link>
        </div>
      </div>
    </div>
  )
}
