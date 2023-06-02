import * as Tooltip from '@radix-ui/react-tooltip';
import * as React from 'react';
import clsx from 'clsx';

type TooltipButtonProps = {
  content: React.ReactNode;
  trigger: React.ReactNode;
  className?: string;
};

export default function Tooltipz({ content, trigger, className }: TooltipButtonProps) {
  return (
    <Tooltip.Provider delayDuration={0} skipDelayDuration={500}>
      <Tooltip.Root>
        <Tooltip.Trigger className={clsx('outline-none p-1', className)}>{trigger}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            sideOffset={8}
            className={clsx(
              'bg-light-bg dark:bg-dark-bg px-3 text-light-accent font-semibold outline outline-1 outline-dark-accent py-2 TooltipContent left-4 flex flex-col text-base rounded-md'
            )}
          >
            {content}
            <Tooltip.Arrow className="fill-dark-accent" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
