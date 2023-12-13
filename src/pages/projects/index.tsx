import { Accent } from '@/components/accent';
import { cn } from '@/lib/utils';
import IsLoaded from '@/components/isLoaded';
import NextSEO from '@/components/layouts/next-seo';
import ProjectCard from '@/components/project-card';
import { ProjectCardSimple, type ProjectCardSimpleType } from '@/components/project-card-simple';

import { allProjects } from 'contentlayer/generated';

const Projects = () => {
  return (
    <NextSEO
      className="layout"
      title="Project Showcase · Yogyy"
      desc="Showcase of my works on frontend development."
    >
      <IsLoaded>
        <div className={cn('py-20')}>
          <article gaya-fade="1">
            <h1>
              <Accent>Project i&apos;ve been working on so far</Accent>
            </h1>
            <h2 className="mt-2 text-base font-medium">
              Showcase of my works on frontend development.
            </h2>
            <ul gaya-fade="2" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
            <h3 className="mt-6 text-primary">More Project</h3>
            <ul gaya-fade="3" className="mt-6 space-y-4 sm:columns-2 lg:columns-3">
              {smallProjects.map(procj => (
                <ProjectCardSimple key={procj.title} project={procj} />
              ))}
            </ul>
          </article>
        </div>
      </IsLoaded>
    </NextSEO>
  );
};

export default Projects;

const smallProjects: ProjectCardSimpleType[] = [
  {
    title: 'yogyy',
    description: 'The website you are currently on',
    url: 'https://yogyy.vercel.app',
    type: ['React', 'Typescript', 'Next JS', 'Tailwind CSS', 'Radix UI'],
  },
  {
    title: 'Gallery',
    description: 'Searching Images using Unsplash API',
    github: 'https://github.com/yogyy/Gallery',
    url: 'https://gallery-yy.vercel.app',
    type: ['React', 'Typescript', 'Next JS', 'Tailwind CSS'],
  },
  {
    title: 'Indonesia Geography',
    description: 'Showing Indonesia Geography and Searching Regency,Discrict, also Village',
    github: 'https://github.com/yogyy/Indonesia-Geography',
    url: 'https://nusantara-chi.vercel.app',
    type: ['React', 'Typescript', 'Next JS', 'Tailwind CSS'],
  },
  {
    title: 'The Malaka',
    description: 'The Malaka is a landing page for a book product.',
    github: 'https://github.com/yogyy/the-malaka',
    url: 'https://yogyy.github.io/the-malaka',
    type: ['React', 'Typescript', 'Tailwind CSS', 'Slicing'],
  },
  {
    title: 'Gh/Searcher',
    description: "searching user & user's repo",
    github: 'https://github.com/yogyy/ghsearcher',
    url: 'https://yogyy.github.io/ghsearcher',
    type: ['React', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
  },
  {
    title: 'ToDo App',
    description: 'Drag Drop To Do',
    github: 'https://github.com/yogyy/react-todo-drag-and-drop',
    url: 'https://yogyy.github.io/react-todo-drag-and-drop/',
    type: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'Spotify Activity',
    description: 'Spotify Activity Card like in the footer',
    url: '/spotify',
    type: ['SWR'],
  },
];
