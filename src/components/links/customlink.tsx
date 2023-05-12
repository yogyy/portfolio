import clsx from 'clsx';
import UnstyledLink, { UnstyledLinkProps } from './unstyledlink';

export default function CustomLink({
  children,
  className = '',
  ...rest
}: UnstyledLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'animated-underline custom-link inline-flex items-center font-medium',
        'focus:outline-none focus-visible:ring focus-visible:ring-dark-accent',
        'border-b border-dotted border-dark-accent hover:border-dark-secondary',
        className
      )}
    >
      <span className="dark:bg-gradient-to-tr dark:from-dark-primary dark:to-dark-accent dark:bg-clip-text dark:text-transparent">
        {children}
      </span>
    </UnstyledLink>
  );
}
