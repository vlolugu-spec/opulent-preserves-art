import { useState } from "react";
import logoImage from "@/assets/logo-crest.png";
import { X } from "lucide-react";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (elementId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-vintage-gold-muted/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="Atelier Memento Crest" 
              className="w-12 h-12 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-vintage-cream group-hover:text-vintage-gold transition-colors duration-300">
                Atelier Memento
              </span>
              <span className="text-xs text-vintage-gold-muted tracking-[0.2em] uppercase">
                Est. 1887
              </span>
            </div>
          </a>
          
          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <button 
              onClick={() => document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-foreground hover:text-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display"
            >
              Collection
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-foreground hover:text-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('commission')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm text-foreground hover:text-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display"
            >
              Commission
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm bg-vintage-gold-muted text-vintage-walnut px-6 py-2 hover:bg-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display font-semibold"
            >
              Inquire
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden text-vintage-gold hover:text-vintage-cream transition-colors duration-300"
            aria-label="Open menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 md:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu Drawer */}
          <div className="fixed top-0 right-0 bottom-0 w-80 bg-card border-l-2 border-vintage-gold-muted shadow-deep z-50 md:hidden animate-slide-in-right">
            {/* Close Button */}
            <div className="flex items-center justify-between p-6 border-b border-vintage-gold-muted/30">
              <span className="font-display font-bold text-xl text-vintage-cream">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-vintage-gold hover:text-vintage-cream transition-colors duration-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Menu Items */}
            <nav className="p-6 space-y-4">
              <button 
                onClick={() => handleNavClick('collection')}
                className="w-full text-left py-3 px-4 text-foreground hover:text-vintage-gold hover:bg-vintage-gold-muted/10 transition-colors duration-300 uppercase tracking-wider font-display border-b border-vintage-gold-muted/20"
              >
                Collection
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-3 px-4 text-foreground hover:text-vintage-gold hover:bg-vintage-gold-muted/10 transition-colors duration-300 uppercase tracking-wider font-display border-b border-vintage-gold-muted/20"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('commission')}
                className="w-full text-left py-3 px-4 text-foreground hover:text-vintage-gold hover:bg-vintage-gold-muted/10 transition-colors duration-300 uppercase tracking-wider font-display border-b border-vintage-gold-muted/20"
              >
                Commission
              </button>
              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-3 px-4 bg-vintage-gold-muted text-vintage-walnut hover:bg-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display font-semibold mt-4"
              >
                Inquire
              </button>
            </nav>
            
            {/* Decorative Footer */}
            <div className="absolute bottom-8 left-0 right-0 px-6">
              <div className="text-center space-y-2 border-t border-vintage-gold-muted/30 pt-6">
                <p className="text-xs text-vintage-gold-muted tracking-[0.2em] uppercase">Est. 1887</p>
                <p className="text-xs text-muted-foreground">London • New York • Paris</p>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};
