import { Accent } from '@/components/accent';
import IsLoaded from '@/components/isLoaded';
import ProjectCardSimple from '@/components/layouts/ProjectCardSimple';
import NextSEO from '@/components/Next-SEO';
import ProjectCard from '@/components/project-card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import clsx from 'clsx';
import { allProjects } from 'contentlayer/generated';
import React from 'react';

const smallProjects = [
  {
    title: 'yogyy',
    description: 'The website you are currently on',
    url: 'https://yogyy.vercel.app',
    type: ['React', 'Typescript', 'NextJS', 'TailwindCSS', 'RadixUI'],
  },
  {
    title: 'Gallery',
    description: 'Searching Images using Unsplash API',
    github: 'https://github.com/yogyy/Gallery',
    url: 'https://gallery-yy.vercel.app',
    type: ['React', 'Typescript', 'NextJS', 'TailwindCSS'],
  },
  {
    title: 'Indonesia Geography',
    description: 'Showing Indonesia Geography and Searching Regency,Discrict, also Village',
    github: 'https://github.com/yogyy/Indonesia-Geography',
    url: 'https://nusantara-chi.vercel.app',
    type: ['React', 'Typescript', 'NextJS', 'TailwindCSS'],
  },
  {
    title: 'The Malaka',
    description: 'The Malaka is a landing page for a book product.',
    github: 'https://github.com/yogyy/Indonesia-Geography',
    url: 'https://yogyy.github.io/the-malaka',
    type: ['React', 'Typescript', 'TailwindCSS', 'Slicing'],
  },
];

const Projects = () => {
  return (
    <NextSEO
      className="layout"
      title="Project Showcase - yogyy"
      desc="Showcase of my works on frontend development."
    >
      <div className="h-full min-h-screen layout pt-14">
        <IsLoaded>
          <section className={clsx('py-20 h-full')}>
            <article gaya-fade="0">
              <h1 gaya-fade="2">
                <Accent>Project i&apos;ve been working on so far</Accent>
              </h1>
              <p gaya-fade="3" className="mt-2 text-gray-600 dark:text-gray-300">
                Showcase of my works on frontend development.
              </p>
              <ul gaya-fade="4" className="grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3">
                {allProjects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </article>
            <Accordion type="multiple" className="mt-4">
              <AccordionItem value="item-1">
                <AccordionTrigger className="px-2 hover:no-underline outline-none focus-visible:outline-dark-accent rounded-md">
                  More project
                </AccordionTrigger>
                <AccordionContent>
                  <ul className="grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3">
                    {smallProjects.map(procj => (
                      <ProjectCardSimple
                        key={procj.title}
                        description={procj.description}
                        github={procj.github}
                        title={procj.title}
                        url={procj.url}
                        type={procj.type}
                      />
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>
        </IsLoaded>
      </div>
    </NextSEO>
  );
};

export default Projects;
