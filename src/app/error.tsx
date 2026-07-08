"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex h-[80vh] w-full flex-col items-center justify-center space-y-4 px-4 text-center">
      <h2 className="text-2xl font-bold tracking-tight">System Error</h2>
      <p className="text-muted-foreground">
        An unexpected error occurred in the interface.
      </p>
      <Button onClick={() => reset()} variant="default">
        Reboot System
      </Button>
    </div>
  )
}
