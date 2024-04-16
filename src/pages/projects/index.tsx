import { allProjects } from 'contentlayer/generated';
import { m } from 'framer-motion';
import { RootLayout } from '@/components/layouts';
import { DocsPageHeader } from '@/components/mdx/page-header';
import { ProjectCard } from '@/components/project-card';
import { ProjectCardSimple } from '@/components/project-card-simple';
import { easeInoutQuad } from '@/constants/framer-easing';
import { smallProjects } from '@/constants/simple-project';

const Projects = () => {
  return (
    <RootLayout
      title="Projects Showcase · Yogyy"
      desc="Showcase of my works on frontend development."
    >
      <m.section className="layout">
        <article className="py-20">
          <DocsPageHeader
            heading="Showcase of my works on frontend development."
            text="Explore my projects and get to know more about my work and skills."
          />
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map(project => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </ul>
          <div>
            <h3 className="mt-6 text-primary">More Project</h3>
            <m.ul
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: easeInoutQuad, duration: 0.7 }}
              className="mt-6 space-y-4 sm:columns-2 lg:columns-3"
            >
              {smallProjects.map(procj => (
                <ProjectCardSimple key={procj.title} project={procj} />
              ))}
            </m.ul>
          </div>
        </article>
      </m.section>
    </RootLayout>
  );
};

export default Projects;
