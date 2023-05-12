'use client';

import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Accent } from '../accent';
import IsLoaded from '../isLoaded';
import TechSection, { MarqueeTech } from '@/components/tech/techsection';

export default function About({ className, ...rest }: { className?: string }) {
  return (
    <>
      <IsLoaded
        className={clsx('mb-10 layout flex flex-col', className)}
        {...rest}
      >
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
      <h1
        className="font-bold mt-1 text-2xl md:text-4xl 2xl:text-2xl"
        gaya-fade="2"
      >
        me
      </h1>
      <div className="mt-4" gaya-fade="3">
        <Image
          className="float-left mr-6  w-40 md:w-52 flex rounded"
          src={
            'https://res.cloudinary.com/dpegakmzh/image/upload/v1678442557/profile.jpg'
          }
          alt="gwe"
          width={520}
          height={520}
          draggable={false}
        />
      </div>
      <article className="max-w-5xl mt-4  md:mt-6 prose dark:prose-invert">
        <p gaya-fade="5" className="mb-4 leading-6">
          Hello, my name is Yogi. &apos;yogyy&apos; is just a nickname I
          created. I&apos;m interested in becoming a full-stack web developer.
          As a naturally curious person, I am always seeking ways to improve and
          achieve perfection in my work.They say practice makes perfect, but
          then again, they also say that nobody&apos;s perfect, so I guess that
          means I don&apos;t have to practice~
        </p>
        <p gaya-fade="6" className="mb-4 leading-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut voluptas
          eius vitae, maxime consequatur adipisci esse quibusdam dolorem
          asperiores iste qui nisi minus illo similique quis nostrum sapiente
          laborum earum reprehenderit soluta suscipit. Dicta dolor reiciendis ab
          dolores rem! Error beatae cupiditate molestias iure delectus ipsam.
          Consequuntur, sequi praesentium! Culpa eius quas sapiente eum
          similique.
        </p>
      </article>
    </div>
  );
}
