import { ChevronDown, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface HeroSectionProps {
  onGetOptions: () => void;
}

// Particle positions — static so no runtime IDs
const particles = [
  { top: "15%", left: "8%", size: 3, delay: "0s", dur: "7s", anim: "floatUp1" },
  {
    top: "30%",
    left: "20%",
    size: 2,
    delay: "1.2s",
    dur: "9s",
    anim: "floatUp2",
  },
  {
    top: "60%",
    left: "5%",
    size: 4,
    delay: "2.4s",
    dur: "8s",
    anim: "floatUp3",
  },
  {
    top: "20%",
    left: "75%",
    size: 3,
    delay: "0.6s",
    dur: "10s",
    anim: "floatUp1",
  },
  {
    top: "45%",
    left: "85%",
    size: 2,
    delay: "3s",
    dur: "7.5s",
    anim: "floatUp2",
  },
  {
    top: "70%",
    left: "60%",
    size: 3,
    delay: "1.8s",
    dur: "9.5s",
    anim: "floatUp3",
  },
  {
    top: "80%",
    left: "35%",
    size: 2,
    delay: "0.9s",
    dur: "8.5s",
    anim: "floatUp1",
  },
  {
    top: "10%",
    left: "50%",
    size: 4,
    delay: "2s",
    dur: "11s",
    anim: "floatUp2",
  },
];

export function HeroSection({ onGetOptions }: HeroSectionProps) {
  const [parallaxY, setParallaxY] = useState(0);

  const scrollToProperties = () => {
    document
      .querySelector("#properties")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setParallaxY(Math.min(window.scrollY * 0.3, 30));
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      data-ocid="hero.section"
      className="relative w-full overflow-hidden"
      style={{ minHeight: "100dvh" }}
      aria-label="Hero"
    >
      {/* Cinematic background — clean, no orange tint */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="/assets/generated/hero-property.dim_1200x800.jpg"
          alt="Luxury property in Ahmedabad"
          className="w-full h-full object-cover animate-hero-zoom"
          style={{
            transformOrigin: "center center",
            transform: `translateY(${parallaxY}px) scale(1.08)`,
          }}
        />
        {/* Minimal dark overlay for text readability only */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Subtle bottom vignette */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.18) 100%)",
          }}
        />
        {/* Light sweep shimmer */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div
            className="absolute top-0 bottom-0 w-24 animate-light-sweep"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.06) 50%, transparent 100%)",
            }}
          />
        </div>
        {/* Floating particles */}
        {particles.map((p) => (
          <div
            key={`${p.top}-${p.left}`}
            className="hero-particle"
            aria-hidden="true"
            style={{
              top: p.top,
              left: p.left,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationName: p.anim,
              animationDuration: p.dur,
              animationDelay: p.delay,
              animationIterationCount: "infinite",
              animationTimingFunction: "ease-out",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-20 flex flex-col justify-center min-h-[100dvh]">
        <div className="max-w-lg">
          {/* Trust pill */}
          <div className="animate-stagger-1 inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-full px-3 py-1.5 mb-5">
            <span className="text-xs text-white font-semibold tracking-wide">
              ⭐ Ahmedabad's #1 Real Estate Consultant
            </span>
          </div>

          {/* Headline */}
          <h1
            className="animate-stagger-2 font-display font-bold text-white leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 6vw, 3.25rem)" }}
          >
            Find Your Perfect Property in{" "}
            <span style={{ color: "#FFD0C0" }}>Ahmedabad</span>
          </h1>

          {/* Subtext */}
          <p className="animate-stagger-3 font-body text-white/90 text-base sm:text-lg mb-8 leading-relaxed">
            Verified listings. Best deals. Zero hassle.
          </p>

          {/* CTAs — stacked on mobile, side-by-side on sm+ */}
          <div className="animate-stagger-4 flex flex-col sm:flex-row gap-3">
            <button
              type="button"
              onClick={onGetOptions}
              data-ocid="hero.get_options_button"
              className="btn-cta ripple flex items-center justify-center gap-2 text-base py-3.5 px-6 w-full sm:w-auto"
            >
              <MessageCircle size={18} />
              Get Property Options
            </button>
            <a
              href="tel:+919876543210"
              data-ocid="hero.consultation_button"
              className="flex items-center justify-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-2 border-white/60 hover:border-white text-white font-display font-bold text-base py-3.5 px-6 rounded-xl transition-smooth w-full sm:w-auto min-h-[48px]"
            >
              <Phone size={18} />
              Book Free Consultation
            </a>
          </div>

          {/* Activity indicator */}
          <p className="animate-stagger-5 mt-5 text-white/70 text-sm font-body hidden sm:flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
            12 people viewed properties today
          </p>
        </div>

        {/* Scroll indicator — bouncy */}
        <button
          type="button"
          onClick={scrollToProperties}
          data-ocid="hero.scroll_button"
          aria-label="Scroll to properties"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/70 hover:text-white transition-smooth animate-bounce-subtle"
          style={{ minHeight: "auto", minWidth: "auto" }}
        >
          <span className="text-xs font-body tracking-widest uppercase hidden sm:block">
            Explore
          </span>
          <ChevronDown size={22} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}
