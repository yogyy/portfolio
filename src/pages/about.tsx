import * as React from 'react';
import { Accent } from '@/components/accent';
import NextSEO from '@/components/layouts/next-seo';
import TechMdx from '@/components/tech-icons';
import { cn } from '@/lib/utils';
import { m } from 'framer-motion';
import { easeOutBack } from '@/constants/framer-easing';

export default function AboutPage() {
  return (
    <NextSEO title="About · Yogyy">
      <m.section
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easings: easeOutBack, duration: 0.5 }}
        className="layout flex h-auto min-h-dvh flex-col items-start"
      >
        <div className="">
          <div id="about" className="my-10 h-full">
            <h1 className="mb-6 text-2xl md:text-4xl 2xl:text-3xl">Hi, I&apos;m Yogi.</h1>
            <article className={cn('relative mt-4 flex max-w-3xl gap-3 md:mt-6 md:gap-6')}>
              <div className="hidden border-l border-primary md:block" />
              <div className="h-full text-pretty text-base">
                <p className="mb-4 leading-7">
                  I live in Tangerang, Indonesia. I&apos;m interested in becoming a full-stack web
                  developer. As a naturally curious person, I am always seeking ways to improve and
                  achieve{' '}
                  <span className="font-semibold text-red-500 line-through">perfection</span>
                  &nbsp; better code in my work.They say practice makes perfect, but then again,
                  they also say that nobody&apos;s perfect, so I guess that means I don&apos;t have
                  to practice...
                  <br />
                  <br />
                  There are a lot of things and technologies to learn in frontend development and I
                  am motivated to learn as much as possible. I enjoy learning something new and
                  getting feedback to make myself better and improve.
                  <br />
                  <br />
                  In this website I will be writing some blogs and showcase my projects. I believe
                  that writing what I have learned is the best way to remember things, and I can
                  share my knowledge along the way. So do contact me and I will be very happy to
                  help!
                </p>
              </div>
            </article>
          </div>
          <div className="flex flex-col place-content-center">
            <h2 className="text-2xl">
              <Accent>Fav Tech Stack</Accent>
            </h2>
            <TechMdx
              techs={['react', 'nextjs', 'tailwindcss', 'reactquery']}
              iconClassName="text-3xl"
              className="-ml-2 flex-wrap"
            />
          </div>
        </div>
      </m.section>
    </NextSEO>
  );
}
