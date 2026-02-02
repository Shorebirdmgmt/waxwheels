import { Phone, Clock, MapPin } from "lucide-react"
import Image from "next/image"

export function CTASection() {
  return (
    <section className="relative bg-sidebar text-sidebar-foreground overflow-hidden dark-worn">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop"
          alt="Car detail"
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-sidebar/90" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary mb-4">
              Ready to Get Started?
            </p>
            <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight mb-6">
              Let&apos;s Talk Details
            </h2>
            <p className="font-sans text-lg leading-relaxed text-sidebar-foreground/80 mb-8">
              Whether your ride needs a quick wash or a full restoration, we&apos;ve got you covered. Stop by the shop or give us a call — no appointment necessary for estimates.
            </p>
            <a 
              href="tel:+14102131154" 
              className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-8 py-4 font-mono text-lg tracking-wide hover:bg-primary/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>(410) 213-1154</span>
            </a>
          </div>

          {/* Info cards */}
          <div className="space-y-4">
            {/* Hours */}
            <div className="bg-sidebar-accent p-6 worn-edge">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-sidebar-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold uppercase tracking-tight mb-2">
                    Shop Hours
                  </h3>
                  <ul className="font-mono text-sm space-y-1 text-sidebar-foreground/80">
                    <li className="flex justify-between gap-8">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 5:00 PM</span>
                    </li>
                    <li className="flex justify-between gap-8">
                      <span>Saturday</span>
                      <span>9:00 AM - 1:00 PM</span>
                    </li>
                    <li className="flex justify-between gap-8">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="bg-sidebar-accent p-6 worn-edge">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-sidebar-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-serif text-lg font-bold uppercase tracking-tight mb-2">
                    Location
                  </h3>
                  <p className="font-sans text-sm text-sidebar-foreground/80 mb-2">
                    9935 Stephen Decatur Hwy, Unit 110<br />
                    Ocean City, MD 21842
                  </p>
                  <p className="font-mono text-xs text-sidebar-foreground/60">
                    Corner of RT50 & RT611 in Trader Lee&apos;s Village
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
