'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import NavLink from '../nav-link';
import IonIcons from '../components/IonIcons';

export default function Navbar() {
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
    <div className={`navbar fixed bg-none ${scrolled ? 'bg-base-200' : ''}`}>
      <nav className="mr-auto layout">
        <div className="hidden md:block">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl block md:hidden"
          >
            yogyy
          </Link>
        </div>
        <ul className="flex ml-9 gap-9">
          {links.map(({ label, href }: dink) => (
            <li className="" key={`${href} ${label}`}>
              <NavLink href={href}>
                <span
                  className={clsx('transition-colors text-base font-semibold')}
                >
                  {label}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="">
        <></>
      </div>
    </div>
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
