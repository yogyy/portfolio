import { cn } from '@/lib/utils';

function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn('animate-pulse rounded-sm bg-light-primary dark:bg-dark-secondary', className)}
      {...props}
    />
  );
}

export { Skeleton };
