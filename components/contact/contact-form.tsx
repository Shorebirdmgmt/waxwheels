"use client"

import React from "react"

import { useState } from "react"
import { Send, Loader2 } from "lucide-react"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="py-12 text-center">
        <div className="w-16 h-16 bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Send className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-foreground mb-2">
          Message Sent
        </h3>
        <p className="font-sans text-sm text-muted-foreground mb-4">
          Thanks for reaching out! We&apos;ll get back to you soon.
        </p>
        <p className="font-mono text-sm text-muted-foreground">
          Need a faster response? Call us at{" "}
          <a href="tel:+14102131154" className="text-primary hover:underline">
            (410) 213-1154
          </a>
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label 
          htmlFor="name" 
          className="block font-mono text-xs tracking-wide uppercase text-muted-foreground mb-2"
        >
          Name <span className="text-primary">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-3 bg-background border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label 
          htmlFor="email" 
          className="block font-mono text-xs tracking-wide uppercase text-muted-foreground mb-2"
        >
          Email <span className="text-primary">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-3 bg-background border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {/* Subject */}
      <div>
        <label 
          htmlFor="subject" 
          className="block font-mono text-xs tracking-wide uppercase text-muted-foreground mb-2"
        >
          Subject <span className="text-primary">*</span>
        </label>
        <select
          id="subject"
          name="subject"
          required
          className="w-full px-4 py-3 bg-background border border-border font-sans text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        >
          <option value="">Select a topic...</option>
          <option value="detailing">Detailing Quote</option>
          <option value="audio">Car Audio Consultation</option>
          <option value="fleet">Fleet Services</option>
          <option value="other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label 
          htmlFor="message" 
          className="block font-mono text-xs tracking-wide uppercase text-muted-foreground mb-2"
        >
          Message <span className="text-primary">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 bg-background border border-border font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
          placeholder="Tell us about your vehicle and what you're looking for..."
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 font-mono text-sm tracking-wide uppercase hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            <span>Sending...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Send Message</span>
          </>
        )}
      </button>

      {/* Note */}
      <p className="font-mono text-xs text-muted-foreground/70 text-center">
        Prefer to talk? Call us directly at{" "}
        <a href="tel:+14102131154" className="text-primary hover:underline">
          (410) 213-1154
        </a>
      </p>
    </form>
  )
}
