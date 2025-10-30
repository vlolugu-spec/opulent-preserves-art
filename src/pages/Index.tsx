import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { Commission } from "@/components/Commission";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Gallery />
        <Commission />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-vintage-gold-muted/30 bg-gradient-vintage">
        <div className="container mx-auto px-6 py-12">
          <div className="text-center space-y-4">
            <p className="font-display text-vintage-gold text-sm tracking-[0.3em] uppercase">
              Atelier Memento
            </p>
            <p className="text-xs text-muted-foreground">
              London • New York • Paris
            </p>
            <p className="text-xs text-muted-foreground/60">
              © 1887–2025 Atelier Memento. All specimens ethically sourced and preserved with care.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
