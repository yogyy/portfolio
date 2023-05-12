import UnstyledLink from '@/components/links/unstyledlink';
import { SiGithub, SiTwitter, SiFacebook, SiLinkedin } from 'react-icons/si';

import Spotify from './spotify';
import { IoMailOutline } from 'react-icons/io5';
import clsx from 'clsx';

export default function Footer() {
  return (
    <footer className="bg-base-100 transition-colors">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="pb-4 layout relative">
        <div className="">
          <div className="mb-4 flex flex-col justify-center sm:flex-row sm:justify-between gap-3">
            <span className="self-center mb-4 text-2xl font-semibold whitespace-nowrap text-light-primary dark:text-dark-accent">
              yogyy
            </span>
            {<Spotify className="place-self-center" />}
          </div>
        </div>
        <div className="flex flex-col-reverse justify-center place-items-center gap-6 md:flex-row md:justify-between">
          <span className="text-sm font-semibold sm:text-center gap-3 flex text-gray- ">
            © 2023 Constantine.
            <UnstyledLink
              className="hover:text-gray-600 dark:hover:text-dark-primary dark:focus:outline-none dark:focus-visible:ring dark:focus-visible:ring-dark-accent focus:rounded-md"
              href="https://www.github.com/yogyy"
            >
              got any feedback?.
            </UnstyledLink>
          </span>

          <div className="relative my-auto text-xl flex space-x-3 md:space-x-6 sm:place-content-center ">
            <button
              className={clsx(
                'p-1 text-light-primary dark:text-dark-primary hover:text-light-text',
                'focus:outline-none focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent focus:rounded-md'
              )}
            >
              <IoMailOutline />
            </button>
            {links.map(link => (
              <UnstyledLink
                aria-label="social media"
                key={link.href}
                href={link.href}
                className={clsx(
                  'my-auto mx-auto p-1 text-light-primary hover:text-light-text dark:text-dark-primary dark:hover:text-dark-accent',
                  'focus:outline-none focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent focus:rounded-md'
                )}
              >
                <link.icon className="" />
              </UnstyledLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    href: 'https://github.com/yogyy',
    alt: 'github',
    icon: SiGithub,
  },
  {
    href: 'https://facebook.com/iogiy',
    alt: 'facebook',
    icon: SiFacebook,
  },
  {
    href: 'https://www.linkedin.com/in/yogyy/',
    alt: 'linkedin',
    icon: SiLinkedin,
  },
  {
    href: 'https://twitter.com/yogyxx',
    alt: 'twitter',
    icon: SiTwitter,
  },
];
