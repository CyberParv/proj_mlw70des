export interface NavItem {
  label: string;
  href: string;
}

export interface Vehicle {
  name: string;
  price: string;
  mileage: string;
  transmission: string;
  fuel: string;
  image: string;
  badge?: string;
}

export interface Service {
  name: string;
  price: string;
  duration: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
  rating: number;
  image?: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface HoursEntry {
  days: string;
  time: string;
}

export interface FilterOption {
  name: string;
  options: string[];
}
