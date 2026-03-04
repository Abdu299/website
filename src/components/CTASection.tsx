import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Clock, Users } from "lucide-react";

const features = [
  { icon: Shield, text: "خصوصية تامة" },
  { icon: Clock, text: "استجابة سريعة" },
  { icon: Users, text: "شبكة مشترين واسعة" },
];

const CTASection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          جاهز لبيع عقارك؟
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
          لا تنتظر أكثر. أرسل معلومات عقارك الآن واحصل على أفضل العروض.
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
            أرسل معلومات عقارك الآن
            <ArrowLeft className="w-5 h-5" />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
