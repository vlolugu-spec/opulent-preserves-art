import { useState, useEffect } from "react";
import { FilterBar, CategoryType } from "@/components/FilterBar";
import peacockImage from "@/assets/peacock-piece.jpg";
import owlImage from "@/assets/owl-dome.jpg";
import butterfliesImage from "@/assets/butterflies.jpg";
import foxImage from "@/assets/fox-mount.jpg";
import boarImage from "@/assets/boar-mount.jpg";
import tigerSkinImage from "@/assets/tiger-skin.jpg";
import eagleImage from "@/assets/eagle-mount.jpg";
import clawsImage from "@/assets/claws-collection.jpg";
import leopardImage from "@/assets/leopard-full.jpg";
import eagleFeetImage from "@/assets/eagle-feet.jpg";
import lionImage from "@/assets/lion-mount.jpg";
import ravenImage from "@/assets/raven-mount.jpg";

const galleryItems = [
  {
    id: 1,
    title: "Imperial Peacock",
    subtitle: "Pavo cristatus",
    image: "https://i.pinimg.com/1200x/49/78/9d/49789ddd133d542be60eb1ded113775e.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 2,
    title: "Barn Owl Under Dome",
    subtitle: "Tyto alba",
    image: "https://i.pinimg.com/736x/a2/07/a6/a207a6bb3daa573a28e6ed55ef54810d.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 3,
    title: "Morpho Collection",
    subtitle: "Lepidoptera Display",
    image: butterfliesImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 4,
    title: "Bald Eagle in Flight",
    subtitle: "Haliaeetus leucocephalus",
    image: eagleImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 5,
    title: "Raven Perched",
    subtitle: "Corvus corax",
    image: ravenImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 6,
    title: "Wild Boar Trophy",
    subtitle: "Sus scrofa",
    image: boarImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 7,
    title: "African Lion Mount",
    subtitle: "Panthera leo",
    image: lionImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 8,
    title: "Bengal Tiger Skin",
    subtitle: "Panthera tigris",
    image: tigerSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 9,
    title: "Red Fox Full Mount",
    subtitle: "Vulpes vulpes",
    image: foxImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 10,
    title: "Leopard Prowling",
    subtitle: "Panthera pardus",
    image: leopardImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 11,
    title: "Eagle Talons Pair",
    subtitle: "Aquila chrysaetos",
    image: eagleFeetImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 12,
    title: "Claws & Teeth Collection",
    subtitle: "Various Specimens",
    image: clawsImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");

  // Listen for category filter events from mobile menu
  useEffect(() => {
    const handleFilterEvent = (e: CustomEvent) => {
      setActiveCategory(e.detail as CategoryType);
    };

    window.addEventListener("filterCategory" as any, handleFilterEvent as any);

    return () => {
      window.removeEventListener("filterCategory" as any, handleFilterEvent as any);
    };
  }, []);

  const filteredItems =
    activeCategory === "all" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="collection" className="py-24 px-6 bg-background">
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

          <h2 className="font-display font-bold text-5xl md:text-6xl text-vintage-cream">Preserved Masterworks</h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exquisite specimens available for distinguished collectors and private commissions
          </p>
        </div>

        {/* Filter Bar */}
        <FilterBar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

        {/* Gallery Grid */}
        <div id="gallery-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <article
              key={item.id}
              className="group relative bg-card border-2 border-border shadow-ornate hover:shadow-glow hover:border-vintage-gold-muted transition-all duration-500 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
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
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/95 to-transparent">
                <div className="space-y-2">
                  <h3 className="font-display font-semibold text-xl text-vintage-cream group-hover:text-vintage-gold transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-vintage-gold-muted italic tracking-wide">{item.subtitle}</p>
                  <div className="pt-3 flex items-center justify-between">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{item.price}</span>
                    <button className="text-vintage-gold hover:text-vintage-cream transition-colors duration-300 text-xs uppercase tracking-wider font-display">
                      Details →
                    </button>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Accents */}
              <div className="absolute top-3 left-3 w-5 h-5 border-l-2 border-t-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-3 right-3 w-5 h-5 border-r-2 border-t-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 left-3 w-5 h-5 border-l-2 border-b-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-3 right-3 w-5 h-5 border-r-2 border-b-2 border-vintage-gold-muted opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </article>
          ))}
        </div>

        {/* No Results Message */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground text-lg font-serif italic">
              No specimens found in this category at present.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
