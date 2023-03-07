'use client';

import clsx from 'clsx';
import React from 'react';
import Typewritter from 'typewriter-effect';
import ButtonLink from './components/links/buttonlink';
import UnstyledLink from './components/links/unstyledlink';
import useLoaded from './components/useLoaded';
import IonIcons from './components/IonIcons';

export default function Home() {
  const isLoaded = useLoaded();
  return (
    <>
      <section
        className={clsx(
          ' h-screen flex flex-col justify-center',
          isLoaded && 'fade-in-start'
        )}
      >
        <article className={`mx-auto layout -mt-14`}>
          <div className={``}>
            <h1 gaya-fade="1">
              <span
                className={`text-sky-500 tracking-widest md:tracking-wide xl:tracking-tight `}
              >
                hi
              </span>
            </h1>
          </div>
          <h2 gaya-fade="2" className=" mt-1">
            You can call me
          </h2>
          <div className={`mt-1  `}>
            <h3 gaya-fade="3" className="flex flex-wrap">
              I&apos;m a <span className="mr-2"> </span>
              <span className={`flex flex-wrap text-sky-500 `}>
                <Typewritter
                  gaya-fade="4"
                  options={{
                    strings: ['Frontend Engineer', 'Web Developer'],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </h3>
          </div>
          <p
            gaya-fade="5"
            className="mt-4 max-w-4xl md:mt-6 md:text-lg 2xl:text-xl"
          >
            I work with react js and next js. Lorem ipsum dolor sit. <br />{' '}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet.
          </p>
          <div gaya-fade="6" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
            <div className="group relative">
              <div
                className={clsx(
                  'absolute -inset-1 animate-tilt rounded blur',
                  'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-green-700 to-gray-300',
                  'dark:from-sky-200 dark:via-sky-300',
                  'opacity-70 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink href="#about">Read the blog</ButtonLink>
            </div>
            <ButtonLink href="/about">Learn more about me</ButtonLink>
          </div>
          <div
            gaya-fade="7"
            data-aos="fade-up"
            data-aos-delay="700"
            className="mt-4 flex flex-wrap gap-4 gap-y-2 md:mt-8"
          >
            <UnstyledLink
              href="/hellox"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}
            >
              <IonIcons name="newspaper" />
              <span>Resume</span>
            </UnstyledLink>
            <UnstyledLink
              href="https://twitter.com/yogyxx"
              className={clsx(
                'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                'group text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white',
                'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
                'transition-colors'
              )}
            >
              <span className="shrink-0 transition-colors flex group-hover:text-[#1da1f2]">
                <IonIcons name="logo-twitter" />
              </span>
              <span>@yogyy</span>
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
              <IonIcons name="logo-github" />
              <span>Constantine</span>
            </UnstyledLink>
          </div>
        </article>
      </section>
    </>
  );
}
