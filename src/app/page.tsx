import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { WorkspaceCanvas } from "@/features/workspace/components/WorkspaceCanvas"
import { WorkspaceScrollElements } from "@/features/workspace/components/WorkspaceScrollElements"
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
      {/* Infinite fixed canvas grid background & collaborator cursors */}
      <WorkspaceCanvas />

      <Navbar />
      
      {/* Scrollable canvas container where sections and design elements reside together */}
      <div className="flex-grow w-full relative z-10 flex flex-col">
        {/* Whiteboard scrolling annotations, sticky notes, and guides */}
        <WorkspaceScrollElements />
        
        <main className="w-full relative z-20">
          <Hero />
          <About />
          <Services />
          <Tools />
          <Experience />
          <Projects />
          <Contact />
        </main>
      </div>

      <Footer />
    </>
  )
}
