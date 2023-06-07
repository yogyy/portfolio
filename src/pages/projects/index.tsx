import { Accent } from '@/components/accent';
import { projects } from '@/components/clientComponent/project-list';
import IsLoaded from '@/components/isLoaded';
import RootLayout from '@/components/layouts/layout';
import ProjectCard from '@/components/project-card';
import clsx from 'clsx';
import React from 'react';

const Projects = () => {
  return (
    <RootLayout pageTitle="Projects">
      <div className="layout min-h-screen h-full pt-14">
        <IsLoaded>
          <section className={clsx('py-20 h-full')}>
            <article className="layout" gaya-fade="0">
              <h1 gaya-fade="2">
                <Accent>Project i&apos;ve been working on so far</Accent>
              </h1>
              <p gaya-fade="3" className="mt-2 text-gray-600 dark:text-gray-300">
                Showcase of my works on frontend development.
              </p>
              <ul gaya-fade="4" className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {projects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </article>
          </section>
        </IsLoaded>
      </div>
    </RootLayout>
  );
};

export default Projects;
