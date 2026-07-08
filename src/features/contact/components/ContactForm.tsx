"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Input, Textarea, Label, Button } from "@/components/ui"
import { Send, Loader2, CheckCircle2 } from "lucide-react"

type ContactFormProps = React.HTMLAttributes<HTMLFormElement>

type FormState = "idle" | "loading" | "success" | "error"

export function ContactForm({ className, ...props }: ContactFormProps) {
  const [formState, setFormState] = React.useState<FormState>("idle")
  const [errors, setErrors] = React.useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      projectType: formData.get("projectType") as string,
      message: formData.get("message") as string,
    }

    // Basic Validation
    const newErrors: Record<string, string> = {}
    if (!data.name.trim()) newErrors.name = "Name is required."
    if (!data.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Please enter a valid email address."
    }
    if (!data.subject.trim()) newErrors.subject = "Subject is required."
    if (!data.message.trim()) newErrors.message = "Message is required."
    else if (data.message.length < 10) newErrors.message = "Message must be at least 10 characters."

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    setErrors({})
    setFormState("loading")

    // Mock API Submission
    setTimeout(() => {
      setFormState("success")
    }, 1500)
  }

  if (formState === "success") {
    return (
      <div className={cn("flex flex-col items-center justify-center text-center p-12 bg-card border border-border rounded-3xl shadow-sm h-full", className)}>
        <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold tracking-tight mb-3">Transmission Sent</h3>
        <p className="text-muted-foreground mb-8">
          Thank you for reaching out. I&apos;ve received your message and will get back to you within 24-48 hours.
        </p>
        <Button 
          onClick={() => setFormState("idle")} 
          variant="outline" 
          className="rounded-full"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className={cn("flex flex-col gap-6 bg-card border border-border p-6 md:p-10 rounded-3xl shadow-sm", className)}
      {...props}
      noValidate
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name</Label>
          <Input 
            id="name" 
            name="name" 
            placeholder="John Doe" 
            disabled={formState === "loading"}
            className={cn(errors.name && "border-destructive focus-visible:ring-destructive")}
          />
          {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            placeholder="john@example.com" 
            disabled={formState === "loading"}
            className={cn(errors.email && "border-destructive focus-visible:ring-destructive")}
          />
          {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <Label htmlFor="projectType">Project Type</Label>
          <div className="relative">
            <select 
              id="projectType" 
              name="projectType" 
              suppressHydrationWarning
              disabled={formState === "loading"}
              className="flex h-12 w-full appearance-none rounded-xl border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors"
            >
              <option value="freelance">Freelance Project</option>
              <option value="collaboration">Collaboration</option>
              <option value="fulltime">Full-time Opportunity</option>
              <option value="other">Other Inquiry</option>
            </select>
            {/* Custom dropdown arrow */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-muted-foreground">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="subject">Subject</Label>
          <Input 
            id="subject" 
            name="subject" 
            placeholder="Let's build something..." 
            disabled={formState === "loading"}
            className={cn(errors.subject && "border-destructive focus-visible:ring-destructive")}
          />
          {errors.subject && <p className="text-xs text-destructive mt-1">{errors.subject}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message</Label>
        <Textarea 
          id="message" 
          name="message" 
          placeholder="Tell me about your project, goals, and timeline..." 
          disabled={formState === "loading"}
          className={cn("min-h-[160px]", errors.message && "border-destructive focus-visible:ring-destructive")}
        />
        {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
      </div>

      <div className="pt-2">
        <Button 
          type="submit" 
          disabled={formState === "loading"}
          className="w-full md:w-auto rounded-full px-8 py-6 text-sm h-auto group"
        >
          {formState === "loading" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Establishing Connection...
            </>
          ) : (
            <>
              Start a Project
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
