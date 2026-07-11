import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"

export function Hero() {
  return (
    <Section id="hero" className="py-32 border-b flex items-center min-h-[50vh]">
      <Container>
        <h1 className="text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
          Hero Section Placeholder
        </h1>
      </Container>
    </Section>
  )
}
