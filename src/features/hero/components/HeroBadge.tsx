import * as React from "react"
import { Badge } from "@/components/ui/badge"

interface HeroBadgeProps {
  label: string
}

export function HeroBadge({ label }: HeroBadgeProps) {
  return (
    <Badge variant="secondary" className="mb-6 rounded-full px-4 py-1.5 text-sm font-medium">
      <span className="mr-2 flex h-2 w-2 rounded-full bg-primary animate-pulse" />
      {label}
    </Badge>
  )
}
