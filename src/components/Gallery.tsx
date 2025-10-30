import peacockImage from "@/assets/peacock-piece.jpg";
import owlImage from "@/assets/owl-dome.jpg";
import butterfliesImage from "@/assets/butterflies.jpg";
import foxImage from "@/assets/fox-mount.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Imperial Peacock",
    subtitle: "Pavo cristatus",
    image: peacockImage,
    price: "Inquire",
  },
  {
    id: 2,
    title: "Barn Owl Under Dome",
    subtitle: "Tyto alba",
    image: owlImage,
    price: "Inquire",
  },
  {
    id: 3,
    title: "Morpho Collection",
    subtitle: "Lepidoptera Display",
    image: butterfliesImage,
    price: "Inquire",
  },
  {
    id: 4,
    title: "Red Fox in Hunt",
    subtitle: "Vulpes vulpes",
    image: foxImage,
    price: "Inquire",
  },
];

export const Gallery = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="flex items-center justify-center gap-3">
            <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
            <span className="text-vintage-gold-muted text-sm tracking-[0.3em] uppercase font-display">
              Private Collection
            </span>
            <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
          </div>
          
          <h2 className="font-display font-bold text-5xl md:text-6xl text-vintage-cream">
            Preserved Masterworks
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exquisite specimens available for distinguished collectors and private commissions
          </p>
        </div>
        
        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {galleryItems.map((item, index) => (
            <article 
              key={item.id}
              className="group relative bg-card border-2 border-border shadow-ornate hover:shadow-glow hover:border-vintage-gold-muted transition-all duration-500 overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              </div>
              
              {/* Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/95 to-transparent">
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-2xl text-vintage-cream group-hover:text-vintage-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-vintage-gold-muted italic tracking-wide">
                    {item.subtitle}
                  </p>
                  <div className="pt-4 flex items-center justify-between">
                    <span className="text-sm text-muted-foreground uppercase tracking-widest">
                      {item.price}
                    </span>
                    <button className="text-vintage-gold hover:text-vintage-cream transition-colors duration-300 text-sm uppercase tracking-wider font-display">
                      Details →
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Decorative Corner Accents */}
              <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-4 right-4 w-6 h-6 border-r-2 border-t-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 border-l-2 border-b-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
