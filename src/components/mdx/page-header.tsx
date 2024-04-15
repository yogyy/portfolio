import { easeInoutQuad } from '@/constants/framer-easing';
import { cn } from '@/lib/utils';
import { m } from 'framer-motion';
import { Accent } from '../accent';

interface DocsPageHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  heading: string;
  text?: string;
  hr?: boolean;
}

export function DocsPageHeader({
  heading,
  text,
  hr = false,
  className,
  ...props
}: DocsPageHeaderProps) {
  return (
    <>
      <div className={cn('space-y-4', className)} {...props}>
        <m.h1
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ easings: easeInoutQuad, duration: 0.4 }}
          className="font-heading inline-block text-3xl lg:text-4xl"
        >
          <Accent>{heading}</Accent>
        </m.h1>
        {text && (
          <m.p
            initial={{ opacity: 0, x: -26 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ easings: easeInoutQuad, duration: 0.4, delay: 0.1 }}
            className="text-xl text-text/70"
          >
            {text}
          </m.p>
        )}
      </div>
      {hr && <hr className="my-4" />}
    </>
  );
}
