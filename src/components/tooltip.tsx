import * as Tooltip from '@radix-ui/react-tooltip';
import * as React from 'react';
import clsx from 'clsx';

type TooltipButtonProps = {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<'button'>;

export default function Tooltipz({ content, children, className, ...rest }: TooltipButtonProps) {
  return (
    <Tooltip.Provider delayDuration={250}>
      <Tooltip.Root>
        <Tooltip.Trigger className={clsx('outline-none', className)} {...rest}>
          {children}
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={8}
            className={clsx(
              'bg-light-bg dark:bg-dark-bg px-2.5 text-light-secondary font-semibold outline outline-1 py-1.5 TooltipContent left-4 flex flex-col text-sm rounded-md',
              'outline-light-text dark:outline-dark-accent'
            )}
          >
            {content}
            <Tooltip.Arrow className="fill-light-text dark:fill-dark-accent" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
