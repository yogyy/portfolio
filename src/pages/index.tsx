'use client';

import clsx from 'clsx';
import * as React from 'react';
import About from '@/components/clientComponent/about';
import { Accent } from '@/components/accent';
import ButtonLink from '@/components/links/buttonlink';
import UnstyledLink from '@/components/links/unstyledlink';
import { scrollToSection } from '@/components/clientComponent/scrollToId';
import IsLoaded from '@/components/Image/isLoaded';
import Typewritterz from '@/components/typewritter';
import Project from '@/components/clientComponent/project';
import Layout from '../components/layouts/Layout';

export default function Home() {
  return (
    <Layout
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
            data-aos="fade-up"
            data-aos-delay="700"
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon section1 w-5 h-5 text-xl"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path d="M439.91 112h-23.82a.09.09 0 00-.09.09V416a32 32 0 0032 32 32 32 0 0032-32V152.09A40.09 40.09 0 00439.91 112z"></path>
                <path d="M384 416V72a40 40 0 00-40-40H72a40 40 0 00-40 40v352a56 56 0 0056 56h342.85a1.14 1.14 0 001.15-1.15 1.14 1.14 0 00-.85-1.1A64.11 64.11 0 01384 416zM96 128a16 16 0 0116-16h64a16 16 0 0116 16v64a16 16 0 01-16 16h-64a16 16 0 01-16-16zm208 272H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 368h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 400zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 304h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 336zm0-64H112.45c-8.61 0-16-6.62-16.43-15.23A16 16 0 01112 240h191.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 272zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 176h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 208zm0-64h-63.55c-8.61 0-16-6.62-16.43-15.23A16 16 0 01240 112h63.55c8.61 0 16 6.62 16.43 15.23A16 16 0 01304 144z"></path>
              </svg>
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
              <span className="shrink-0 flex group-hover:text-[#1da1f2]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon section1"
                  viewBox="0 0 512 512"
                  width="20"
                  height="20"
                >
                  <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                </svg>
              </span>
              @yogyxx
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ionicon section1"
                viewBox="0 0 512 512"
                width="20"
                height="20"
              >
                <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z"></path>
              </svg>
              <span>Constantine</span>
            </UnstyledLink>
          </div>
        </article>
      </IsLoaded>

      <About />
      <div className="h-[20vh]" />
      <Project />
      <div className="h-[20vh]" />
    </Layout>
  );
}
