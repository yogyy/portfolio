import useSWR from 'swr';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Skeleton } from '../ui/skeleton';
import { SiSpotify } from 'react-icons/si';
import { SpotifyData } from '@/types/spotify';
import UnstyledLink, { type UnstyledLinkProps } from '@/components/links/unstyledlink';

export default function Spotify({
  className,
  ...props
}: Omit<UnstyledLinkProps, 'href' | 'children'>) {
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data, isLoading } = useSWR<SpotifyData>('/api/spotify/currently-playing', fetcher);
  const { data: lastPlay, isLoading: lastPlayLoading } = useSWR(
    data && data.isPlaying === false ? '/api/spotify/last-played' : null,
    fetcher,
  );

  if (data === undefined || isLoading || lastPlayLoading) {
    return (
      <div className="relative flex w-auto items-center justify-center gap-2 rounded-md rounded-br-xl border border-secondary bg-secondary/30 p-2.5 sm:min-w-[233px]">
        <div className="flex w-full gap-2">
          <div className="h-12 w-12">
            <Skeleton className="mr-1 h-12 w-12" />
          </div>
          <div className="flex w-full flex-col justify-center gap-1">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-4/5" />
          </div>
          <div className="absolute bottom-1.5 right-1.5 ">
            <SiSpotify size={20} color="#1ED760" />
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
          'relative flex w-auto min-w-[240px] items-center gap-2 rounded-md border',
          'border-accent/30 p-2.5 hover:bg-secondary/30 active:bg-secondary/30',
          'focus:outline-none focus-visible:ring-1 focus-visible:ring-accent',
          className,
        )}
        {...props}
      >
        <Image
          className="h-full w-12 place-self-start rounded-sm shadow-sm dark:shadow-none"
          src={data.isPlaying ? data.album.images[2].url : lastPlay ? lastPlay?.album : ''}
          alt={data.isPlaying ? data.album.name : lastPlay ? lastPlay?.title : ''}
          width={240}
          height={240}
          aria-hidden="true"
        />
        <div className="flex flex-1 flex-col gap-1">
          <p className="flex-wrap text-xs font-medium">
            {data.isPlaying ? 'Now Playing' : 'Last Played'}:{' '}
            {data.isPlaying ? data.title : lastPlay?.title}
          </p>
          <p className="text-light-text/60 dark:text-dark-primary/50 pr-4 text-xs font-semibold">
            by {data.isPlaying ? data.artist : lastPlay?.artist}
          </p>
        </div>
        <div className="absolute bottom-1.5 right-1.5 ">
          <SiSpotify
            size={20}
            color="#1ED760"
            className={cn(data.isPlaying && 'animate-spin-slow opacity-20')}
          />
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
