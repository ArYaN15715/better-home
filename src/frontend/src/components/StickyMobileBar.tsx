import { ListFilter, MessageCircle, Phone } from "lucide-react";
import { useEffect, useState } from "react";

interface StickyMobileBarProps {
  onGetOptions: () => void;
}

export function StickyMobileBar({ onGetOptions }: StickyMobileBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      data-ocid="sticky_mobile_bar"
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-orange-pale shadow-lift transition-transform duration-500 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="flex items-stretch">
        {/* Call Now */}
        <a
          href="tel:+919876543210"
          data-ocid="sticky_mobile_bar.call_button"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-orange hover:bg-orange-tint transition-smooth active:bg-orange-pale ripple"
          aria-label="Call Now"
          style={{ minHeight: "52px" }}
        >
          <Phone size={21} strokeWidth={2} />
          <span className="font-body text-xs font-semibold text-orange leading-none">
            Call
          </span>
        </a>

        {/* Divider */}
        <div className="w-px bg-border" aria-hidden="true" />

        {/* WhatsApp */}
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%20am%20looking%20for%20a%20property%20in%20Ahmedabad"
          target="_blank"
          rel="noopener noreferrer"
          data-ocid="sticky_mobile_bar.whatsapp_button"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 text-orange hover:bg-orange-tint transition-smooth active:bg-orange-pale ripple"
          aria-label="Chat on WhatsApp"
          style={{ minHeight: "52px" }}
        >
          <MessageCircle size={21} strokeWidth={2} />
          <span className="font-body text-xs font-semibold text-orange leading-none">
            WhatsApp
          </span>
        </a>

        {/* Divider */}
        <div className="w-px bg-border" aria-hidden="true" />

        {/* Get Options */}
        <button
          type="button"
          onClick={onGetOptions}
          data-ocid="sticky_mobile_bar.get_options_button"
          className="flex-1 flex flex-col items-center justify-center gap-1 py-2.5 gradient-accent text-white transition-smooth active:opacity-90 ripple"
          aria-label="Get Property Options"
          style={{ minHeight: "52px" }}
        >
          <ListFilter size={21} strokeWidth={2} />
          <span className="font-body text-xs font-bold leading-none">
            Get Options
          </span>
        </button>
      </div>
    </div>
  );
}
