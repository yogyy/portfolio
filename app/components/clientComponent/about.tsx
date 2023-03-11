'use client';

import * as React from 'react';
import clsx from 'clsx';
import Image from 'next/image';
import { Accent } from '../accent';
import { TechStack } from '../tech/techstack';
import useLoaded from '../useLoaded';

export default function About() {
  const isLoaded = useLoaded();

  const about = React.useRef(null);

  return (
    <>
      <section
        id="about"
        ref={about}
        className={clsx('', isLoaded && 'fade-in-start')}
      >
        <div className="layout min-h-main py-20">
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
                'https://res.cloudinary.com/dpegakmzh/image/upload/c_fit,h_756,w_756/a_0/v1678442557/profile.webp'
              }
              alt={'me'}
              priority
              width={756}
              height={756}
              draggable={false}
            />
          </div>
          <article className="max-w-5xl mt-4  md:mt-6 md:text-lg 2xl:text-xl ">
            <p gaya-fade="5" className="mb-4 leading-6">
              Hello, my name is yogi. i started programming in early high
              school, which is the start of the pandemic that is currently
              sweeping the world. Initially, I was just writing basic code and
              progressed to HTML and CSS.
            </p>
            <p gaya-fade="6" className="mb-4 leading-6">
              There are a lot of things and technologies to learn in frontend
              development and I am motivated to learn as much as possible. I
              enjoy learning something new and getting feedback to make myself
              better and improve.
            </p>
            <p gaya-fade="7" className="mb-4 leading-6">
              The website will showcase my projects and blogs. I &apos;ve tried
              to make the code easy to understand and will use pre-installed
              components that can be reused across platforms. My studio work
              will be displayed when it is finished on this website. Having
              spent a lot of time and effort on it, I will treat it as one of my
              own creations.
            </p>
          </article>
        </div>
      </section>
      <section className="layout">
        <h3>The tools I use while developing.</h3>
        <figure className="mt-2 mb-5 h-20">
          <TechStack />
        </figure>
      </section>
    </>
  );
}
