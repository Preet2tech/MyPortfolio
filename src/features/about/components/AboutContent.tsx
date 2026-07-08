import * as React from "react"
import { cn } from "@/lib/utils"

export const AboutContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col gap-6 text-lg text-muted-foreground leading-relaxed",
        className
      )}
      {...props}
    />
  )
})
AboutContent.displayName = "AboutContent"
