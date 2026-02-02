"use client"

import Link from "next/link"
import { useState } from "react"
import { Phone, Menu, X } from "lucide-react"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/audio", label: "Audio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-sidebar text-sidebar-foreground dark-worn">
      {/* Top bar with phone */}
      <div className="border-b border-sidebar-border">
        <div className="mx-auto max-w-6xl px-4 py-2 flex items-center justify-between">
          <p className="font-mono text-xs tracking-widest uppercase text-sidebar-foreground/70">
            Ocean City, MD — Est. 2013
          </p>
          <a 
            href="tel:+14102131154" 
            className="flex items-center gap-2 font-mono text-sm tracking-wide text-sidebar-primary hover:text-sidebar-primary/80 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>(410) 213-1154</span>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="mx-auto max-w-6xl px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-tight uppercase text-sidebar-foreground">
                Wax on Wheels
              </span>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-sidebar-foreground/60">
                Auto Detailing & Car Audio
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  className="font-serif text-sm uppercase tracking-widest text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-sidebar-foreground"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <ul className="md:hidden mt-4 pt-4 border-t border-sidebar-border flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link 
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block font-serif text-base uppercase tracking-widest text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  )
}
