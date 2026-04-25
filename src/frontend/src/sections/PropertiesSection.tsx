import { CheckCircle, Eye } from "lucide-react";
import { useState } from "react";
import { PropertyDetailsModal } from "../components/PropertyDetailsModal";
import {
  budgetFilters,
  locationFilters,
  properties,
  typeFilters,
} from "../data/properties";
import { useInView } from "../hooks/useInView";
import type { Property } from "../types";

type FilterTab = "Budget" | "Location" | "Type";

const filterTabs: FilterTab[] = ["Budget", "Location", "Type"];

function PropertyCard({
  property,
  index,
  visible,
  onViewDetails,
}: {
  property: Property;
  index: number;
  visible: boolean;
  onViewDetails: (p: Property) => void;
}) {
  return (
    <div
      data-ocid={`properties.item.${index + 1}`}
      className={`card-lift bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-card group cursor-pointer reveal-item ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      {/* Image — consistent aspect ratio */}
      <div className="relative overflow-hidden" style={{ paddingTop: "62.5%" }}>
        <img
          src={property.image}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover transition-smooth group-hover:scale-105 group-active:scale-105"
          loading="lazy"
        />
        {property.tag && (
          <span className="tag-badge" aria-label={`Tag: ${property.tag}`}>
            {property.tag}
          </span>
        )}
        {property.verified && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-1">
            <CheckCircle size={14} className="text-orange" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4">
        <h3 className="font-display font-bold text-foreground text-sm leading-snug mb-0.5 truncate">
          {property.title}
        </h3>
        <p className="font-body text-muted-foreground text-xs mb-2 truncate">
          📍 {property.location}
        </p>

        <div className="flex items-center gap-2.5 mb-2 text-xs text-muted-foreground font-body">
          {property.area && (
            <span className="truncate">📐 {property.area}</span>
          )}
          {property.beds && (
            <span className="flex-shrink-0">🛏 {property.beds}BHK</span>
          )}
        </div>

        {property.views && (
          <p className="flex items-center gap-1 text-xs text-muted-foreground font-body mb-2">
            <Eye size={11} className="flex-shrink-0" />
            <span className="truncate">{property.views} viewed today</span>
          </p>
        )}

        <div className="flex items-center justify-between gap-2">
          <span className="font-display font-bold text-foreground text-base sm:text-lg truncate">
            {property.price}
          </span>
          <button
            type="button"
            data-ocid={`properties.view_details_button.${index + 1}`}
            className="btn-cta ripple text-xs px-3 py-2 flex-shrink-0 whitespace-nowrap"
            aria-label={`View details for ${property.title}`}
            style={{ minHeight: "36px" }}
            onClick={() => onViewDetails(property)}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export function PropertiesSection() {
  const [activeTab, setActiveTab] = useState<FilterTab>("Budget");
  const [selectedBudget, setSelectedBudget] = useState("all");
  const [selectedLocation, setSelectedLocation] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(
    null,
  );
  const { ref, inView } = useInView(0.05);

  const filteredProperties = properties.filter((p) => {
    const budgetOk =
      selectedBudget === "all" ||
      (selectedBudget === "under50" && p.priceRaw < 5000000) ||
      (selectedBudget === "50to1cr" &&
        p.priceRaw >= 5000000 &&
        p.priceRaw < 10000000) ||
      (selectedBudget === "above1cr" && p.priceRaw >= 10000000);
    const locationOk =
      selectedLocation === "all" ||
      p.location
        .toLowerCase()
        .includes(selectedLocation.toLowerCase().replace("-", " "));
    const typeOk = selectedType === "all" || p.type === selectedType;
    return budgetOk && locationOk && typeOk;
  });

  const currentFilters =
    activeTab === "Budget"
      ? budgetFilters
      : activeTab === "Location"
        ? locationFilters
        : typeFilters;

  const currentSelected =
    activeTab === "Budget"
      ? selectedBudget
      : activeTab === "Location"
        ? selectedLocation
        : selectedType;

  const setSelected = (id: string) => {
    if (activeTab === "Budget") setSelectedBudget(id);
    else if (activeTab === "Location") setSelectedLocation(id);
    else setSelectedType(id);
  };

  return (
    <section
      id="properties"
      data-ocid="properties.section"
      className="py-10 sm:py-12 bg-white border-t border-gray-100"
      aria-label="Featured Properties"
    >
      <div className="container mx-auto px-4">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`mb-5 reveal-item ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <h2 className="font-display font-bold text-foreground text-xl sm:text-2xl mb-1">
            Featured Properties
          </h2>
          <div
            className={`heading-underline text-left ${inView ? "animate" : ""}`}
            style={{ margin: "6px 0 0" }}
          />
          <p className="font-body text-muted-foreground text-sm mt-2">
            Verified listings across Ahmedabad's best localities
          </p>
        </div>

        {/* Smart Filter Bar */}
        <div
          data-ocid="properties.filter_bar"
          className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm -mx-4 px-4 pt-3 pb-3 mb-5 border-b border-gray-100"
        >
          {/* Filter tabs */}
          <div
            className="flex gap-2 mb-2.5 overflow-x-auto scroll-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {filterTabs.map((tab) => (
              <button
                type="button"
                key={tab}
                data-ocid={`properties.filter_tab.${tab.toLowerCase()}`}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-body font-semibold transition-smooth ${
                  activeTab === tab
                    ? "bg-[#FF5A2C] text-white shadow-cta scale-105"
                    : "bg-white text-foreground border border-border hover:border-[#FF5A2C] hover:text-orange"
                }`}
                aria-pressed={activeTab === tab}
                style={{ minHeight: "44px" }}
              >
                {tab}
              </button>
            ))}
          </div>
          {/* Filter options */}
          <div
            className="flex gap-2 overflow-x-auto scroll-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {currentFilters.map((opt) => (
              <button
                type="button"
                key={opt.id}
                data-ocid={`properties.filter_option.${opt.id}`}
                onClick={() => setSelected(opt.id)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-body font-medium transition-smooth whitespace-nowrap ${
                  currentSelected === opt.id
                    ? "bg-[#FF5A2C] text-white border-2 border-[#FF5A2C] scale-105"
                    : "bg-white text-muted-foreground border border-border hover:border-[#FF5A2C] hover:text-orange"
                }`}
                aria-pressed={currentSelected === opt.id}
                style={{ minHeight: "36px" }}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid — single col on mobile, 2 cols on md+ */}
        {filteredProperties.length > 0 ? (
          <div
            data-ocid="properties.list"
            className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
          >
            {filteredProperties.map((p, i) => (
              <PropertyCard
                key={p.id}
                property={p}
                index={i}
                visible={inView}
                onViewDetails={setSelectedProperty}
              />
            ))}
          </div>
        ) : (
          <div
            data-ocid="properties.empty_state"
            className="text-center py-16 text-muted-foreground font-body"
          >
            <p className="text-4xl mb-3">🏠</p>
            <p className="font-display font-bold text-foreground text-lg mb-1">
              No Properties Found
            </p>
            <p className="text-sm">
              Try adjusting your filters to see more listings
            </p>
          </div>
        )}
      </div>

      <PropertyDetailsModal
        property={selectedProperty}
        isOpen={!!selectedProperty}
        onClose={() => setSelectedProperty(null)}
      />
    </section>
  );
}
