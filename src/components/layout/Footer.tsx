import * as React from "react"
import { Container } from "./Container"
import { footerData } from "@/content"

export function Footer() {
  return (
    <footer className="w-full bg-transparent py-12 select-none" aria-label="Workspace Footer">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-muted-foreground/50">
        <div>
          {"DESIGNED BY PREET PATEL // "}{footerData.copyrightYear}{" // V"}{footerData.version}
        </div>
        <div className="uppercase tracking-widest">
          Made with curiosity.
        </div>
      </Container>
    </footer>
  )
}
