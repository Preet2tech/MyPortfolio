import Link from 'next/link'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { EmptyState } from '@/components/ui/EmptyState'
import { Compass } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex flex-col bg-background selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main className="flex-1 flex items-center justify-center p-6 w-full pt-16 md:pt-24">
        <EmptyState 
          icon={<Compass className="h-10 w-10 text-muted-foreground" />}
          title="404 - Signal Lost"
          description="The transmission you are looking for has been lost in the void. It might have been moved or deleted."
          action={
            <Link 
              href="/"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Return to Base
            </Link>
          }
          className="max-w-xl w-full border-dashed"
        />
      </main>
      <Footer />
    </div>
  )
}
