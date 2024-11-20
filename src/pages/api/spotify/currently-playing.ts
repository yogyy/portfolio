import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/feature-flags';
import { getAccessToken } from '@/lib/get-access-token';
import { env } from '@/env';

interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

const getNowPlaying = async () => {
  const access_token = await getAccessToken(env.SPOTIFY_REFRESH_TOKEN);

  return axios.get<SpotifyData>('https://api.spotify.com/v1/me/player/currently-playing', {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function spotify(req: NextApiRequest, res: NextApiResponse) {
  const spotifyFlag = await client.isFeatureEnabled('spotify-activity', 'bola-bali');
  if (req.method !== 'GET' || !spotifyFlag) {
    return res.status(405).json({ error: 'Request rejected.' });
  }

  try {
    const response = await getNowPlaying();

    if (
      response.status === 204 ||
      response.status > 400 ||
      response.data.currently_playing_type !== 'track'
    ) {
      res.setHeader('Cache-Control', 'public, s-maxage=180, stale-while-revalidate=90');
      return res.status(200).json({ isPlaying: false });
    }

    const data = {
      isPlaying: response.data.is_playing,
      title: response.data.item.name,
      album: response.data.item.album,
      artist: response.data.item.album.artists.map(artist => artist.name).join(', '),
      songUrl: response.data.item.external_urls.spotify,
    };

    res.setHeader('Cache-Control', 'public, s-maxage=180, stale-while-revalidate=90');
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
