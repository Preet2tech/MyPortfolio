import * as React from "react"
import { cn } from "@/lib/utils"

export const GridWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
      className
    )}
    {...props}
  />
))
GridWrapper.displayName = "GridWrapper"
