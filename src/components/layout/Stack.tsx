import * as React from "react"
import { cn } from "@/lib/utils"

export const Stack = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex flex-col gap-4 md:gap-6",
      className
    )}
    {...props}
  />
))
Stack.displayName = "Stack"
