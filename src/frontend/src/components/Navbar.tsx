import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Properties", href: "#properties" },
  { label: "Why Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-ocid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled
          ? "bg-white shadow-soft border-b border-orange-pale"
          : "bg-white/95 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo — actual brand image */}
          <button
            type="button"
            onClick={() => scrollTo("#hero")}
            data-ocid="navbar.logo_link"
            className="flex items-center gap-2.5 min-w-0 bg-transparent border-0 p-0 cursor-pointer"
            aria-label="Better Home – go to top"
            style={{ minHeight: "auto", minWidth: "auto" }}
          >
            <img
              src="/assets/logo-bh.png"
              alt="Better Home"
              className="h-10 w-auto flex-shrink-0 object-contain"
              style={{ display: "block" }}
            />
          </button>

          {/* Desktop nav */}
          <nav
            className="hidden md:flex items-center gap-6"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid={`navbar.${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className="font-body text-sm font-medium text-foreground hover:text-orange transition-smooth"
                style={{ minHeight: "auto" }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+919876543210"
              data-ocid="navbar.call_button"
              className="btn-cta flex items-center gap-2 text-sm px-4 py-2 ripple"
              aria-label="Call Now"
              style={{ minHeight: "44px" }}
            >
              <Phone size={14} />
              Call Now
            </a>
          </nav>

          {/* Mobile hamburger — 44px tap target */}
          <button
            type="button"
            data-ocid="navbar.menu_toggle"
            className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg text-foreground hover:text-orange hover:bg-orange-tint transition-smooth"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            style={{ minHeight: "44px", minWidth: "44px" }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        data-ocid="navbar.mobile_menu"
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-t border-orange-pale`}
        aria-hidden={!open}
      >
        <nav className="container mx-auto px-4 py-3 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid={`navbar.mobile_${link.label.toLowerCase().replace(/\s+/g, "_")}_link`}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className="font-body text-base font-medium text-foreground hover:text-orange py-3 px-3 rounded-lg hover:bg-orange-tint transition-smooth flex items-center"
              style={{ minHeight: "52px" }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+919876543210"
            data-ocid="navbar.mobile_call_button"
            className="btn-cta flex items-center justify-center gap-2 mt-2 ripple text-base"
            aria-label="Call Now"
          >
            <Phone size={16} />
            Call Now
          </a>
        </nav>
      </div>
    </header>
  );
}
