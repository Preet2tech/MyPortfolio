import * as React from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"

interface AboutImageProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
}

export function AboutImage({ src, alt, className, ...props }: AboutImageProps) {
  // Use placeholder logic just in case it's a generic placeholder
  const isPlaceholder = src?.includes("placeholder") || !src

  return (
    <div 
      className={cn(
        "relative w-full aspect-[4/5] overflow-hidden rounded-3xl bg-muted border border-border group",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 bg-primary/5 transition-colors duration-500 group-hover:bg-transparent z-10" />
      
      {isPlaceholder ? (
        <div className="absolute inset-0 bg-gradient-to-tr from-muted-foreground/20 to-muted flex items-center justify-center">
          <svg className="w-16 h-16 text-muted-foreground/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
      ) : src ? (
        <Image 
          src={src} 
          alt={alt || "Profile image"} 
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
      ) : null}
    </div>
  )
}
