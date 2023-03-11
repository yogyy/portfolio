'use client';
import clsx from 'clsx';
import * as React from 'react';
import { Providers } from '../providers';

const PreloadContext = React.createContext<boolean>(false);

export function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [preloaded, setIsPreloaded] = React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true);
    }, 200);
  }, []);

  return (
    <PreloadContext.Provider value={preloaded}>
      <div
        className={clsx(
          'fixed inset-0 flex items-center justify-center bg-white transition-opacity dark:bg-dark',
          preloaded && 'pointer-events-none opacity-0'
        )}
      />
      <Providers>{children}</Providers>
    </PreloadContext.Provider>
  );
}

export const usePreloadState = () => React.useContext(PreloadContext);
