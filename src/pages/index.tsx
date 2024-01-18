import { cn } from '@/lib/utils';
import NextSEO from '@/components/layouts/next-seo';
import ProjectCard from '@/components/project-card';
import { allProjects } from 'contentlayer/generated';
import { InView } from 'react-intersection-observer';
import { HeroSection, SkillSection, TechSection } from '@/components/section';
import { m, useInView } from 'framer-motion';
import { Reveal } from '@/components/section/reveal';

export default function Home() {
  return (
    <NextSEO>
      <HeroSection />
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className="layout py-20">
            <SkillSection inView={inView} />
          </section>
        )}
      </InView>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <Reveal ref={ref} inView={inView}>
            <article>
              <div>
                <h1 className="mt-14 text-accent">Tech Stack</h1>
                <TechSection className="mt-6 text-text/75" />
              </div>
            </article>
          </Reveal>
        )}
      </InView>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <Reveal ref={ref} inView={inView}>
            <m.article
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: -40, opacity: 1 }}
              transition={{ ease: 'easeOut', duration: 0.3 }}
            >
              <h1 className="text-accent">Features Project</h1>
              <p className="mt-2">Showcase of my works on frontend development.</p>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {allProjects.map(project => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </ul>
            </m.article>
          </Reveal>
        )}
      </InView>
    </NextSEO>
  );
}
