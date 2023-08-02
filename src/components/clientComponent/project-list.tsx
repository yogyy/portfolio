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
    banner:
      'https://res.cloudinary.com/dpegakmzh/image/upload/v1686663246/notflox_preview_fc7g8r.webp',

    url: 'https://yogyy-notflox.netlify.app',
    techs: ['NextJS', 'Tailwind', 'HeadlessUI', 'MUI', 'MongoDB', 'ReactQuery'],
    github: 'https://github.com/yogyy/Netflix-Movie-App',
    category: 'Personal Project',
  },
  {
    slug: '/projects/burungbiru',
    title: 'BurBir',
    description: 'a Small social media',
    banner:
      'https://res.cloudinary.com/dpegakmzh/image/upload/v1686663245/burungbiru.vercel.app_yloknn.webp',
    url: 'https://burungbiru.vercel.app',
    techs: ['NextJS', 'Tailwind', 'ReactQuery', 'Trpc', 'Upstash'],
    github: 'https://github.com/yogyy/burungbiru',
    category: 'Personal Project',
  },
  {
    slug: '/projects/todooo',
    title: 'ToDo App',
    description: 'Drag Drop To Do',
    banner:
      'https://res.cloudinary.com/dpegakmzh/image/upload/v1690991581/Web_capture_2-8-2023_225229_yogyy.github.io_nqj8lk.jpg',
    url: 'https://yogyy.github.io/react-todo-localhost',
    github: 'https://github.com/yogyy/react-todo-localhost',
    techs: ['ReactJS', 'Tailwind'],
    category: 'Personal Project',
  },
];
