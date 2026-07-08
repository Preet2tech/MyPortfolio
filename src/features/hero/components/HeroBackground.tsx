import * as React from "react"
import { cn } from "@/lib/utils"

export const HeroBackground = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "absolute inset-0 z-[-1] overflow-hidden pointer-events-none",
        className
      )}
      {...props}
    >
      {/* 
        This is the architectural wrapper.
        In Creative Mode, we will mount the Three.js Canvas inside here.
        In Minimal Mode, we can keep it subtle or completely empty.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/20" />
      
      {children}
    </div>
  )
})
HeroBackground.displayName = "HeroBackground"
