import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="عقارات فاخرة" className="w-full h-full object-cover" />
        <div className="absolute inset-0 gradient-hero opacity-85" />
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
            بع عقارك بسهولة
            <br />
            <span className="text-gradient">واحصل على عروض شراء</span>
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-lg">
            نربط بين أصحاب العقارات والمشترين المهتمين. أرسل لنا معلومات عقارك ونحن نتولى البحث عن أفضل العروض لك.
          </p>
          <Button asChild size="lg" className="gradient-gold text-foreground font-bold text-lg px-8 py-6 rounded-xl border-0 shadow-elevated hover:opacity-90 transition-all">
            <Link to="/submit" className="flex items-center gap-2">
              أرسل معلومات عقارك
              <ArrowLeft className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
