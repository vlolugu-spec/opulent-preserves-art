import { MessageCircle, Phone } from "lucide-react";
import { useState } from "react";

export const FloatingWhatsApp = () => {
  const [isWhatsAppHovered, setIsWhatsAppHovered] = useState(false);
  const [isCallHovered, setIsCallHovered] = useState(false);
  
  // Replace with your actual WhatsApp number
  const whatsappNumber = "447123456789";
  const whatsappMessage = encodeURIComponent("Hello, I'm interested in your exquisite taxidermy collection.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  
  // Replace with your actual phone number
  const phoneNumber = "+442071234567"; // Format: +44 20 7123 4567
  const callLink = `tel:${phoneNumber}`;

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[200] group"
        onMouseEnter={() => setIsWhatsAppHovered(true)}
        onMouseLeave={() => setIsWhatsAppHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${
            isWhatsAppHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="bg-vintage-walnut border-2 border-vintage-gold shadow-glow px-5 py-3 relative">
            <p className="font-display text-sm text-vintage-cream tracking-wide">
              Inquire via WhatsApp
            </p>
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-l-8 border-l-vintage-gold border-y-8 border-y-transparent"></div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-vintage-gold rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-vintage-forest to-vintage-forest-dark border-2 border-vintage-gold-muted group-hover:border-vintage-gold rounded-full shadow-ornate group-hover:shadow-glow transition-all duration-300 flex items-center justify-center group-hover:scale-110">
            {/* Inner Decorative Ring */}
            <div className="absolute inset-2 border border-vintage-gold/30 rounded-full group-hover:border-vintage-gold/50 transition-colors duration-300"></div>
            
            {/* Icon */}
            <MessageCircle className="w-6 h-6 text-vintage-gold group-hover:text-vintage-cream transition-colors duration-300 relative z-10" />
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </a>

      {/* Call Button */}
      <a
        href={callLink}
        className="fixed bottom-[6.5rem] right-8 z-[200] group"
        onMouseEnter={() => setIsCallHovered(true)}
        onMouseLeave={() => setIsCallHovered(false)}
      >
        {/* Tooltip */}
        <div
          className={`absolute right-full mr-4 top-1/2 -translate-y-1/2 whitespace-nowrap transition-all duration-300 ${
            isCallHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none"
          }`}
        >
          <div className="bg-vintage-walnut border-2 border-vintage-gold shadow-glow px-5 py-3 relative">
            <p className="font-display text-sm text-vintage-cream tracking-wide">
              Call Our Atelier
            </p>
            {/* Arrow */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-full">
              <div className="border-l-8 border-l-vintage-gold border-y-8 border-y-transparent"></div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-vintage-gold rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300 animate-pulse"></div>
          
          {/* Main Button */}
          <div className="relative w-14 h-14 bg-gradient-to-br from-vintage-walnut to-vintage-forest-dark border-2 border-vintage-gold-muted group-hover:border-vintage-gold rounded-full shadow-ornate group-hover:shadow-glow transition-all duration-300 flex items-center justify-center group-hover:scale-110">
            {/* Inner Decorative Ring */}
            <div className="absolute inset-2 border border-vintage-gold/30 rounded-full group-hover:border-vintage-gold/50 transition-colors duration-300"></div>
            
            {/* Icon */}
            <Phone className="w-6 h-6 text-vintage-gold group-hover:text-vintage-cream transition-colors duration-300 relative z-10" />
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute -top-1 -left-1 w-3 h-3 border-l-2 border-t-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -top-1 -right-1 w-3 h-3 border-r-2 border-t-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-1 -left-1 w-3 h-3 border-l-2 border-b-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 border-r-2 border-b-2 border-vintage-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
      </a>
    </>
  );
};
