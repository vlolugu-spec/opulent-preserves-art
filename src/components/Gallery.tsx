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
import hawkImage from "@/assets/hawk-mount.jpg";
import falconImage from "@/assets/falcon-mount.jpg";
import pheasantImage from "@/assets/pheasant-mount.jpg";
import duckImage from "@/assets/duck-mount.jpg";
import swanImage from "@/assets/swan-mount.jpg";
import deerMountImage from "@/assets/deer-mount.jpg";
import mooseMountImage from "@/assets/moose-mount.jpg";
import buffaloMountImage from "@/assets/buffalo-mount.jpg";
import ramMountImage from "@/assets/ram-mount.jpg";
import elkMountImage from "@/assets/elk-mount.jpg";
import bearHeadMountImage from "@/assets/bear-head-mount.jpg";
import wolfHeadMountImage from "@/assets/wolf-head-mount.jpg";
import antelopeMountImage from "@/assets/antelope-mount.jpg";
import bearSkinImage from "@/assets/bear-skin.jpg";
import wolfSkinImage from "@/assets/wolf-skin.jpg";
import zebraSkinImage from "@/assets/zebra-skin.jpg";
import cheetahSkinImage from "@/assets/cheetah-skin.jpg";
import jaguarSkinImage from "@/assets/jaguar-skin.jpg";
import lynxSkinImage from "@/assets/lynx-skin.jpg";
import coyoteSkinImage from "@/assets/coyote-skin.jpg";
import cougarSkinImage from "@/assets/cougar-skin.jpg";
import snowLeopardSkinImage from "@/assets/snow-leopard-skin.jpg";
import deerFullMountImage from "@/assets/deer-full-mount.jpg";
import wolfFullMountImage from "@/assets/wolf-full-mount.jpg";
import bearFullMountImage from "@/assets/bear-full-mount.jpg";
import bobcatFullMountImage from "@/assets/bobcat-full-mount.jpg";
import coyoteFullMountImage from "@/assets/coyote-full-mount.jpg";
import badgerFullMountImage from "@/assets/badger-full-mount.jpg";
import otterFullMountImage from "@/assets/otter-full-mount.jpg";
import martenFullMountImage from "@/assets/marten-full-mount.jpg";
import bearPawsImage from "@/assets/bear-paws.jpg";
import wolfPawsImage from "@/assets/wolf-paws.jpg";
import lionPawsImage from "@/assets/lion-paws.jpg";
import tigerPawsImage from "@/assets/tiger-paws.jpg";
import leopardPawsImage from "@/assets/leopard-paws.jpg";
import lynxPawsImage from "@/assets/lynx-paws.jpg";
import cougarPawsImage from "@/assets/cougar-paws.jpg";
import bobcatPawsImage from "@/assets/bobcat-paws.jpg";
import coyotePawsImage from "@/assets/coyote-paws.jpg";
import bearClawsDisplayImage from "@/assets/bear-claws-display.jpg";
import ramHornsImage from "@/assets/ram-horns.jpg";
import deerAntlersImage from "@/assets/deer-antlers.jpg";
import mooseAntlersImage from "@/assets/moose-antlers.jpg";
import buffaloHornsImage from "@/assets/buffalo-horns.jpg";
import elkAntlersImage from "@/assets/elk-antlers.jpg";
import teethCollectionImage from "@/assets/teeth-collection.jpg";
import mixedHornsImage from "@/assets/mixed-horns.jpg";
import fangCollectionImage from "@/assets/fang-collection.jpg";

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
    image: "https://i.pinimg.com/736x/ac/58/dc/ac58dc396ebd4159499736cb6e25f3e0.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 4,
    title: "Bald Eagle in Flight",
    subtitle: "Haliaeetus leucocephalus",
    image: "https://i.pinimg.com/736x/c7/13/b8/c713b8a09bcfe5e5aa09e11adf8b0104.jpg",
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
    image:
      "https://media.istockphoto.com/id/1419545982/photo/eagle-claws.jpg?s=612x612&w=0&k=20&c=zZyo5jt-AB_CPakV4TeOJTnyPvTQu6ct2p0tnTsoi-o=",
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
  // Additional Birds
  {
    id: 13,
    title: "Red-tailed Hawk",
    subtitle: "Buteo jamaicensis",
    image: hawkImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 14,
    title: "Peregrine Falcon",
    subtitle: "Falco peregrinus",
    image: falconImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 15,
    title: "Ring-necked Pheasant",
    subtitle: "Phasianus colchicus",
    image: pheasantImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 16,
    title: "Mallard Duck in Flight",
    subtitle: "Anas platyrhynchos",
    image: duckImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 17,
    title: "Mute Swan",
    subtitle: "Cygnus olor",
    image: swanImage,
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  // Additional Head Mounts
  {
    id: 18,
    title: "White-tailed Deer Stag",
    subtitle: "Odocoileus virginianus",
    image: deerMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 19,
    title: "Moose Trophy",
    subtitle: "Alces alces",
    image: mooseMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 20,
    title: "American Bison",
    subtitle: "Bison bison",
    image: buffaloMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 21,
    title: "Bighorn Ram",
    subtitle: "Ovis canadensis",
    image: ramMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 22,
    title: "Bull Elk",
    subtitle: "Cervus canadensis",
    image: elkMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 23,
    title: "Grizzly Bear",
    subtitle: "Ursus arctos horribilis",
    image: bearHeadMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 24,
    title: "Gray Wolf",
    subtitle: "Canis lupus",
    image: wolfHeadMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 25,
    title: "Pronghorn Antelope",
    subtitle: "Antilocapra americana",
    image: antelopeMountImage,
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  // Additional Skins
  {
    id: 26,
    title: "Black Bear Rug",
    subtitle: "Ursus americanus",
    image: bearSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 27,
    title: "Gray Wolf Pelt",
    subtitle: "Canis lupus",
    image: wolfSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 28,
    title: "Zebra Hide",
    subtitle: "Equus quagga",
    image: zebraSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 29,
    title: "Cheetah Skin",
    subtitle: "Acinonyx jubatus",
    image: cheetahSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 30,
    title: "Jaguar Pelt",
    subtitle: "Panthera onca",
    image: jaguarSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 31,
    title: "Canadian Lynx Fur",
    subtitle: "Lynx canadensis",
    image: lynxSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 32,
    title: "Coyote Pelt",
    subtitle: "Canis latrans",
    image: coyoteSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 33,
    title: "Mountain Lion Skin",
    subtitle: "Puma concolor",
    image: cougarSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 34,
    title: "Snow Leopard Pelt",
    subtitle: "Panthera uncia",
    image: snowLeopardSkinImage,
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  // Additional Full Mounts
  {
    id: 35,
    title: "Deer Standing",
    subtitle: "Odocoileus virginianus",
    image: deerFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 36,
    title: "Wolf Stalking",
    subtitle: "Canis lupus",
    image: wolfFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 37,
    title: "Grizzly Bear Upright",
    subtitle: "Ursus arctos horribilis",
    image: bearFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 38,
    title: "Bobcat Crouching",
    subtitle: "Lynx rufus",
    image: bobcatFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 39,
    title: "Coyote Alert",
    subtitle: "Canis latrans",
    image: coyoteFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 40,
    title: "American Badger",
    subtitle: "Taxidea taxus",
    image: badgerFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 41,
    title: "River Otter",
    subtitle: "Lontra canadensis",
    image: otterFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 42,
    title: "Pine Marten",
    subtitle: "Martes martes",
    image: martenFullMountImage,
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  // Additional Feet
  {
    id: 43,
    title: "Grizzly Bear Paws",
    subtitle: "Ursus arctos",
    image: bearPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 44,
    title: "Gray Wolf Paws",
    subtitle: "Canis lupus",
    image: wolfPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 45,
    title: "African Lion Paws",
    subtitle: "Panthera leo",
    image: lionPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 46,
    title: "Bengal Tiger Paws",
    subtitle: "Panthera tigris",
    image: tigerPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 47,
    title: "Leopard Paws",
    subtitle: "Panthera pardus",
    image: leopardPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 48,
    title: "Lynx Paws",
    subtitle: "Lynx canadensis",
    image: lynxPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 49,
    title: "Mountain Lion Paws",
    subtitle: "Puma concolor",
    image: cougarPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 50,
    title: "Bobcat Paws",
    subtitle: "Lynx rufus",
    image: bobcatPawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 51,
    title: "Coyote Paws",
    subtitle: "Canis latrans",
    image: coyotePawsImage,
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  // Additional Claws, Teeth & Horns
  {
    id: 52,
    title: "Grizzly Claws Display",
    subtitle: "Ursus arctos",
    image: bearClawsDisplayImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 53,
    title: "Bighorn Ram Horns",
    subtitle: "Ovis canadensis",
    image: ramHornsImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 54,
    title: "Deer Antler Set",
    subtitle: "Odocoileus virginianus",
    image: deerAntlersImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 55,
    title: "Moose Antlers",
    subtitle: "Alces alces",
    image: mooseAntlersImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 56,
    title: "Buffalo Horns",
    subtitle: "Syncerus caffer",
    image: buffaloHornsImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 57,
    title: "Elk Antler Rack",
    subtitle: "Cervus canadensis",
    image: elkAntlersImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 58,
    title: "Predator Teeth Cabinet",
    subtitle: "Various Carnivora",
    image: teethCollectionImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 59,
    title: "Mixed Horn Display",
    subtitle: "Various Species",
    image: mixedHornsImage,
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 60,
    title: "Carnivore Fang Collection",
    subtitle: "Various Predators",
    image: fangCollectionImage,
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
