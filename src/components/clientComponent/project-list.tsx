import * as React from 'react';
import { Accent } from '../accent';
import ProjectCard from '../project-card';

export default function Project() {
  return (
    <article className="layout">
      <h1>
        <Accent>Features Project</Accent>
      </h1>
      <p gaya-fade="1" className="mt-2 text-gray-600 dark:text-gray-300">
        Showcase of my works on frontend development.
      </p>
      <ul gaya-fade="2" className="grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </article>
  );
}

export const projects = [
  {
    slug: '/projects/notflox',
    title: 'NOTFLOX',
    description: 'Movie App',
    banner: '/public/images/project/notflox_preview.webp',

    url: 'https://yogyy-notflox.netlify.app',
    techs: ['NextJS', 'Tailwind', 'HeadlessUI', 'MUI', 'MongoDB', 'ReactQuery'],
    github: 'https://github.com/yogyy/Netflix-Movie-App',
    category: 'Personal Project',
  },
  {
    slug: '/projects/burungbiru',
    title: 'BurungBiru',
    description: 'a Small social media',
    banner: '/public/images/project/burungbiru.vercel.app.webp',
    url: 'https://burungbiru.vercel.app',
    techs: ['NextJS', 'Tailwind', 'ReactQuery', 'Trpc', 'Upstash'],
    github: 'https://github.com/yogyy/burungbiru',
    category: 'Personal Project',
  },
  {
    slug: '#project-3',
    title: 'Project 3',
    description: 'This is the third project',
    banner: '',
    url: 'https://example.com/project-3',
    techs: ['ReactJS', 'Tailwind'],
  },
];
