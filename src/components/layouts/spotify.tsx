import * as React from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';
import UnstyledLink, { UnstyledLinkProps } from '@/components/links/unstyledlink';
import { SpotifyData } from '@/types/spotify';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';

export default function Spotify({
  className,
  ...rest
}: Omit<UnstyledLinkProps, 'href' | 'children'>) {
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data, isLoading } = useSWR<SpotifyData>('/api/spotify/currently-playing', fetcher);
  const { data: lastPlay, isLoading: lastPlayLoading } = useSWR(
    data && data.isPlaying === false ? '/api/spotify/last-played' : null,
    fetcher
  );

  if (data === undefined) {
    return null;
  }

  if (isLoading || lastPlayLoading) {
    return (
      <div className="relative sm:min-w-[233px] w-auto flex items-center justify-center gap-2 p-2.5 border dark:border-dark-secondary rounded-md rounded-br-xl">
        <div className="flex w-full gap-2">
          <div className="w-12 h-12">
            <Skeleton className="w-12 h-12 mr-1" />
          </div>
          <div className="flex flex-col justify-center w-full gap-1">
            <Skeleton className="w-full h-4" />
            <Skeleton className="w-4/5 h-4" />
          </div>
          <div className="absolute right-1.5 bottom-1.5 ">
            <SiSpotify size={20} color="#1ED760" className="animate-spin-slow" />
          </div>
        </div>
      </div>
    );
  }

  const songUrl = data.isPlaying ? data.songUrl : lastPlay ? lastPlay.songUrl : '';

  return (
    <div role="contentinfo" aria-label="Spotify Activity">
      <UnstyledLink
        aria-label={`${data.isPlaying ? 'Now Playing' : 'Last Played'}: ${
          data.isPlaying ? data.title : lastPlay?.title
        } by ${data.isPlaying ? data.artist : lastPlay?.artist}`}
        href={songUrl}
        className={cn(
          'relative flex items-center gap-2 p-2.5',
          'border dark:border-dark-secondary',
          'border-thin min-w-[240px] w-full rounded-md',
          'shadow-sm dark:shadow-none',
          'focus:outline-none focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
          'bg-light-secondary/30 dark:bg-dark-bg/30',
          className
        )}
        {...rest}
      >
        <Image
          className="w-12 h-full rounded-sm shadow-sm dark:shadow-none place-self-start"
          src={data.isPlaying ? data.album.images[2].url : lastPlay ? lastPlay?.album : ''}
          alt={data.isPlaying ? data.album.name : lastPlay ? lastPlay?.title : ''}
          width={240}
          height={240}
          aria-hidden="true"
        />
        <div className="flex flex-col flex-1 gap-1">
          <p className="flex-wrap text-xs font-medium">
            {data.isPlaying ? 'Now Playing' : 'Last Played'}:{' '}
            {data.isPlaying ? data.title : lastPlay?.title}
          </p>
          <p className="pr-4 text-xs font-semibold text-light-text/60 dark:text-dark-primary/50">
            by {data.isPlaying ? data.artist : lastPlay?.artist}
          </p>
        </div>
        <div className="absolute right-1.5 bottom-1.5 ">
          <SiSpotify size={20} color="#1ED760" className={cn(data.isPlaying && 'opacity-20')} />
          {data.isPlaying && (
            <Image
              src="/images/music-play.gif"
              alt="playing icon"
              width={20}
              height={20}
              className="absolute top-0 rounded-full opacity-80"
              aria-hidden="true"
            />
          )}
        </div>
      </UnstyledLink>
    </div>
  );
}
