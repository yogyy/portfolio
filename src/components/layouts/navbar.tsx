import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { ThemeButton } from '@/components/dark-theme';
import { useRouter } from 'next/router';
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
      draggable={false}
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', handleScroll);
      }
    };
  }, [prevScrollPos]);

  return (
    <header
      className={clsx(
        'fixed z-10 w-full',
        !visible ? '-top-12' : 'top-0 transition-all duration-300'
      )}
    >
      <a
        href="#skip-nav"
        className={clsx(
          'rounded-sm p-2 transition',
          'font-medium text-black dark:text-white',
          'bg-light-bg dark:bg-dark-bg',
          'group dark:hover:text-dark-accent',
          'focus:outline-none focus:ring focus:ring-dark-accent',
          'absolute left-4 top-1 z-20',
          '-translate-y-16 focus:translate-y-0'
        )}
      >
        skip to content
      </a>
      <nav
        aria-label="Main Menu"
        className={clsx(
          'sticky bg-gradient-to-b dark:from-dark-bg dark:to-transparent backdrop-blur-sm'
        )}
      >
        <div
          className={clsx(
            'layout flex items-center justify-between py-4',
            large && 'lg:max-w-[68rem]'
          )}
        >
          <ul className="flex mr-auto ml-9 gap-9">
            {links.map(({ label, href }: dink) => (
              <li key={`${href} ${label}`}>
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
