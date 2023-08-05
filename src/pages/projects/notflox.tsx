import Image from 'next/image';
import React from 'react';
import { projects } from '@/components/clientComponent/project-list';
import CustomLink from '@/components/links/custom-link';
import { HiLink, HiUser } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';
import { Icon } from '@/components/custom-icons';
import Tooltipz from '@/components/tooltip';
import { insertSpaces } from '@/lib/helper';
import NextSEO from '@/components/Next-SEO';

const Notflox = () => {
  const project = projects[0];
  return (
    <NextSEO
      title="NOTFLOX - yogyy"
      desc="Notflox a Movie App, Project Portofolio, show multiple movie and series"
    >
      <div className="h-full pt-16 layout">
        <div className="h-full">
          <Image
            src={project.banner!}
            alt={`Project ${project.description}`}
            width={1445}
            height={792}
          />
          <h1 className="mt-4 dark:text-dark-primary">{project.title}</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
          <div className="flex flex-wrap items-center justify-start gap-3 mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <HiUser className="text-lg text-gray-800 dark:text-white" />
              <p className="flex items-center justify-start gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
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
          <section className="relative flex justify-between">
            <div className="prose">
              <div className="mt-4">
                <h2 className="py-2 ml-4 dark:text-dark-primary">Short Explanation</h2>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                  <p>
                    &emsp;My project is a movie list app built with NextJS. It consumes the TMDB API
                    to display movies and TV shows. It features a homepage with trending TV shows
                    based on Netflix, search functionality, and movie/TV show detail pages. It also
                    includes a custom video player built with React Player to show Tv Show
                    Trailer(homepage). React Query and Axios are used to manage and fetch the API
                    data efficiently.
                  </p>
                  <p className="py-2">
                    &emsp;My project is a movie and TV show list app built using NextJs. Some of the
                    features that have been implemented include:
                  </p>
                  <ul className="list-disc">
                    <li>🔍 Browse and search for movies and TV shows using the TMDB API.</li>
                    <li>🎬 Movie/TV show posters and trailers displayed on the page.</li>
                    <li>📝 Movie/TV show details, such as synopsis, release date, and rating.</li>
                    <li>
                      🌐 Integration with the TMDB API to fetch data about movies and TV shows.
                    </li>
                  </ul>
                  <p className="py-2">
                    However, there are still some features that I plan to add in the future:
                  </p>
                  <ul className="list-disc">
                    <li>📝 User account system for saving favorites and creating watchlists</li>
                    <li>🌙 Dark mode / Light mode theme for comfortable viewing at night.</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-2xl mt-4">
                <h2 className="py-2 ml-4 dark:text-dark-primary">Project Goals</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 ">
                  &emsp;The goal of my project is to provide a user-friendly and visually appealing
                  movie streaming app that allows users to browse and search for movies and TV
                  shows, and watch trailers with a custom video player. The app should be fast and
                  efficient in fetching and managing data from the TMDB API, and it should be
                  responsive and work well on different screen sizes and devices. Additionally, the
                  project aims to provide a good learning experience in using React, React Query,
                  Axios, and other related technologies and libraries.
                </p>
              </div>
              <div className="max-w-2xl mt-4 text-gray-600 dark:text-gray-300">
                <div className="py-2 ml-4">
                  <h2 className="py-2 ml-4 dark:text-dark-primary">Tech Stack Used </h2>
                  <div className="flex gap-2 text-xl">
                    {project.techs.map((tech: string, index: React.Key | null | undefined) => (
                      <Tooltipz
                        content={<p className="text-dark-accent">{insertSpaces(tech)}</p>}
                        key={index}
                        className="group"
                        trigger={
                          <Icon
                            className="group-focus:text-dark-accent hover:text-dark-accent"
                            icon={tech}
                          />
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="mt-2">
                    The Notflox project uses a range of technologies & libraries, including:
                  </p>
                  <ul className="list-disc ">
                    <li>
                      Next.js: Used as the main framework for building the project, providing
                      server-side rendering, easy routing, and optimized builds.
                    </li>
                    <li>
                      Tailwind CSS: Used as the main styling framework to rapidly build and style UI
                      components.
                    </li>
                    <li>Headless UI: Used for accessible and reusable UI components.</li>
                    <li>Material UI: Used for additional UI components.</li>
                    <li>
                      React Query: Used for data fetching and caching in a performant and
                      easy-to-use way.
                    </li>
                    <li>MongoDB: Used as the primary database for storing data and information.</li>
                  </ul>
                </div>
              </div>
            </div>
            <aside className="relative">
              <div className="fixed"></div>
            </aside>
          </section>
        </div>
      </div>
    </NextSEO>
  );
};

export default Notflox;
