import * as React from "react"
import { cn } from "@/lib/utils"

export const Section = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section
    ref={ref}
    className={cn(
      "relative w-full py-16 md:py-24 lg:py-32 scroll-mt-20",
      className
    )}
    {...props}
  />
))
Section.displayName = "Section"
