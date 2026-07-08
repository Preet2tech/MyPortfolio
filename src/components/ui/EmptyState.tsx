import * as React from "react"
import { cn } from "@/lib/utils"

interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  icon?: React.ReactNode
  title: string
  description: string
  action?: React.ReactNode
}

export function EmptyState({ icon, title, description, action, className, ...props }: EmptyStateProps) {
  return (
    <div 
      className={cn(
        "flex flex-col items-center justify-center text-center p-12 md:p-24 rounded-3xl border border-dashed border-border/60 bg-muted/20",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-6 h-16 w-16 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
          {icon}
        </div>
      )}
      <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto mb-8">
        {description}
      </p>
      {action && (
        <div className="mt-2">
          {action}
        </div>
      )}
    </div>
  )
}
