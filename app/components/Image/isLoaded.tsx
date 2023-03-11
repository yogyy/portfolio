'use client';

import clsx from 'clsx';
import useLoaded from '../useLoaded';

export default function IsLoaded({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isLoaded = useLoaded();
  return (
    <section className={clsx(isLoaded && 'fade-in-start', className)}>
      {children}
    </section>
  );
}
