import { Home, BookOpen, Sprout, Play, HelpCircle, Trophy, Users, Beaker, Package, Newspaper, Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  className?: string;
}

const navItems = [
  { icon: Home, label: "Home", active: true },
  { icon: BookOpen, label: "Diaries" },
  { icon: Sprout, label: "Strains", badge: "new" },
  { icon: Play, label: "Shorts" },
  { icon: HelpCircle, label: "Questions" },
  { icon: Trophy, label: "Contests" },
  { icon: Users, label: "Growers" },
  { icon: Beaker, label: "Breeders" },
  { icon: Package, label: "Nutrients" },
  { icon: Package, label: "Equipment" },
  { icon: Newspaper, label: "Blog" },
];

export const Sidebar = ({ className }: SidebarProps) => {
  return (
    <aside className={cn("w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col", className)}>
      {/* Logo */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center">
            <Sprout className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold text-sidebar-foreground">GrowDiaries</h1>
            <p className="text-xs text-sidebar-foreground/70">grow your way</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4 border-b border-sidebar-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sidebar-foreground/50" />
          <input
            type="text"
            placeholder="Search Diaries"
            className="w-full bg-sidebar-accent text-sidebar-foreground pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sidebar-primary placeholder:text-sidebar-foreground/50"
          />
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            className={cn(
              "w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors",
              item.active
                ? "bg-sidebar-accent text-sidebar-primary"
                : "text-sidebar-foreground hover:bg-sidebar-accent"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.badge && (
              <span className="px-2 py-0.5 text-xs font-semibold bg-sidebar-primary text-sidebar-primary-foreground rounded-full">
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Following Section */}
      <div className="p-4 border-t border-sidebar-border">
        <button className="w-full text-left text-sm text-sidebar-primary font-semibold hover:underline">
          Following
        </button>
        <p className="text-xs text-sidebar-foreground/70 mt-1">
          Follow Brands & Growers to get updates
        </p>
      </div>
    </aside>
  );
};
