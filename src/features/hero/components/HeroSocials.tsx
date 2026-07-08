import * as React from "react"
import Link from "next/link"
import { Icons } from "@/components/ui/icons"
import { cn } from "@/lib/utils"
import type { Profile } from "@/types/content.types"

interface HeroSocialsProps extends React.HTMLAttributes<HTMLDivElement> {
  profile: Profile
}

export function HeroSocials({ profile, className, ...props }: HeroSocialsProps) {
  const { socials, email } = profile
  const iconProps = { className: "h-5 w-5" }

  return (
    <div className={cn("flex items-center gap-4 mt-8", className)} {...props}>
      <span className="text-sm font-medium text-muted-foreground mr-2">Connect:</span>
      
      {socials.linkedin && (
        <Link 
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="LinkedIn Profile"
        >
          <Icons.linkedin {...iconProps} />
        </Link>
      )}
      
      {socials.x && (
        <Link 
          href={socials.x}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="X Profile"
        >
          <Icons.x {...iconProps} />
        </Link>
      )}
      
      {email && (
        <Link 
          href={`mailto:${email}`}
          className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          aria-label="Email Me"
        >
          <Icons.email {...iconProps} />
        </Link>
      )}
    </div>
  )
}
