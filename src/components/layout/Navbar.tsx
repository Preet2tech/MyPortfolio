"use client"

import * as React from "react"
import { Container } from "./Container"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <a href="#hero" className="font-bold text-xl tracking-tight">
              Preet<span className="text-primary">.</span>
            </a>
          </div>

          <nav className="flex items-center gap-6 text-sm font-medium">
            <a href="#hero" className="transition-colors hover:text-foreground text-foreground/60">Hero</a>
            <a href="#about" className="transition-colors hover:text-foreground text-foreground/60">About</a>
            <a href="#services" className="transition-colors hover:text-foreground text-foreground/60">Services</a>
            <a href="#tools" className="transition-colors hover:text-foreground text-foreground/60">Tools</a>
            <a href="#experience" className="transition-colors hover:text-foreground text-foreground/60">Experience</a>
            <a href="#projects" className="transition-colors hover:text-foreground text-foreground/60">Projects</a>
            <a href="#contact" className="transition-colors hover:text-foreground text-foreground/60">Contact</a>
          </nav>
        </div>
      </Container>
    </header>
  )
}
