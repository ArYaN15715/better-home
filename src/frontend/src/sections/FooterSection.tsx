import { MapPin, MessageCircle, Phone } from "lucide-react";
import { useInView } from "../hooks/useInView";

export function FooterSection() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;
  const { ref, inView } = useInView(0.1);

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-ocid="footer.section"
      className="bg-white border-t border-gray-100 pt-8 sm:pt-10 pb-24 md:pb-10"
      aria-label="Footer"
    >
      <div
        ref={ref as React.RefObject<HTMLDivElement>}
        className={`container mx-auto px-4 reveal-item ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="flex flex-col gap-7 md:flex-row md:gap-12">
          {/* Brand */}
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/assets/logo-bh.png"
                alt="Better Home"
                className="h-12 w-auto flex-shrink-0 object-contain"
                style={{ display: "block" }}
              />
            </div>
            <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs">
              Real Estate Consultant · Ahmedabad (Bopal)
              <br />
              Your trusted partner for buying, selling & investing.
            </p>
            <div className="flex items-center gap-2 mt-4 text-muted-foreground text-sm font-body">
              <MapPin size={14} className="text-orange flex-shrink-0" />
              <span>Bopal, Ahmedabad, Gujarat – 380058</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-foreground text-sm mb-3">
              Quick Links
            </h3>
            <nav className="flex flex-col gap-2">
              {["#properties", "#why-us", "#testimonials", "#contact"].map(
                (href) => (
                  <button
                    key={href}
                    type="button"
                    onClick={() => scrollTo(href)}
                    data-ocid={`footer.${href.replace("#", "")}_link`}
                    className="font-body text-sm text-muted-foreground hover:text-orange text-left transition-smooth"
                    style={{ minHeight: "auto", minWidth: "auto" }}
                  >
                    {href
                      .replace("#", "")
                      .replace("-", " ")
                      .replace(/\b\w/g, (l) => l.toUpperCase())}
                  </button>
                ),
              )}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-foreground text-sm mb-3">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href="tel:+919876543210"
                data-ocid="footer.call_button"
                className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-orange transition-smooth"
                aria-label="Call us"
                style={{ minHeight: "auto" }}
              >
                <Phone size={14} className="text-orange flex-shrink-0" />
                +91 98765 43210
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                data-ocid="footer.whatsapp_button"
                className="flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-orange transition-smooth"
                aria-label="Chat on WhatsApp"
                style={{ minHeight: "auto" }}
              >
                <MessageCircle
                  size={14}
                  className="text-orange flex-shrink-0"
                />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 mt-7 pt-5 flex flex-col items-center gap-1 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © {year} Better Home – Real Estate Consultant. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange hover:underline"
              aria-label="caffeine.ai"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
