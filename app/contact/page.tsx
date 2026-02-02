import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Phone, Mail, MapPin, Clock, Navigation } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Wax on Wheels | Ocean City, MD",
  description: "Contact Wax on Wheels for auto detailing and car audio services in Ocean City, MD. Located at 9935 Stephen Decatur Hwy. Call (410) 213-1154.",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative text-sidebar-foreground py-16 md:py-20 bg-sidebar overflow-hidden">
          <div 
            className="absolute inset-0"
            style={{ 
              backgroundImage: "url('https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=2032&auto=format&fit=crop')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "sepia(30%) brightness(0.5) contrast(1.1) saturate(1.2)"
            }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-amber-950/40 via-transparent to-amber-950/50" aria-hidden="true" />
          <div className="relative mx-auto max-w-6xl px-4">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-sidebar-primary mb-4">
              Get in Touch
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold uppercase tracking-tight mb-6">
              Contact Us
            </h1>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-sidebar-foreground/80 max-w-2xl">
              Have a question? Need a quote? Just want to talk cars? We&apos;d love to hear from you. Give us a call or send a message.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section className="bg-background py-16 md:py-24 paper-grain">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact info */}
              <div>
                {/* Phone - most important */}
                <div className="mb-10 p-6 md:p-8 bg-secondary worn-edge">
                  <div className="flex items-start gap-4">
                    <Phone className="w-8 h-8 text-secondary-foreground shrink-0 mt-1" />
                    <div>
                      <h2 className="font-serif text-xl font-bold uppercase tracking-tight text-secondary-foreground mb-2">
                        Call Us
                      </h2>
                      <a 
                        href="tel:+14102131154" 
                        className="font-mono text-2xl md:text-3xl text-secondary-foreground hover:underline"
                      >
                        (410) 213-1154
                      </a>
                      <p className="font-sans text-sm text-secondary-foreground/80 mt-2">
                        The fastest way to get a quote or schedule service.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Other contact methods */}
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start gap-4 p-6 bg-card worn-edge">
                    <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-foreground mb-1">
                        Email
                      </h3>
                      <a 
                        href="mailto:waxwheels@gmail.com" 
                        className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                      >
                        waxwheels@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-6 bg-card worn-edge">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-foreground mb-1">
                        Location
                      </h3>
                      <address className="font-sans text-sm text-muted-foreground not-italic leading-relaxed">
                        9935 Stephen Decatur Hwy, Unit 110<br />
                        Ocean City, MD 21842
                      </address>
                      <p className="font-mono text-xs text-muted-foreground/70 mt-2">
                        Corner of RT50 & RT611 in Trader Lee&apos;s Village
                      </p>
                      <a 
                        href="https://maps.google.com/?q=9935+Stephen+Decatur+Hwy+Unit+110+Ocean+City+MD+21842"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 mt-3 font-mono text-xs tracking-wide uppercase text-primary hover:underline"
                      >
                        <Navigation className="w-4 h-4" />
                        Get Directions
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-6 bg-card worn-edge">
                    <Clock className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-serif text-lg font-bold uppercase tracking-tight text-foreground mb-3">
                        Shop Hours
                      </h3>
                      <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                        <li className="flex justify-between gap-8">
                          <span>Monday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Tuesday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Wednesday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Thursday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Friday</span>
                          <span>9:00 AM - 5:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8">
                          <span>Saturday</span>
                          <span>9:00 AM - 1:00 PM</span>
                        </li>
                        <li className="flex justify-between gap-8 text-muted-foreground/60">
                          <span>Sunday</span>
                          <span>Closed</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact form */}
              <div>
                <div className="p-6 md:p-8 bg-card worn-edge">
                  <h2 className="font-serif text-2xl font-bold uppercase tracking-tight text-foreground mb-2">
                    Send a Message
                  </h2>
                  <p className="font-sans text-sm text-muted-foreground mb-6">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </p>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="bg-muted paper-grain">
          <div className="aspect-[21/9] md:aspect-[3/1] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.1234567890123!2d-75.1234567890123!3d38.1234567890123!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzMwLjAiTiA3NcKwMDcnMzAuMCJX!5e0!3m2!1sen!2sus!4v1234567890123"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wax on Wheels location map"
              className="grayscale contrast-125"
            />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
