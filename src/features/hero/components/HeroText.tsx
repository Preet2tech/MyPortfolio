import * as React from "react"
import { cn } from "@/lib/utils"
import type { HeroData, Profile } from "@/types/content.types"

interface HeroTextProps extends React.HTMLAttributes<HTMLDivElement> {
  profile: Profile
  hero: HeroData
}

export function HeroText({ profile, hero, className, ...props }: HeroTextProps) {
  return (
    <div className={cn("flex flex-col gap-4", className)} {...props}>
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground">
        {profile.name}
      </h1>
      
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-primary mt-2">
        {profile.role}
      </h2>
      
      <p className="mt-4 max-w-[600px] text-lg sm:text-xl text-muted-foreground leading-relaxed">
        {hero.description}
      </p>
    </div>
  )
}
