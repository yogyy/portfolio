import { cn } from '@/lib/utils';
import UnstyledLink, { UnstyledLinkProps } from './unstyledlink';

export type ButtonLinkProps = UnstyledLinkProps;

export default function ButtonLink({ children, className, ...props }: ButtonLinkProps) {
  return (
    <UnstyledLink
      className={cn(
        'inline-flex scale-100 rounded bg-background px-3 py-2 font-bold transition duration-100',
        'after:absolute after:inset-0 after:z-[-1] after:opacity-0 after:shadow-md after:transition-opacity',
        'hover:scale-[1.04] hover:after:opacity-100 focus:scale-[1.03] focus:outline-none focus-visible:ring focus-visible:ring-primary',
        'active:scale-[0.97] motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90 dark:after:shadow-none',
        className,
      )}
      {...props}
    >
      {children}
    </UnstyledLink>
  );
}
