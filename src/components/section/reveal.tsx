import { HTMLMotionProps, m } from 'framer-motion';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { easeInoutQuad } from '@/constants/framer-easing';

export const Reveal = React.forwardRef<
  HTMLElement,
  HTMLMotionProps<'section'> & Partial<{ inView: boolean }>
>(({ className, children, inView, ...props }, ref) => {
  return (
    <m.section
      ref={ref}
      className={cn('layout py-20', className)}
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ easings: easeInoutQuad, duration: 0.5 }}
      {...props}
    >
      {children}
    </m.section>
  );
});

Reveal.displayName = 'Reveal';
