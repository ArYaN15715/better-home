export interface Property {
  id: number;
  title: string;
  location: string;
  price: string;
  priceRaw: number;
  area: string;
  type: "Apartment" | "Villa" | "Commercial" | "Plot";
  tag?: "Hot Deal" | "New" | "Recently Added" | "Premium" | "Featured";
  image: string;
  beds?: number;
  baths?: number;
  views?: number;
  verified: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FilterOption {
  id: string;
  label: string;
}

export type FilterCategory = "Budget" | "Location" | "Type";

export interface TrustStat {
  icon: string;
  label: string;
  value: string;
}

export interface WhyChooseItem {
  icon: string;
  title: string;
  tagline: string;
}
