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

// const refresh_token =
//   'AQC56asBuUXnAbkhrOH9Nz9lVRcCukVfPa6ph87Zt7feONaF0u-4vpikn287tJ9KsrFMcktygJPm_mg1MLqt4EQfQXfDiKIVH6UY8Dp7ElMqrYIheWv0eUhhOz7eZhnUQMw';
// const token =
//   'MWMxNDNkODI0ZWYxNDk2YmJlOGMyODc5NGM4ZDZjNzI6YWRkZGRjMzRjMWMzNGQ1OGIxMmY3ZjAzOGE5ZGIzZmU=';

interface RecentlyPlayedResult {
  items: {
    track: {
      id: string;
      name: string;
      artists: {
        id: string;
        name: string;
      }[];
      album: {
        id: string;
        name: string;
      };
    };
    played_at: string;
    context: null | {
      uri: string;
      href: string;
      external_urls: {
        spotify: string;
      };
      type: string;
    };
  }[];
}

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

const getLastPlayed = async () => {
  const access_token = await getAccessToken();
  return axios.get<RecentlyPlayedResult>(LAST_PLAYED_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

export default async function spotify(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const response = await getLastPlayed();

    res.setHeader(
      'Cache-Control',
      'public, s-maxage=180, stale-while-revalidate=90'
    );

    return res.status(200).json(response.data.items[0]);
  }
}
