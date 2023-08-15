import clsx from 'clsx';
import * as React from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';

import UnstyledLink, { UnstyledLinkProps } from '@/components/links/unstyledlink';
import { SpotifyData, SpotifyLastPlayed } from '@/../types/types';
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
    return <div className="animate-pulse">loading ...</div>;
  }

  return data.isPlaying === true ? (
    <figure id="spotify-activity" className={className}>
      <UnstyledLink
        aria-label={`Spotify Now Playing: ${data.title} by ${data.artist}`}
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
        <div className="flex-1">
          <p className="text-xs font-medium">Playing: {data.title}</p>
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
    <figure id="spotify-activity" className={className} data-cy="spotify">
      <UnstyledLink
        {...rest}
        aria-label={`Spotify Last Played: ${lastPlay?.title} by ${lastPlay?.artist}`}
        href={lastPlay ? lastPlay?.songUrl : ''}
        className={clsx(
          'relative flex items-center gap-4 p-2.5',
          'border dark:border-dark-secondary',
          'border-thin  min-w-[233px] w-full rounded-md',
          'shadow-sm dark:shadow-none',
          'focus:outline-none focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
          'bg-light-secondary/30 dark:bg-dark-bg/30'
        )}
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
        <div className="flex-1 ">
          <p className="text-xs font-medium">Last Played: {lastPlay?.title}</p>
          <p className="mt-1 text-xs text-gray-600 dark:text-dark-primary/50">{lastPlay?.artist}</p>
        </div>
        <div className="absolute right-1.5 bottom-1.5">
          <SiSpotify size={20} color="#1ED760" />
        </div>
      </UnstyledLink>
    </figure>
  );
}
