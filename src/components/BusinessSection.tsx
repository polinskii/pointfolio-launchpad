import { Button } from "@/components/ui/button";
import { Zap, Users, BarChart3, Shield } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Szybka konfiguracja",
    description: "Darmowy program dla stałych klientów w trzy minuty"
  },
  {
    icon: Users,
    title: "Więcej stałych klientów",
    description: "Twoi klienci zawsze mają swoją kartę z pieczątkami przy sobie - dzięki temu łatwiej jest im do Ciebie wracać"
  },
  {
    icon: BarChart3,
    title: "Analityka i statystyki",
    description: "Łatwa w obsłudze, z ogromną funkcjonalnością dla menadżerów"
  },
  {
    icon: Shield,
    title: "Bez aplikacji do pobrania",
    description: "Karta z pieczątkami zawsze w telefonie klienta, bez apki!"
  }
];

const BusinessSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            Darmowy program dla stałych klientów <br />
            <span className="bg-gradient-coral-gold bg-clip-text text-transparent">w trzy minuty</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prosta aplikacja dla stałych klientów w kawiarniach, piekarniach, restauracjach i salonach piękności.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            
            return (
              <div key={index} className="group">
                <div className="bg-card rounded-2xl p-6 shadow-organic hover:shadow-coral transition-organic group-hover:scale-105 h-full">
                  <div className="w-16 h-16 mb-4 rounded-xl bg-gradient-primary-teal flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-organic">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="coral" size="lg" className="text-lg px-8 py-6 mb-4">
            Rejestracja dla biznesu
          </Button>
          <p className="text-sm text-muted-foreground">
            Rozpocznij w mniej niż 3 minuty
          </p>
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;