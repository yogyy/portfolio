import { cn } from '@/lib/utils';
import UnstyledLink, { UnstyledLinkProps } from './unstyledlink';

export default function CustomLink({ children, className, ...rest }: UnstyledLinkProps) {
  return (
    <UnstyledLink
      className={cn(
        'animated-underline inline-flex items-center border-b',
        'border-dotted border-accent font-medium focus:outline-none',
        className,
      )}
      {...rest}
    >
      {children}
    </UnstyledLink>
  );
}
