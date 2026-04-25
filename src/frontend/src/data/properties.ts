import type {
  FilterOption,
  Property,
  Testimonial,
  TrustStat,
  WhyChooseItem,
} from "../types";

export const properties: Property[] = [
  {
    id: 1,
    title: "3BHK Luxury Apartment",
    location: "South Bopal, Ahmedabad",
    price: "₹78 Lakhs",
    priceRaw: 7800000,
    area: "1650 sq.ft",
    type: "Apartment",
    tag: "Hot Deal",
    image: "/assets/generated/property-bopal-apartment.dim_600x400.jpg",
    beds: 3,
    baths: 2,
    views: 12,
    verified: true,
  },
  {
    id: 2,
    title: "2BHK Modern Flat",
    location: "Shela, Ahmedabad",
    price: "₹52 Lakhs",
    priceRaw: 5200000,
    area: "1180 sq.ft",
    type: "Apartment",
    tag: "New",
    image: "/assets/generated/property-shela-flat.dim_600x400.jpg",
    beds: 2,
    baths: 2,
    views: 8,
    verified: true,
  },
  {
    id: 3,
    title: "Premium Commercial Office",
    location: "SG Highway, Ahmedabad",
    price: "₹1.2 Cr",
    priceRaw: 12000000,
    area: "2200 sq.ft",
    type: "Commercial",
    tag: "Featured",
    image: "/assets/generated/property-sg-office.dim_600x400.jpg",
    views: 19,
    verified: true,
  },
  {
    id: 4,
    title: "Luxury Private Villa",
    location: "Bopal, Ahmedabad",
    price: "₹1.8 Cr",
    priceRaw: 18000000,
    area: "3800 sq.ft",
    type: "Villa",
    tag: "Premium",
    image: "/assets/generated/property-bopal-villa.dim_600x400.jpg",
    beds: 4,
    baths: 3,
    views: 24,
    verified: true,
  },
  {
    id: 5,
    title: "3BHK Premium Apartment",
    location: "Bopal, Ahmedabad",
    price: "₹92 Lakhs",
    priceRaw: 9200000,
    area: "1890 sq.ft",
    type: "Apartment",
    tag: "Recently Added",
    image: "/assets/generated/property-bopal-apartment.dim_600x400.jpg",
    beds: 3,
    baths: 2,
    views: 6,
    verified: true,
  },
  {
    id: 6,
    title: "2BHK Smart Home",
    location: "Shela, Ahmedabad",
    price: "₹58 Lakhs",
    priceRaw: 5800000,
    area: "1240 sq.ft",
    type: "Apartment",
    tag: "New",
    image: "/assets/generated/property-shela-flat.dim_600x400.jpg",
    beds: 2,
    baths: 2,
    views: 11,
    verified: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "South Bopal",
    text: "Better Home made our dream home a reality. Their local expertise in Bopal is unmatched — found us the perfect 3BHK in just 2 weeks!",
    rating: 5,
    avatar: "PS",
  },
  {
    id: 2,
    name: "Rajesh Patel",
    location: "Shela",
    text: "Extremely professional and transparent. No hidden charges, verified listings only. Got the best deal on SG Highway property.",
    rating: 5,
    avatar: "RP",
  },
  {
    id: 3,
    name: "Meera Desai",
    location: "Bopal",
    text: "Fast response, honest advice, amazing deals. They understood exactly what we needed and delivered beyond expectations.",
    rating: 5,
    avatar: "MD",
  },
];

export const trustStats: TrustStat[] = [
  { icon: "⭐", label: "Rating", value: "5.0" },
  { icon: "🏠", label: "Deals Closed", value: "500+" },
  { icon: "📍", label: "Bopal Expert", value: "#1" },
  { icon: "✔", label: "Verified Listings", value: "100%" },
];

export const whyChooseItems: WhyChooseItem[] = [
  {
    icon: "✅",
    title: "Verified Properties",
    tagline: "Every listing is personally verified",
  },
  {
    icon: "💰",
    title: "Best Deals",
    tagline: "Guaranteed market-best pricing",
  },
  {
    icon: "📍",
    title: "Local Expertise",
    tagline: "10+ years in Bopal & Shela",
  },
  { icon: "⚡", title: "Fast Response", tagline: "Reply within 15 minutes" },
];

export const budgetFilters: FilterOption[] = [
  { id: "all", label: "All Budgets" },
  { id: "under50", label: "Under ₹50L" },
  { id: "50to1cr", label: "₹50L – ₹1Cr" },
  { id: "above1cr", label: "Above ₹1Cr" },
];

export const locationFilters: FilterOption[] = [
  { id: "all", label: "All Areas" },
  { id: "bopal", label: "Bopal" },
  { id: "south-bopal", label: "South Bopal" },
  { id: "shela", label: "Shela" },
  { id: "sg-highway", label: "SG Highway" },
];

export const typeFilters: FilterOption[] = [
  { id: "all", label: "All Types" },
  { id: "Apartment", label: "Apartment" },
  { id: "Villa", label: "Villa" },
  { id: "Commercial", label: "Commercial" },
];
