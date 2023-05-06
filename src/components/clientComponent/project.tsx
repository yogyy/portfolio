import * as React from 'react';
import { SiGraphql, SiNextdotjs, SiReact, SiTailwindcss } from 'react-icons/si';
import { Accent } from '../accent';
import ProjectCard from '../ProjectCard';

export default function Project() {
  return (
    <article className="layout">
      <h1>
        <Accent>Features Project</Accent>
      </h1>
      <p gaya-fade="1" className="mt-2 text-gray-600 dark:text-gray-300">
        Showcase of my works on frontend development.
      </p>
      <ul
        gaya-fade="2"
        className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
      >
        {projects.map(project => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </ul>
    </article>
  );
}

export const projects = [
  {
    slug: '/project/notflox',
    title: 'NOTFLOX',
    description: 'Movie App',
    banner:
      'https://res.cloudinary.com/dpegakmzh/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1683377050/Group-3copyhero_wlchnc.webp',
    url: 'https://example.com/project-1',
    techs: (
      <div className="mt-2 flex gap-2 grayscale">
        <SiNextdotjs /> <SiReact /> <SiTailwindcss />
      </div>
    ),
  },
  {
    slug: '#project-2',
    title: 'Project 2',
    description: 'This is the second project',
    imageUrl: '',
    url: 'https://example.com/project-2',
    techs: (
      <div className="mt-2 flex gap-2 grayscale">
        <SiReact /> <SiTailwindcss />
      </div>
    ),
  },
  {
    slug: '#project-3',
    title: 'Project 3',
    description: 'This is the third project',
    imageUrl: '',
    url: 'https://example.com/project-3',
    techs: (
      <div className="mt-2 flex gap-2 grayscale">
        <SiReact /> <SiTailwindcss />
      </div>
    ),
  },
];
