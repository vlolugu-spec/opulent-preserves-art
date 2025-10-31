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
            About Us
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p>
              Welcome to Taxidermy Gallery, the UK's premier destination for exquisite and ethically 
              sourced taxidermy. With a passion for preserving the beauty and majesty of the natural world, 
              we offer a curated collection of high-quality specimens, each a testament to skilled artistry 
              and respect for wildlife.
            </p>
            
            <p>
              Based in the heart of the United Kingdom, we pride ourselves on a collection that spans a 
              diverse range of animals, from stunning birds and majestic mammals to fascinating insects 
              and marine life. Every piece in our gallery is carefully prepared and presented, ensuring 
              both aesthetic appeal and longevity.
            </p>
            
            <p>
              At Taxidermy Gallery, we understand the importance of responsible sourcing. We are committed 
              to ethical practices, working only with reputable suppliers and adhering strictly to all 
              national and international wildlife regulations. Our aim is to provide pieces that not only 
              captivate but also come with a clear, ethical provenance.
            </p>

            <p>
              We are delighted to serve enthusiasts, collectors, and interior designers across the globe. 
              We offer reliable and secure delivery services, ensuring that your chosen piece arrives safely 
              at your doorstep, no matter where you are. Explore our collection and bring a touch of timeless 
              nature into your home or space with Taxidermy Gallery.
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
