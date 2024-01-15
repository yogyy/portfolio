import axios from 'axios';
import querystring from 'querystring';

const { SPOTIFY_CLIENT_ID: client_id, SPOTIFY_CLIENT_SECRET: client_secret } = process.env;

export const getAccessToken = async (refresh_token: string | undefined) => {
  const token = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

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
