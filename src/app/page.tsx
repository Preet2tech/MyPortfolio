import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import {
  Hero,
  About,
  Services,
  Tools,
  Experience,
  Projects,
  Contact,
} from "@/components/sections"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Services />
        <Tools />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
