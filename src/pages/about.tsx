import * as React from 'react';
import RootLayout from '@/components/layouts/layout';

import TechSection from '@/components/tech/techsection';
import IsLoaded from '@/components/isLoaded';
import { Accent } from '@/components/accent';
import clsx from 'clsx';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <RootLayout
      pageTitle="About | yogyy"
      content="yogyy is a Self-Tought Web Developer who based on West Java, Indonesia"
    >
      <div className="flex flex-col justify-around h-full min-h-screen">
        <About className="mt-nav" />
        <IsLoaded>
          <div className="layout">
            <h1 className="my-4 text-2xl">
              <Accent>Tech Stack</Accent>
            </h1>
            <TechSection />
          </div>
        </IsLoaded>
      </div>
    </RootLayout>
  );
}

const kebabCase = (string: string) =>
  string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export function About({ className, ...rest }: { className?: string }) {
  return (
    <>
      <IsLoaded className={clsx('mb-10 layout flex flex-col', className)} {...rest}>
        <Me />
      </IsLoaded>
    </>
  );
}

export function Me() {
  return (
    <div id="about" className="">
      <h2 gaya-fade="1" className="mb-6 text-2xl md:text-4xl 2xl:text-3xl">
        <Accent>About Me</Accent>
      </h2>
      <div gaya-fade="2" className="mt-4">
        <Image
          className="flex float-left mr-6 bg-dark-bg rounded-full w-28 md:w-36"
          src="https://res.cloudinary.com/dpegakmzh/image/upload/c_scale,w_256/v1685623759/me_vwkosx.webp"
          alt="gwe"
          width={520}
          height={520}
        />
      </div>
      <article className="max-w-4xl mt-4 md:mt-6">
        <p gaya-fade="3" className="mb-4">
          Hello, my name is YoGi. &apos;yogyy&apos; is just a nickname I created. I&apos;m
          interested in becoming a full-stack web developer. As a naturally curious person, I am
          always seeking ways to improve and achieve{' '}
          <span className="font-semibold text-red-500 line-through">perfection</span>
          &nbsp; better code in my work.They say practice makes perfect, but then again, they also
          say that nobody&apos;s perfect, so I guess that means I don&apos;t have to practice...
        </p>
        <p gaya-fade="4">
          There are a lot of things and technologies to learn in frontend development and I am
          motivated to learn as much as possible. I enjoy learning something new and getting
          feedback to make myself better and improve.
        </p>
      </article>
    </div>
  );
}
