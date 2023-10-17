import { Accent } from '@/components/accent';
import IsLoaded from '@/components/isLoaded';
import NextSEO from '@/components/Next-SEO';
import ProjectCard from '@/components/project-card';
import { cn } from '@/lib/utils';

import { allProjects } from 'contentlayer/generated';
import ProjectCardSimple from '@/components/project-card-simple';

type ProjectType = {
  title: string;
  description: string;
  url: string;
  type: string[];
  github?: string;
}[];

const smallProjects: ProjectType = [
  {
    title: 'yogyy',
    description: 'The website you are currently on',
    url: 'https://yogyy.vercel.app',
    type: ['React', 'Typescript', 'NextJS', 'TailwindCSS', 'Radix UI'],
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
  {
    title: 'Gh/Searcher',
    description: "searching user & user's repo",
    github: 'https://github.com/yogyy/ghsearcher',
    url: 'https://yogyy.github.io/ghsearcher',
    type: ['React', 'TypeScript', 'TailwindCSS', 'Radix UI'],
  },
  {
    title: 'Burbir',
    description: 'A twitter website clone',
    github: 'https://github.com/yogyy/burungbiru',
    url: 'https://burungbiru.vercel.app/',
    type: ['NextJS', 'TypeScript', 'TailwindCSS', 'tRPC', 'Upstash', 'React Query'],
  },
  {
    title: 'Spotify Activity',
    description: 'Spotify Activity Card like in the footer',
    url: '/spotify',
    type: ['SWR'],
  },
];

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
            <ul gaya-fade="2" className="grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3">
              {allProjects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
            <h3 className="mt-6">More Project</h3>
            <ul gaya-fade="3" className="grid gap-4 mt-6 sm:grid-cols-2 xl:grid-cols-3">
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
          </article>
        </div>
      </IsLoaded>
    </NextSEO>
  );
};

export default Projects;
