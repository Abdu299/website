import { useParams, Link } from "react-router-dom";
import { properties } from "@/data/properties";

import {
  ArrowRight,
  MapPin,
  BedDouble,
  Bath,
  Maximize2,
  Building,
  Home,
  Banknote,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
       
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground">Property not found</h1>
          <Link to="/" className="mt-4 inline-block text-primary hover:underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const details = [
    { icon: Maximize2, label: "Area", value: `${property.area} m²` },
    ...(property.rooms > 0
      ? [{ icon: BedDouble, label: "Rooms", value: `${property.rooms}` }]
      : []),
    ...(property.bathrooms > 0
      ? [{ icon: Bath, label: "Bathrooms", value: `${property.bathrooms}` }]
      : []),
    ...(property.floor !== null
      ? [{ icon: Building, label: "Floor", value: `${property.floor}` }]
      : []),
    { icon: Home, label: "Type", value: property.type },
  ];

  return (
    <div className="min-h-screen bg-background">
      

      <div className="container mx-auto px-4 py-8">
        {/* Back link */}
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowRight className="h-4 w-4" />
          Back to properties
        </Link>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Images + Info */}
          <div className="lg:col-span-2">
            {/* Main image */}
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={property.images[selectedImage]}
                alt={property.title}
                className="aspect-video w-full object-cover"
              />
            </div>

            {/* Thumbnails */}
            <div className="mb-8 flex gap-3">
              {property.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedImage(i)}
                  className={`overflow-hidden rounded-md border-2 transition-all ${
                    selectedImage === i
                      ? "border-primary"
                      : "border-transparent opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${property.title} ${i + 1}`}
                    className="h-20 w-28 object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Title & location */}
            <h1 className="mb-2 text-3xl font-bold text-foreground">
              {property.title}
            </h1>

            <div className="mb-6 flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-5 w-5" />
              <span>
                {property.address}, {property.city}
              </span>
            </div>

            {/* Details grid */}
            <div className="mb-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {details.map((d) => (
                <div
                  key={d.label}
                  className="flex items-center gap-3 rounded-lg border bg-card p-4"
                >
                  <d.icon className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-xs text-muted-foreground">{d.label}</p>
                    <p className="font-semibold text-foreground">{d.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="rounded-lg border bg-card p-6">
              <h2 className="mb-3 text-xl font-bold text-foreground">Description</h2>
              <p className="leading-7 text-muted-foreground">
                {property.description}
              </p>
            </div>
          </div>

          {/* Sidebar - Price & Contact */}
          <div className="space-y-6">
            {/* Price card */}
            <div className="rounded-lg border bg-card p-6 text-center">
              <p className="mb-1 text-sm text-muted-foreground">Price</p>
              <div className="flex items-center justify-center gap-2 text-3xl font-bold text-primary">
                <Banknote className="h-7 w-7" />
                {property.price.toLocaleString("ar-MA")} MAD
              </div>
            </div>

            {/* Contact card */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold text-foreground">
                Contact us
              </h3>

              <div className="space-y-4">
                <a
                  href="tel:+212600000000"
                  className="flex items-center gap-3 rounded-lg bg-primary px-4 py-3 text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">+212 600 000 000</span>
                </a>

                <a
                  href="mailto:info@aqaratna.ma"
                  className="flex items-center gap-3 rounded-lg border px-4 py-3 text-foreground transition-colors hover:bg-secondary"
                >
                  <Mail className="h-5 w-5 text-primary" />
                  <span className="font-medium">info@aqaratna.ma</span>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;