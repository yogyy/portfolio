'use client';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import NavLink from '@/components/links/nav-link';
import { ThemeButton } from '@/components/darkTheme';

type HeaderProps = {
  large?: boolean;
};

export default function Navbar({ large = false }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  const scrollToUp = () => {
    if (
      window.location.pathname.split('/')[1] ===
      window.location.href.split('/')[3]
    ) {
      window.scrollTo(0, 0);
    }
  };

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
  const [onTop, setOnTop] = React.useState<boolean>(true);
  React.useEffect(() => {
    const handleScroll = () => {
      setOnTop(window.pageYOffset === 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 mb-20">
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
              <li
                className="text-xs"
                key={`${href} ${label}`}
                onClick={scrollToUp}
              >
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
