import { cn } from '@/lib/utils';
import UnstyledLink, { UnstyledLinkProps } from './unstyledlink';

export default function CustomLink({ children, className = '', ...rest }: UnstyledLinkProps) {
  return (
    <UnstyledLink
      className={cn(
        'animated-underline inline-flex items-center font-medium',
        'focus:outline-none',
        'border-dark-accent border-b border-dotted border-accent hover:border-secondary',
        className,
      )}
      {...rest}
    >
      {children}
    </UnstyledLink>
  );
}
