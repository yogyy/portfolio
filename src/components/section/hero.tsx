import React from 'react';
import { cn } from '@/lib/utils';
import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiX } from 'react-icons/si';
import { Accent } from '../accent';
import ButtonLink from '../links/buttonlink';
import UnstyledLink from '../links/unstyledlink';
import { AnimatePresence, m } from 'framer-motion';
import { easeOutBack } from '@/constants/framer-easing';

export const HeroSection = () => {
  const [showLinks, setShowLinks] = React.useState(false);
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
    <section className="min-h-main layout relative mb-20 flex flex-col justify-center">
      <m.article
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: -40, opacity: 1 }}
        transition={{ easings: easeOutBack, duration: 0.4 }}
      >
        <h2 className="items-end justify-center text-text">Hi !</h2>
        <h1 className="items-end justify-center text-3xl text-text md:text-4xl 2xl:text-5xl">
          You Can call me<Accent>&nbsp;YOGYY</Accent>
        </h1>
        <p className="mt-4 max-w-4xl text-wrap md:mt-6 md:text-lg 2xl:text-xl">
          I&apos;m a passionate frontend engineer diving into fullstack development <br />
          with creativity and dedication.
        </p>
        <m.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ easings: easeOutBack, duration: 0.4, delay: 0.2 }}
          className={cn('mt-8 flex flex-wrap items-center gap-4 md:text-lg')}
        >
          <div className="group relative">
            <div
              className={cn(
                'absolute -inset-0.5 animate-tilt rounded  opacity-75 blur',
                'bg-gradient-to-r from-primary via-accent to-secondary',
                'transition duration-300 group-hover:opacity-100 group-hover:duration-200',
              )}
            />
            <ButtonLink
              href="/projects"
              className="z-10 border bg-primary/70 font-semibold text-black"
            >
              View Projects
            </ButtonLink>
          </div>
          <AnimatePresence mode="popLayout">
            {!showLinks ? (
              <m.button
                layout
                className={cn(
                  'relative z-0 flex items-center justify-center px-3 py-2 font-semibold text-text',
                )}
                onClick={() => setShowLinks(prev => !prev)}
                initial={{ opacity: 0, x: -40 }}
                animate={{
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.4, easings: easeOutBack, delay: 0.6 },
                  animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                }}
                whileTap={{ rotate: '-2.5deg', opacity: 0.2 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeIn' }}
                type="button"
              >
                Get in Touch
              </m.button>
            ) : (
              <m.ul
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.15, easings: easeOutBack }}
                className="flex flex-wrap items-center gap-2"
              >
                {externalUrl.map(url => (
                  <li
                    key={url.name}
                    className="flex justify-center rounded-md border-2 border-transparent transition duration-300 ease-out focus-within:border-accent"
                  >
                    <UnstyledLink
                      className={cn(
                        'group inline-flex items-center gap-1 text-sm font-medium text-text/50 transition-colors',
                        'focus-within:text-primary hover:text-primary focus:rounded-md focus:outline-none md:text-base',
                      )}
                      href={url.href}
                    >
                      <url.icon />
                      <span>{url.name}</span>
                    </UnstyledLink>
                  </li>
                ))}
              </m.ul>
            )}
          </AnimatePresence>
        </m.div>
        <div></div>
      </m.article>
    </section>
  );
};
