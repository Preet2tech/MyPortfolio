import * as React from "react"
import { cn } from "@/lib/utils"

export function TimelineMarker({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("relative flex h-full flex-col items-center", className)} {...props}>
      <div className="absolute top-2 h-4 w-4 rounded-full border-2 border-primary bg-background shadow-[0_0_0_4px_var(--background)] z-10" />
      <div className="h-full w-px bg-border flex-grow mt-2" />
    </div>
  )
}
