import * as React from "react"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

interface ContactCardProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: LucideIcon
  title: string
  description: string
}

export function ContactCard({ icon: Icon, title, description, className, ...props }: ContactCardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-4 p-6 rounded-2xl bg-card border border-border text-card-foreground shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20",
        className
      )}
      {...props}
    >
      <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <h4 className="text-sm font-semibold tracking-tight text-foreground uppercase mb-1">
          {title}
        </h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  )
}
