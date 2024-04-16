import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { cn } from '@/lib/utils';
import { ThemeButton } from '@/components/dark-theme';
import { Spotify } from '@/components/layouts';

const SpotifyPage = () => {
  return (
    <>
      <NextSeo title="Spotify Activity" {...SEO} />
      <main
        className={cn(
          'relative grid min-h-screen w-screen place-content-center bg-gradient-to-br from-background to-accent',
          `${GeistSans.variable} ${GeistMono.variable} font-sans`,
        )}
      >
        <Spotify className="border-none bg-background/25" />
        <ThemeButton className="absolute left-1/3 top-1/3 border-transparent bg-background/30" />
      </main>
    </>
  );
};

export default SpotifyPage;
