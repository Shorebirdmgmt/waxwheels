import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Detailing",
    description: "Hand wash, interior deep clean, paint correction, ceramic coatings, and full detail packages.",
    image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=1931&auto=format&fit=crop",
    href: "/services"
  },
  {
    title: "Car Audio",
    description: "Radios, amplifiers, speakers, subwoofers, and custom installations by an MECP certified technician.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1932&auto=format&fit=crop",
    href: "/audio"
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-background py-16 md:py-24 paper-grain">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            What We Do
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Our Services
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title}
              href={service.href}
              className="group relative bg-card worn-edge overflow-hidden"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sidebar via-sidebar/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-tight text-sidebar-foreground mb-2">
                  {service.title}
                </h3>
                <p className="font-sans text-sm leading-relaxed text-sidebar-foreground/70 mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 font-mono text-xs tracking-wide uppercase text-primary group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Fleet services callout */}
        <div className="mt-8 p-6 md:p-8 bg-muted worn-edge">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div>
              <h3 className="font-serif text-xl font-bold uppercase tracking-tight text-foreground mb-1">
                Fleet Services Available
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                We work with dealerships, rental companies, and businesses. Contact us for fleet pricing.
              </p>
            </div>
            <a 
              href="tel:+14102131154" 
              className="shrink-0 inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 font-mono text-sm tracking-wide hover:bg-foreground/90 transition-colors"
            >
              Call for Details
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
