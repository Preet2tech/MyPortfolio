import * as React from "react"
import { cn } from "@/lib/utils"
import { ServiceCard } from "./ServiceCard"
import type { Service } from "@/types/content.types"

interface ServiceGridProps extends React.HTMLAttributes<HTMLDivElement> {
  services: Service[]
}

export function ServiceGrid({ services, className, ...props }: ServiceGridProps) {
  if (!services || services.length === 0) return null

  return (
    <div 
      className={cn(
        "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8",
        className
      )}
      {...props}
    >
      {services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  )
}
