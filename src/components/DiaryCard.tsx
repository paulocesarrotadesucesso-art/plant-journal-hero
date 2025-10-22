import { Link } from "react-router-dom";
import { MessageCircle, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

interface DiaryCardProps {
  image: string;
  title: string;
  grower: string;
  strain: string;
  weeks: number;
  comments: number;
  time: string;
  className?: string;
}

export const DiaryCard = ({
  image,
  title,
  grower,
  strain,
  weeks,
  comments,
  time,
  className,
}: DiaryCardProps) => {
  return (
    <Link to="/diary/1">
      <div
        className={cn(
          "group bg-card rounded-xl overflow-hidden border border-border transition-all duration-300",
          "hover:shadow-[var(--shadow-card-hover)] cursor-pointer",
          className
        )}
        style={{ boxShadow: "var(--shadow-card)" }}
      >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Week Badge */}
        <div className="absolute top-3 right-3 px-3 py-1.5 bg-accent text-accent-foreground font-bold text-sm rounded-lg shadow-lg">
          {weeks} weeks ▶
        </div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-bold text-lg text-card-foreground mb-1 group-hover:text-accent transition-colors">
          {title}
        </h3>
        
        <p className="text-sm text-muted-foreground mb-3">{grower}</p>
        
        {/* Strain Badge */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-secondary rounded-full">
            <Leaf className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-medium text-secondary-foreground">{strain}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span>{time}</span>
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{comments} comments</span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};
