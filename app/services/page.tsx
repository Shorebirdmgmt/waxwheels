import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Phone, Droplets, Sparkles, Shield, Car, Truck, Wrench } from "lucide-react"

export const metadata: Metadata = {
  title: "Detailing Services | Wax on Wheels | Ocean City, MD",
  description: "Professional auto detailing services including hand wash, interior deep clean, paint correction, ceramic coatings, and full detail packages. GTECHNIQ accredited. Call (410) 213-1154.",
}

const serviceCategories = [
  {
    title: "Exterior Services",
    icon: Droplets,
    services: [
      {
        name: "Hand Wash & Dry",
        description: "Thorough hand wash using premium products, followed by hand drying with microfiber towels.",
      },
      {
        name: "Hand Wax",
        description: "Premium carnauba wax application for lasting protection and deep shine.",
      },
      {
        name: "Clay Bar Treatment",
        description: "Remove embedded contaminants for a glass-smooth finish.",
      },
      {
        name: "Paint Correction",
        description: "Multi-stage buffing and polishing to remove swirls, scratches, and oxidation.",
      },
      {
        name: "Headlight Restoration",
        description: "Restore cloudy, yellowed headlights to crystal clarity.",
      },
    ],
  },
  {
    title: "Interior Services",
    icon: Sparkles,
    services: [
      {
        name: "Interior Deep Clean",
        description: "Complete interior cleaning including all surfaces, vents, and crevices.",
      },
      {
        name: "Carpet & Upholstery Shampooing",
        description: "Hot water extraction for carpets, floor mats, and fabric seats.",
      },
      {
        name: "Leather Cleaning & Conditioning",
        description: "Gentle cleaning and conditioning to restore and protect leather.",
      },
      {
        name: "Steam Cleaning & Sanitizing",
        description: "High-temperature vapor steam for deep sanitization.",
      },
      {
        name: "Odor Elimination",
        description: "Remove stubborn odors including smoke, pet, and mold.",
      },
    ],
  },
  {
    title: "Protection Services",
    icon: Shield,
    services: [
      {
        name: "Ceramic Coating",
        description: "GTECHNIQ pro-grade ceramic coating for long-lasting paint protection.",
      },
      {
        name: "Paint Sealant",
        description: "Synthetic sealant for durable protection and enhanced gloss.",
      },
      {
        name: "Fabric & Leather Protection",
        description: "Protective treatments to guard against stains and UV damage.",
      },
    ],
  },
  {
    title: "Engine & Specialty",
    icon: Wrench,
    services: [
      {
        name: "Engine Detailing",
        description: "Clean and dress engine bay for a showroom appearance.",
      },
      {
        name: "Full Detail Packages",
        description: "Comprehensive interior and exterior detailing bundles.",
      },
    ],
  },
]

const vehicleTypes = [
  { icon: Car, label: "Cars" },
  { icon: Truck, label: "Trucks & SUVs" },
  { icon: Car, label: "Motorcycles" },
  { icon: Truck, label: "Limos & Buses" },
  { icon: Truck, label: "Trailers" },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-sidebar-foreground py-16 md:py-24 bg-sidebar overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "sepia(30%) brightness(0.5) contrast(1.1) saturate(1.2)"
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-amber-950/50" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary mb-4">
              Detailing Services
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
              Service Menu
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-sidebar-foreground/80 max-w-2xl">
              Professional auto detailing in a controlled indoor environment. All work performed with premium products and meticulous attention to detail.
            </p>
          </div>
        </section>

        {/* Services */}
        <section className="bg-background py-16 md:py-24 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            {/* Call for pricing notice */}
            <div className="mb-12 p-6 bg-muted worn-edge text-center">
              <p className="font-mono text-sm tracking-wide text-muted-foreground">
                <Phone className="w-4 h-4 inline mr-2" />
                Call for pricing: <a href="tel:+14102131154" className="text-primary hover:underline">(410) 213-1154</a> — Every vehicle is different, and we&apos;ll provide an honest quote based on your specific needs.
              </p>
            </div>

            {/* Service categories */}
            <div className="space-y-16">
              {serviceCategories.map((category) => (
                <div key={category.title}>
                  {/* Category header */}
                  <div className="flex items-center gap-4 mb-8 pb-4 border-b-2 border-border">
                    <category.icon className="w-8 h-8 text-primary" />
                    <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-foreground">
                      {category.title}
                    </h2>
                  </div>

                  {/* Services list - styled like a vintage menu */}
                  <div className="space-y-0">
                    {category.services.map((service, index) => (
                      <div 
                        key={service.name}
                        className={`flex flex-col md:flex-row md:items-start gap-2 md:gap-4 py-4 ${
                          index !== category.services.length - 1 ? "border-b border-border/50" : ""
                        }`}
                      >
                        <h3 className="font-serif text-lg font-bold text-foreground md:w-1/3 shrink-0">
                          {service.name}
                        </h3>
                        <p className="font-sans text-sm leading-relaxed text-muted-foreground md:flex-1">
                          {service.description}
                        </p>
                        <span className="font-mono text-xs tracking-wide text-primary md:shrink-0 md:text-right">
                          Call for quote
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vehicle types */}
        <section className="bg-card py-16 md:py-20 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl font-bold uppercase tracking-tight text-foreground mb-2">
                We Service All Vehicles
              </h2>
              <p className="font-sans text-muted-foreground">
                From daily drivers to show cars, motorcycles to fleet vehicles.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {vehicleTypes.map((type) => (
                <div 
                  key={type.label}
                  className="flex items-center gap-3 px-6 py-3 bg-background worn-edge"
                >
                  <type.icon className="w-5 h-5 text-primary" />
                  <span className="font-mono text-sm tracking-wide">{type.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Equipment */}
        <section className="bg-sidebar text-sidebar-foreground py-16 md:py-20 dark-worn">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary mb-4">
                  Professional Grade
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight mb-6">
                  Our Equipment
                </h2>
                <p className="font-sans text-sidebar-foreground/80 leading-relaxed mb-6">
                  We invest in the best tools and products to deliver results that speak for themselves. All work is performed indoors in a controlled environment — no mobile shortcuts.
                </p>
                <ul className="space-y-3 font-mono text-sm text-sidebar-foreground/70">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary" />
                    Hot Water Extractor
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary" />
                    Vapor Steam Cleaners
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary" />
                    Dewalt Buffers & GEM Orbitals
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary" />
                    Commercial Pressure Washer
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary" />
                    GTECHNIQ Pro Products
                  </li>
                </ul>
              </div>
              <div 
                className="aspect-square bg-cover bg-center worn-edge"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop')" }}
                role="img"
                aria-label="Professional detailing equipment"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-primary py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold uppercase tracking-tight text-primary-foreground mb-4">
              Ready to Make It Shine?
            </h2>
            <p className="font-sans text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Call us for a free estimate. We&apos;ll discuss your needs and provide honest pricing.
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
