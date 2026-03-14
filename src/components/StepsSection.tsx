import { ClipboardList, Search, MessageSquare, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    title: "Enter your property details",
    description: "Fill out the form with the details of the property you want to sell and attach photos.",
  },
  {
    icon: Search,
    title: "We review and search for buyers",
    description: "Our team reviews the information and looks for suitable buyers for your property.",
  },
  {
    icon: MessageSquare,
    title: "Receive purchase offers",
    description: "We contact you with purchase offers from buyers interested in your property.",
  },
  {
    icon: CheckCircle,
    title: "Choose the best offer",
    description: "You select the most suitable offer and the sale process is completed successfully.",
  },
];

const StepsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How does our service work?
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Four simple steps to sell your property
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-shadow duration-300 text-center group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Step number */}
              <div className="absolute -top-4 right-6 w-8 h-8 rounded-full gradient-gold flex items-center justify-center text-foreground font-bold text-sm shadow-md">
                {index + 1}
              </div>

              <div className="w-16 h-16 mx-auto mb-5 rounded-2xl gradient-hero flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-primary-foreground" />
              </div>

              <h3 className="text-lg font-bold text-foreground mb-3">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsSection;