import * as React from "react"
import { cn } from "@/lib/utils"

export const HeroContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col justify-center",
        className
      )}
      {...props}
    />
  )
})
HeroContent.displayName = "HeroContent"
