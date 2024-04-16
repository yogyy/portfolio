import clsx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import UnstyledLink from './unstyledlink';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  passHref?: boolean;
  classname?: string;
}
export default function NavLink({ href, children, ...rest }: NavLinkProps) {
  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}` || (href === '/' && !segment);

  return (
    <UnstyledLink
      {...rest}
      className={clsx(active ? 'text-sky-500 hover:text-green-500' : 'text-green-400')}
      href={href}
    >
      {children}
    </UnstyledLink>
  );
}
