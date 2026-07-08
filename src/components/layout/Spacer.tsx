import * as React from "react"
import { cn } from "@/lib/utils"

interface SpacerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg" | "xl"
}

export const Spacer = React.forwardRef<HTMLDivElement, SpacerProps>(
  ({ className, size = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "w-full",
          size === "sm" && "h-8",
          size === "md" && "h-16",
          size === "lg" && "h-32",
          size === "xl" && "h-48 lg:h-64",
          className
        )}
        {...props}
      />
    )
  }
)
Spacer.displayName = "Spacer"
