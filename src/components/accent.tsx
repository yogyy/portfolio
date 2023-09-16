import { cn } from '@/lib/utils';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export const Accent = ({ children, className }: AccentType) => {
  return (
    <span
      className={cn(
        'transition-colors bg-gradient-to-r bg-clip-text text-transparent motion-safe:animate-gradient-x',
        'from-light-text via-dark-accent to-dark-accent',
        'dark:from-light-secondary dark:via-dark-accent/70 dark:to-dark-accent',
        className
      )}
    >
      {children}
    </span>
  );
};
