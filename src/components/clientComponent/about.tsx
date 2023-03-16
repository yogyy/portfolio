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
        className={clsx('mb-10 layout flex flex-col justify-center', className)}
        {...rest}
      >
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
              className="float-left mr-6  w-40 md:w-72 flex rounded"
              src={
                'https://res.cloudinary.com/dpegakmzh/image/upload/c_crop,h_510,w_510/v1678814068/dummy_profile_ule6hu.webp'
              }
              alt="yogyy"
              width={520}
              height={520}
              draggable={false}
              loading="lazy"
            />
          </div>

          <article className="max-w-5xl mt-4  md:mt-6 prose dark:prose-invert">
            <p gaya-fade="5" className="mb-4 leading-6">
              Hello, my name is Yogi. yogyy was just a Nickname i made. I&apos;m
              interested in becoming a full-stack web developer. I believe that
              through constant practice, I will be able to achieve my dream
            </p>
            <p gaya-fade="6" className="mb-4 leading-6">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut
              voluptas eius vitae, maxime consequatur adipisci esse quibusdam
              dolorem asperiores iste qui nisi minus illo similique quis nostrum
              sapiente laborum earum reprehenderit soluta suscipit. Dicta dolor
              reiciendis ab dolores rem! Error beatae cupiditate molestias iure
              delectus ipsam. Consequuntur, sequi praesentium! Culpa eius quas
              sapiente eum similique.
            </p>
            <p gaya-fade="7" className="mb-4 leading-6">
              Ex distinctio dolorem, culpa sed explicabo ea deserunt magnam
              soluta doloribus ut numquam rem eaque officiis dolores earum nobis
              error autem. Facere, explicabo.
            </p>
          </article>
        </div>

        <div className="mt-20 ">
          <h3 gaya-fade="3">Technology & Tools</h3>
          <div gaya-fade="4" className="h-20 ">
            <MarqueeTech />
          </div>
          <div className="mt-5">
            <h4 gaya-fade="4">Still learning other technologies... </h4>
            <TechSection className="mt-5" />
          </div>
        </div>
      </IsLoaded>
    </>
  );
}
