import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Sprout } from "lucide-react";

export default function Splash() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/auth");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary to-accent">
      <div className="text-center space-y-6 animate-in fade-in duration-1000">
        <div className="flex justify-center">
          <div className="w-24 h-24 bg-primary-foreground/20 backdrop-blur-sm rounded-3xl flex items-center justify-center animate-pulse">
            <Sprout className="w-14 h-14 text-primary-foreground" />
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-5xl font-bold text-primary-foreground tracking-tight">
            GrowDiaries
          </h1>
          <p className="text-xl text-primary-foreground/90 font-medium">
            grow your way
          </p>
        </div>
      </div>
    </div>
  );
}
