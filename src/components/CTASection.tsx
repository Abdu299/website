import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Clock, Users } from "lucide-react";

const features = [
  { icon: Shield, text: "Complete Privacy" },
  { icon: Clock, text: "Fast Response" },
  { icon: Users, text: "Wide Network of Buyers" },
];

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to sell your property?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
          Don’t wait any longer. Send your property information now and receive the best offers.
        </p>

        <div className="flex flex-wrap justify-center gap-6 mb-10">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-2 text-primary-foreground/90">
              <f.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{f.text}</span>
            </div>
          ))}
        </div>

        <Button asChild size="lg" className="gradient-gold text-foreground font-bold text-lg px-10 py-6 rounded-xl border-0 shadow-elevated hover:opacity-90 transition-all">
          <Link to="/submit" className="flex items-center gap-2">
            Send your property information now
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;