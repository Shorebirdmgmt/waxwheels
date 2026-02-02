import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "My car had mold inside all over the seats. I took my car to Wax on Wheels and not only did they make it look and smell brand new, but they also detailed it. My car looks brand new!",
    author: "Mitch",
  },
  {
    quote: "I got my car detailed and I love it. It looks brand new. I even had a big dent on the side and they pushed it back into place. Best in town!",
    author: "Meg",
  },
  {
    quote: "My 10-year old car looks brand new! Matt went above and beyond my expectations.",
    author: "Satisfied Customer",
  },
  {
    quote: "A detailer that pays attention to detail! Excellent results at a reasonable price. Been going here for years.",
    author: "Long-time Customer",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-card py-16 md:py-24 paper-grain">
      <div className="mx-auto max-w-6xl px-4">
        {/* Section header */}
        <div className="mb-12 md:mb-16 text-center">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground mb-2">
            What They Say
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold uppercase tracking-tight text-foreground">
            Customer Reviews
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="relative bg-background p-6 md:p-8 worn-edge"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-primary/30 mb-4" />

              {/* Quote text */}
              <blockquote className="font-sans text-base md:text-lg leading-relaxed text-foreground/80 mb-4">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <cite className="not-italic">
                <span className="font-mono text-sm tracking-wide text-muted-foreground">
                  — {testimonial.author}
                </span>
              </cite>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/20" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
