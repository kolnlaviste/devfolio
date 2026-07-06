"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Music } from "lucide-react";

interface SpotifyTrack {
  isPlaying: boolean;
  track?: {
    name: string;
    artist: string;
    album: string;
    albumArt: string;
    url: string;
    duration: number;
    progress: number;
  };
  message?: string;
}

export default function SpotifyWidget() {
  const [data, setData] = useState<SpotifyTrack | null>(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const fetchSpotifyData = async () => {
      try {
        const response = await fetch("/api/spotify");
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error("Failed to fetch Spotify data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSpotifyData();
    // Refresh every 5 seconds
    const interval = setInterval(fetchSpotifyData, 5000);
    return () => clearInterval(interval);
  }, []);

  if (loading || !data) return null;

  const { isPlaying, track } = data;

  return (
    <AnimatePresence>
      {track && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 z-40"
        >
          {!expanded ? (
            <motion.button
              onClick={() => setExpanded(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center"
              aria-label="Currently playing on Spotify"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Music size={24} />
              </motion.div>
            </motion.button>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="w-80 bg-white dark:bg-stone-900 rounded-2xl shadow-2xl overflow-hidden border border-stone-200 dark:border-stone-800"
            >
              {/* Header */}
              <div className="relative h-40 bg-gradient-to-br from-green-400 to-green-600">
                {track.albumArt && (
                  <Image
                    src={track.albumArt}
                    alt={track.album}
                    fill
                    className="object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-black/20" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <motion.div
                      animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                      transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
                    >
                      <Music className="w-4 h-4 text-green-500" />
                    </motion.div>
                    <p className="text-xs text-stone-500 dark:text-stone-400 font-semibold uppercase">
                      {isPlaying ? "Now Playing" : "Last Played"}
                    </p>
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 line-clamp-2">
                    {track.name}
                  </h3>
                  <p className="text-sm text-stone-600 dark:text-stone-400 mt-1">
                    {track.artist}
                  </p>
                  <p className="text-xs text-stone-500 dark:text-stone-500 mt-1">
                    {track.album}
                  </p>
                </div>

                {/* Progress Bar */}
                {isPlaying && (
                  <div className="w-full bg-stone-200 dark:bg-stone-700 rounded-full h-1">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${(track.progress / track.duration) * 100}%` }}
                      transition={{ duration: 1, ease: "linear" }}
                      className="h-full bg-green-500 rounded-full"
                    />
                  </div>
                )}

                {/* Open on Spotify */}
                <a href={track.url} target="_blank" rel="noopener noreferrer">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors text-sm"
                  >
                    Open in Spotify
                  </motion.button>
                </a>

                {/* Close Button */}
                <button
                  onClick={() => setExpanded(false)}
                  className="w-full py-2 bg-stone-100 dark:bg-stone-800 hover:bg-stone-200 dark:hover:bg-stone-700 text-stone-700 dark:text-stone-300 font-semibold rounded-lg transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
