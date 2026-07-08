import * as React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeroActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  primaryLabel: string
  primaryHref: string
  secondaryLabel: string
  secondaryHref: string
}

export function HeroActions({
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
  className,
  ...props
}: HeroActionsProps) {
  return (
    <div className={cn("flex flex-wrap gap-4 mt-8", className)} {...props}>
      <Link 
        href={primaryHref}
        className="inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        {primaryLabel}
      </Link>
      <Link 
        href={secondaryHref}
        className="inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        {secondaryLabel}
      </Link>
    </div>
  )
}
