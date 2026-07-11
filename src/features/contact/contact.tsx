"use client"

import * as React from "react"
import { Section } from "@/components/layout/Section"
import { Container } from "@/components/layout/Container"
import { contactData, profileData } from "@/content"
import { Send, CheckCircle } from "lucide-react"
import {
  WorkspaceFrame,
  SelectionOutline,
  StickyNote,
  ConnectorLine,
  MeasurementGuide,
  PropertyChip,
  CommentBubble
} from "@/features/workspace/components"
import { m } from "framer-motion"

export function Contact() {
  const [hoveredForm, setHoveredForm] = React.useState(false)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    projectType: "Graphic Design",
    message: ""
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [submitted, setSubmitted] = React.useState(false)

  // Basic Form Validation Architecture
  const handleValidate = () => {
    const nextErrors: Record<string, string> = {}
    if (!formData.name.trim()) nextErrors.name = "Name is required"
    if (!formData.email.trim()) {
      nextErrors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      nextErrors.email = "Invalid email format"
    }
    if (!formData.message.trim()) nextErrors.message = "Message is required"
    
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (handleValidate()) {
      setSubmitted(true)
      // Reset form after successful submission logic
      setFormData({
        name: "",
        email: "",
        projectType: "Graphic Design",
        message: ""
      })
      setTimeout(() => setSubmitted(false), 5000)
    }
  }

  return (
    <Section id="contact" className="py-20 pb-28 relative overflow-hidden select-none">
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
                Desk: Project Proposals // contact_inbox
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight m-0 text-foreground">
                Let&apos;s Build <span className="font-light text-muted-foreground">Something Great</span>
              </h2>
            </div>
            <PropertyChip label="Availability" value="Open" variant="success" />
          </div>

          {/* Height measurement guideline */}
          <MeasurementGuide 
            type="horizontal" 
            label="spacing-gap: 48px" 
            length={170} 
            className="opacity-30 my-6 pl-4 pointer-events-none select-none" 
          />

          {/* Collaboration Desk Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
            
            {/* Left Column: Availability info, Open For, Socials (col-span-5) */}
            <div className="lg:col-span-5 space-y-8 relative group">
            
            {/* Comment bubble next to timezone availability details */}
            <div className="absolute -left-16 top-12 hidden xl:flex z-20 pointer-events-none select-none">
              <CommentBubble 
                author="Alex" 
                avatar="A" 
                text={`Usually replies ${contactData.responseTime}.`} 
                color="#0ACF83" 
                variant="reminder" 
              />
              <ConnectorLine 
                type="curved" 
                width={70} 
                height={20} 
                className="absolute -right-6 bottom-4 text-emerald-400 rotate-12" 
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-muted-foreground select-none">
                Collaboration Request
              </h3>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-sans font-medium m-0 max-w-sm">
                Drop your project brief onto my desk, or email me directly at{" "}
                <a href={`mailto:${contactData.email}`} className="text-primary hover:underline font-bold">
                  {contactData.email}
                </a>.
              </p>
            </div>

            {/* Open For Capabilities list */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground select-none">
                Open For
              </h4>
              <div className="flex flex-wrap gap-1.5 select-none">
                {["Freelance Work", "Internships", "Collaborations", "Personal Projects"].map(tag => (
                  <PropertyChip key={tag} label={tag} variant="default" />
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3 pt-4 border-t border-border/40 max-w-xs">
              <h4 className="font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground select-none">
                Desk Directories
              </h4>
              <div className="flex flex-col gap-2">
                {Object.entries(profileData.socials).map(([key, value]) => (
                  <a
                    key={key}
                    href={value}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono font-medium hover:text-foreground text-muted-foreground transition-colors uppercase tracking-wider flex items-center justify-between"
                  >
                    <span>{key}</span>
                    <span>➔</span>
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form in WorkspaceFrame & SelectionOutline (col-span-7) */}
          <div className="lg:col-span-7 relative group">
            
            {/* Pinned Yellow Sticky Note */}
            <div className="absolute -right-16 -top-24 hidden xl:block z-20 pointer-events-none select-none">
              <StickyNote 
                color="yellow" 
                text={`Status: Active. Timezone: ${contactData.availabilityTimezone}. Leave a brief.`} 
                author="Preet" 
                rotate={3}
                width={120}
                height={120}
              />
              <ConnectorLine 
                type="curved" 
                width={70} 
                height={20} 
                className="absolute -left-8 bottom-3 text-yellow-400 rotate-90" 
              />
            </div>

            <div
              onMouseEnter={() => setHoveredForm(true)}
              onMouseLeave={() => setHoveredForm(false)}
            >
              <SelectionOutline 
                label="Component: Form [Project Proposal]" 
                isSelected={hoveredForm} 
                isHovered={hoveredForm}
              >
                <WorkspaceFrame 
                  title="Frame: Project Brief Form // contact_post" 
                  showBorders={!hoveredForm}
                  className="p-6 md:p-8 bg-background/50 backdrop-blur-[1px] shadow-sm hover:shadow-2xl transition-all duration-200"
                >
                  {submitted ? (
                    <div className="py-16 text-center space-y-4">
                      <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto animate-bounce" />
                      <div className="space-y-1">
                        <h4 className="text-lg font-bold text-foreground">Brief Placed on Desk!</h4>
                        <p className="text-xs text-muted-foreground font-sans">
                          Thank you. I will inspect your details and reply shortly.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 font-sans">
                      
                      {/* Name field */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-name" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground select-none">
                          Your Name
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className="w-full text-sm rounded-lg border border-border bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                          placeholder="e.g. Emma"
                        />
                        {errors.name && (
                          <span className="block text-[9px] font-mono text-red-500 select-none">{errors.name}</span>
                        )}
                      </div>

                      {/* Email field */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-email" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground select-none">
                          Your Email
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className="w-full text-sm rounded-lg border border-border bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                          placeholder="emma@example.com"
                        />
                        {errors.email && (
                          <span className="block text-[9px] font-mono text-red-500 select-none">{errors.email}</span>
                        )}
                      </div>

                      {/* Project Type Dropdown */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-project-type" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground select-none">
                          Project Type
                        </label>
                        <select
                          id="form-project-type"
                          value={formData.projectType}
                          onChange={e => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full text-sm rounded-lg border border-border bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all"
                        >
                          <option>Graphic Design</option>
                          <option>Brand Identity</option>
                          <option>Social Media Design</option>
                          <option>Photo Editing</option>
                          <option>UI Design (Learning)</option>
                        </select>
                      </div>

                      {/* Message Messagearea */}
                      <div className="space-y-1.5">
                        <label htmlFor="form-message" className="block text-[10px] font-mono font-bold uppercase tracking-wider text-muted-foreground select-none">
                          Project Brief / Message
                        </label>
                        <textarea
                          id="form-message"
                          rows={4}
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          className="w-full text-sm rounded-lg border border-border bg-background px-3 py-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent transition-all resize-none"
                          placeholder="Details about your timeline, scope, or idea..."
                        />
                        {errors.message && (
                          <span className="block text-[9px] font-mono text-red-500 select-none">{errors.message}</span>
                        )}
                      </div>

                      {/* Submit action */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-foreground text-background text-sm font-semibold tracking-tight transition-all py-2.5 px-4 hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        >
                          <span>Drop Brief</span>
                          <Send className="w-3.5 h-3.5" />
                        </button>
                      </div>

                    </form>
                  )}
                </WorkspaceFrame>
              </SelectionOutline>
            </div>
          </div>

        </div>
        </m.div>
      </Container>
    </Section>
  )
}
