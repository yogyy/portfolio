import React from 'react';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, m } from 'framer-motion';
import { easeOutBack } from '@/constants/framer-easing';

export const Reveal = React.forwardRef<
  HTMLElement,
  HTMLMotionProps<'section'> & Partial<{ inView: boolean }>
>(({ className, children, inView, ...props }, ref) => {
  // const view = React.useRef(null);
  // const inView = useInView(view, { margin: '-35% 0px' });
  return (
    <m.section
      ref={ref}
      className={cn('layout py-20', className)}
      animate={inView ? { y: 0, opacity: 1 } : { y: -20, opacity: 0 }}
      transition={{ easings: easeOutBack, duration: 1 }}
      {...props}
    >
      {children}
    </m.section>
  );
});

Reveal.displayName = 'Reveal';
