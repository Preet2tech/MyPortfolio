"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { mainNavigation } from "@/content"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Container } from "./Container"
import { useActiveSection } from "@/hooks/useActiveSection"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  
  // Extract all section IDs from our navigation config, removing the '#'
  const sectionIds = mainNavigation
    .filter((item) => item.href.startsWith("#"))
    .map((item) => item.href.substring(1))

  const activeSection = useActiveSection(sectionIds)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="font-bold text-xl tracking-tight" onClick={closeMenu}>
              Preet<span className="text-primary">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {mainNavigation.map((item) => {
              const isActive = item.href === `#${activeSection}` || (item.href === "/" && activeSection === "")
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "transition-colors hover:text-foreground",
                    isActive ? "text-foreground font-semibold" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
            <ThemeToggle />
          </nav>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <ThemeToggle />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Toggle menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </Container>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-b bg-background">
          <Container>
            <nav className="flex flex-col space-y-4 py-6 text-sm font-medium">
              {mainNavigation.map((item) => {
                const isActive = item.href === `#${activeSection}` || (item.href === "/" && activeSection === "")
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={cn(
                      "transition-colors hover:text-foreground block px-2 py-1 rounded-md",
                      isActive ? "bg-accent text-accent-foreground font-semibold" : "text-foreground/80"
                    )}
                  >
                    {item.label}
                  </Link>
                )
              })}
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}
