import { useState, useEffect } from "react";
import { FilterBar, CategoryType } from "@/components/FilterBar";
import { useCart } from "@/contexts/CartContext";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
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
    image: "https://i.pinimg.com/1200x/76/8c/c8/768cc897df0e2d1ce2816102f1f8679a.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 5,
    title: "Raven Perched",
    subtitle: "Corvus corax",
    image: "https://i.pinimg.com/1200x/7e/fe/55/7efe55b1f2f0c73b23025225f6bea0af.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 6,
    title: "Wild Boar Trophy",
    subtitle: "Sus scrofa",
    image: "https://i.pinimg.com/1200x/bf/b0/1a/bfb01aefc26c7986dc40d726d4e958d7.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 7,
    title: "African Lion Mount",
    subtitle: "Panthera leo",
    image: "https://i.pinimg.com/1200x/9f/da/cc/9fdaccbedd96e672f36284ba14fd14ad.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 8,
    title: "Bengal Tiger Skin",
    subtitle: "Panthera tigris",
    image: "https://i.pinimg.com/1200x/15/fd/f4/15fdf4fe26032aecc0adc6cfee88245c.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 9,
    title: "Red Fox Full Mount",
    subtitle: "Vulpes vulpes",
    image: "https://i.pinimg.com/736x/ab/8a/8c/ab8a8c8b854b95bc135bc46ea15b234f.jpg",
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
    image: "https://i.pinimg.com/1200x/35/77/ab/3577ab759f7d63384af8c5d914e5859d.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 14,
    title: "Peregrine Falcon",
    subtitle: "Falco peregrinus",
    image: "https://i.pinimg.com/736x/d0/03/49/d00349315e57aa5cb24a028a6f84d74c.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 15,
    title: "Ring-necked Pheasant",
    subtitle: "Phasianus colchicus",
    image: "https://i.pinimg.com/1200x/80/57/5f/80575fff575397f6b3270f02deb8a77d.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 16,
    title: "Mallard Duck in Flight",
    subtitle: "Anas platyrhynchos",
    image: "https://i.pinimg.com/1200x/08/44/a1/0844a1c4b07d0050bee042fd9db0f8a1.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  {
    id: 17,
    title: "Mute Swan",
    subtitle: "Cygnus olor",
    image: "https://i.pinimg.com/1200x/ed/d4/05/edd4059479e17cd6d7e466b5f131b43f.jpg",
    price: "Inquire",
    category: "birds" as CategoryType,
  },
  // Additional Head Mounts
  {
    id: 18,
    title: "White-tailed Deer Stag",
    subtitle: "Odocoileus virginianus",
    image: "https://i.pinimg.com/736x/d3/4f/31/d34f31f9e82c4ea11eb639ce106c4c46.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 19,
    title: "Moose Trophy",
    subtitle: "Alces alces",
    image: "https://i.pinimg.com/1200x/29/92/3c/29923c0a06fb28cd66b738107103a586.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 20,
    title: "American Bison",
    subtitle: "Bison bison",
    image: "https://i.pinimg.com/1200x/e5/6d/9f/e56d9f94537e9ed66af36c127c716d86.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 21,
    title: "Bighorn Ram",
    subtitle: "Ovis canadensis",
    image: "https://i.pinimg.com/1200x/3b/cb/75/3bcb7571b3c21e1bd94b43866823ae84.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 22,
    title: "Bull Elk",
    subtitle: "Cervus canadensis",
    image: "https://i.pinimg.com/736x/c6/5a/33/c65a33c2c173fffcc2d55ad0e90bf3f8.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 23,
    title: "Grizzly Bear",
    subtitle: "Ursus arctos horribilis",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuMLp4k-Kn2vxJO-UvHMB3eZ6a5KEPKxdOXg&s",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 24,
    title: "Gray Wolf",
    subtitle: "Canis lupus",
    image: "https://i.pinimg.com/1200x/3a/cd/b9/3acdb9fc5ac5ca3b7e2690bf70d449e1.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  {
    id: 25,
    title: "Pronghorn Antelope",
    subtitle: "Antilocapra americana",
    image: "https://i.pinimg.com/1200x/0a/09/05/0a09050a351a8dba2afe2edb12e2dd8b.jpg",
    price: "Inquire",
    category: "head-mounts" as CategoryType,
  },
  // Additional Skins
  {
    id: 26,
    title: "Black Bear Rug",
    subtitle: "Ursus americanus",
    image: "https://i.pinimg.com/736x/07/64/ac/0764accd320f503f3bada65d1f85e72a.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 27,
    title: "Gray Wolf Pelt",
    subtitle: "Canis lupus",
    image: "https://www.alaskafurexchange.com/images/inventory/rugsandmounts/greywolfrug.JPG",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 28,
    title: "Zebra Hide",
    subtitle: "Equus quagga",
    image: "https://i.pinimg.com/736x/4e/3c/52/4e3c526dad3390b9017bf226636f82ce.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 29,
    title: "Cheetah Skin",
    subtitle: "Acinonyx jubatus",
    image: "https://i.pinimg.com/736x/2a/54/3e/2a543e4a141f572d34efae5078d3630f.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 30,
    title: "Jaguar Pelt",
    subtitle: "Panthera onca",
    image: "https://i.pinimg.com/736x/18/6d/15/186d15cc0e172a417f83092c43cef63f.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 31,
    title: "Canadian Lynx Fur",
    subtitle: "Lynx canadensis",
    image: "https://i.pinimg.com/1200x/ea/ee/23/eaee23fca1ac1ba26a741894d02e05dd.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 32,
    title: "Coyote Pelt",
    subtitle: "Canis latrans",
    image: "https://i.pinimg.com/1200x/a5/d4/f1/a5d4f1014d5d6004c67eefe0be59e724.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 33,
    title: "Mountain Lion Skin",
    subtitle: "Puma concolor",
    image: "https://i.pinimg.com/1200x/64/40/54/64405481642878f7ea6e642739abca1c.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  {
    id: 34,
    title: "Snow Leopard Pelt",
    subtitle: "Panthera uncia",
    image: "https://i.pinimg.com/1200x/9e/f4/e2/9ef4e20d068f9cf46534b3d11e2aac22.jpg",
    price: "Inquire",
    category: "skins" as CategoryType,
  },
  // Additional Full Mounts
  {
    id: 35,
    title: "Deer Standing",
    subtitle: "Odocoileus virginianus",
    image: "https://i.pinimg.com/1200x/a3/69/91/a3699199175b487acf5f3dc8e1aa1982.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 36,
    title: "Wolf Stalking",
    subtitle: "Canis lupus",
    image: "https://i.pinimg.com/1200x/33/58/de/3358decaaf7f5bb560ad14a6bb067a8f.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 37,
    title: "Grizzly Bear Upright",
    subtitle: "Ursus arctos horribilis",
    image: "https://i.pinimg.com/1200x/51/b4/3f/51b43f601bf32bdec67a2a1ee0d72717.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 38,
    title: "Bobcat Crouching",
    subtitle: "Lynx rufus",
    image: "https://i.pinimg.com/736x/a8/c2/e2/a8c2e2967308be35f6af1878e1e405d6.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 39,
    title: "Coyote Alert",
    subtitle: "Canis latrans",
    image: "https://i.pinimg.com/736x/a7/61/f7/a761f7010964c912496a6bad3074d9d6.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 40,
    title: "American Badger",
    subtitle: "Taxidea taxus",
    image: "https://i.pinimg.com/1200x/ef/28/6e/ef286e85baa942277e7f921011c51f85.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 41,
    title: "River Otter",
    subtitle: "Lontra canadensis",
    image: "https://i.pinimg.com/736x/0c/f4/ee/0cf4ee8c7e6b3f30240bd14bd13934e4.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  {
    id: 42,
    title: "Pine Marten",
    subtitle: "Martes martes",
    image: "https://i.pinimg.com/1200x/7e/5e/a0/7e5ea0a8ccbef444208d1394538cc350.jpg",
    price: "Inquire",
    category: "full-mounts" as CategoryType,
  },
  // Additional Feet
  {
    id: 43,
    title: "Grizzly Bear Paws",
    subtitle: "Ursus arctos",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ac4395c297114a27fcc5825/1541616326950-V3IA9F46FY2MYETTH5YG/brown-bear-claw.jpg",
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 44,
    title: "Gray Wolf Paws",
    subtitle: "Canis lupus",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNTQmIVkVe05UE5zlrZlE1tiF81OlRfwLWqg&s",
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 45,
    title: "African Lion Paws",
    subtitle: "Panthera leo",
    image: "https://image.invaluable.com/housePhotos/Bunch/71/736171/H0077-L312473460.jpg",
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 46,
    title: "Bengal Tiger Paws",
    subtitle: "Panthera tigris",
    image: "https://i.pinimg.com/1200x/15/ab/f3/15abf34e2779613d45cedbfb94c5bf88.jpg",
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 47,
    title: "Leopard Paws",
    subtitle: "Panthera pardus",
    image: "https://i.pinimg.com/736x/38/14/d8/3814d8c47fafb6d4b00f1f053d816d4a.jpg",
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  {
    id: 48,
    title: "Lynx Paws",
    subtitle: "Lynx canadensis",
    image: "https://shamanamulets.com/wp-content/uploads/2024/09/IMG_5218-600x800.jpeg",
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
    image: "https://i.pinimg.com/736x/72/6b/77/726b77f9b1152fc317f2336f563ebb62.jpg",
    price: "Inquire",
    category: "feet" as CategoryType,
  },
  // Additional Claws, Teeth & Horns
  {
    id: 52,
    title: "Grizzly Claws Display",
    subtitle: "Ursus arctos",
    image:
      "https://www.calacademy.org/sites/default/files/styles/manual_crop_standard_960x540/public/assets/images/exhibits/cason_3295x1853_monarchgrizzlybear-claws_dsc09960_gl_cas_240329.jpg?itok=dcXec0EI&c=35a6ad4b79fbd1114074218dfb5f5b9f",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 53,
    title: "Bighorn Ram Horns",
    subtitle: "Ovis canadensis",
    image: "https://i.pinimg.com/1200x/c8/55/c7/c855c7be82b2d2a15a9ea95f7e3d0662.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 54,
    title: "Deer Antler Set",
    subtitle: "Odocoileus virginianus",
    image: "https://i.pinimg.com/1200x/7d/8c/53/7d8c5337a441bd31f292cc6094138735.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 55,
    title: "Moose Antlers",
    subtitle: "Alces alces",
    image: "https://i.pinimg.com/1200x/d8/0c/3e/d80c3eb492de346ba6f21b0949e5ac66.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 56,
    title: "Buffalo Horns",
    subtitle: "Syncerus caffer",
    image: "https://i.pinimg.com/1200x/0a/36/9c/0a369cc035fa24fbaf1680014aab76fb.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 57,
    title: "Elk Antler Rack",
    subtitle: "Cervus canadensis",
    image: "https://i.pinimg.com/1200x/82/cd/ef/82cdef9224a0d2978f901ddd6e3e5838.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 58,
    title: "Predator Teeth Cabinet",
    subtitle: "Various Carnivora",
    image: "https://i.pinimg.com/1200x/30/25/61/302561c482c9991d4faf04659c6af57c.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 59,
    title: "Mixed Horn Display",
    subtitle: "Various Species",
    image: "https://i.pinimg.com/1200x/53/78/ef/5378efc8ec9ef0a60421c1c035b13890.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
  {
    id: 60,
    title: "Carnivore Fang Collection",
    subtitle: "Various Predators",
    image: "https://i.pinimg.com/736x/3f/76/fc/3f76fc07ec7be8aad71b277a254ad6d3.jpg",
    price: "Inquire",
    category: "claws-teeth-horns" as CategoryType,
  },
];

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>("all");
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (item: typeof galleryItems[0]) => {
    addToCart({
      id: item.id,
      title: item.title,
      subtitle: item.subtitle,
      image: item.image,
      price: item.price,
    });
    toast({
      title: "Added to cart",
      description: `${item.title} has been added to your cart.`,
    });
  };

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
                  <div className="pt-3 flex items-center justify-between gap-2">
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">{item.price}</span>
                    <Button
                      variant="plaque"
                      size="sm"
                      onClick={() => handleAddToCart(item)}
                      className="gap-1"
                    >
                      <ShoppingCart className="w-3 h-3" />
                      Add
                    </Button>
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
