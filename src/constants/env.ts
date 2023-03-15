export const isProd = process.env.NODE_ENV === 'production';

/**
 * Show Spotify Now Playing on footer
 * @see Footer.tsx
 */
export const spotifyFlag = isProd;
