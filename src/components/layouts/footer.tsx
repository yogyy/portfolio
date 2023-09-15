import { SiGithub, SiTwitter, SiFacebook, SiLinkedin, SiX } from 'react-icons/si';
import { IoMailOutline } from 'react-icons/io5';
import { cn } from '@/lib/utils';
import Spotify from './spotify';
import Tooltipz from '../tooltip';
import Link from 'next/link';
import { isProd } from '@/constants/env';
import { Accent } from '../accent';

export default function Footer() {
  return (
    <footer className="transition-colors bg-base-100 backdrop-blur-sm">
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700" />
      <div className="relative pb-4 layout">
        <div className="flex flex-col justify-center gap-3 mb-4 sm:flex-row sm:justify-between">
          <Accent className="self-center mb-4 text-2xl font-semibold">yogyy</Accent>
          <Spotify className="place-self-center" />
        </div>
        <div className="flex flex-col-reverse justify-center gap-6 place-items-center md:flex-row md:justify-between">
          <span className="flex gap-3 text-sm font-semibold sm:text-center">
            © 2023 M Yogi F S.
          </span>

          <div className="relative flex h-auto my-auto space-x-3 text-xl md:space-x-6 sm:place-content-center">
            {links.map(link => (
              <Tooltipz
                content={link.content}
                className="group"
                aria-label={link.alt}
                key={link.href}
                type="button"
              >
                <Link
                  href={link.href}
                  target="_blank"
                  tabIndex={-1}
                  aria-label={`go to ${link.alt}`}
                >
                  <link.icon
                    className={cn(
                      'group-focus:text-light-text dark:group-focus-within:text-dark-accent',
                      'relative text-light-primary dark:text-dark-primary group-hover:text-light-text dark:group-hover:text-dark-accent',
                      'focus:outline-none'
                    )}
                  />
                </Link>
              </Tooltipz>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

const links = [
  {
    href: 'mailto:m.yogi.fs@gmail.com',
    alt: 'Email',
    icon: IoMailOutline,
    content: (
      <p>
        Contact me&nbsp;
        <span className="text-light-primary dark:text-light-bg">m.yogi.fs@gmail.com</span>
      </p>
    ),
  },
  {
    href: 'https://github.com/yogyy',
    alt: 'Github',
    icon: SiGithub,
    content: (
      <p>
        See My Project on <span className="text-light-primary dark:text-light-bg">Github</span>
      </p>
    ),
  },
  {
    href: 'https://facebook.com/iogiy',
    alt: 'Facebook',
    icon: SiFacebook,
    content: (
      <p>
        Reach me on <span className="text-light-primary dark:text-light-bg">Facebook</span>
      </p>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/yogyy/',
    alt: 'LinkedIn',
    icon: SiLinkedin,
    content: (
      <p>
        Find me on <span className="text-light-primary dark:text-light-bg">LinkedIn</span>
      </p>
    ),
  },
  {
    href: 'https://twitter.com/yogyxx',
    alt: 'Twitter',
    icon: SiX,
    content: (
      <p>
        Reach me on <span className="text-light-primary dark:text-light-bg">Twitter</span>
      </p>
    ),
  },
];
