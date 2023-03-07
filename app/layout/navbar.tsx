'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import NavLink from '../components/links/nav-link';
import { themeChange } from 'theme-change';

export default function Navbar() {
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
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className={`navbar fixed bg-none ${scrolled ? 'bg-base-200' : ''}`}>
      <nav className="mr-auto layout">
        <div className="block md:hidden">
          <Link
            href="/"
            className="btn btn-ghost normal-case flex text-xl md:hidden"
          >
            yogyy
          </Link>
        </div>
        <ul className="flex ml-9 gap-9 mr-auto">
          {links.map(({ label, href }: dink) => (
            <li
              className="hidden md:block"
              key={`${href} ${label}`}
              onClick={scrollToUp}
            >
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
        <div className="dropdown dropdown-bottom dropdown-end ">
          <label className="btn border-none btn-circle swap swap-rotate bg-transparent active:text-sky-500">
            <input type="checkbox" />

            <svg
              className=" fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 text-sky-500"
          >
            <li>
              <Link href="/about">about</Link>
            </li>
            <li>
              <Link href="/post">post</Link>
            </li>
            <li>
              <button data-set-theme="dark" className="btn ">
                tonjok
              </button>
            </li>
            <li>
              <button
                data-act-class="shadow-outline"
                data-set-theme="night"
                className="btn "
              >
                Dark
              </button>
            </li>
            <li>
              <button
                data-act-class="shadow-outline"
                data-set-theme="fantasy"
                className=" text-2xl btn text-center flex justify-center items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon h-5 w-5"
                  viewBox="0 0 512 512"
                >
                  <title>Sunny</title>
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
                  />
                  <circle
                    cx="256"
                    cy="256"
                    r="80"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </nav>
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
