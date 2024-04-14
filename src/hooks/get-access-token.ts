import { env } from '@/env';
import axios from 'axios';
import querystring from 'querystring';

export const getAccessToken = async (refresh_token: string | undefined) => {
  const token = Buffer.from(`${env.SPOTIFY_CLIENT_ID}:${env.SPOTIFY_CLIENT_SECRET}`).toString(
    'base64',
  );

  const res = await axios.post<{ access_token: string }>(
    'https://accounts.spotify.com/api/token',
    querystring.stringify({
      grant_type: 'refresh_token',
      refresh_token,
    }),
    {
      headers: {
        Authorization: `Basic ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );
  return res.data.access_token;
};
