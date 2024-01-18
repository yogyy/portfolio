import React from 'react';
import { cn } from '@/lib/utils';
import { RiCodeSSlashFill, RiTerminalFill } from 'react-icons/ri';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';
import { HTMLMotionProps, m } from 'framer-motion';
import { easeOutBack } from '@/constants/framer-easing';

export const SkillSection: React.FC<HTMLMotionProps<'article'> & { inView?: boolean }> = ({
  className,
  inView,
  ...props
}) => {
  return (
    <m.article
      initial="hidden"
      animate={inView && 'show'}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            delayChildren: 0.1,
            staggerChildren: 0.15,
            duration: 0.3,
            easings: easeOutBack,
          },
        },
      }}
      {...props}
    >
      <h1 className="text-accent">Skills</h1>
      <div id="skill" className="mt-6">
        <div className="flex flex-col gap-6 md:flex-row md:gap-12">
          <m.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ easings: easeOutBack }}
            className="relative flex h-max max-h-[260px] flex-1 flex-col justify-between gap-4 overflow-hidden rounded-md border bg-card p-4"
          >
            <div className="flex flex-row items-center gap-3">
              <RiCodeSSlashFill size={24} className="shrink-0 text-accent" />
              <h3 className="text-lg lg:text-xl">Web development</h3>
            </div>
            <p className="text-sm sm:text-base">
              I have experience in web development with React and Next.js, and I am proficient in
              HTML, CSS, JavaScript, and TypeScript
            </p>
          </m.div>
          <m.div
            variants={{
              hidden: { opacity: 0, y: -20 },
              show: { opacity: 1, y: 0 },
            }}
            transition={{ easings: easeOutBack }}
            className="flex max-h-[260px] flex-1 flex-col gap-4 overflow-hidden rounded-md border bg-card p-4"
          >
            <div className="flex flex-row flex-nowrap items-center gap-3">
              <RiTerminalFill size={24} className="shrink-0 text-accent" />
              <h3 className="text-lg lg:text-xl">Other technologies</h3>
            </div>
            <div className="text-sm sm:text-base">
              Familiar with and frequent user of common software development tools, such as git.
            </div>
            <div className="text-sm sm:text-base">
              Know how to utilise assistive
              <TooltipProvider delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger className="mx-1 underline decoration-accent decoration-2">
                    technologies
                  </TooltipTrigger>
                  <TooltipContent sideOffset={8}>
                    <p className="px-1 text-xs text-text">
                      Yes, they are
                      <br /> Google, <br /> StackOverflow <br /> and ChatGPT!
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              to enhance productivity.
            </div>
          </m.div>
        </div>
      </div>
    </m.article>
  );
};

// SkillSection.displayName = 'SkillSection';
