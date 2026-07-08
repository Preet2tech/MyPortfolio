import * as React from "react"
import { cn } from "@/lib/utils"
import { ProjectThumbnail } from "@/features/projects"

interface ProjectGalleryProps extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
}

export function ProjectGallery({ images, className, ...props }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null

  return (
    <div 
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full",
        className
      )}
      {...props}
    >
      {images.map((img, index) => (
        <ProjectThumbnail 
          key={index}
          src={img}
          alt={`Gallery image ${index + 1}`}
          aspectRatio="video"
          className={cn(
            // Make every 3rd image span full width on larger screens for a masonry-lite feel
            index % 3 === 0 ? "sm:col-span-2 aspect-[21/9]" : ""
          )}
        />
      ))}
    </div>
  )
}
