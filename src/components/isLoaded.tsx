import React from 'react';
import { cn } from '@/lib/utils';
import useLoaded from './useLoaded';

const IsLoaded = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, children, ...props }, ref) => {
    const isLoaded = useLoaded();
    return (
      <section ref={ref} className={cn(isLoaded && 'fade-in-start', className)} {...props}>
        {children}
      </section>
    );
  }
);

IsLoaded.displayName = 'IsLoaded';

export default IsLoaded;
