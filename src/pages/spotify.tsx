import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import { NextSeo } from 'next-seo';
import SEO from 'next-seo.config';
import { useFeatureFlagEnabled } from 'posthog-js/react';
import { ThemeButton } from '@/components/dark-theme';
import { Spotify } from '@/components/layouts';

const SpotifyPage = () => {
  const spotifyFlag = useFeatureFlagEnabled('spotify-activity');
  return (
    <>
      <NextSeo title="Spotify Activity" {...SEO} />
      <main
        className={`relative grid min-h-screen w-screen place-content-center bg-gradient-to-br from-background to-accent ${GeistSans.variable} ${GeistMono.variable} font-sans`}
      >
        {spotifyFlag ? <Spotify className="border-none bg-background/25" /> : <SpotifyDisabled />}
        <div className="absolute left-1/3 top-1/3 rounded-md border-transparent bg-background/30">
          <ThemeButton />
        </div>
      </main>
    </>
  );
};

export default SpotifyPage;

function SpotifyDisabled() {
  return (
    <div className="px-5 text-base font-semibold text-black xl:text-xl">
      Spotify Activity Flag currently Disabled
    </div>
  );
}
