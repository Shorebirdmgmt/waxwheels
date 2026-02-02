import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Award, GraduationCap, Wrench, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About Matt Harbaugh | Wax on Wheels | Ocean City, MD",
  description: "Meet Matt Harbaugh - MECP Certified, GTECHNIQ Accredited, Detail King Craftsman. 25+ years of auto detailing and car audio experience. Trained at The Installer Institute.",
}

const certifications = [
  {
    icon: Award,
    title: "MECP Certified",
    description: "Mobile Electronics Certified Professional — the industry standard for car audio installation excellence.",
  },
  {
    icon: Award,
    title: "GTECHNIQ Accredited",
    description: "Authorized installer of GTECHNIQ professional-grade ceramic coating products.",
  },
  {
    icon: Award,
    title: "Detail King Craftsman",
    description: "Auto Detailing Craftsman certification demonstrating mastery of detailing techniques.",
  },
]

const training = [
  "Formal mobile electronics installation",
  "Mobile security systems",
  "Navigation system integration",
  "Advanced enclosure design",
  "Advanced fabrication techniques",
  "Ceramic coating application",
  "Paint correction methods",
  "Interior restoration",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-sidebar-foreground py-16 md:py-24 bg-sidebar overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1983&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "sepia(30%) brightness(0.5) contrast(1.1) saturate(1.2)"
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-amber-950/50" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary mb-4">
              The Man Behind the Machine
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
              About Matt
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-sidebar-foreground/80 max-w-2xl">
              Owner, craftsman, and the guy who&apos;ll probably answer when you call. Matt Harbaugh has been making vehicles look and sound their best for over 25 years.
            </p>
          </div>
        </section>

        {/* Story section */}
        <section className="bg-background py-16 md:py-24 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Image */}
              <div className="relative aspect-[4/5] lg:sticky lg:top-8">
                <div 
                  className="absolute inset-0 bg-cover bg-center worn-edge"
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1632823471565-1ecdf5c6da72?q=80&w=1974&auto=format&fit=crop')" }}
                  role="img"
                  aria-label="Auto detailing work"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary p-4 md:p-6">
                  <p className="font-serif text-3xl md:text-4xl font-bold text-primary-foreground">25+</p>
                  <p className="font-mono text-xs tracking-wide text-primary-foreground/80">Years</p>
                </div>
              </div>

              {/* Content */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-6">
                  Wired to Wow You
                </h2>
                <div className="space-y-6 font-sans text-foreground/80 leading-relaxed">
                  <p>
                    Matt&apos;s passion is enhancing your quality of life with a sparkling ride while you soak in superb sound. What started as a love for cars and music turned into a lifelong craft — and now, a business that&apos;s been serving Ocean City since 2013.
                  </p>
                  <p>
                    Trained at The Installer Institute of Daytona Beach, Matt learned from the best in the business. His education covered everything from formal mobile electronics installation to advanced enclosure design and fabrication. But more than any certification, what sets Matt apart is his genuine care for the work and the people he serves.
                  </p>
                  <p>
                    At Wax on Wheels, every job gets the same attention to detail — whether it&apos;s a quick hand wash or a full paint correction. Matt works in a controlled indoor environment (no mobile shortcuts) and uses professional-grade equipment and products. When you bring your vehicle here, you&apos;re getting the real deal.
                  </p>
                </div>

                {/* Quote */}
                <blockquote className="my-8 p-6 bg-card border-l-4 border-primary worn-edge">
                  <p className="font-serif text-xl italic text-foreground mb-2">
                    &ldquo;The details make the difference.&rdquo;
                  </p>
                  <cite className="font-mono text-sm text-muted-foreground not-italic">
                    — Matt Harbaugh
                  </cite>
                </blockquote>

                <a 
                  href="tel:+14102131154" 
                  className="inline-flex items-center gap-3 bg-foreground text-background px-6 py-3 font-mono text-sm tracking-wide hover:bg-foreground/90 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>Give Matt a Call</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="bg-card py-16 md:py-20 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-12">
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
                Credentials
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground">
                Certifications
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div 
                  key={cert.title}
                  className="p-6 md:p-8 bg-background worn-edge text-center"
                >
                  <cert.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-foreground mb-2">
                    {cert.title}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Training */}
        <section className="bg-sidebar text-sidebar-foreground py-16 md:py-20 dark-worn">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <GraduationCap className="w-8 h-8 text-primary" />
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary">
                    Formal Training
                  </p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                  The Installer Institute
                </h2>
                <p className="font-sans text-sidebar-foreground/80 leading-relaxed mb-6">
                  Matt trained at The Installer Institute of Daytona Beach — one of the most respected training facilities in the mobile electronics industry. This hands-on education covered both the art and science of installation.
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {training.map((item) => (
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

              <div 
                className="aspect-video bg-cover bg-center worn-edge"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop')" }}
                role="img"
                aria-label="Classic car"
              />
            </div>
          </div>
        </section>

        {/* The Shop */}
        <section className="bg-background py-16 md:py-20 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div 
                className="order-2 lg:order-1 aspect-video bg-cover bg-center worn-edge"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1964&auto=format&fit=crop')" }}
                role="img"
                aria-label="Professional auto detailing"
              />
              <div className="order-1 lg:order-2">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-8 h-8 text-primary" />
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
                    Our Facility
                  </p>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground mb-6">
                  Indoor. Controlled. Professional.
                </h2>
                <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                  Wax on Wheels operates out of a dedicated indoor facility in Trader Lee&apos;s Village — not a mobile van, not a parking lot pop-up. The controlled environment means consistent results regardless of weather, and the space to do the job right.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-primary" />
                    <span className="font-sans text-foreground/80">Professional-grade equipment on site</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-primary" />
                    <span className="font-sans text-foreground/80">Climate-controlled workspace</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Wrench className="w-5 h-5 text-primary" />
                    <span className="font-sans text-foreground/80">Serving locals and dealers alike</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary-foreground mb-4">
              Come By the Shop
            </h2>
            <p className="font-sans text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Matt would love to meet you and talk about your vehicle. Stop by or give us a call.
            </p>
            <a 
              href="tel:+14102131154" 
              className="inline-flex items-center gap-3 bg-sidebar text-sidebar-foreground px-8 py-4 font-mono text-lg tracking-wide hover:bg-sidebar/90 transition-colors"
            >
              <Phone className="w-6 h-6" />
              <span>(410) 213-1154</span>
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
