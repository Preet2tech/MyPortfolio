import * as React from "react"
import { cn } from "@/lib/utils"
import { ServiceIcon } from "./ServiceIcon"
import type { Service } from "@/types/content.types"

interface ServiceCardProps extends React.HTMLAttributes<HTMLDivElement> {
  service: Service
}

export function ServiceCard({ service, className, ...props }: ServiceCardProps) {
  return (
    <div 
      className={cn(
        "group relative flex flex-col gap-4 p-6 md:p-8 rounded-2xl bg-card border border-border text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 h-full",
        className
      )}
      {...props}
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-transform duration-300 group-hover:-translate-y-1">
        <ServiceIcon name={service.iconName} className="h-6 w-6 text-primary" />
      </div>
      
      <div className="flex flex-col gap-2 flex-grow mt-2">
        <h3 className="text-xl font-semibold tracking-tight text-foreground">
          {service.title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {service.shortDescription}
        </p>
      </div>
    </div>
  )
}
