import clsx from 'clsx';
import * as React from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';
import { AiOutlineLoading } from 'react-icons/ai';
import UnstyledLink, { UnstyledLinkProps } from '@/components/links/unstyledlink';
import { SpotifyData, SpotifyLastPlayed } from '@/types/spotify';
import axios from 'axios';
import Image from 'next/image';

export default function Spotify({
  className,
  ...rest
}: Omit<UnstyledLinkProps, 'href' | 'children'>) {
  const [lastPlay, setLastPlay] = React.useState<SpotifyLastPlayed>();
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data, isLoading } = useSWR<SpotifyData>('/api/spotify/currently-playing', fetcher, {
    revalidateOnFocus: false,
  });

  React.useEffect(() => {
    if (!data?.title) {
      axios
        .get('/api/spotify/last-played')
        .then(response => {
          setLastPlay(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [data]);

  if (isLoading || lastPlay === null) {
    return (
      <div className="sm:min-w-[233px] w-auto h-[70px] flex items-center justify-center">
        <AiOutlineLoading className="text-2xl animate-spin text-dark-accent" />
      </div>
    );
  }

  if (data === undefined) {
    return null;
  }

  return data.isPlaying === true ? (
    <figure aria-label="Spotify Activity" className={className}>
      <UnstyledLink
        // aria-label={`Spotify Now Playing: ${data.title} by ${data.artist}`}
        aria-labelledby={`spotplay`}
        href={data.songUrl}
        className={clsx(
          'relative flex items-center gap-4 p-2.5',
          'border dark:border-dark-secondary',
          'border-thin min-w-[233px] w-full rounded-md',
          'shadow-sm dark:shadow-none',
          'focus:outline-none focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
          'bg-light-secondary/30 dark:bg-dark-bg/30'
        )}
        {...rest}
      >
        <Image
          className="w-12 shadow-sm dark:shadow-none"
          src={data.album.images[2].url!}
          alt={data.album.name}
          width={240}
          height={240}
        />
        <div className="flex-1" id="spotplay">
          <p className="text-xs font-medium">Playing: {data.title} by</p>
          <p className="mt-1 text-xs font-semibold text-light-text/60 dark:text-dark-primary/50">
            {data.artist}
          </p>
        </div>
        <div className="absolute right-1.5 bottom-1.5">
          <SiSpotify size={20} color="#1ED760" />
        </div>
      </UnstyledLink>
    </figure>
  ) : (
    <figure aria-label="Spotify Activity" className={className}>
      <UnstyledLink
        // aria-label={`Spotify Last Played: ${lastPlay?.title} by ${lastPlay?.artist}`}
        aria-labelledby="spotlast"
        href={lastPlay ? lastPlay?.songUrl : ''}
        className={clsx(
          'relative flex items-center gap-4 p-2.5',
          'border dark:border-dark-secondary',
          'border-thin  min-w-[233px] w-full rounded-md',
          'shadow-sm dark:shadow-none',
          'focus:outline-none focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
          'bg-light-secondary/30 dark:bg-dark-bg/30'
        )}
        {...rest}
      >
        {lastPlay && (
          <Image
            className="w-12 shadow-sm dark:shadow-none"
            src={lastPlay?.album!}
            alt={lastPlay?.title!}
            width={240}
            height={240}
          />
        )}
        <div className="flex-1" id="spotlast">
          <p className="flex text-xs font-medium">
            <span className="hidden">spotify</span>Last Played: {lastPlay?.title} by
          </p>
          <p className="mt-1 text-xs text-gray-600 dark:text-dark-primary/50">{lastPlay?.artist}</p>
        </div>
        <div className="absolute right-1.5 bottom-1.5">
          <SiSpotify size={20} color="#1ED760" />
        </div>
      </UnstyledLink>
    </figure>
  );
}
