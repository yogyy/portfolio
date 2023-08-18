import { SpotifyLastPlayed } from '@/../types/types';
import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';
import querystring from 'querystring';

const {
  SPOTIFY_CLIENT_ID: client_id,
  SPOTIFY_CLIENT_SECRET: client_secret,
  SPOTIFY_REFRESH_TOKEN_LAST_PLAYED: refresh_token,
} = process.env;

const LAST_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;
const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

const getAccessToken = async () => {
  const res = await axios.post<{ access_token: string }>(
    TOKEN_ENDPOINT,
    querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  return res.data.access_token;
};

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
  const access_token = await getAccessToken();
  return axios.get<SpotifyDataLastPlayed>(LAST_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function spotify(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const response = await getLastPlayed();

    res.setHeader('Cache-Control', 'public, s-maxage=180, stale-while-revalidate=90');

    const data = {
      songUrl: response.data.items[0].track.external_urls.spotify,
      album: response.data.items[0].track.album.images[2].url,
      artist: response.data.items[0].track.album.artists
        .map((artist: { name: any }) => artist.name)
        .join(', '),
      title: response.data.items[0].track.name,
    };
    return res.status(200).json(data);
  }
}
