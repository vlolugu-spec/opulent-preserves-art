import logoImage from "@/assets/logo-crest.png";

export const Navigation = () => {
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
            <a 
              href="#collection" 
              className="text-sm text-foreground hover:text-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display"
            >
              Collection
            </a>
            <a 
              href="#about" 
              className="text-sm text-foreground hover:text-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display"
            >
              About
            </a>
            <a 
              href="#commission" 
              className="text-sm text-foreground hover:text-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display"
            >
              Commission
            </a>
            <a 
              href="#contact" 
              className="text-sm bg-vintage-gold-muted text-vintage-walnut px-6 py-2 hover:bg-vintage-gold transition-colors duration-300 uppercase tracking-wider font-display font-semibold"
            >
              Inquire
            </a>
          </div>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-vintage-gold hover:text-vintage-cream transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
