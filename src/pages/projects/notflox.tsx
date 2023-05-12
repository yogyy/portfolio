import RootLayout from '@/components/layouts/layout';
import Image from 'next/image';
import React from 'react';
import { projects } from '@/components/clientComponent/project';
import CustomLink from '@/components/links/customlink';
import { HiLink, HiUser } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

const Notflox = () => {
  const project = projects[0];
  return (
    <RootLayout
      pageTitle="yogyy"
      content="Muhammad Yogi Firman Syah Webstie Portofolio"
    >
      <div className="layout h-full pt-16">
        <div className="h-full">
          <Image
            src={project.banner!}
            alt="Project 1 Movie App"
            width={1440}
            height={792}
          />
          <h1 className="mt-4">{project.title}</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-start gap-3 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex gap-2 items-center">
              <HiUser className="text-lg text-gray-800 dark:text-white" />
              <p className="mt-2 flex items-center justify-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                {project.category}
              </p>
            </div>
            <span>-</span>
            <div className="inline-flex items-center gap-2">
              <SiGithub className="text-lg text-gray-800 dark:text-white" />
              <CustomLink href={project.github!} className="mt-1">
                Repository
              </CustomLink>
            </div>
            <span>-</span>
            <div className="inline-flex items-center gap-2">
              <HiLink className="text-lg text-gray-800 dark:text-white" />
              <CustomLink href={project.url} className="mt-1">
                Open Live Site
              </CustomLink>
            </div>
          </div>
          <hr className="mt-4 dark:border-gray-600" />
          <div className="mt-4">
            <h2>Short Explanation</h2>
            <div className="mt-2 text-gray-600 dark:text-gray-300">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
                enim explicabo minus iusto dolorum commodi exercitationem
                consectetur architecto temporibus? Harum, quia.
              </p>
              <p className="py-2">Feature : </p>
              <ul className="ml-5 list-disc">
                <li>🔍 Search</li>
                <li>⚡ Dynamic Page</li>
              </ul>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-3xl">Project Goals</h3>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
              voluptate quaerat sapiente deserunt ipsa modi sit facere,
              expedita, culpa praesentium voluptatibus eos distinctio libero
              minus voluptatum inventore neque vel obcaecati, dignissimos nemo!
            </p>
          </div>
          <div className="mt-4">
            <h4 className="text-3xl">Tech Stack Used</h4>
            <span className="text-2xl">{project.techs}</span>
          </div>
        </div>
      </div>
    </RootLayout>
  );
};

export default Notflox;
