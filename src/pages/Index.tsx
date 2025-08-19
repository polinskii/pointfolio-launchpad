import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowItWorksSection";
import BusinessSection from "@/components/BusinessSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <HowItWorksSection />
      <BusinessSection />
      <Footer />
    </div>
  );
};

export default Index;