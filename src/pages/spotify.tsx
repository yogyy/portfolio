import SEO from 'next-seo.config';
import { NextSeo } from 'next-seo';
import Spotify from '@/components/layouts/spotify';
import { ThemeButton } from '@/components/dark-theme';

const SpotifyPage = () => {
  return (
    <>
      <NextSeo title="Spotify Activity" {...SEO} />
      <main className="relative grid min-h-screen w-screen place-content-center bg-gradient-to-br from-background via-primary to-background motion-safe:animate-gradient-x">
        <Spotify className="border-none bg-background/25" />
        <ThemeButton className="absolute left-1/3 top-1/3 border-transparent bg-background/30" />
      </main>
    </>
  );
};

export default SpotifyPage;
