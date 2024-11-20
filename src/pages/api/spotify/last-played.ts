import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '@/lib/feature-flags';
import { getAccessToken } from '@/lib/get-access-token';
import { env } from '@/env';

interface SpotifyDataLastPlayed {
  items: {
    track: {
      name: string;
      album: {
        name: string;
        artists: Array<{ name: string }>;
        images: {
          url: string;
        }[];
      };
      external_urls: {
        spotify: string;
      };
    };
  }[];
}

const getLastPlayed = async () => {
  const access_token = await getAccessToken(env.SPOTIFY_REFRESH_TOKEN_LAST_PLAYED);
  return axios.get<SpotifyDataLastPlayed>(
    'https://api.spotify.com/v1/me/player/recently-played?limit=1',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    },
  );
};

export default async function spotify(req: NextApiRequest, res: NextApiResponse) {
  const spotifyFlag = await client.isFeatureEnabled('spotify-activity', 'bola-bali');
  if (req.method !== 'GET' || !spotifyFlag) {
    return res.status(405).json({ error: 'Request rejected.' });
  }

  try {
    const response = await getLastPlayed();

    res.setHeader('Cache-Control', 'public, s-maxage=180, stale-while-revalidate=90');

    const data = {
      songUrl: response.data.items[0].track.external_urls.spotify,
      album: response.data.items[0].track.album.images[2].url,
      artist: response.data.items[0].track.album.artists
        .map((artist: { name: string }) => artist.name)
        .join(', '),
      title: response.data.items[0].track.name,
    };
    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
