import clsx from 'clsx';
import * as React from 'react';
import { SiSpotify } from 'react-icons/si';
import useSWR from 'swr';

import UnstyledLink, {
  UnstyledLinkProps,
} from '@/components/links/unstyledlink';
import { SpotifyData } from '@/../types/types';

export default function Spotify({
  className,
  ...rest
}: Omit<UnstyledLinkProps, 'href' | 'children'>) {
  const fetcher = (url: string) => fetch(url).then(r => r.json());
  const { data } = useSWR<SpotifyData>('/api/spotify', fetcher);

  return data?.isPlaying ? (
    <figure className={className} data-cy="spotify">
      <UnstyledLink
        {...rest}
        href={data.songUrl}
        className={clsx(
          'relative flex items-center gap-4 p-2.5',
          'border dark:border-gray-600',
          'border-thin w-72 rounded-md',
          'shadow-sm dark:shadow-none',
          'focus:outline-none focus-visible:ring focus-visible:ring-',
          'bg-gray-300/20 dark:bg-gray-600/5'
        )}
      >
        <div className="flex-1">
          <p className="text-sm font-medium">{data.title}</p>
          <p className="mt-1 text-xs text-gray-600 dark:text-gray-300">
            {data.artist}
          </p>
        </div>
        <div className="absolute right-1.5 bottom-1.5">
          <SiSpotify size={20} color="#1ED760" />
        </div>
      </UnstyledLink>
    </figure>
  ) : null;
}
