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
import ProjectCard from '@/components/content/ProjectCard';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { IoNewspaperSharp } from 'react-icons/io5';
import Image from 'next/image';
import TechSection, { MarqueeTech } from '@/components/tech/techsection';

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
            You can call me{' '}
            <span className="text-primary-300 dark:text-primary-500">
              Yogyy
            </span>
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
                  'bg-gradient-to-r from-green-200 via-green-500 to-sky-500',
                  'dark:from-green-200 dark:via-green-400',
                  'opacity-75 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink
                href="#about"
                onClick={() => scrollToSection('about')}
              >
                <Accent>Scroll down</Accent>
              </ButtonLink>
            </div>
            <ButtonLink href="/about">Learn more about me</ButtonLink>
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
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
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
                'group text-gray-600 hover:text-primary dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}
            >
              <SiTwitter className="shrink-0 transition-colors group-hover:text-[#1da1f2]" />
              <span>@yogyxx</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://github.com/yogyy"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
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
            <div id="about" gaya-fade="0">
              <h2 gaya-fade="1" className="text-2xl md:text-4xl 2xl:text-3xl">
                <Accent>About</Accent>
              </h2>
              <h1
                className="font-bold mt-1 text-2xl md:text-4xl 2xl:text-2xl"
                gaya-fade="2"
              >
                me
              </h1>
              <div className="mt-4 " gaya-fade="3">
                <Image
                  className="float-left mr-6  w-40 md:w-72 flex rounded"
                  src={
                    // 'https://res.cloudinary.com/dpegakmzh/image/upload/c_fit,h_756,w_756/a_0/v1678442557/profile.webp'
                    'https://res.cloudinary.com/dpegakmzh/image/upload/c_crop,h_510,w_510/v1678814068/dummy_profile_ule6hu.png'
                  }
                  alt="yogyy"
                  width={510}
                  height={510}
                  draggable={false}
                  loading="lazy"
                />
              </div>
              <article className="max-w-5xl mt-4 prose dark:prose-invert">
                <p gaya-fade="5" className="mb-4 leading-6">
                  Hello, my name is Yogi. yogyy was just a Nickname i made.
                  I&apos;m interested in becoming a full-stack web developer. I
                  believe that through constant practice, I will be able to
                  achieve my dream.
                </p>
                <p gaya-fade="6" className="mb-4 leading-6">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
                  voluptas eius vitae, maxime consequatur adipisci esse
                  quibusdam dolorem asperiores iste qui nisi minus illo
                  similique quis nostrum sapiente laborum earum reprehenderit
                  soluta suscipit. Dicta dolor reiciendis ab dolores rem! Error
                  beatae cupiditate molestias iure delectus ipsam. Consequuntur,
                  sequi praesentium! Culpa eius quas sapiente eum similique.
                </p>
                <p gaya-fade="7" className="mb-4 leading-6">
                  Ex distinctio dolorem, culpa sed explicabo ea deserunt magnam
                  soluta doloribus ut numquam rem eaque officiis dolores earum
                  nobis error autem. Facere, explicabo.
                </p>
              </article>
            </div>
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
              <h3 gaya-fade="1">Technology & Tools</h3>
              <div gaya-fade="2" className="h-20 ">
                <MarqueeTech />
              </div>
              <div className="mt-5">
                <h4 gaya-fade="3">Still learning other technologies... </h4>
                <TechSection className="mt-5" />
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
              <h1 gaya-fade="2">
                <Accent>Features Project</Accent>
              </h1>
              <p
                gaya-fade="3"
                className="mt-2 text-gray-600 dark:text-gray-300"
              >
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
