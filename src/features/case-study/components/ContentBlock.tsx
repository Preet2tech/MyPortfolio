import * as React from "react"
import { cn } from "@/lib/utils"

interface ContentBlockProps extends React.HTMLAttributes<HTMLElement> {
  title: string
  children: React.ReactNode
}

export function ContentBlock({ title, children, className, ...props }: ContentBlockProps) {
  return (
    <section className={cn("flex flex-col md:flex-row gap-6 md:gap-12 lg:gap-24", className)} {...props}>
      <div className="md:w-1/3 flex-shrink-0">
        <h2 className="text-2xl font-bold tracking-tight text-foreground sticky top-24">
          {title}
        </h2>
      </div>
      
      <div className="md:w-2/3 prose prose-neutral dark:prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed">
        {children}
      </div>
    </section>
  )
}
