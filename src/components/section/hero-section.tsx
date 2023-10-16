import { cn } from '@/lib/utils';
import React from 'react';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiX } from 'react-icons/si';
import { Accent } from '../accent';
import IsLoaded from '../isLoaded';
import ButtonLink from '../links/buttonlink';
import UnstyledLink from '../links/unstyledlink';

const HeroSection = () => {
  const externalUrl = [
    {
      href: 'https://drive.google.com/file/d/1j7mkmbd7mTr80xvBPgV0J1d7jMoztifq/view',
      icon: IoNewspaperSharp,
      name: 'Resume',
    },
    {
      href: 'https://github.com/yogyy',
      icon: SiGithub,
      name: 'Github',
    },
    {
      href: 'https://twitter.com/yogyyconst',
      icon: SiX,
      name: 'Twitter',
    },
  ];

  return (
    <IsLoaded className="relative flex flex-col justify-center mb-20 min-h-main lg:min-h-[850px]">
      <article className="layout">
        <h1
          className="inline-flex items-center justify-center gap-2 pb-2 text-3xl md:text-4xl 2xl:text-5xl"
          gaya-fade="1"
        >
          <span>Hi, i&apos;m</span>
          <Accent className="pb-2">yogyy</Accent>
        </h1>
        <h2 gaya-fade="2" className="flex flex-wrap">
          Frontend Web Developer
        </h2>
        <p gaya-fade="3" className="max-w-4xl mt-4 md:mt-6 md:text-lg 2xl:text-xl">
          i&apos;m front-end developer based in Tangerang, Indonesia,
          <br /> with a focus on ReactJS and NextJS.
        </p>
        <div gaya-fade="4" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
          <div className="relative group">
            <div
              className={cn(
                'absolute -inset-0.5 animate-tilt rounded blur',
                'bg-gradient-to-r from-light-primary to-light-secondary',
                'dark:from-dark-primary dark:to-dark-secondary',
                'opacity-50 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
              )}
            />
            <ButtonLink
              href="/posts"
              className="bg-light-primary text-light-bg dark:bg-dark-primary dark:text-dark-text dark:border-dark-primary"
            >
              Read The Post
            </ButtonLink>
          </div>
          <ButtonLink
            className="bg-light-secondary text-light-primary dark:bg-dark-secondary dark:text-dark-primary"
            href="/about"
          >
            More about me
          </ButtonLink>
        </div>
        <div gaya-fade="5">
          <ul className="flex flex-wrap items-center gap-4 mt-4 gap-y-2 md:mt-8">
            {externalUrl.map(url => (
              <li key={url.name}>
                <UnstyledLink
                  className={cn(
                    'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                    'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                    'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
                    'transition-colors group'
                  )}
                  href={url.href}
                >
                  <url.icon />
                  <span>{url.name}</span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </IsLoaded>
  );
};

export default HeroSection;
