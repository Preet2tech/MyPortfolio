import * as React from "react"
import { cn } from "@/lib/utils"
import { InterestCard } from "./InterestCard"
import { LearningCard } from "./LearningCard"
import type { AboutData } from "@/types/content.types"

interface AboutCardsProps extends React.HTMLAttributes<HTMLDivElement> {
  aboutData: AboutData
}

export function AboutCards({ aboutData, className, ...props }: AboutCardsProps) {
  return (
    <div className={cn("mt-16 grid grid-cols-1 md:grid-cols-2 gap-12", className)} {...props}>
      
      {/* Interests Column */}
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Primary Interests</h3>
          <p className="text-sm text-muted-foreground mt-1">What drives my creative process.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.interests.map((interest, idx) => (
            <InterestCard key={`interest-${idx}`} item={interest} />
          ))}
        </div>
      </div>
      
      {/* Learning Column */}
      <div className="flex flex-col gap-6">
        <div>
          <h3 className="text-2xl font-semibold tracking-tight">Currently Learning</h3>
          <p className="text-sm text-muted-foreground mt-1">Expanding my technical horizons.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {aboutData.currentlyLearning.map((topic, idx) => (
            <LearningCard key={`learning-${idx}`} item={topic} />
          ))}
        </div>
      </div>
      
    </div>
  )
}
