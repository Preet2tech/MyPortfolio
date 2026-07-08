import * as React from "react"
import { 
  Terminal, 
  GitBranch, 
  Database, 
  BarChart4, 
  Image as ImageIcon,
  PenTool, 
  LayoutTemplate,
  FileCode2,
  Box
} from "lucide-react"
import { Icons } from "@/components/ui/icons"

interface ToolIconProps extends React.SVGProps<SVGSVGElement> {
  name: string
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const iconMap: Record<string, any> = {
  figma: Icons.figma,
  github: Icons.github,
  vscode: Terminal,
  git: GitBranch,
  sql: Database,
  powerbi: BarChart4,
  photoshop: ImageIcon,
  illustrator: PenTool,
  canva: LayoutTemplate,
  python: FileCode2,
}

export function ToolIcon({ name, className, ...props }: ToolIconProps) {
  const Icon = iconMap[name.toLowerCase()] || Box

  return <Icon className={className} {...props} />
}
