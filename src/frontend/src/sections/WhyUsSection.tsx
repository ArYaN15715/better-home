import { whyChooseItems } from "../data/properties";
import { useInView } from "../hooks/useInView";

export function WhyUsSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="why-us"
      data-ocid="why_us.section"
      className="py-12 sm:py-14 bg-[#FAFAFA] border-t border-gray-100"
      aria-label="Why Choose Better Home"
    >
      <div className="container mx-auto px-4">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-8 sm:mb-10 reveal-item ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-2">
            Why Choose Better Home?
          </h2>
          <div className={`heading-underline ${inView ? "animate" : ""}`} />
          <p className="font-body text-muted-foreground text-sm mt-3">
            Built on trust, expertise, and results
          </p>
        </div>

        {/* 2-col on mobile, 4-col on lg */}
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {whyChooseItems.map((item, i) => (
            <div
              key={item.title}
              data-ocid={`why_us.item.${i + 1}`}
              className={`card-lift bg-white rounded-2xl p-4 sm:p-5 text-center shadow-card border border-gray-100 reveal-item ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl mx-auto mb-3 flex items-center justify-center text-xl sm:text-2xl shadow-orange-sm"
                style={{
                  background:
                    "linear-gradient(135deg, #FFF0EB 0%, #FFE0D4 100%)",
                }}
                aria-hidden="true"
              >
                {item.icon}
              </div>
              <h3 className="font-display font-bold text-foreground text-xs sm:text-sm mb-1 leading-snug">
                {item.title}
              </h3>
              <p className="font-body text-muted-foreground text-xs leading-snug hidden sm:block">
                {item.tagline}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
