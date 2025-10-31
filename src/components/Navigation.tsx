import { useState, useEffect } from "react";
import logoImage from "@/assets/logo-crest.png";
import { X } from "lucide-react";
import { CategoryType } from "@/components/FilterBar";
import { Cart } from "@/components/Cart";

export const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (elementId: string) => {
    setMobileMenuOpen(false);
    setTimeout(() => {
      document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleCategoryClick = (category: CategoryType) => {
    setMobileMenuOpen(false);
    // Dispatch filter event first
    const event = new CustomEvent('filterCategory', { detail: category });
    window.dispatchEvent(event);
    // Scroll directly to gallery grid, not the filter section
    setTimeout(() => {
      document.getElementById('gallery-grid')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-vintage-gold-muted/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="Taxidermy Gallery Crest" 
              className="w-12 h-12 transition-transform duration-500 group-hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-vintage-cream group-hover:text-vintage-gold transition-colors duration-300">
                Taxidermy Gallery
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
            <Cart />
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-sm bg-vintage-gold-muted text-vintage-walnut px-6 py-2 hover:bg-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display font-semibold"
            >
              Inquire
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileMenuOpen((v) => !v)}
            className="md:hidden text-vintage-gold hover:text-vintage-cream transition-colors duration-300"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute left-0 right-0 top-full z-[60]">
          <div className="bg-vintage-walnut border-t-2 border-b-2 border-vintage-gold shadow-deep px-4 py-4 max-h-[80vh] overflow-auto">
            {/* Close Row */}
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-vintage-gold/30">
              <span className="font-display font-bold text-lg text-vintage-cream">Menu</span>
              <button 
                onClick={() => setMobileMenuOpen(false)}
                className="text-vintage-gold hover:text-vintage-cream transition-colors duration-300 p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <nav className="space-y-3">
              <button 
                onClick={() => handleNavClick('collection')}
                className="w-full text-left py-4 px-5 text-vintage-cream bg-vintage-forest-dark hover:bg-vintage-forest hover:text-vintage-gold transition-all duration-300 uppercase tracking-wider font-display text-sm border border-vintage-gold-muted/30 shadow-sm"
              >
                Collection
              </button>
              
              {/* Category Submenu */}
              <div className="pl-4 space-y-2 pb-2 border-l-2 border-vintage-gold/30">
                <p className="text-xs text-vintage-gold-muted uppercase tracking-wider font-display mb-2">Categories</p>
                <button 
                  onClick={() => handleCategoryClick('birds')}
                  className="w-full text-left py-2 px-3 text-sm text-vintage-cream/90 hover:text-vintage-gold hover:bg-vintage-forest/30 transition-colors duration-200"
                >
                  Birds
                </button>
                <button 
                  onClick={() => handleCategoryClick('head-mounts')}
                  className="w-full text-left py-2 px-3 text-sm text-vintage-cream/90 hover:text-vintage-gold hover:bg-vintage-forest/30 transition-colors duration-200"
                >
                  Head Mounts
                </button>
                <button 
                  onClick={() => handleCategoryClick('skins')}
                  className="w-full text-left py-2 px-3 text-sm text-vintage-cream/90 hover:text-vintage-gold hover:bg-vintage-forest/30 transition-colors duration-200"
                >
                  Skins
                </button>
                <button 
                  onClick={() => handleCategoryClick('full-mounts')}
                  className="w-full text-left py-2 px-3 text-sm text-vintage-cream/90 hover:text-vintage-gold hover:bg-vintage-forest/30 transition-colors duration-200"
                >
                  Full Mounts
                </button>
                <button 
                  onClick={() => handleCategoryClick('feet')}
                  className="w-full text-left py-2 px-3 text-sm text-vintage-cream/90 hover:text-vintage-gold hover:bg-vintage-forest/30 transition-colors duration-200"
                >
                  Taxidermy Feet
                </button>
                <button 
                  onClick={() => handleCategoryClick('claws-teeth-horns')}
                  className="w-full text-left py-2 px-3 text-sm text-vintage-cream/90 hover:text-vintage-gold hover:bg-vintage-forest/30 transition-colors duration-200"
                >
                  Claws, Teeth & Horns
                </button>
              </div>
              
              <button 
                onClick={() => handleNavClick('about')}
                className="w-full text-left py-4 px-5 text-vintage-cream bg-vintage-forest-dark hover:bg-vintage-forest hover:text-vintage-gold transition-all duration-300 uppercase tracking-wider font-display text-sm border border-vintage-gold-muted/30 shadow-sm"
              >
                About
              </button>
              <button 
                onClick={() => handleNavClick('commission')}
                className="w-full text-left py-4 px-5 text-vintage-cream bg-vintage-forest-dark hover:bg-vintage-forest hover:text-vintage-gold transition-all duration-300 uppercase tracking-wider font-display text-sm border border-vintage-gold-muted/30 shadow-sm"
              >
                Commission
              </button>
              
              {/* Cart Button for Mobile */}
              <div className="w-full py-4 px-5 bg-vintage-forest-dark hover:bg-vintage-forest border border-vintage-gold-muted/30 shadow-sm">
                <div onClick={() => setMobileMenuOpen(false)}>
                  <Cart />
                </div>
              </div>

              <button 
                onClick={() => handleNavClick('contact')}
                className="w-full text-left py-4 px-5 bg-vintage-gold text-vintage-walnut hover:bg-vintage-gold-muted transition-all duration-300 uppercase tracking-wider font-display font-semibold text-sm mt-2 shadow-md border border-vintage-gold"
              >
                Inquire
              </button>

              {/* Scroll to Top */}
              <button 
                onClick={() => {
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-full text-center py-3 px-5 text-vintage-gold-muted hover:text-vintage-gold border border-vintage-gold-muted/30 hover:border-vintage-gold/50 transition-all duration-300 uppercase tracking-wider font-display text-xs mt-4"
              >
                ↑ Scroll to Top
              </button>

              {/* Decorative Footer */}
              <div className="text-center space-y-2 border-t-2 border-vintage-gold/30 pt-4 mt-4">
                <p className="text-xs text-vintage-gold tracking-[0.2em] uppercase font-display">Est. 1887</p>
                <p className="text-xs text-vintage-cream/70">London • New York • Paris</p>
              </div>
            </nav>
          </div>
        </div>
      )}

    </nav>
  );
};
