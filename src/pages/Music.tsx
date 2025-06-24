import Navigation from "@/components/Navigation";
import { useSpotify } from "@/hooks/useSpotify";
import Icon from "@/components/ui/icon";

const Music = () => {
  const { tracks, artist, loading, error, formatDuration } = useSpotify();

  return (
    <div className="min-h-screen bg-dark-purple">
      <Navigation />
      <div className="pt-24 pb-12 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Заголовок */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-white mb-8 font-montserrat">
              Музыка
            </h1>
            <p className="text-xl text-white/80">
              Полная дискография и новые релизы
            </p>
          </div>

          {/* Информация об артисте */}
          {artist && (
            <div className="bg-white/5 rounded-2xl p-8 mb-12 backdrop-blur-sm border border-white/10">
              <div className="flex items-center gap-8">
                <img
                  src={
                    artist.images[0]?.url ||
                    "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400"
                  }
                  alt={artist.name}
                  className="w-32 h-32 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-4xl font-bold text-white mb-4 font-montserrat">
                    {artist.name}
                  </h2>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {artist.genres.map((genre) => (
                      <span
                        key={genre}
                        className="px-3 py-1 bg-magenta-pink/20 text-magenta-pink rounded-full text-sm capitalize"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  <p className="text-white/60">
                    {artist.followers.total.toLocaleString()} подписчиков
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Загрузка */}
          {loading && (
            <div className="text-center py-20">
              <div className="animate-spin w-8 h-8 border-2 border-magenta-pink border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-white/60">Загружаем треки из Spotify...</p>
            </div>
          )}

          {/* Ошибка */}
          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 mb-8">
              <p className="text-red-400 text-center">{error}</p>
            </div>
          )}

          {/* Список треков */}
          {!loading && tracks.length > 0 && (
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-8 font-montserrat">
                Популярные треки
              </h3>
              <div className="space-y-3">
                {tracks.map((track, index) => (
                  <div
                    key={track.id}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/5 transition-all duration-300 group"
                  >
                    <span className="text-white/40 w-6 text-center font-mono">
                      {index + 1}
                    </span>
                    <img
                      src={
                        track.album.images[0]?.url ||
                        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300"
                      }
                      alt={track.album.name}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h4 className="text-white font-semibold">{track.name}</h4>
                      <p className="text-white/60 text-sm">
                        {track.album.name}
                      </p>
                    </div>
                    <span className="text-white/60 text-sm">
                      {formatDuration(track.duration_ms)}
                    </span>
                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Icon name="Play" size={16} className="text-white" />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                        <Icon
                          name="Heart"
                          size={16}
                          className="text-white/60 hover:text-magenta-pink"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Music;
