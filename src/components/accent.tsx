import { cn } from '@/lib/utils';
import * as React from 'react';

export const Accent: React.FC<React.ComponentPropsWithRef<'span'>> = ({
  children,
  className,
  ref,
}) => {
  return (
    <span
      ref={ref}
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent transition-colors',
        'from-accent/80 to-text motion-safe:animate-gradient-x',
        className,
      )}
    >
      {children}
    </span>
  );
};
