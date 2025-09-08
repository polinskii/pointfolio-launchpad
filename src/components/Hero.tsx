import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Organic Background Pattern */}
      <div 
        className="absolute inset-0 opacity-90"
        style={{
          backgroundImage: `url(/lovable-uploads/a48ab945-f9a4-40dd-8b7b-27310ba891aa.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Organic Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-organic-overlay" />
      
      {/* Floating Organic Shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-16 w-64 h-64 bg-coral/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-golden/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-16 left-32 w-48 h-48 bg-primary-glow/12 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '3s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
          pointfolio
        </h1>
        
        <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-lg">
          Karta z pieczątkami zawsze pod ręką, bez apki!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button variant="hero" size="lg" className="text-lg px-10 py-6 shadow-2xl" onClick={() => window.location.href = 'https://app.pointfol.io/login'}>
            Zacznij zbierać punkty
          </Button>
          <Button variant="outline" size="lg" className="text-lg px-10 py-6 bg-white/15 border-white/40 text-white hover:bg-white/25 backdrop-blur-md shadow-xl" onClick={() => window.location.href = 'https://app.pointfol.io/business_welcome'}>
            Dla biznesu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
