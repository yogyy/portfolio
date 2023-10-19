import * as Tooltip from '@radix-ui/react-tooltip';
import * as React from 'react';
import clsx from 'clsx';

type TooltipButtonProps = {
  content: React.ReactNode;
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
              'TooltipContent left-4 flex flex-col rounded-md bg-background px-2.5 py-1.5 text-sm font-semibold text-accent outline outline-1',
              'outline-accent',
            )}
          >
            {content}
            <Tooltip.Arrow className="fill-light-text dark:fill-accent" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
