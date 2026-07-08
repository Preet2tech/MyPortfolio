import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { SectionHeader } from "@/components/layout/SectionHeader"
import { servicesData } from "@/content"
import { ServiceGrid } from "./components"

export function Services() {
  return (
    <Section id="services" className="py-24 md:py-32 bg-muted/30">
      <Container>
        <SectionHeader 
          title="My Services" 
          subtitle="What I can do for you and your brand."
          alignment="center"
        />
        
        <ServiceGrid services={servicesData} className="mt-8" />
        
      </Container>
    </Section>
  )
}
