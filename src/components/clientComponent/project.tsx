import * as React from 'react';
import { Accent } from '../accent';
import ProjectCard from '../content/ProjectCard';

export default function Project() {
  return (
    <section className="layout">
      <h1>
        <Accent>Features Project</Accent>
      </h1>
      <p data-fade="1" className="mt-2 text-gray-600 dark:text-gray-300">
        Showcase of my works on frontend development.
      </p>
      <ul
        data-fade="2"
        className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </section>
  );
}

const projects = [
  {
    slug: '#project-1',
    title: 'Project 1',
    description: 'This is the first project',
    imageUrl: '',
    url: 'https://example.com/project-1',
  },
  {
    slug: '#project-2',
    title: 'Project 2',
    description: 'This is the second project',
    imageUrl: '',
    url: 'https://example.com/project-2',
  },
  {
    slug: '#project-3',
    title: 'Project 3',
    description: 'This is the third project',
    imageUrl: '',
    url: 'https://example.com/project-3',
  },
];
