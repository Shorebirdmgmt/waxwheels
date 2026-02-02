import { Phone, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative text-sidebar-foreground overflow-hidden bg-sidebar">
      {/* Background image with warm filter */}
      <div 
        className="absolute inset-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1974&auto=format&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "sepia(30%) brightness(0.5) contrast(1.1) saturate(1.2)"
        }}
        aria-hidden="true"
      />
      {/* Warm overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-amber-950/50" aria-hidden="true" />
      
      <div className="relative mx-auto max-w-6xl px-4 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Tagline */}
          <p className="font-mono text-xs tracking-[0.4em] uppercase text-sidebar-primary mb-4">
            Auto Detailing &bull; Car Audio &bull; Ocean City, MD
          </p>

          {/* Main heading */}
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold uppercase tracking-tight leading-none mb-6">
            From Sick<br />
            <span className="text-sidebar-primary">to Slick</span>
          </h1>

          {/* Subheading */}
          <p className="font-sans text-lg md:text-xl leading-relaxed text-sidebar-foreground/80 max-w-xl mb-8">
            Professional auto detailing and car audio installation by a craftsman who&apos;s been perfecting his trade for over 25 years. Your ride deserves the best.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="tel:+14102131154" 
              className="inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-mono text-base tracking-wide hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-5 h-5" />
              <span>Call (410) 213-1154</span>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center gap-3 border-2 border-sidebar-foreground/30 text-sidebar-foreground px-8 py-4 font-mono text-base tracking-wide hover:border-sidebar-foreground/60 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              <span>Get Directions</span>
            </a>
          </div>

          {/* Credentials */}
          <div className="flex flex-wrap gap-6 text-sidebar-foreground/60">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sidebar-primary" />
              <span className="font-mono text-xs tracking-wide uppercase">MECP Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sidebar-primary" />
              <span className="font-mono text-xs tracking-wide uppercase">GTECHNIQ Accredited</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-sidebar-primary" />
              <span className="font-mono text-xs tracking-wide uppercase">Detail King Craftsman</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sidebar-border to-transparent" />
    </section>
  )
}
