import { useSpotify } from "@/hooks/useSpotify";

const Hero = () => {
  const { artist, loading } = useSpotify();

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-purple via-primary-purple/20 to-magenta-pink/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary-purple/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-magenta-pink/30 rounded-full blur-lg animate-pulse delay-300"></div>
      </div>

      <div className="text-center z-10 px-6">
        {loading ? (
          <div className="animate-pulse">
            <div className="h-24 bg-white/10 rounded-lg mb-6 w-96 mx-auto"></div>
            <div className="h-8 bg-white/10 rounded-lg mb-8 w-72 mx-auto"></div>
          </div>
        ) : (
          <>
            <h1 className="text-7xl md:text-9xl font-bold text-white mb-6 font-montserrat animate-fade-in">
              {artist?.name || "Zqqwer"}
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-4 animate-fade-in delay-300">
              {artist?.genres.join(" • ") ||
                "Alternative • Hyperpop • Future Sound"}
            </p>
            {artist && (
              <p className="text-lg text-white/60 mb-8 animate-fade-in delay-400">
                {artist.followers.total.toLocaleString()} подписчиков
              </p>
            )}
          </>
        )}
        <div className="flex gap-6 justify-center animate-fade-in delay-500">
          <button className="px-8 py-3 bg-gradient-to-r from-primary-purple to-magenta-pink text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300">
            Слушать музыку
          </button>
          <button className="px-8 py-3 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300">
            О проекте
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
