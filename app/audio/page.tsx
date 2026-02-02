import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Radio, Volume2, Tv, Sliders, Speaker, Music } from "lucide-react"

export const metadata: Metadata = {
  title: "Car Audio & Electronics | Wax on Wheels | Ocean City, MD",
  description: "MECP certified car audio installation with 25+ years experience. Radios, amplifiers, speakers, subwoofers, and custom installations. Call (410) 213-1154 for a consultation.",
}

const audioServices = [
  {
    icon: Radio,
    title: "Head Units & Radios",
    description: "Factory and aftermarket radio installation, Apple CarPlay, Android Auto, and Bluetooth integration.",
  },
  {
    icon: Volume2,
    title: "Amplifiers",
    description: "Proper amplifier installation with clean wiring, optimal gain settings, and professional tuning.",
  },
  {
    icon: Speaker,
    title: "Speakers",
    description: "Component and coaxial speaker upgrades, door panel modifications, and sound deadening.",
  },
  {
    icon: Music,
    title: "Subwoofers",
    description: "Subwoofer installation, custom enclosures, and bass optimization for any vehicle.",
  },
  {
    icon: Tv,
    title: "Video & Displays",
    description: "In-dash screens, headrest monitors, flip-down displays, and rear entertainment systems.",
  },
  {
    icon: Sliders,
    title: "Equalizers & Processors",
    description: "DSP installation, EQ tuning, and sound processor integration for audiophile-grade sound.",
  },
]

const expertise = [
  "Factory radio replacements",
  "Aftermarket system design",
  "Component speaker upgrades",
  "Custom subwoofer enclosures",
  "Amplifier installation & tuning",
  "Sound deadening & treatment",
  "Backup camera installation",
  "Bluetooth & streaming integration",
  "Troubleshooting & repairs",
  "Wiring corrections",
]

export default function AudioPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-sidebar-foreground py-16 md:py-24 bg-sidebar overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "sepia(30%) brightness(0.5) contrast(1.1) saturate(1.2)"
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-amber-950/50" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary mb-4">
              MECP Certified &bull; 25+ Years Experience
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
              Audio &<br />Electronics
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-sidebar-foreground/80 max-w-2xl">
              Professional car audio installation by a certified technician who&apos;s passionate about sound. From simple radio swaps to full custom systems.
            </p>
          </div>
        </section>

        {/* MECP Certification */}
        <section className="bg-card py-12 md:py-16 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-background worn-edge">
              <div className="shrink-0">
                <div className="w-24 h-24 bg-primary/10 flex items-center justify-center">
                  <span className="font-serif text-3xl font-bold text-primary">MECP</span>
                </div>
              </div>
              <div>
                <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-foreground mb-2">
                  MECP Certified Installer
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  Matt is a Mobile Electronics Certified Professional — the industry standard for car audio installation. This certification means your installation will be done right: proper wiring, secure mounting, and optimal tuning. No shortcuts, no hack jobs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="bg-background py-16 md:py-24 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="mb-12">
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                What We Install
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
                Audio Services
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {audioServices.map((service) => (
                <div 
                  key={service.title}
                  className="p-6 bg-card worn-edge"
                >
                  <service.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Expertise list */}
        <section className="bg-sidebar text-sidebar-foreground py-16 md:py-24 dark-worn">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary mb-4">
                  25+ Years of Experience
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                  Built to Sound Great
                </h2>
                <p className="font-sans text-sidebar-foreground/80 leading-relaxed mb-6">
                  Whether you&apos;re looking to upgrade your factory system, add bass, or build a competition-grade setup, Matt has the skills and experience to make it happen. Trained at The Installer Institute of Daytona Beach in advanced enclosure design and fabrication.
                </p>
                <a 
                  href="tel:+14102131154" 
                  className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3 font-mono text-sm tracking-wide hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call for Consultation</span>
                </a>
              </div>
              <div className="bg-sidebar-accent p-8 worn-edge">
                <h3 className="font-serif text-lg font-bold uppercase tracking-tight mb-6 pb-4 border-b border-sidebar-border">
                  Our Expertise Includes
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((item) => (
                    <li 
                      key={item}
                      className="flex items-center gap-3 font-mono text-sm text-sidebar-foreground/80"
                    >
                      <div className="w-1.5 h-1.5 bg-primary shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Consultation CTA */}
        <section className="bg-muted py-16 md:py-20 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-4">
                Every Vehicle is Different
              </h2>
              <p className="font-sans text-muted-foreground leading-relaxed mb-8">
                Call or stop by the shop for a consultation on your specific application. We&apos;ll discuss your goals, your vehicle, and your budget to design the perfect system for you.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                  href="tel:+14102131154" 
                  className="inline-flex items-center gap-3 bg-foreground text-background px-8 py-4 font-mono text-lg tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  <Phone className="w-6 h-6" />
                  <span>(410) 213-1154</span>
                </a>
                <span className="font-mono text-sm text-muted-foreground">
                  or visit us in Ocean City
                </span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
