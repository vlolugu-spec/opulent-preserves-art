export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-gradient-vintage relative">
      {/* Ornate Border */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-vintage-gold to-transparent"></div>
      
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-8">
          {/* Section Label */}
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
            <span className="text-vintage-gold-muted text-sm tracking-[0.3em] uppercase font-display">
              The Curator's Vision
            </span>
            <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
          </div>
          
          <h2 className="font-display font-bold text-5xl md:text-6xl text-vintage-cream">
            A Legacy of Natural Artistry
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              For over a century, Taxidermy Gallery has stood as the premier atelier for collectors 
              who appreciate the refined intersection of natural history and artistic preservation.
            </p>
            
            <p>
              Our master taxidermists employ techniques passed down through generations, 
              combining Victorian-era craftsmanship with modern preservation science to create 
              timeless specimens of unparalleled quality.
            </p>
            
            <p className="text-vintage-gold-muted italic">
              "Each piece tells a story—not of endings, but of eternal beauty, 
              frozen in a moment of natural grace."
            </p>
          </div>
          
          {/* Decorative Flourish */}
          <div className="pt-8">
            <svg className="w-24 h-12 mx-auto text-vintage-gold/30" viewBox="0 0 100 50" fill="currentColor">
              <path d="M0 25 Q25 15, 50 25 T100 25" stroke="currentColor" fill="none" strokeWidth="1"/>
              <circle cx="50" cy="25" r="3" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>
      
      {/* Bottom Border */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-px bg-gradient-to-r from-transparent via-vintage-gold to-transparent"></div>
    </section>
  );
};
