import React from 'react';
import { cn } from '@/lib/utils';
import Tooltipz from '../tooltip';
import { RiCodeSSlashFill, RiTerminalFill } from 'react-icons/ri';
import { TooltipProvider, Tooltip, TooltipContent, TooltipTrigger } from '../ui/tooltip';

const SkillSection = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('py-20', className)} {...props}>
        <article className="layout mt-10">
          <h1 gaya-fade="1" className="text-text">
            Skills
          </h1>
          <div id="skill" className="mt-6">
            <div gaya-fade="2" className="flex flex-col gap-6 md:flex-row md:gap-12">
              <div className="relative flex h-max max-h-[260px] flex-1 flex-col justify-between gap-4 overflow-hidden rounded-md border bg-card p-4">
                <div className="flex flex-row items-center gap-3">
                  <RiCodeSSlashFill size={24} className="shrink-0 text-accent" />
                  <h3 className="text-lg lg:text-xl">Web development</h3>
                </div>
                <p className="text-sm sm:text-base">
                  I have experience in web development with React and Next.js, and I am proficient
                  in HTML, CSS, JavaScript, and TypeScript
                </p>
              </div>
              <div className="flex max-h-[260px] flex-1 flex-col gap-4 overflow-hidden rounded-md border bg-card p-4">
                <div className="flex flex-row flex-nowrap items-center gap-3">
                  <RiTerminalFill size={24} className="shrink-0 text-accent" />
                  <h3 className="text-lg lg:text-xl">Other technologies</h3>
                </div>
                <p className="text-sm sm:text-base">
                  Familiar with and frequent user of common software development tools, such as git
                  .
                </p>
                <p className="text-sm sm:text-base">
                  Know how to utilise assistive
                  <TooltipProvider delayDuration={300}>
                    <Tooltip>
                      <TooltipTrigger className="mx-1 underline">technologies</TooltipTrigger>
                      <TooltipContent sideOffset={8}>
                        <p className="px-1 text-xs">
                          Yes, they are
                          <br /> Google, <br /> StackOverflow <br /> and ChatGPT!
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  to enhance productivity.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  },
);

SkillSection.displayName = 'SkillSection';
export default SkillSection;
