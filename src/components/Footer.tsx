import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gradient-organic py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Gotowy na start?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Zacznij zbierać punkty już dziś lub skonfiguruj program lojalnościowy dla swojego biznesu
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm">
              Login / Rejestracja
            </Button>
            <Button variant="secondary" size="lg">
              Rejestracja dla biznesu
            </Button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-2">pointfolio</h3>
              <p className="text-white/70">Karta lojalnościowa zawsze w telefonie</p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-white/70 text-sm">
                © 2024 Pointfolio. Wszystkie prawa zastrzeżone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;