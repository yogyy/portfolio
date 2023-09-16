import Spotify from '@/components/layouts/spotify';
import { NextSeo } from 'next-seo';
import SEO from '@/lib/next-seo.config';

const SpotifyPage = () => {
  return (
    <>
      <NextSeo title="Spotify Activity" {...SEO} />
      <main className="min-h-screen w-screen grid place-content-center bg-gradient-to-br motion-safe:animate-gradient-x from-[#12c2e9] via-[#c471ed] to-[#f64f59]">
        <Spotify className="bg-white/25 dark:bg-black/25 border-none" />
      </main>
    </>
  );
};

export default SpotifyPage;
