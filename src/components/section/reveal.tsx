import { HTMLMotionProps, m } from 'framer-motion';
import * as React from 'react';
import { easeInoutQuad } from '@/constants/framer-easing';

export const Reveal = React.forwardRef<
  HTMLElement,
  HTMLMotionProps<'section'> & Partial<{ inView: boolean }>
>(({ children, inView }, ref) => {
  return (
    <m.section
      ref={ref}
      className="layout relative py-20"
      animate={inView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
      transition={{ easings: easeInoutQuad, duration: 0.5 }}
    >
      {children}
    </m.section>
  );
});

Reveal.displayName = 'Reveal';
