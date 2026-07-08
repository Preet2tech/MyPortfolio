import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface ProjectThumbnailProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  alt: string
  aspectRatio?: "video" | "square" | "portrait"
}

// Generate a deterministic gradient based on a string (like the title or ID)
function getGradientString(seed: string) {
  const hash = Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0)
  const hue1 = hash % 360
  const hue2 = (hash + 60) % 360
  return `linear-gradient(135deg, hsl(${hue1}, 70%, 60%), hsl(${hue2}, 70%, 40%))`
}

export function ProjectThumbnail({ src, alt, aspectRatio = "video", className, ...props }: ProjectThumbnailProps) {
  const isPlaceholder = src?.includes("placeholder") || !src

  return (
    <div 
      className={cn(
        "relative w-full overflow-hidden bg-muted rounded-xl border border-border/50",
        aspectRatio === "video" && "aspect-video",
        aspectRatio === "square" && "aspect-square",
        aspectRatio === "portrait" && "aspect-[3/4]",
        className
      )}
      {...props}
    >
      <div 
        className="absolute inset-0 h-full w-full transition-transform duration-500 ease-out group-hover:scale-105"
        style={isPlaceholder ? { background: getGradientString(alt) } : {}}
      >
        {!isPlaceholder && (
          <Image 
            src={src} 
            alt={alt} 
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        )}
      </div>
      
      {isPlaceholder && (
        <div className="absolute inset-0 flex items-center justify-center opacity-30 mix-blend-overlay pointer-events-none">
          <svg className="w-24 h-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}
    </div>
  )
}
