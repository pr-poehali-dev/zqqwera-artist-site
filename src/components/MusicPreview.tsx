import Icon from "@/components/ui/icon";

const MusicPreview = () => {
  const tracks = [
    { title: "Hyperreal", duration: "3:24", genre: "Hyperpop" },
    { title: "Digital Dreams", duration: "2:58", genre: "Alternative" },
    { title: "Neon Nights", duration: "4:12", genre: "Electronic" },
    { title: "Future Self", duration: "3:47", genre: "Experimental" },
  ];

  return (
    <section className="py-20 bg-dark-purple/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
          Последние треки
        </h2>

        <div className="space-y-4">
          {tracks.map((track, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <button className="w-12 h-12 bg-gradient-to-r from-primary-purple to-magenta-pink rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name="Play" size={16} className="text-white ml-1" />
                </button>
                <div>
                  <h3 className="text-white font-semibold">{track.title}</h3>
                  <p className="text-white/60 text-sm">{track.genre}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-white/60">{track.duration}</span>
                <button className="text-white/60 hover:text-magenta-pink transition-colors">
                  <Icon name="Heart" size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white/10 text-white rounded-full font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20">
            Показать все треки
          </button>
        </div>
      </div>
    </section>
  );
};

export default MusicPreview;
