import Link, { LinkProps } from 'next/link';
import { cn } from '@/lib/utils';

export type UnstyledLinkProps = {
  openNewTab?: boolean;
} & React.ComponentPropsWithoutRef<'a'> &
  LinkProps;

export default function UnstyledLink({
  children,
  href,
  openNewTab,
  className,
  ...rest
}: UnstyledLinkProps) {
  const isNewTab =
    openNewTab !== undefined ? openNewTab : href && !href.startsWith('/') && !href.startsWith('#');

  if (!isNewTab) {
    return (
      <Link href={href} {...rest} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <Link
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...rest}
      className={cn('cursor-newtab', className)}
    >
      {children}
    </Link>
  );
}
