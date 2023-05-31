'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ThemeButton } from '@/components/darkTheme';
import { useRouter } from 'next/router';
import UnstyledLink from '@/components/links/unstyledlink';
import Link from 'next/link';

type HeaderProps = {
  large?: boolean;
};
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  passHref?: boolean;
  classname?: string;
}

function NavLink({ href, children, ...rest }: NavLinkProps) {
  const router = useRouter();
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];
  return (
    <Link
      href={href}
      passHref
      {...rest}
      className={clsx(
        router.pathname && baseRoute !== href
          ? 'text-light-text dark:text-dark-primary hover:text-light-primary/50 dark:hover:text-dark-accent'
          : 'text-light-primary dark:text-dark-accent',
        'focus:outline-none focus-visible:ring focus-visible:ring-light-primary dark:focus-visible:ring-dark-accent focus:rounded-sm py-1'
      )}
    >
      <span>{children}</span>
    </Link>
  );
}

export default function Navbar({ large = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    return () => {
      window.onscroll = null;
    };
  }, []);

  return (
    <header className="fixed top-0 z-10 w-full">
      <nav className={`sticky bg-light-bg transition-colors dark:bg-dark-bg ${scrolled ? '' : ''}`}>
        <div
          className={clsx(
            'layout flex items-center justify-between py-4 ',
            large && 'lg:max-w-[68rem]'
          )}
        >
          {/* <Link href="/" className="flex normal-case md:hidden">
            yogyy
          </Link> */}
          <ul className="flex mr-auto ml-9 gap-9">
            {links.map(({ label, href }: dink) => (
              <li className="font-semibold" key={`${href} ${label}`}>
                <NavLink href={href}>
                  <span className={clsx('transition-colors text-xs md:text-base font-semibold')}>
                    {label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeButton className="ml-auto" />
        </div>
      </nav>
    </header>
  );
}

type dink = {
  href: string;
  label: string;
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/post', label: 'Post' },
  { href: '/projects', label: 'Projects' },
  // {href: '/library', label: 'Library'},
  { href: '/about', label: 'About' },
];
