import { Link } from "react-router-dom";
import { MapPin, BedDouble, Banknote } from "lucide-react";
import type { Property } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index: number;
}

const PropertyCard = ({ property, index }: PropertyCardProps) => {
  return (
    <Link
      to={`/property/${property.id}`}
      className="group block animate-fade-in overflow-hidden rounded-lg border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={property.images[0]}
          alt={property.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute left-3 top-3 rounded-md bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          {property.type}
        </span>
      </div>
      <div className="p-4">
        <h3 className="mb-2 text-lg font-bold text-foreground line-clamp-1">
          {property.title}
        </h3>
        <div className="mb-3 flex items-center gap-1 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 shrink-0" />
          <span>{property.city}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-primary font-bold">
            <Banknote className="h-4 w-4" />
            <span>{property.price.toLocaleString()} د.م</span>
          </div>
          {property.rooms > 0 && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <BedDouble className="h-4 w-4" />
              <span>{property.rooms} غرف</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PropertyCard;
