import { MapPin } from "lucide-react";
import { useInView } from "../hooks/useInView";

export function MapSection() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="map"
      data-ocid="map.section"
      className="py-12 sm:py-14 bg-white border-t border-gray-100"
      aria-label="Our Location"
    >
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`text-center mb-6 sm:mb-8 reveal-item ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-2">
            Find Us in Bopal, Ahmedabad
          </h2>
          <p className="font-body text-muted-foreground text-sm">
            Visit us or get directions to our office
          </p>
        </div>

        {/* Map wrapper */}
        <div
          className={`overflow-hidden shadow-card border border-gray-100 reveal-item ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ borderRadius: "16px", transitionDelay: "100ms" }}
        >
          <iframe
            title="Better Home Office Location – Bopal, Ahmedabad"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14691.123!2d72.4641!3d23.0341!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5e5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sBopal%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            style={{ height: "300px", border: "none", display: "block" }}
            className="sm:!h-[400px]"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Google Maps showing Bopal, Ahmedabad"
          />
        </div>

        {/* Address line */}
        <div className="flex items-center justify-center gap-2 mt-5">
          <MapPin size={16} className="text-orange flex-shrink-0" />
          <p className="font-body text-muted-foreground text-sm text-center">
            Bopal, Ahmedabad, Gujarat 380058
          </p>
        </div>

        {/* Directions CTA */}
        <div className="flex justify-center mt-4">
          <a
            href="https://maps.google.com/?q=Bopal,+Ahmedabad,+Gujarat"
            target="_blank"
            rel="noopener noreferrer"
            data-ocid="map.directions_button"
            className="btn-cta ripple flex items-center gap-2 text-sm px-6"
            aria-label="Get directions to Better Home office"
          >
            <MapPin size={15} />
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
}
