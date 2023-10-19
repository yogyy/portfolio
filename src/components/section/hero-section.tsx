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
    <IsLoaded className="min-h-main relative mb-20 flex flex-col justify-center lg:min-h-[850px]">
      <article className="layout">
        <h1 className="items-end justify-center text-3xl md:text-4xl 2xl:text-5xl" gaya-fade="1">
          Hi, i&apos;m
          <Accent> YOGYY</Accent>
        </h1>
        <h2 gaya-fade="2" className="flex flex-wrap">
          Frontend Web Developer
        </h2>
        <p gaya-fade="3" className="mt-4 max-w-4xl md:mt-6 md:text-lg 2xl:text-xl">
          i&apos;m front-end developer based in Tangerang, Indonesia,
          <br /> with a focus on ReactJS and NextJS.
        </p>
        <div gaya-fade="4" className="mt-8 flex flex-wrap gap-4 md:text-lg">
          <div className="group relative">
            <div
              className={cn(
                'absolute -inset-0.5 animate-tilt rounded  opacity-75 blur',
                'bg-gradient-to-r from-primary via-accent to-secondary',
                'transition duration-1000 group-hover:opacity-100 group-hover:duration-200',
              )}
            />
            <ButtonLink href="/posts" className="bg-primary text-black/90">
              Read The Post
            </ButtonLink>
          </div>
          <ButtonLink className="bg-secondary text-text/90" href="/about">
            More about me
          </ButtonLink>
        </div>
        <div gaya-fade="5">
          <ul className="mt-4 flex flex-wrap items-center gap-y-2 md:mt-8">
            {externalUrl.map(url => (
              <li key={url.name}>
                <UnstyledLink
                  className={cn(
                    'inline-flex items-center gap-1 px-2 text-sm font-medium md:text-base',
                    'group text-text/50 transition-colors hover:text-primary focus:text-primary',
                    'focus:rounded-md focus:outline-none focus-visible:ring focus-visible:ring-accent',
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
