import property1 from "@/assets/property1.jpg";
import property2 from "@/assets/property2.jpg";
import property3 from "@/assets/property3.jpg";
import property4 from "@/assets/property4.jpg";
import property5 from "@/assets/property5.jpg";
import property6 from "@/assets/property6.jpg";

export interface Property {
  id: string;
  title: string;
  city: string;
  address: string;
  price: number;
  rooms: number;
  bathrooms: number;
  area: number;
  floor: number | null;
  type: "Apartment" | "House" | "Land";
  description: string;
  images: string[];
}

export const properties: Property[] = [
  {
    id: "1",
    title: "Luxury apartment with sea view",
    city: "demo",
    address: "Corniche Street, Ain Diab",
    price: 1850000,
    rooms: 3,
    bathrooms: 2,
    area: 145,
    floor: 7,
    type: "Apartment",
    description:
      "A modern luxury apartment with a panoramic view of the Atlantic Ocean. It features a spacious living room, a fully equipped kitchen, and a large balcony. Prime location close to all amenities and services.",
    images: [property1, property4, property5],
  },
  {
    id: "2",
    title: "Modern villa with garden",
    city: "demo",
    address: "Riyad District, Souissi",
    price: 4200000,
    rooms: 5,
    bathrooms: 3,
    area: 320,
    floor: null,
    type: "House",
    description:
      "An elegant modern villa located in one of Rabat’s most prestigious neighborhoods. It includes a large green garden, a private swimming pool, and a garage for two cars. Perfect for families looking for comfort and privacy.",
    images: [property2, property4, property1],
  },
  {
    id: "3",
    title: "Land for construction with mountain view",
    city: "demo",
    address: "Ourika Road, Km 15",
    price: 950000,
    rooms: 0,
    bathrooms: 0,
    area: 500,
    floor: null,
    type: "Land",
    description:
      "A flat plot of land ready for construction in a strategic location on the Ourika road. It offers a stunning view of the Atlas Mountains. Ideal for building your dream villa or a tourism project.",
    images: [property3, property3, property3],
  },
  {
    id: "4",
    title: "Spacious apartment in the city center",
    city: "demo",
    address: "Mohammed V Street, Ville Nouvelle",
    price: 780000,
    rooms: 4,
    bathrooms: 2,
    area: 160,
    floor: 3,
    type: "Apartment",
    description:
      "A spacious and bright apartment in the heart of New Fez city. It features high-quality finishes and luxurious wooden flooring. Close to schools, hospitals, and shopping centers.",
    images: [property4, property1, property5],
  },
  {
    id: "5",
    title: "Luxury penthouse with terrace",
    city: "demo",
    address: "Malabata, Corniche",
    price: 3500000,
    rooms: 4,
    bathrooms: 3,
    area: 220,
    floor: 12,
    type: "Apartment",
    description:
      "An exceptional penthouse on the top floor with a private terrace offering a 360-degree view of the Strait of Gibraltar and the city. Unique design, luxury materials, and premium services.",
    images: [property5, property1, property4],
  },
  {
    id: "6",
    title: "Renovated traditional riad",
    city: "demo",
    address: "Old Medina, Bab Doukkala",
    price: 2800000,
    rooms: 6,
    bathrooms: 4,
    area: 280,
    floor: null,
    type: "House",
    description:
      "An authentic riad carefully restored while preserving its traditional architectural style. It includes an inner courtyard with a fountain, decorated arches, and traditional Moroccan zellige tiles. Ideal as a family home or hospitality project.",
    images: [property6, property6, property6],
  },
];