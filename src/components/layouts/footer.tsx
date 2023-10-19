import Spotify from './spotify';
import { cn } from '@/lib/utils';
import { Accent } from '../accent';
import { IoMailOutline } from 'react-icons/io5';
import { SiGithub, SiFacebook, SiLinkedin, SiX } from 'react-icons/si';
import {
  Tooltip,
  TooltipContent,
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import Link from 'next/link';

const copyright = `© ${new Date().getFullYear()} Yogi.`;

export default function Footer() {
  return (
    <footer className="mt-6 bg-background/30 backdrop-blur-sm">
      <hr className="mb-6 border-text/10" />
      <div className="layout relative pb-4">
        <div className="mb-4 flex flex-col items-center justify-center gap-3 sm:flex-row sm:justify-between">
          <h1 className="mb-4 self-center pb-2 text-2xl font-bold">
            <Accent>yogyy</Accent>
          </h1>
          <Spotify className="place-self-center" />
        </div>
        <div className="flex flex-col-reverse place-items-center justify-center gap-6 md:flex-row md:justify-between">
          <span className="flex gap-3 text-sm font-semibold sm:text-center">{copyright}</span>
          <div className="relative my-auto flex h-auto space-x-3 text-xl sm:place-content-center md:space-x-5">
            {links.map(link => (
              <TooltipProvider key={link.href} delayDuration={300}>
                <Tooltip>
                  <TooltipTrigger
                    type="button"
                    className="cursor-newtab group outline-none"
                    aria-label={link.alt}
                  >
                    <Link
                      href={link.href}
                      target="_blank"
                      tabIndex={-1}
                      aria-label={`go to ${link.alt}`}
                      className="cursor-newtab"
                    >
                      <link.icon
                        className={cn(
                          'group-focus:text-accent',
                          'relative text-text/70 group-hover:text-accent',
                          'm-1',
                        )}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipPortal>
                    <TooltipContent
                      sideOffset={8}
                      side="bottom"
                      className="font-semibold text-text outline-accent duration-400"
                    >
                      {link.content}
                    </TooltipContent>
                  </TooltipPortal>
                </Tooltip>
              </TooltipProvider>
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
        <span className="text-primary">m.yogi.fs@gmail.com</span>
      </p>
    ),
  },
  {
    href: 'https://github.com/yogyy',
    alt: 'Github',
    icon: SiGithub,
    content: (
      <p>
        See My Project on <span className="text-primary">Github</span>
      </p>
    ),
  },
  {
    href: 'https://facebook.com/iogiy',
    alt: 'Facebook',
    icon: SiFacebook,
    content: (
      <p>
        Reach me on <span className="text-primary">Facebook</span>
      </p>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/yogyy/',
    alt: 'LinkedIn',
    icon: SiLinkedin,
    content: (
      <p>
        Find me on <span className="text-primary">LinkedIn</span>
      </p>
    ),
  },
  {
    href: 'https://twitter.com/yogyyconst',
    alt: 'Twitter',
    icon: SiX,
    content: (
      <p>
        Reach me on <span className="text-primary">Twitter</span>
      </p>
    ),
  },
];
