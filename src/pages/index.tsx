import { cn } from '@/lib/utils';
import NextSEO from '@/components/layouts/next-seo';
import ProjectCard from '@/components/project-card';
import { allProjects } from 'contentlayer/generated';
import { InView } from 'react-intersection-observer';
import { HeroSection, SkillSection, TechSection } from '@/components/section';

export default function Home() {
  return (
    <NextSEO>
      <HeroSection />
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => <SkillSection ref={ref} className={cn(inView && 'fade-in-start')} />}
      </InView>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className={cn('py-20', inView && 'fade-in-start')}>
            <article gaya-fade="0" className="layout">
              <div gaya-fade="1">
                <h1 gaya-fade="2" className="mt-14 text-accent">
                  Tech Stack
                </h1>
                <TechSection gaya-fade="3" className="mt-6 text-text/75" />
              </div>
            </article>
          </section>
        )}
      </InView>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className={cn('py-20', inView && 'fade-in-start')}>
            <article gaya-fade="0" className="layout">
              <div gaya-fade="1">
                <h1 gaya-fade="2" className="text-accent">
                  Features Project
                </h1>
                <p gaya-fade="2" className="mt-2">
                  Showcase of my works on frontend development.
                </p>
                <ul gaya-fade="3" className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {allProjects.map(project => (
                    <ProjectCard key={project.slug} project={project} />
                  ))}
                </ul>
              </div>
            </article>
          </section>
        )}
      </InView>
    </NextSEO>
  );
}
