import React from 'react';
import { cn } from '@/lib/utils';
import Tooltipz from '../tooltip';
import { RiCodeSSlashFill, RiTerminalFill } from 'react-icons/ri';

const SkillSection = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    return (
      <section ref={ref} className={cn('py-20', className)} {...props}>
        <article className="mt-10 layout">
          <h2 gaya-fade="1" className="text-light-primary dark:text-dark-accent">
            Skills
          </h2>
          <div id="skill" className="mt-6">
            <div className="flex flex-col gap-6 md:gap-12 md:flex-row">
              <div
                gaya-fade="2"
                className="flex overflow-hidden flex-1 max-h-[260px] justify-between relative flex-col gap-4 border dark:border-gray-600 p-4 rounded-md h-max backdrop-blur-sm"
              >
                <div className="flex flex-row items-center gap-3">
                  <RiCodeSSlashFill size={24} className="text-dark-accent" />
                  <h3 className="text-xl">Web development</h3>
                </div>
                <p>
                  I have experience in web development with React and Next.js, and I am proficient
                  in HTML, CSS, JavaScript, and TypeScript
                </p>
              </div>
              <div
                gaya-fade="3"
                className="flex flex-1 flex-col max-h-[260px] overflow-hidden gap-4 border dark:border-gray-600 p-4 rounded-md backdrop-blur-sm"
              >
                <div className="flex flex-row items-center gap-3 flex-nowrap">
                  <RiTerminalFill size={24} className="text-dark-accent" />
                  <h3 className="text-xl">Other technologies</h3>
                </div>
                <p>
                  Familiar with and frequent user of common software development tools, such as git
                  .
                </p>
                <p>
                  Know how to utilise assistive<span className="peer"></span>
                  <Tooltipz
                    content={
                      <p className="text-xs">
                        Yes, they are
                        <br /> Google, <br /> StackOverflow <br /> and ChatGPT!
                      </p>
                    }
                  >
                    technologies
                  </Tooltipz>
                  &nbsp;to enhance productivity.
                </p>
              </div>
            </div>
          </div>
        </article>
      </section>
    );
  }
);

SkillSection.displayName = 'SkillSection';
export default SkillSection;
