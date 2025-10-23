import { User, LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";

export function UserMenu() {
  const { user, signOut } = useAuth();

  if (!user) return null;

  const displayName = user.user_metadata?.display_name || user.email?.split("@")[0] || "User";
  const avatarUrl = user.user_metadata?.avatar_url;
  const initials = displayName.substring(0, 2).toUpperCase();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        <Avatar className="h-10 w-10 cursor-pointer border-2 border-primary/20 hover:border-primary/40 transition-colors">
          <AvatarImage src={avatarUrl} alt={displayName} />
          <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
            {initials}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium">{displayName}</p>
            <p className="text-xs text-muted-foreground">{user.email}</p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link to={`/grower/${displayName}`} className="cursor-pointer">
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={signOut} className="cursor-pointer text-destructive">
          <LogOut className="mr-2 h-4 w-4" />
          <span>Logout</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
