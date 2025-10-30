import { Button } from "@/components/ui/button";

export const Commission = () => {
  return (
    <section id="commission" className="py-32 px-6 bg-gradient-vintage relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 border border-vintage-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-vintage-gold rounded-full"></div>
      </div>
      
      <div className="container mx-auto max-w-4xl relative z-10">
        <div className="bg-card/40 backdrop-blur-sm border-2 border-vintage-gold-muted shadow-deep p-12 md:p-16">
          {/* Ornate Top Border */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-16 bg-vintage-gold"></div>
            <svg className="w-6 h-6 text-vintage-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
            </svg>
            <div className="h-px w-16 bg-vintage-gold"></div>
          </div>
          
          <div className="text-center space-y-6">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-vintage-cream">
              Commission a Bespoke Piece
            </h2>
            
            <p className="text-lg text-foreground/90 leading-relaxed max-w-2xl mx-auto">
              Our master artisans welcome inquiries for custom taxidermy commissions. 
              Whether you seek to preserve a cherished specimen or acquire a rare masterwork 
              for your collection, we offer discreet consultation and impeccable craftsmanship.
            </p>
            
            <div className="pt-8 space-y-4">
              <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                  <span>Museum Quality</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                  <span>Ethical Sourcing</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                  <span>Lifetime Guarantee</span>
                </div>
              </div>
              
              <div className="pt-6">
                <Button variant="plaque" size="lg" className="animate-glow">
                  Request Consultation
                </Button>
              </div>
              
              <p className="text-xs text-muted-foreground italic pt-4">
                Available by appointment only • London & New York
              </p>
            </div>
          </div>
          
          {/* Ornate Bottom Border */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-16 bg-vintage-gold"></div>
            <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
            <div className="h-px w-16 bg-vintage-gold"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
