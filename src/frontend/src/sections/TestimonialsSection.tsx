import { testimonials } from "../data/properties";
import { useInView } from "../hooks/useInView";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }, (_, i) => i).map((i) => (
        <span key={i} className="text-orange text-sm" aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="testimonials"
      data-ocid="testimonials.section"
      className="py-12 sm:py-14 bg-white border-t border-gray-100"
      aria-label="Customer Testimonials"
    >
      <div className="container mx-auto px-4">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 sm:mb-10 reveal-item ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-2">
            What Our Clients Say
          </h2>
          <div className={`heading-underline ${inView ? "animate" : ""}`} />
          <p className="font-body text-muted-foreground text-sm mt-3">
            500+ happy families in Ahmedabad
          </p>
        </div>

        {/* Single column on mobile, 3-col on md */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-ocid={`testimonials.item.${i + 1}`}
              className={`card-lift bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-card relative overflow-hidden reveal-item ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Decorative orange accent */}
              <div
                className="absolute top-0 left-0 w-1 h-full rounded-l-2xl"
                style={{
                  background: "linear-gradient(to bottom, #FF5A2C, #FF7A4C)",
                }}
                aria-hidden="true"
              />

              <StarRating rating={t.rating} />

              <p className="font-body text-foreground text-sm leading-relaxed mt-3 mb-4">
                "{t.text}"
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #FF5A2C, #FF7A4C)",
                  }}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div className="min-w-0">
                  <p className="font-display font-bold text-foreground text-sm truncate">
                    {t.name}
                  </p>
                  <p className="font-body text-muted-foreground text-xs">
                    📍 {t.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
