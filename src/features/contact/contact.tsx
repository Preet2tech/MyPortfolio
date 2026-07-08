import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { ContactInfo, ContactForm } from "./components"
import { profileData } from "@/content"

export function Contact() {
  return (
    <Section id="contact" className="py-24 md:py-32 bg-muted/30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          <ContactInfo profile={profileData} />
          
          <div className="relative w-full">
            {/* Optional subtle glow behind the form for premium feel */}
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full translate-y-12 -z-10" />
            <ContactForm />
          </div>
        </div>
      </Container>
    </Section>
  )
}
