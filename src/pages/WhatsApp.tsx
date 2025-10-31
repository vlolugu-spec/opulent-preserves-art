import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo-crest.png";

const WhatsApp = () => {
  // Replace with your actual WhatsApp number (international format without + or spaces)
  const whatsappNumber = "447436978097";
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your exquisite taxidermy collection.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-gradient-vintage flex items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-96 h-96 border border-vintage-gold rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 border border-vintage-gold rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-vintage-gold-muted rounded-full"></div>
      </div>

      {/* Subtle Paper Texture Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.02),transparent)] opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-2xl w-full">
        {/* Logo */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <img 
            src={logoImage} 
            alt="Taxidermy Gallery Crest" 
            className="w-24 h-24 drop-shadow-glow animate-float"
          />
        </div>

        {/* Main Card */}
        <div className="bg-card/60 backdrop-blur-sm border-2 border-vintage-gold-muted shadow-deep p-10 md:p-16 animate-fade-in">
          {/* Ornate Top Border */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="h-px w-20 bg-vintage-gold"></div>
            <svg className="w-6 h-6 text-vintage-gold" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L15 8.5L22 9.5L17 14.5L18 21.5L12 18L6 21.5L7 14.5L2 9.5L9 8.5L12 2Z" />
            </svg>
            <div className="h-px w-20 bg-vintage-gold"></div>
          </div>

          {/* Heading */}
          <h1 className="font-display font-bold text-4xl md:text-5xl text-vintage-cream text-center mb-6 leading-tight">
            Connect with Our Atelier
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-foreground/90 text-center mb-4 font-serif leading-relaxed">
            Inquire about bespoke commissions, rare specimens, or private viewings
          </p>

          {/* Description */}
          <p className="text-base text-muted-foreground text-center mb-10 max-w-lg mx-auto leading-relaxed">
            Our master artisans are available to discuss your vision and guide you through 
            our exclusive collection of preserved natural artistry.
          </p>

          {/* WhatsApp CTA Button */}
          <div className="flex justify-center mb-8">
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button 
                variant="plaque" 
                size="lg"
                className="group relative overflow-hidden animate-glow text-base px-10 py-6 h-auto"
              >
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="relative z-10">Message on WhatsApp</span>
              </Button>
            </a>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-3 pt-6 border-t border-vintage-gold-muted/30">
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                <span>Discreet Inquiries</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                <span>Expert Consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-vintage-gold rounded-full"></div>
                <span>Global Delivery</span>
              </div>
            </div>
            <p className="text-xs text-vintage-gold-muted italic tracking-wide">
              Available Monday–Saturday, 10:00–18:00 GMT
            </p>
          </div>

          {/* Ornate Bottom Border */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="h-px w-20 bg-vintage-gold"></div>
            <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
            <div className="h-px w-20 bg-vintage-gold"></div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 space-y-2">
          <p className="text-xs text-vintage-gold-muted tracking-[0.2em] uppercase font-display">
            Taxidermy Gallery • Est. 1887
          </p>
          <p className="text-xs text-muted-foreground">
            London • New York • Paris
          </p>
          <a 
            href="/" 
            className="text-xs text-vintage-gold hover:text-vintage-cream transition-colors duration-300 inline-block mt-4"
          >
            ← Return to Main Site
          </a>
        </div>
      </div>
    </div>
  );
};

export default WhatsApp;
