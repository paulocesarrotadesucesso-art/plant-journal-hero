import heroBanner from "@/assets/hero-banner.jpg";

export const Hero = () => {
  return (
    <div className="relative w-full h-[400px] rounded-2xl overflow-hidden group">
      {/* Background Image */}
      <img
        src={heroBanner}
        alt="Featured Strain"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
      
      {/* Content */}
      <div className="absolute inset-0 flex items-center px-12">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full mb-6">
            <span className="text-accent font-bold">🏆</span>
            <span className="text-primary-foreground font-semibold text-sm">THE GROW AWARDS 2025</span>
          </div>
          
          <h2 className="text-6xl font-bold text-primary-foreground mb-4 tracking-tight">
            STRAIN OF THE YEAR
          </h2>
          
          <p className="text-xl text-primary-foreground/90 mb-8">
            Discover the most popular strains grown by our community
          </p>
          
          <button className="px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground font-bold rounded-xl transition-all duration-300 hover:shadow-lg hover:scale-105">
            View Winners
          </button>
        </div>
      </div>
    </div>
  );
};
