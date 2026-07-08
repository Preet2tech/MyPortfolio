import * as React from "react"
import { footerData, mainNavigation } from "@/content"
import { Container } from "./Container"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="w-full border-t bg-background py-12 md:py-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <h3 className="font-bold text-xl tracking-tight">Preet<span className="text-primary">.</span></h3>
            <p className="text-muted-foreground max-w-xs">
              {footerData.credits}
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="font-medium text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <span className="block">&copy; {footerData.copyrightYear}</span>
              </li>
              <li>
                <span className="block">Version {footerData.version}</span>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  )
}
