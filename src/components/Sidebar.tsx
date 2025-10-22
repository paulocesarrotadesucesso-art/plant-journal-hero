import { Home, BookOpen, Sprout, Play, HelpCircle, Trophy, Users, Beaker, Package, Newspaper, Search } from "lucide-react";
import { useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";

const navItems = [
  { icon: Home, label: "Home", url: "/" },
  { icon: BookOpen, label: "Diaries", url: "/diaries" },
  { icon: Sprout, label: "Strains", url: "/strains", badge: "new" },
  { icon: Play, label: "Shorts", url: "/shorts" },
  { icon: HelpCircle, label: "Questions", url: "/questions" },
  { icon: Trophy, label: "Contests", url: "/contests" },
  { icon: Users, label: "Growers", url: "/growers" },
  { icon: Beaker, label: "Breeders", url: "/breeders" },
  { icon: Package, label: "Nutrients", url: "/nutrients" },
  { icon: Package, label: "Equipment", url: "/equipment" },
  { icon: Newspaper, label: "Blog", url: "/blog" },
];

export function AppSidebar() {
  const location = useLocation();
  const { open } = useSidebar();

  const isActive = (url: string) => location.pathname === url;

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex items-center gap-2 px-2 py-2">
          <div className="w-10 h-10 bg-sidebar-primary rounded-lg flex items-center justify-center shrink-0">
            <Sprout className="w-6 h-6 text-sidebar-primary-foreground" />
          </div>
          {open && (
            <div>
              <h1 className="text-lg font-bold text-sidebar-foreground">GrowDiaries</h1>
              <p className="text-xs text-sidebar-foreground/70">grow your way</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {open && (
          <div className="px-3 py-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-sidebar-foreground/50" />
              <input
                type="text"
                placeholder="Search Diaries"
                className="w-full bg-sidebar-accent text-sidebar-foreground pl-10 pr-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-sidebar-primary placeholder:text-sidebar-foreground/50"
              />
            </div>
          </div>
        )}

        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => (
                <SidebarMenuItem key={item.label}>
                  <SidebarMenuButton
                    asChild
                    isActive={isActive(item.url)}
                    tooltip={item.label}
                  >
                    <a href={item.url} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="flex-1">{item.label}</span>
                      {item.badge && open && (
                        <span className="px-2 py-0.5 text-xs font-semibold bg-sidebar-primary text-sidebar-primary-foreground rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        {open && (
          <div className="p-4">
            <button className="w-full text-left text-sm text-sidebar-primary font-semibold hover:underline">
              Following
            </button>
            <p className="text-xs text-sidebar-foreground/70 mt-1">
              Follow Brands & Growers to get updates
            </p>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
