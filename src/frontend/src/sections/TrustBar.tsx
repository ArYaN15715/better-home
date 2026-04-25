import { trustStats } from "../data/properties";
import { useInView } from "../hooks/useInView";

export function TrustBar() {
  const { ref, inView } = useInView(0.1);

  // Duplicate items for seamless marquee loop
  const allItems = [...trustStats, ...trustStats];

  return (
    <section
      data-ocid="trust_bar.section"
      className="relative z-10 bg-white shadow-soft border-b border-orange-pale overflow-hidden"
      aria-label="Trust statistics"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`reveal-item ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        {/* Mobile: marquee scroll. Desktop: static flex */}
        <div className="md:hidden py-1">
          <div
            className="flex animate-marquee"
            style={{ width: "max-content" }}
            aria-hidden="false"
          >
            {allItems.map((stat, i) => (
              <div
                key={`${stat.label}-${i}`}
                data-ocid={
                  i < trustStats.length ? `trust_bar.item.${i + 1}` : undefined
                }
                className="flex items-center gap-2.5 px-5 py-3.5 flex-shrink-0 border-r border-orange-pale last:border-r-0"
                style={{ minWidth: "140px" }}
              >
                <span className="text-xl flex-shrink-0" aria-hidden="true">
                  {stat.icon}
                </span>
                <div className="min-w-0">
                  <div className="font-display font-bold text-orange text-sm leading-none whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="font-body text-xs text-muted-foreground mt-0.5 whitespace-nowrap">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: static layout */}
        <div className="hidden md:flex container mx-auto px-4">
          {trustStats.map((stat, i) => (
            <div
              key={stat.label}
              data-ocid={`trust_bar.item.${i + 1}`}
              className={`flex items-center gap-2.5 px-6 py-4 flex-1 ${
                i < trustStats.length - 1 ? "border-r border-orange-pale" : ""
              }`}
            >
              <span className="text-2xl flex-shrink-0" aria-hidden="true">
                {stat.icon}
              </span>
              <div className="min-w-0">
                <div className="font-display font-bold text-orange text-base leading-none">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-0.5">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
