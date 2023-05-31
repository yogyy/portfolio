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
      <div className="pt-10"></div>
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
      <h2 gaya-fade="1" className="text-2xl md:text-4xl 2xl:text-3xl">
        <Accent>About</Accent>
      </h2>
      <h1 gaya-fade="2" className="mt-1 text-2xl font-bold md:text-4xl 2xl:text-2xl">
        me
      </h1>
      <div className="mt-4">
        <Image
          className="flex float-left w-40 mr-6 rounded md:w-52"
          src={'https://res.cloudinary.com/dpegakmzh/image/upload/v1678442557/profile.jpg'}
          alt="gwe"
          width={520}
          height={520}
          draggable={false}
        />
      </div>
      <article className="max-w-5xl mt-4 prose md:mt-6 dark:prose-invert">
        <p gaya-fade="3" className="mb-4 leading-6">
          Hello, my name is Yogi. &apos;yogyy&apos; is just a nickname I created. I&apos;m
          interested in becoming a full-stack web developer. As a naturally curious person, I am
          always seeking ways to improve and achieve{' '}
          <span className="font-semibold text-red-500 line-through">perfection</span>
          &nbsp; better code in my work.They say practice makes perfect, but then again, they also
          say that nobody&apos;s perfect, so I guess that means I don&apos;t have to practice~
        </p>
        <p gaya-fade="5" className="mb-4 leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptas eius vitae, maxime
          consequatur adipisci esse quibusdam dolorem asperiores iste qui nisi minus illo similique
          quis nostrum sapiente laborum earum reprehenderit soluta suscipit. Dicta dolor reiciendis
          ab dolores rem! Error beatae cupiditate molestias iure delectus ipsam. Consequuntur, sequi
          praesentium! Culpa eius quas sapiente eum similique.
        </p>
      </article>
    </div>
  );
}
