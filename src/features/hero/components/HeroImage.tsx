import * as React from "react"
import { cn } from "@/lib/utils"

interface HeroImageProps extends React.HTMLAttributes<HTMLDivElement> {
  // We can pass an image URL here in the future
  src?: string 
  alt?: string
}

export function HeroImage({ className, ...props }: HeroImageProps) {
  return (
    <div 
      className={cn(
        "relative w-full aspect-[4/5] md:aspect-[3/4] lg:aspect-square overflow-hidden rounded-2xl bg-muted/30 border",
        className
      )}
      {...props}
    >
      {/* 
        This is a sleek structural CSS placeholder.
        When you have the real image, we will swap this out for a next/image component.
      */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-muted-foreground/50 font-medium tracking-widest uppercase text-sm">
          Image Placeholder
        </div>
      </div>
      
      {/* Future implementation:
      {src && (
        <Image 
          src={src} 
          alt={alt || "Profile Image"} 
          fill 
          className="object-cover"
          priority
        />
      )}
      */}
    </div>
  )
}
