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
        'focus:outline-none focus-visible:ring focus-visible:ring-sky-300',
        'border-b border-dotted border-sky-500 hover:border-sky-500/40',
        className
      )}
    >
      <span className="dark:bg-gradient-to-tr dark:from-sky-300 dark:to-sky-400 dark:bg-clip-text dark:text-transparent">
        {children}
      </span>
    </UnstyledLink>
  );
}
