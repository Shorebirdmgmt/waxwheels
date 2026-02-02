import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-sidebar text-sidebar-foreground dark-worn">
      {/* Main footer */}
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold tracking-tight uppercase mb-2">
              Wax on Wheels
            </h3>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-sidebar-foreground/60 mb-4">
              From Sick to Slick
            </p>
            <p className="font-sans text-sm leading-relaxed text-sidebar-foreground/70">
              Professional auto detailing and car audio installation serving Ocean City, Maryland and the surrounding areas since 2013.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-4 text-sidebar-foreground/60">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Detailing Services" },
                { href: "/audio", label: "Audio & Electronics" },
                { href: "/about", label: "About Matt" },
                { href: "/contact", label: "Contact Us" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="font-sans text-sm text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-sm uppercase tracking-widest mb-4 text-sidebar-foreground/60">
              Visit the Shop
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-sidebar-primary shrink-0" />
                <span className="font-sans text-sm text-sidebar-foreground/80">
                  9935 Stephen Decatur Hwy, Unit 110<br />
                  Ocean City, MD 21842<br />
                  <span className="text-sidebar-foreground/60">(Corner of RT50 & RT611 in Trader Lee&apos;s Village)</span>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sidebar-primary shrink-0" />
                <a href="tel:+14102131154" className="font-mono text-sm text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  (410) 213-1154
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sidebar-primary shrink-0" />
                <a href="mailto:waxwheels@gmail.com" className="font-mono text-sm text-sidebar-foreground/80 hover:text-sidebar-primary transition-colors">
                  waxwheels@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-1 text-sidebar-primary shrink-0" />
                <span className="font-sans text-sm text-sidebar-foreground/80">
                  Mon-Fri: 9am - 5pm<br />
                  Saturday: 9am - 1pm<br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-sidebar-border">
        <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-mono text-xs text-sidebar-foreground/50">
            &copy; {new Date().getFullYear()} Wax on Wheels. All rights reserved.
          </p>
          <p className="font-mono text-xs text-sidebar-foreground/50">
            MECP Certified &bull; GTECHNIQ Accredited &bull; Detail King Craftsman
          </p>
        </div>
      </div>
    </footer>
  )
}
