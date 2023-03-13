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
      className={
        router.pathname !== href
          ? 'text-sky-500 hover:text-green-500'
          : 'text-green-400'
      }
    >
      <span className={clsx()}>{children}</span>
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
    <header className="fixed w-full top-0 z-50">
      <div className="h-2 bg-gradient-to-tr from-primary-200 via-primary-400 to-primary-200" />

      <div
        className={`sticky bg-white transition-colors dark:bg-dark ${
          scrolled ? '' : ''
        }`}
      >
        <nav
          className={clsx(
            'layout flex items-center justify-between py-4 ',
            large && 'lg:max-w-[68rem]'
          )}
        >
          {/* <Link href="/" className="normal-case flex md:hidden">
            yogyy
          </Link> */}
          <ul className="flex ml-9 gap-9 mr-auto">
            {links.map(({ label, href }: dink) => (
              <li className="text-xs" key={`${href} ${label}`}>
                <NavLink href={href}>
                  <span
                    className={clsx(
                      'transition-colors text-xs md:text-base font-semibold'
                    )}
                  >
                    {label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeButton className="ml-auto" />
        </nav>
      </div>
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
  // {href: '/projects', label: 'Projects'},
  // {href: '/library', label: 'Library'},
  { href: '/about', label: 'About' },
];
