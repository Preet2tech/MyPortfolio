import * as React from "react"
import { cn } from "@/lib/utils"
import { ProjectCard } from "./ProjectCard"
import type { Project } from "@/types/content.types"
import { EmptyState } from "@/components/ui/EmptyState"
import { FolderX } from "lucide-react"

interface ProjectGridProps extends React.HTMLAttributes<HTMLDivElement> {
  projects: Project[]
}

export function ProjectGrid({ projects, className, ...props }: ProjectGridProps) {
  if (!projects || projects.length === 0) {
    return (
      <EmptyState 
        icon={<FolderX className="h-8 w-8" />}
        title="No Projects Found"
        description="There are currently no projects listed under this category. Please check back later or select another category."
      />
    )
  }

  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
        className
      )}
      {...props}
    >
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  )
}
