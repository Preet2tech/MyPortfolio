import * as React from "react"
import { cn } from "@/lib/utils"
import { ContactCard } from "./ContactCard"
import { SocialLinks } from "./SocialLinks"
import { Clock, Send, Briefcase } from "lucide-react"
import type { Profile } from "@/types/content.types"
import Link from "next/link"

interface ContactInfoProps extends React.HTMLAttributes<HTMLDivElement> {
  profile: Profile
}

export function ContactInfo({ profile, className, ...props }: ContactInfoProps) {
  return (
    <div className={cn("flex flex-col h-full", className)} {...props}>
      <div className="mb-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6">
          Let&apos;s Build Something <span className="text-primary">Amazing</span> Together
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
          I&apos;m always open to discussing new ideas, creative collaborations, freelance opportunities, and exciting projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
        <ContactCard 
          icon={Send}
          title="Email"
          description={profile.email}
        />
        <ContactCard 
          icon={Clock}
          title="Response Time"
          description="Usually within 24–48 hours."
        />
        <ContactCard 
          icon={Briefcase}
          title="Availability"
          description="Available for freelance, internships and collaborations."
          className="sm:col-span-2"
        />
      </div>

      <div className="mt-auto pt-8 border-t border-border/50">
        <h4 className="text-sm font-semibold tracking-widest uppercase text-foreground mb-6">
          Connect Online
        </h4>
        <SocialLinks profile={profile} />
        
        {profile.resumeUrl && (
          <div className="mt-8">
            <Link 
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-muted/50 border border-border px-6 py-3 text-sm font-medium text-foreground hover:bg-muted transition-colors"
            >
              Download Resume
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
