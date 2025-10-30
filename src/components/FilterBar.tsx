import { Button } from "@/components/ui/button";

export type CategoryType = "all" | "birds" | "head-mounts" | "skins" | "full-mounts" | "feet" | "claws-teeth-horns";

interface FilterBarProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const categories = [
  { id: "all" as CategoryType, label: "All Specimens" },
  { id: "birds" as CategoryType, label: "Birds" },
  { id: "head-mounts" as CategoryType, label: "Head Mounts" },
  { id: "skins" as CategoryType, label: "Skins" },
  { id: "full-mounts" as CategoryType, label: "Full Mounts" },
  { id: "feet" as CategoryType, label: "Taxidermy Feet" },
  { id: "claws-teeth-horns" as CategoryType, label: "Claws, Teeth & Horns" },
];

export const FilterBar = ({ activeCategory, onCategoryChange }: FilterBarProps) => {
  return (
    <div className="bg-card/40 backdrop-blur-sm border-y-2 border-vintage-gold-muted/30 py-8 px-6 mb-12">
      <div className="container mx-auto">
        <div className="flex items-center justify-center gap-3 mb-6">
          <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
          <span className="text-vintage-gold-muted text-xs tracking-[0.3em] uppercase font-display">
            Filter by Category
          </span>
          <div className="w-2 h-2 rotate-45 bg-vintage-gold"></div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "plaque" : "vintage"}
              size="sm"
              onClick={() => onCategoryChange(category.id)}
              className="transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
