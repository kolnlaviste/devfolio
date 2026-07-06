import { NextResponse } from "next/server";

const SPOTIFY_CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const SPOTIFY_CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const SPOTIFY_REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

async function getAccessToken() {
  const auth = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${auth}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=refresh_token&refresh_token=" + SPOTIFY_REFRESH_TOKEN,
  });

  const data = await response.json();
  return data.access_token;
}

async function getCurrentlyPlaying(accessToken: string) {
  const response = await fetch("https://api.spotify.com/v1/me/player/currently-playing", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  // Handle 204 No Content (nothing playing)
  if (response.status === 204) {
    return null;
  }

  const data = await response.json();
  return data;
}

export async function GET() {
  try {
    if (!SPOTIFY_CLIENT_ID || !SPOTIFY_CLIENT_SECRET || !SPOTIFY_REFRESH_TOKEN) {
      return NextResponse.json(
        { error: "Spotify credentials not configured" },
        { status: 500 }
      );
    }

    const accessToken = await getAccessToken();
    const currentlyPlaying = await getCurrentlyPlaying(accessToken);

    if (!currentlyPlaying || !currentlyPlaying.item) {
      return NextResponse.json(
        { isPlaying: false, message: "Not currently playing" },
        { status: 200 }
      );
    }

    const track = currentlyPlaying.item;
    const isPlaying = currentlyPlaying.is_playing;

    return NextResponse.json(
      {
        isPlaying,
        track: {
          name: track.name,
          artist: track.artists[0]?.name || "Unknown Artist",
          album: track.album?.name || "Unknown Album",
          albumArt: track.album?.images[0]?.url,
          url: track.external_urls?.spotify,
          duration: track.duration_ms,
          progress: currentlyPlaying.progress_ms,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Spotify API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch Spotify data" },
      { status: 500 }
    );
  }
}
