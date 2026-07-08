import * as React from "react"
import { PenTool, Fingerprint, Share2, Camera, Palette, HelpCircle, type LucideIcon } from "lucide-react"

interface ServiceIconProps extends React.SVGProps<SVGSVGElement> {
  name: string
}

const iconMap: Record<string, LucideIcon> = {
  PenTool,
  Fingerprint,
  Share2,
  Camera,
  Palette,
}

export function ServiceIcon({ name, className, ...props }: ServiceIconProps) {
  const Icon = iconMap[name] || HelpCircle

  return <Icon className={className} {...props} />
}
