import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import type { Project } from "@/types/content.types"

interface ProjectNavigationProps extends React.HTMLAttributes<HTMLDivElement> {
  prevProject?: Project
  nextProject?: Project
}

export function ProjectNavigation({ prevProject, nextProject, className, ...props }: ProjectNavigationProps) {
  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-border pt-8 mt-16 md:mt-24",
        className
      )}
      {...props}
    >
      {prevProject ? (
        <Link 
          href={`/projects/${prevProject.slug}`}
          className="group flex flex-col gap-2 p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-border transition-colors text-left"
        >
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Previous Project
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {prevProject.title}
          </span>
        </Link>
      ) : (
        <div /> // Empty div to maintain grid if no previous project
      )}

      {nextProject ? (
        <Link 
          href={`/projects/${nextProject.slug}`}
          className="group flex flex-col gap-2 p-6 rounded-2xl bg-muted/30 border border-transparent hover:border-border transition-colors text-right items-end"
        >
          <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            Next Project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
          <span className="text-xl font-bold tracking-tight text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {nextProject.title}
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  )
}
