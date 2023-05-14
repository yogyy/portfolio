import UnstyledLink from '@/components/links/unstyledlink';
import { SiGithub, SiTwitter, SiFacebook, SiLinkedin } from 'react-icons/si';
import Spotify from './spotify';
import { IoMailOutline } from 'react-icons/io5';
import clsx from 'clsx';
import Tooltipz from '../tooltip';

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
          </span>

          <div className="relative my-auto text-xl flex space-x-3 md:space-x-6 sm:place-content-center h-auto">
            {links.map(link => (
              <UnstyledLink
                aria-label="social media"
                href={link.href}
                key={link.href}
                className={clsx(
                  'relative text-light-primary dark:text-dark-primary hover:text-light-text dark:hover:text-dark-accent',
                  'focus:outline-none'
                )}
              >
                <Tooltipz content={link.content} trigger={<link.icon className="" />}></Tooltipz>
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
    href: 'mailto:akunwanhit.0y@gmail.com',
    alt: 'github',
    icon: IoMailOutline,
    content: (
      <p>
        Contact me&nbsp;
        <span className="text-light-primary dark:text-light-bg">akunwanhit.0y@gmail.com</span>
      </p>
    ),
  },
  {
    href: 'https://github.com/yogyy',
    alt: 'github',
    icon: SiGithub,
    content: (
      <p>
        See My Project on <span className="text-light-primary dark:text-light-bg">Github</span>
      </p>
    ),
  },
  {
    href: 'https://facebook.com/iogiy',
    alt: 'facebook',
    icon: SiFacebook,
    content: (
      <p>
        Reach me on <span className="text-light-primary dark:text-light-bg">Facebook</span>
      </p>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/yogyy/',
    alt: 'linkedin',
    icon: SiLinkedin,
    content: (
      <p>
        Find me on <span className="text-light-primary dark:text-light-bg">LinkedIn</span>
      </p>
    ),
  },
  {
    href: 'https://twitter.com/yogyxx',
    alt: 'twitter',
    icon: SiTwitter,
    content: (
      <p>
        Reach me on <span className="text-light-primary dark:text-light-bg">Twitter</span>
      </p>
    ),
  },
];
