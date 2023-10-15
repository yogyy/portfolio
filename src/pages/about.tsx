import * as React from 'react';
import IsLoaded from '@/components/isLoaded';
import { Accent } from '@/components/accent';
import Image from 'next/image';
import NextSEO from '@/components/Next-SEO';
import TechMdx from '@/components/tech-icons';

export default function AboutPage() {
  return (
    <NextSEO title="About · Yogyy">
      <IsLoaded className="items-center min-h-[calc(100vh_-_249px)] flex flex-col h-auto">
        <div className="max-w-3xl mx-5">
          <div id="about" className="min-h-[50dvh] h-full my-10">
            <h2 gaya-fade="1" className="mb-6 text-2xl md:text-4xl 2xl:text-3xl">
              <Accent>About Me</Accent>
            </h2>
            <div gaya-fade="2" className="mt-4">
              <Image
                className="flex float-left w-20 mb-3 mr-6 rounded-full bg-dark-bg md:w-28"
                src="https://res.cloudinary.com/dpegakmzh/image/upload/c_scale,w_256/v1685623759/me_vwkosx.webp"
                alt="gwe"
                width={520}
                height={520}
              />
            </div>
            <article className="max-w-4xl mt-4 md:mt-6">
              <p gaya-fade="3" className="mb-4">
                Hello, my name is YoGi. &apos;yogyy&apos; is just a nickname I created. I&apos;m
                interested in becoming a full-stack web developer. As a naturally curious person, I
                am always seeking ways to improve and achieve{' '}
                <span className="font-semibold text-red-500 line-through">perfection</span>
                &nbsp; better code in my work.They say practice makes perfect, but then again, they
                also say that nobody&apos;s perfect, so I guess that means I don&apos;t have to
                practice...
              </p>
              <p gaya-fade="4" className="mb-4">
                There are a lot of things and technologies to learn in frontend development and I am
                motivated to learn as much as possible. I enjoy learning something new and getting
                feedback to make myself better and improve.
              </p>
              <p gaya-fade="5">
                In this website I will be writing some blogs and showcase my projects. I believe
                that writing what I have learned is the best way to remember things, and I can share
                my knowledge along the way. So do contact me and I will be very happy to help!
              </p>
            </article>
          </div>
          <div className="min-h-[30dvh] place-content-center flex flex-col">
            <h1 className="my-4 text-2xl">
              <Accent>Fav Tech Stack</Accent>
            </h1>
            <TechMdx
              techs={['react', 'nextjs', 'tailwindcss', 'reactquery']}
              iconClassName="text-3xl"
              className="flex-wrap"
            />
          </div>
        </div>
      </IsLoaded>
    </NextSEO>
  );
}
