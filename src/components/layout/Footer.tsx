import * as React from "react"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-8">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div>&copy; {new Date().getFullYear()} Preet. All rights reserved.</div>
        <div className="font-mono text-xs">Footer Placeholder</div>
      </Container>
    </footer>
  )
}
