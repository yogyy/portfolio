import { cn } from '@/lib/utils';
import * as React from 'react';

export const Accent = ({ children, className, ...props }: React.ComponentPropsWithRef<'span'>) => {
  return (
    <span
      className={cn(
        'bg-gradient-to-r bg-clip-text text-transparent transition-colors',
        'from-primary to-accent',
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
};
