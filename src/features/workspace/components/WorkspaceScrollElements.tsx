"use client"

import * as React from "react"
import { FloatingElements } from "./FloatingElements"
import { DesignComments } from "./DesignComments"
import { FloatingDesignWords } from "./FloatingDesignWords"

export function WorkspaceScrollElements() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-10">
      <FloatingElements />
      <FloatingDesignWords />
      <DesignComments />
    </div>
  )
}
