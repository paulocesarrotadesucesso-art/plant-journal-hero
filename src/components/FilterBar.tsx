import { cn } from "@/lib/utils";

const filters = [
  "All",
  "Indoor",
  "Outdoor",
  "Vegetation",
  "Flowering",
  "Harvested",
  "FL",
  "HID",
  "LED",
  "LST",
  "HST",
  "SoG",
  "ScrOG",
  "Topping",
  "FIMing",
];

interface FilterBarProps {
  className?: string;
}

export const FilterBar = ({ className }: FilterBarProps) => {
  return (
    <div className={cn("flex items-center gap-2 overflow-x-auto pb-2", className)}>
      {filters.map((filter, index) => (
        <button
          key={filter}
          className={cn(
            "px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-300",
            index === 0
              ? "bg-primary text-primary-foreground shadow-lg"
              : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
          )}
        >
          {filter}
        </button>
      ))}
    </div>
  );
};
