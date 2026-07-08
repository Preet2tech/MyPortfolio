"use client"

import { useState, useEffect } from "react"

export function useActiveSection(sectionIds: string[]) {
  const [activeId, setActiveId] = useState<string>("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisible = 0
        let mostVisibleId = ""
        
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > maxVisible) {
            maxVisible = entry.intersectionRatio
            mostVisibleId = entry.target.id
          }
        })
        
        // If we found a visible section and it's heavily intersecting, or if there's no active ID, set it
        if (mostVisibleId && maxVisible > 0.3) {
          setActiveId(mostVisibleId)
        }
      },
      {
        rootMargin: "-20% 0px -40% 0px", // Detect when section is roughly in the middle 40% of screen
        threshold: [0, 0.25, 0.5, 0.75, 1], // Trigger multiple times for better ratio calculation
      }
    )

    sectionIds.forEach((id) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [sectionIds])

  return activeId
}
