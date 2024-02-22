import { m } from 'framer-motion';
import { Accent } from '@/components/accent';
import { RootLayout } from '@/components/layouts';
import { ProjectCard } from '@/components/project-card';
import { easeOutBack } from '@/constants/framer-easing';
import { allProjects } from 'contentlayer/generated';
import { smallProjects } from '@/constants/simple-project';
import { ProjectCardSimple } from '@/components/project-card-simple';

const Projects = () => {
  return (
    <RootLayout
      title="Projects Showcase · Yogyy"
      desc="Showcase of my works on frontend development."
    >
      <m.section
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ easings: easeOutBack, duration: 0.4 }}
        className="layout"
      >
        <article className="py-20">
          <m.div>
            <m.h1>
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
    </RootLayout>
  );
};

export default Projects;
