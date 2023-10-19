import { cn } from '@/lib/utils';
import UnstyledLink, { UnstyledLinkProps } from './unstyledlink';

export type ButtonLinkProps = UnstyledLinkProps;

export default function ButtonLink({ children, className, ...props }: ButtonLinkProps) {
  return (
    <UnstyledLink
      className={cn(
        'animate-shadow inline-flex scale-100 rounded bg-background px-3 py-2 font-bold transition duration-100',
        'hover:scale-[1.04] focus:scale-[1.03] focus:outline-none focus-visible:ring focus-visible:ring-primary active:scale-[0.97]',
        'motion-safe:transform-gpu motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90',
        className,
      )}
      {...props}
    >
      {children}
    </UnstyledLink>
  );
}
