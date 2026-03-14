import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";
import { Building2 } from "lucide-react";

const propertyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      

      {/* Hero */}
      <section className="bg-gradient-to-b from-secondary to-background px-4 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <Building2 className="mx-auto mb-4 h-12 w-12 text-primary" />
          <h1 className="mb-3 text-4xl font-extrabold text-foreground md:text-5xl">
            Find Your <span className="text-primary">Perfect Property</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Apartments, houses, and land in the best cities
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-2xl font-bold text-foreground">
          Latest Properties
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default propertyPage;