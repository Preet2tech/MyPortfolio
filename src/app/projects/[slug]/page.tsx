import { Metadata } from "next"
import { notFound } from "next/navigation"
import { projectsData } from "@/content"
import { CaseStudy } from "@/features/case-study"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"

interface PageProps {
  params: {
    slug: string
  }
}

// Generate static routes for all projects at build time
export function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }))
}

// Generate dynamic SEO metadata based on the project data
export function generateMetadata({ params }: PageProps): Metadata {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Preet Patel`,
    description: project.shortDescription,
    openGraph: {
      title: project.title,
      description: project.shortDescription,
      images: [
        {
          url: project.coverImage || project.thumbnail,
          width: 1200,
          height: 630,
          alt: project.title,
        }
      ],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.shortDescription,
      images: [project.coverImage || project.thumbnail],
    },
  }
}

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex-1 w-full pt-16 md:pt-24">
        <CaseStudy slug={params.slug} />
      </main>
      <Footer />
    </div>
  )
}
