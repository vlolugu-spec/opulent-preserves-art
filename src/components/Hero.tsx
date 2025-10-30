import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-stag.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          {/* Decorative Line */}
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-vintage-gold"></div>
            <span className="text-vintage-gold text-sm tracking-[0.3em] uppercase">Est. 1887</span>
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-vintage-gold"></div>
          </div>
          
          <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-tight">
            Atelier <span className="text-vintage-gold">Memento</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-vintage-cream/80 font-serif max-w-2xl mx-auto leading-relaxed">
            Preserving Nature's Majesty Through Victorian Artistry
          </p>
          
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Each specimen is a masterwork of taxidermy, meticulously preserved to capture the eternal beauty of the natural world
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
            <Button variant="plaque" size="lg">
              View Collection
            </Button>
            <Button variant="vintage" size="lg">
              Commission a Piece
            </Button>
          </div>
        </div>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};
