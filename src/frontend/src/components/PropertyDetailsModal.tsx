import {
  Bath,
  BedDouble,
  CheckCircle,
  MapPin,
  Maximize2,
  MessageCircle,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Property } from "../types";

interface PropertyDetailsModalProps {
  property: Property | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PropertyDetailsModal({
  property,
  isOpen,
  onClose,
}: PropertyDetailsModalProps) {
  const panelRef = useRef<HTMLDialogElement>(null);

  // Lock body scroll when modal open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape, trap focus inside panel
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Auto-focus panel when opened
  useEffect(() => {
    if (isOpen && panelRef.current) {
      panelRef.current.focus();
    }
  }, [isOpen]);

  if (!property) return null;

  const whatsappText = encodeURIComponent(
    `I'm interested in ${property.title}`,
  );
  const whatsappHref = `https://wa.me/919876543210?text=${whatsappText}`;
  const callHref = "tel:+919876543210";

  const modal = (
    /* Backdrop overlay */
    <div
      data-ocid="property_modal.dialog"
      role="presentation"
      className={`fixed inset-0 z-[9999] flex items-end md:items-center justify-center transition-all duration-300 ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "rgba(0,0,0,0.45)" }}
    >
      {/* Invisible clickable backdrop area */}
      <button
        type="button"
        aria-label="Close modal"
        onClick={onClose}
        className="absolute inset-0 w-full h-full cursor-default"
        tabIndex={-1}
        style={{ background: "transparent", border: "none" }}
      />

      {/* Sheet / Dialog Panel */}
      <dialog
        ref={panelRef}
        aria-label={`Property details: ${property.title}`}
        tabIndex={-1}
        open={isOpen}
        className={`relative bg-white w-full md:max-w-md md:mx-4 md:rounded-2xl rounded-t-2xl overflow-hidden shadow-2xl m-0 p-0 border-0
          transition-all duration-350 ease-out focus:outline-none
          ${isOpen ? "translate-y-0 md:scale-100 opacity-100" : "translate-y-full md:scale-95 opacity-0"}
        `}
        style={{
          maxHeight: "90vh",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          data-ocid="property_modal.close_button"
          aria-label="Close property details"
          className="absolute top-3 right-3 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-md hover:bg-white transition-colors"
          style={{ minHeight: "40px", minWidth: "40px" }}
        >
          <X size={18} className="text-foreground" />
        </button>

        {/* Property Image */}
        <div
          className="relative w-full overflow-hidden"
          style={{ height: "260px" }}
        >
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
            loading="eager"
          />
          {property.tag && (
            <span
              className="absolute top-3 left-3 px-2.5 py-1 text-xs font-['Inter'] font-semibold rounded-full text-white"
              style={{ background: "#FF5A2C" }}
            >
              {property.tag}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Title + Verified */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h2
              className="font-['Poppins'] font-bold text-lg leading-snug"
              style={{ color: "#1a1a1a" }}
            >
              {property.title}
            </h2>
            {property.verified && (
              <div
                data-ocid="property_modal.verified_badge"
                className="flex items-center gap-1 flex-shrink-0 bg-green-50 border border-green-200 rounded-full px-2 py-0.5"
              >
                <CheckCircle size={12} className="text-green-600" />
                <span className="text-xs font-['Inter'] font-semibold text-green-700">
                  Verified
                </span>
              </div>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center gap-1.5 mb-3">
            <MapPin size={14} className="text-muted-foreground flex-shrink-0" />
            <p className="font-['Inter'] text-sm text-muted-foreground truncate">
              {property.location}
            </p>
          </div>

          {/* Price */}
          <div className="mb-4">
            <p
              className="font-['Poppins'] font-bold text-2xl"
              style={{ color: "#FF5A2C" }}
            >
              {property.price}
            </p>
          </div>

          {/* Specs Row */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {property.area && (
              <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-xs font-['Inter'] font-medium text-foreground">
                <Maximize2 size={12} className="text-muted-foreground" />
                {property.area}
              </span>
            )}
            {property.beds && (
              <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-xs font-['Inter'] font-medium text-foreground">
                <BedDouble size={12} className="text-muted-foreground" />
                {property.beds} BHK
              </span>
            )}
            {property.baths && (
              <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-xs font-['Inter'] font-medium text-foreground">
                <Bath size={12} className="text-muted-foreground" />
                {property.baths} Bath
              </span>
            )}
            <span className="flex items-center gap-1.5 bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 text-xs font-['Inter'] font-medium text-foreground">
              {property.type}
            </span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 mb-4" />

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3">
            <a
              href={callHref}
              data-ocid="property_modal.call_button"
              className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-white font-['Poppins'] font-semibold text-sm transition-all duration-200 active:scale-95 hover:opacity-90"
              style={{ background: "#FF5A2C", minHeight: "52px" }}
              aria-label="Call now"
            >
              <Phone size={16} />
              Call Now
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="property_modal.whatsapp_button"
              className="flex items-center justify-center gap-2 w-full rounded-xl py-3.5 font-['Poppins'] font-semibold text-sm border-2 transition-all duration-200 active:scale-95"
              style={{
                color: "#FF5A2C",
                borderColor: "#FF5A2C",
                background: "#fff",
                minHeight: "52px",
              }}
              aria-label="WhatsApp inquiry"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>

          {/* Safe area spacer for mobile */}
          <div className="h-2 md:hidden" />
        </div>
      </dialog>
    </div>
  );

  return createPortal(modal, document.body);
}
