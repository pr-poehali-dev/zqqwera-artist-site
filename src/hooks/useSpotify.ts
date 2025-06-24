import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { useState, useEffect } from "react";

// Spotify Client Credentials для публичного доступа
const CLIENT_ID = "1234567890abcdef1234567890abcdef"; // Замените на реальный Client ID
const CLIENT_SECRET = "1234567890abcdef1234567890abcdef"; // Замените на реальный Client Secret

export interface SpotifyTrack {
  id: string;
  name: string;
  duration_ms: number;
  preview_url: string | null;
  album: {
    name: string;
    images: Array<{ url: string; height: number; width: number }>;
  };
  artists: Array<{ name: string; id: string }>;
}

export interface SpotifyArtist {
  id: string;
  name: string;
  images: Array<{ url: string; height: number; width: number }>;
  genres: string[];
  followers: { total: number };
}

export const useSpotify = () => {
  const [tracks, setTracks] = useState<SpotifyTrack[]>([]);
  const [artist, setArtist] = useState<SpotifyArtist | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        // Инициализация Spotify API с Client Credentials
        const api = SpotifyApi.withClientCredentials(CLIENT_ID, CLIENT_SECRET);

        // Получение данных артиста по ID
        const artistId = "5WWe71J3UIA4pNWL71ovp0";
        const foundArtist = await api.artists.get(artistId);
        setArtist(foundArtist);

        // Получение топ-треков артиста
        const topTracks = await api.artists.topTracks(artistId, "RU");
        setTracks(topTracks.tracks);
      } catch (err) {
        console.error("Spotify API Error:", err);
        setError(err instanceof Error ? err.message : "Ошибка загрузки данных");

        // Fallback данные для демонстрации
        setTracks([
          {
            id: "demo1",
            name: "Hyperreal",
            duration_ms: 204000,
            preview_url: null,
            album: {
              name: "Digital Dreams",
              images: [
                {
                  url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300",
                  height: 300,
                  width: 300,
                },
              ],
            },
            artists: [{ name: "Zqqwer", id: "demo_artist" }],
          },
          {
            id: "demo2",
            name: "Neon Nights",
            duration_ms: 252000,
            preview_url: null,
            album: {
              name: "Future Self",
              images: [
                {
                  url: "https://images.unsplash.com/photo-1571974599782-87624638275d?w=300",
                  height: 300,
                  width: 300,
                },
              ],
            },
            artists: [{ name: "Zqqwer", id: "demo_artist" }],
          },
        ]);

        setArtist({
          id: "demo_artist",
          name: "Zqqwer",
          images: [
            {
              url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400",
              height: 400,
              width: 400,
            },
          ],
          genres: ["hyperpop", "electronic"],
          followers: { total: 15420 },
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
  }, []);

  const formatDuration = (ms: number): string => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return { tracks, artist, loading, error, formatDuration };
};
