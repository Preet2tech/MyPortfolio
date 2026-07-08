import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { profileData, heroData } from "@/content"
import {
  HeroBackground,
  HeroContent,
  HeroBadge,
  HeroText,
  HeroActions,
  HeroSocials,
  HeroImage
} from "./components"

export function Hero() {
  return (
    <Section id="hero" className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 pb-16">
      <HeroBackground />
      
      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Content (7 cols on desktop) */}
          <HeroContent className="lg:col-span-7 order-2 lg:order-1">
            <HeroBadge label="Mission Status: Open to Work" />
            
            <HeroText profile={profileData} hero={heroData} />
            
            <HeroActions 
              primaryLabel="Start a Project" 
              primaryHref="#start-project" 
              secondaryLabel="View My Work" 
              secondaryHref="#work" 
            />
            
            <HeroSocials profile={profileData} />
          </HeroContent>
          
          {/* Right Column: Image (5 cols on desktop) */}
          <div className="lg:col-span-5 order-1 lg:order-2 w-full max-w-md mx-auto lg:max-w-none">
            <HeroImage alt={`Portrait of ${profileData.name}`} />
          </div>
          
        </div>
      </Container>
    </Section>
  )
}
