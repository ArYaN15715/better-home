import { useInView } from "../hooks/useInView";

export function AboutSection() {
  const { ref, inView } = useInView(0.15);

  return (
    <section
      id="about"
      data-ocid="about.section"
      className="py-10 sm:py-12 bg-[#FAFAFA] border-t border-gray-100"
      aria-label="About Better Home"
    >
      <div className="container mx-auto px-4 max-w-lg text-center">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal-item ${
            inView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-6 scale-[0.97]"
          }`}
        >
          <div
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center text-xl sm:text-2xl shadow-orange-sm"
            style={{ background: "linear-gradient(135deg, #FF5A2C, #FF7A4C)" }}
            aria-hidden="true"
          >
            🏡
          </div>
          <h2 className="font-display font-bold text-foreground text-lg sm:text-xl mb-3">
            About Better Home
          </h2>
          <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-sm mx-auto">
            Better Home helps you buy, sell, and invest in Ahmedabad with
            clarity and confidence. Your trusted real estate partner in Bopal
            since 2014.
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <div className="text-center min-w-[64px]">
              <div className="font-display font-bold text-orange text-xl sm:text-2xl">
                10+
              </div>
              <div className="font-body text-muted-foreground text-xs">
                Years
              </div>
            </div>
            <div className="w-px h-8 bg-border" aria-hidden="true" />
            <div className="text-center min-w-[64px]">
              <div className="font-display font-bold text-orange text-xl sm:text-2xl">
                500+
              </div>
              <div className="font-body text-muted-foreground text-xs">
                Deals
              </div>
            </div>
            <div className="w-px h-8 bg-border" aria-hidden="true" />
            <div className="text-center min-w-[64px]">
              <div className="font-display font-bold text-orange text-xl sm:text-2xl">
                5.0 ⭐
              </div>
              <div className="font-body text-muted-foreground text-xs">
                Rating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
