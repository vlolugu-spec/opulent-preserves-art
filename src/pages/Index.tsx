import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Commission } from "@/components/Commission";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <FloatingWhatsApp />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Commission />
      </main>
      
      {/* Footer / Contact */}
      <footer id="contact" className="border-t border-vintage-gold-muted/30 bg-gradient-vintage">
        <div className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Contact Header */}
            <div className="text-center space-y-6 mb-12">
              <div className="flex items-center justify-center gap-3">
                <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
                <span className="text-vintage-gold-muted text-sm tracking-[0.3em] uppercase font-display">
                  Get In Touch
                </span>
                <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
              </div>
              
              <h2 className="font-display font-bold text-4xl text-vintage-cream">
                Visit Our Ateliers
              </h2>
            </div>
            
            {/* Location Details */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center space-y-3 p-6 border border-vintage-gold-muted/30 bg-card/20">
                <h3 className="font-display font-semibold text-lg text-vintage-gold">London</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  27 Savile Row<br />
                  Mayfair, London<br />
                  W1S 2EX
                </p>
                <p className="text-xs text-vintage-gold-muted">By Appointment Only</p>
              </div>
              
              <div className="text-center space-y-3 p-6 border border-vintage-gold-muted/30 bg-card/20">
                <h3 className="font-display font-semibold text-lg text-vintage-gold">New York</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  845 Madison Avenue<br />
                  Upper East Side<br />
                  NY 10021
                </p>
                <p className="text-xs text-vintage-gold-muted">By Appointment Only</p>
              </div>
              
              <div className="text-center space-y-3 p-6 border border-vintage-gold-muted/30 bg-card/20">
                <h3 className="font-display font-semibold text-lg text-vintage-gold">Paris</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  12 Place Vendôme<br />
                  1er Arrondissement<br />
                  75001 Paris
                </p>
                <p className="text-xs text-vintage-gold-muted">By Appointment Only</p>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="text-center space-y-4 border-t border-vintage-gold-muted/30 pt-8">
              <p className="font-display text-vintage-gold text-sm tracking-[0.3em] uppercase">
                Taxidermy Gallery
              </p>
              <div className="text-sm text-muted-foreground space-y-2">
                <p>Email: inquiries@taxidermygallery.com</p>
                <p>Tel: +44 20 7123 4567</p>
              </div>
              <p className="text-xs text-muted-foreground/60 pt-4">
                © 1887–2025 Taxidermy Gallery. All specimens ethically sourced and preserved with care.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
