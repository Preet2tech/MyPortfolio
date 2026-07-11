"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { toolsData } from "@/content"
import {
  Image,
  Palette,
  Sparkles,
  Code,
  GitBranch,
  Terminal,
  Database,
  BarChart3,
  Layers
} from "lucide-react"
import {
  WorkspaceFrame,
  SelectionOutline,
  StickyNote,
  ConnectorLine,
  MeasurementGuide,
  PropertyChip,
  CommentBubble
} from "@/features/workspace/components"
import { useWorkspace } from "@/features/workspace/providers/workspace-provider"
import { m } from "framer-motion"

// Icon mapping dictionary
const iconMap = {
  figma: Layers,
  photoshop: Image,
  illustrator: Palette,
  canva: Sparkles,
  vscode: Code,
  git: GitBranch,
  github: GitBranch,
  python: Terminal,
  sql: Database,
  powerbi: BarChart3
}

export function Tools() {
  const [hoveredToolId, setHoveredToolId] = React.useState<string | null>(null)
  const { activeHighlightId } = useWorkspace()

  // Group tools by category
  const designTools = toolsData.filter(t => t.category === "Design")
  const devTools = toolsData.filter(t => t.category === "Development")
  const learningTools = toolsData.filter(t => t.category === "Learning")

  return (
    <Section id="tools" className="py-20 relative overflow-hidden select-none">
      <Container>
        
        <m.div
          initial={{ opacity: 0.85, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-120px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Section Header */}
          <div className="flex flex-wrap items-center justify-between gap-6 mb-16 border-b border-border/40 pb-6">
            <div className="space-y-1">
              <div className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-widest">
                Workspace: Designer Desk // tool_chest
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight m-0 text-foreground">
                Tools I <span className="font-light text-muted-foreground">Work With</span>
              </h2>
            </div>
            <PropertyChip label="Release" value="v1.4" variant="info" />
          </div>

          {/* Height Measurement spacing guide */}
          <MeasurementGuide 
            type="horizontal" 
            label="offset: 48px" 
            length={160} 
            className="opacity-30 my-6 pl-4 pointer-events-none select-none" 
          />

          {/* Toolbox categories grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start relative z-10">
            
            {/* 1. Design Category Frame (lg:col-span-5) */}
            <div className="lg:col-span-5 relative group">
            
            {/* Comment bubble next to Figma */}
            <CommentBubble 
              author="Sophia" 
              avatar="S" 
              text="Love the Figma workspace structure!" 
              color="#A259FF" 
              variant="review" 
              className="absolute -left-16 -top-16 hidden xl:flex pointer-events-none select-none"
            />
            {/* Connector pointing to Figma card */}
            <ConnectorLine 
              type="curved" 
              width={70} 
              height={30} 
              className="absolute -left-6 -top-4 text-purple-400 rotate-180 hidden xl:block" 
            />

            <WorkspaceFrame 
              title="Frame: Design Toolbox // creative_suite" 
              className="p-6 space-y-6"
              isSelected={hoveredToolId === "figma" || activeHighlightId === "figma"}
            >
              <div className="space-y-1 select-none">
                <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                  Suite ➔ Design & Layout
                </span>
                <p className="text-xs text-muted-foreground m-0">
                  Visual canvas, design drafting, vector logos and post layout tools.
                </p>
              </div>

              <div className="space-y-3">
                {designTools.map(tool => {
                  const Icon = iconMap[tool.iconName as keyof typeof iconMap] || Layers
                  const isHovered = hoveredToolId === tool.id
                  const isSelected = isHovered || activeHighlightId === tool.id
                  return (
                    <div
                      key={tool.id}
                      onMouseEnter={() => setHoveredToolId(tool.id)}
                      onMouseLeave={() => setHoveredToolId(null)}
                    >
                      <SelectionOutline isSelected={isSelected} isHovered={isSelected} label={`Asset: ${tool.name}`}>
                        <div className="flex items-center justify-between p-3 border border-border/70 rounded bg-background/50 hover:bg-background/80 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-primary/5 text-primary">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-foreground">{tool.name}</div>
                              <div className="text-[10px] text-muted-foreground">{tool.description}</div>
                            </div>
                          </div>
                          <PropertyChip label={tool.experienceLevel || "Expert"} variant="success" />
                        </div>
                      </SelectionOutline>
                    </div>
                  )
                })}
              </div>
            </WorkspaceFrame>
          </div>

          {/* 2. Development Category Frame (lg:col-span-4) */}
          <div className="lg:col-span-4 relative group">
            
            {/* Sticky note next to VS Code */}
            <div className="absolute -right-20 -top-20 hidden xl:block z-20 pointer-events-none select-none">
              <StickyNote 
                color="blue" 
                text="Primary editor. Fully customized setup." 
                author="Preet" 
                rotate={-4}
                width={120}
                height={120}
              />
              {/* Connector linking sticky note to VS Code */}
              <ConnectorLine 
                type="curved" 
                width={60} 
                height={25} 
                className="absolute -left-10 bottom-2 text-blue-400 rotate-90" 
              />
            </div>

            <WorkspaceFrame 
              title="Frame: Coding Setup // dev_stack" 
              className="p-6 space-y-6"
              isSelected={hoveredToolId === "vscode" || activeHighlightId === "vscode"}
            >
              <div className="space-y-1 select-none">
                <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                  Stack ➔ Development
                </span>
                <p className="text-xs text-muted-foreground m-0">
                  Programming editors, local version tracking, and code repositories.
                </p>
              </div>

              <div className="space-y-3">
                {devTools.map(tool => {
                  const Icon = iconMap[tool.iconName as keyof typeof iconMap] || Layers
                  const isHovered = hoveredToolId === tool.id
                  const isSelected = isHovered || activeHighlightId === tool.id
                  return (
                    <div
                      key={tool.id}
                      onMouseEnter={() => setHoveredToolId(tool.id)}
                      onMouseLeave={() => setHoveredToolId(null)}
                    >
                      <SelectionOutline isSelected={isSelected} isHovered={isSelected} label={`Asset: ${tool.name}`}>
                        <div className="flex items-center justify-between p-3 border border-border/70 rounded bg-background/50 hover:bg-background/80 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-primary/5 text-primary">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-foreground">{tool.name}</div>
                              <div className="text-[10px] text-muted-foreground">{tool.description}</div>
                            </div>
                          </div>
                          <PropertyChip label={tool.experienceLevel || "Expert"} variant="info" />
                        </div>
                      </SelectionOutline>
                    </div>
                  )
                })}
              </div>
            </WorkspaceFrame>
          </div>

          {/* 3. Learning Category Frame (lg:col-span-3) */}
          <div className="lg:col-span-3">
            <WorkspaceFrame 
              title="Frame: Analytics Sandbox // learning_list" 
              className="p-6 space-y-6"
              isSelected={hoveredToolId === "python" || hoveredToolId === "sql" || activeHighlightId === "python" || activeHighlightId === "sql"}
            >
              <div className="space-y-1 select-none">
                <span className="font-mono text-[9px] font-bold text-muted-foreground uppercase tracking-wider">
                  Skills ➔ Future Growth
                </span>
                <p className="text-xs text-muted-foreground m-0">
                  Data science scripting, database logic, and visual analytics dashboards.
                </p>
              </div>

              <div className="space-y-3">
                {learningTools.map(tool => {
                  const Icon = iconMap[tool.iconName as keyof typeof iconMap] || Layers
                  const isHovered = hoveredToolId === tool.id
                  const isSelected = isHovered || activeHighlightId === tool.id
                  return (
                    <div
                      key={tool.id}
                      onMouseEnter={() => setHoveredToolId(tool.id)}
                      onMouseLeave={() => setHoveredToolId(null)}
                    >
                      <SelectionOutline isSelected={isSelected} isHovered={isSelected} label={`Asset: ${tool.name}`}>
                        <div className="flex items-center justify-between p-3 border border-border/70 rounded bg-background/50 hover:bg-background/80 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="p-2 rounded bg-primary/5 text-primary">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <div className="text-sm font-bold text-foreground">{tool.name}</div>
                              <div className="text-[10px] text-muted-foreground">{tool.description}</div>
                            </div>
                          </div>
                          <PropertyChip label="Learning" variant="warning" />
                        </div>
                      </SelectionOutline>
                    </div>
                  )
                })}
              </div>
            </WorkspaceFrame>
          </div>

        </div>

        </m.div>
      </Container>
    </Section>
  )
}
