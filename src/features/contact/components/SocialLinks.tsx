import * as React from "react"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Icons } from "@/components/ui/icons"
import { Mail } from "lucide-react"
import type { Profile } from "@/types/content.types"

interface SocialLinksProps extends React.HTMLAttributes<HTMLDivElement> {
  profile: Profile
}

export function SocialLinks({ profile, className, ...props }: SocialLinksProps) {
  const { socials, email } = profile

  return (
    <div className={cn("flex flex-wrap items-center gap-3", className)} {...props}>
      <Link 
        href={`mailto:${email}`}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
        aria-label="Email"
      >
        <Mail className="h-5 w-5" />
      </Link>
      
      {socials.linkedin && (
        <Link 
          href={socials.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label="LinkedIn"
        >
          <Icons.linkedin className="h-5 w-5" />
        </Link>
      )}

      {socials.x && (
        <Link 
          href={socials.x}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label="X (Twitter)"
        >
          <Icons.x className="h-5 w-5" />
        </Link>
      )}
      
      {socials.github && (
        <Link 
          href={socials.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label="GitHub"
        >
          <Icons.github className="h-5 w-5 fill-current" />
        </Link>
      )}
      
      {socials.behance && (
        <Link 
          href={socials.behance}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
          aria-label="Behance"
        >
          <Icons.figma className="h-5 w-5" />
        </Link>
      )}
    </div>
  )
}
