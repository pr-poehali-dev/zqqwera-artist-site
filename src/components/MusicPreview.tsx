import Icon from "@/components/ui/icon";
import { useSpotify } from "@/hooks/useSpotify";

const MusicPreview = () => {
  const { tracks, loading, error, formatDuration } = useSpotify();

  if (loading) {
    return (
      <section className="py-20 bg-dark-purple/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="animate-pulse">
            <h2 className="text-4xl font-bold text-white mb-12 font-montserrat">
              Загружаем треки...
            </h2>
            <div className="space-y-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-20 bg-white/5 rounded-xl animate-pulse"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-dark-purple/50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-8 font-montserrat">
            Последние треки
          </h2>
          <p className="text-magenta-pink mb-8">{error}</p>
          <p className="text-white/60">Показываем демо-данные</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-dark-purple/50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-white text-center mb-12 font-montserrat">
          Последние треки
        </h2>

        <div className="space-y-4">
          {tracks.map((track) => (
            <div
              key={track.id}
              className="flex items-center justify-between p-6 bg-white/5 rounded-xl backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center gap-4">
                <div className="relative">
                  <img
                    src={
                      track.album.images[0]?.url ||
                      "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
                    }
                    alt={track.album.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <button className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon name="Play" size={16} className="text-white ml-1" />
                  </button>
                </div>
                <div>
                  <h3 className="text-white font-semibold">{track.name}</h3>
                  <p className="text-white/60 text-sm">{track.album.name}</p>
                </div>
              </div>

              <div className="flex items-center gap-6">
                <span className="text-white/60">
                  {formatDuration(track.duration_ms)}
                </span>
                <button className="text-white/60 hover:text-magenta-pink transition-colors">
                  <Icon name="Heart" size={18} />
                </button>
                {track.preview_url && (
                  <button className="text-white/60 hover:text-primary-purple transition-colors">
                    <Icon name="ExternalLink" size={18} />
                  </button>
                )}
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
