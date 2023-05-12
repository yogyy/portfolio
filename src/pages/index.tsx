'use client';

import clsx from 'clsx';
import * as React from 'react';
import { Accent } from '@/components/accent';
import ButtonLink from '@/components/links/buttonlink';
import UnstyledLink from '@/components/links/unstyledlink';
import { scrollToSection } from '@/components/clientComponent/scrollToId';
import IsLoaded from '@/components/isLoaded';
import Typewritterz from '@/components/typewritter';
import { projects } from '@/components/clientComponent/project';
import RootLayout from '@/components/layouts/layout';
import { InView } from 'react-intersection-observer';
import ProjectCard from '@/components/ProjectCard';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { IoNewspaperSharp } from 'react-icons/io5';
import Image from 'next/image';
import TechSection, { MarqueeTech } from '@/components/tech/techsection';
import { Me } from '@/components/clientComponent/about';

export default function Home() {
  return (
    <RootLayout
      pageTitle="yogyy"
      content="Muhammad Yogi Firman Syah Webstie Portofolio"
    >
      <IsLoaded className="min-h-main mb-20 flex flex-col justify-center relative">
        <article className={`mx-auto layout`}>
          <h1 className="text-2xl md:text-4xl 2xl:text-5xl" gaya-fade="1">
            Hi~
          </h1>
          <h2 gaya-fade="2" className=" mt-1 text-3xl md:text-5xl 2xl:text-6xl">
            You can call me&nbsp;
            <Accent>Yogyy</Accent>
          </h2>
          <Typewritterz />
          <p
            gaya-fade="5"
            className="mt-4 max-w-4xl md:mt-6 md:text-lg 2xl:text-xl"
          >
            I work with react js and next js. Lorem ipsum dolor sit. <br /> I am
            constantly expanding my knowledge and experience in the field
          </p>
          <div gaya-fade="6" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
            <div className="group relative">
              <div
                className={clsx(
                  'absolute -inset-0.5 animate-tilt rounded blur',
                  'bg-gradient-to-r from-light-primary to-light-secondary',
                  'dark:from-dark-primary dark:to-dark-secondary',
                  'opacity-50 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink
                href="#about"
                onClick={() => scrollToSection('about')}
                className="bg-light-primary text-light-bg dark:bg-dark-primary dark:text-dark-text dark:border-dark-primary"
              >
                Scroll down
              </ButtonLink>
            </div>
            <ButtonLink
              className="bg-light-secondary text-light-primary dark:bg-dark-secondary dark:text-dark-primary"
              href="/about"
            >
              Learn more about me
            </ButtonLink>
          </div>
          <div
            gaya-fade="7"
            className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8"
          >
            <UnstyledLink
              href="/"
              onClick={() => console.warn('my resume not ready')}
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent ',
                'transition-colors'
              )}
            >
              <IoNewspaperSharp className="shrink-0" />
              <span>Resume</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://twitter.com/yogyxx"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'group text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent ',
                'transition-colors'
              )}
            >
              <SiTwitter className="shrink-0 transition-colors group-hover:text-[#1da1f2] group-focus:text-[#1da1f2]" />
              <span>@yogyxx</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://github.com/yogyy"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
                'transition-colors'
              )}
            >
              <SiGithub />
              <span>yogyy</span>
            </UnstyledLink>
          </div>
        </article>
      </IsLoaded>

      <InView triggerOnce rootMargin="-50% 0px">
        {({ ref, inView }) => (
          <section
            ref={ref}
            className={clsx('py-20 layout', inView && 'fade-in-start')}
          >
            <Me />
          </section>
        )}
      </InView>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section
            ref={ref}
            className={clsx('py-20 layout', inView && 'fade-in-start')}
          >
            <div gaya-fade="0" className="mt-20 ">
              <h2 gaya-fade="1">
                <Accent>Technology & Tools</Accent>
              </h2>
              <div gaya-fade="2" className="h-20 ">
                <MarqueeTech />
              </div>
            </div>
          </section>
        )}
      </InView>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section
            ref={ref}
            className={clsx('py-20', inView && 'fade-in-start')}
          >
            <article className="layout" gaya-fade="0">
              <h2 gaya-fade="2">
                <Accent>Features Project</Accent>
              </h2>
              <p gaya-fade="3" className="mt-2">
                Showcase of my works on frontend development.
              </p>
              <ul
                gaya-fade="4"
                className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
              >
                {projects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </article>
          </section>
        )}
      </InView>
      <div className="h-[20vh]" />
    </RootLayout>
  );
}
