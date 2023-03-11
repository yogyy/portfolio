'use client';

import clsx from 'clsx';
import useLoaded from '../useLoaded';

export default function IsLoaded({ children }: { children: React.ReactNode }) {
  const isLoaded = useLoaded();
  return (
    <section className={clsx(isLoaded && 'fade-in-start')}>{children}</section>
  );
}
