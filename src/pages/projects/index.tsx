import { Accent } from '@/components/accent';
import NextSEO from '@/components/layouts/next-seo';
import ProjectCard from '@/components/project-card';
import { ProjectCardSimple, type ProjectCardSimpleType } from '@/components/project-card-simple';
import { easeOutBack } from '@/constants/framer-easing';
import { allProjects } from 'contentlayer/generated';
import { m } from 'framer-motion';

const Projects = () => {
  return (
    <NextSEO title="Projects Showcase · Yogyy" desc="Showcase of my works on frontend development.">
      <m.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easings: easeOutBack, duration: 0.4 }}
        className="layout"
      >
        <article className="py-20">
          <m.div>
            <m.h1
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, easings: easeOutBack, delay: 0.2 }}
            >
              <Accent>Showcase of my works on frontend development.</Accent>
            </m.h1>
            <m.h2
              className="mt-2 text-base font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, easings: easeOutBack }}
            >
              Explore my projects and get to know more about my work and skills.
            </m.h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {allProjects.map(project => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </ul>
          </m.div>
          <m.div>
            <m.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, easings: easeOutBack, delay: 0.4 }}
              className="mt-6 text-primary"
            >
              More Project
            </m.h3>
            <m.ul
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ easings: easeOutBack, duration: 0.8, delay: 0.8 }}
              className="mt-6 space-y-4 sm:columns-2 lg:columns-3"
            >
              {smallProjects.map(procj => (
                <ProjectCardSimple key={procj.title} project={procj} />
              ))}
            </m.ul>
          </m.div>
        </article>
      </m.section>
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
    description: 'landing page for a book product.',
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
    title: 'DressLy',
    description: 'landing page for fashion shop',
    github: 'https://github.com/yogyy/DressLy',
    url: 'https://yogyy.github.io/DressLy/',
    type: ['Vue', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'ToDo App',
    description: 'Drag Drop To Do',
    github: 'https://github.com/yogyy/react-todo-drag-and-drop',
    url: 'https://yogyy.github.io/react-todo-drag-and-drop/',
    type: ['React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    title: 'NestJS CRUD',
    description: 'simple crud using nestjs',
    github: 'https://github.com/yogyy/nest-crud',
    type: ['Nest JS', 'TypeScript'],
  },
  {
    title: 'Spotify Activity',
    description: 'Spotify Activity Card like in the footer',
    url: '/spotify',
    type: ['SWR'],
  },
];
