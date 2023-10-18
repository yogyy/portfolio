import * as React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';

import { cn } from '@/lib/utils';

const TooltipProvider = TooltipPrimitive.Provider;

const Tooltip = TooltipPrimitive.Root;

const TooltipTrigger = TooltipPrimitive.Trigger;

const TooltipArrow = TooltipPrimitive.Arrow;

const TooltipContent = React.forwardRef<
  React.ElementRef<typeof TooltipPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TooltipPrimitive.Content>
>(({ children, className, sideOffset = 4, ...props }, ref) => (
  <TooltipPrimitive.Content
    ref={ref}
    sideOffset={sideOffset}
    className={cn(
      'data-[state=delayed-open]:data-[side=top]:animate-slideUpAndFade data-[state=delayed-open]:data-[side=right]:animate-slideRightAndFade data-[state=delayed-open]:data-[side=left]:animate-slideLeftAndFade data-[state=delayed-open]:data-[side=bottom]:animate-slideDownAndFade z-50 rounded-md bg-background px-3 py-1.5 text-xs text-accent shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] outline outline-1 will-change-[transform,opacity]',
      className,
    )}
    {...props}
  >
    {children}
    <TooltipArrow className="fill-accent" />
  </TooltipPrimitive.Content>
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;

export { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider };
