import { cn } from '@/lib/utils';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export const Accent = ({ children, className }: AccentType) => {
  return (
    <span
      className={cn(
        className,
        'transition-colors bg-gradient-to-r bg-clip-text text-transparent motion-safe:animate-gradient-x',
        'from-light-text via-dark-accent to-dark-accent',
        'dark:from-light-secondary dark:via-dark-accent dark:to-dark-accent'
      )}
    >
      {children}
    </span>
  );
};
