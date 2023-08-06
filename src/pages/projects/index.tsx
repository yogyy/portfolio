import { Accent } from '@/components/accent';
import { projects } from '@/components/clientComponent/project-list';
import IsLoaded from '@/components/isLoaded';
import NextSEO from '@/components/Next-SEO';
import ProjectCard from '@/components/project-card';
import clsx from 'clsx';
import React from 'react';

const Projects = () => {
  return (
    <NextSEO title="Project Showcase - yogyy" desc="Showcase of my works on frontend development.">
      <div className="h-full min-h-screen layout pt-14">
        <IsLoaded>
          <section className={clsx('py-20 h-full')}>
            <article className="layout" gaya-fade="0">
              <h1 gaya-fade="2">
                <Accent>Project i&apos;ve been working on so far</Accent>
              </h1>
              <p gaya-fade="3" className="mt-2 text-gray-600 dark:text-gray-300">
                Showcase of my works on frontend development.
              </p>
              <ul gaya-fade="4" className="grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </article>
          </section>
        </IsLoaded>
      </div>
    </NextSEO>
  );
};

export default Projects;
