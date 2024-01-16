import React from 'react';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion, useInView } from 'framer-motion';

export const Reveal: React.FC<HTMLMotionProps<'section'>> = ({ className, children }) => {
  const view = React.useRef(null);
  const inView = useInView(view, { margin: '-40% 0px', once: true });
  return (
    <motion.section
      ref={view}
      className={cn('layout py-20', className)}
      animate={inView ? { y: -40, opacity: 1 } : { y: 0, opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
    >
      {children}
    </motion.section>
  );
};
