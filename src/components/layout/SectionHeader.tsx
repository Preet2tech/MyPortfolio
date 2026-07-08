import * as React from "react"
import { cn } from "@/lib/utils"

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  subtitle?: string
  alignment?: "left" | "center" | "right"
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ className, title, subtitle, alignment = "left", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "flex flex-col gap-2 md:gap-4 mb-12 md:mb-16",
          alignment === "center" && "items-center text-center",
          alignment === "right" && "items-end text-right",
          className
        )}
        {...props}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-muted-foreground text-lg md:text-xl max-w-[700px]">
            {subtitle}
          </p>
        )}
      </div>
    )
  }
)
SectionHeader.displayName = "SectionHeader"
