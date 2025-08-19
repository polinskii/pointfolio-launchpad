import { QrCode, Gift, CreditCard } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Zarejestruj konto",
    description: "Zeskanuj kod QR lub po prostu stwórz konto, w którym zapiszesz swoje pieczątki",
    color: "primary"
  },
  {
    icon: Gift,
    title: "Zbieraj punkty, wymieniaj je na nagrody",
    description: "Wymień punkty na darmową kawę - sprzedawca skanuje kod QR Twojego konta i wyrównuje ilość punktów",
    color: "coral"
  },
  {
    icon: CreditCard,
    title: "...i już nigdy nie gub swojej karty",
    description: "Twoja karta z punktami jest zawsze przy Tobie, bez kolejnej apki!",
    color: "golden"
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Jak zbierać punkty?
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            
            return (
              <div key={index} className="text-center group">
                <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center shadow-${step.color} transition-organic group-hover:scale-110 ${
                  step.color === 'primary' ? 'bg-gradient-primary-teal' :
                  step.color === 'coral' ? 'bg-coral' :
                  'bg-golden'
                }`}>
                  <Icon className={`w-12 h-12 ${
                    step.color === 'primary' ? 'text-primary-foreground' :
                    step.color === 'coral' ? 'text-coral-foreground' :
                    'text-golden-foreground'
                  }`} />
                </div>
                
                <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-organic">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;