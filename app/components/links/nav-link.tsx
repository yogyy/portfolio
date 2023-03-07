'use client';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import clsx from 'clsx';
import UnstyledLink from './unstyledlink';
import { useEffect } from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  passHref?: boolean;
  classname?: string;
}
export default function NavLink({ href, children, ...rest }: NavLinkProps) {
  useEffect(() => {
    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  let segment = useSelectedLayoutSegment();
  let active = href === `/${segment}` || (href === '/' && !segment);
  // console.log(segment);
  // console.log({ href, active });
  return (
    <UnstyledLink
      {...rest}
      className={
        !active ? 'text-secondary' : 'bg-accent bg-clip-text text-transparent '
      }
      href={href}
    >
      {children}
    </UnstyledLink>
  );
}
