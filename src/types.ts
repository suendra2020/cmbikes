export interface Bike {
  id: string;
  brand: string;
  model: string;
  price: number;
  emi: number;
  mileage: number; // in km/l
  engine: string; // e.g. "973cc", "150cc"
  fuelType: "Petrol" | "Electric";
  year: number;
  kmDriven?: number;
  owners?: number;
  condition: "New" | "Used";
  insuranceStatus?: string;
  serviceHistory?: string;
  badge?: string;
  image: string;
  specs: {
    power: string;
    torque: string;
    brakes: string;
    weight: string;
    tankCapacity: string;
  };
  description: string;
}

export interface Accessory {
  id: string;
  name: string;
  category: "Helmets" | "Riding Gear" | "Exhausts" | "Electronics" | "Care Products";
  price: number;
  rating: number;
  image: string;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  date: string;
  source: "Google" | "Customer";
  avatar: string;
  bikeModel?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Showroom" | "Deliveries" | "Bikes" | "Events";
  image: string;
  videoUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: "Buying" | "Selling" | "Exchange" | "Finance" | "Insurance";
}
