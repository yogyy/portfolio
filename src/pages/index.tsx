import { cn } from '@/lib/utils';
import { InView } from 'react-intersection-observer';
import ProjectCard from '@/components/project-card';
import TechSection from '@/components/section/tech-section';
import NextSEO from '@/components/Next-SEO';
import { allProjects } from 'contentlayer/generated';
import SkillSection from '@/components/section/skills-section';
import HeroSection from '@/components/section/hero-section';

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
                <h3 gaya-fade="2" className="text-light-primary dark:text-dark-accent mt-14">
                  Tech Stack
                </h3>
                <TechSection className="mt-6" />
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
                <h1 gaya-fade="2" className="text-light-primary dark:text-dark-accent">
                  Features Project
                </h1>
                <p gaya-fade="2" className="mt-2">
                  Showcase of my works on frontend development.
                </p>
                <ul className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                  {allProjects.map(project => (
                    <ProjectCard gaya-fade="3" key={project.slug} project={project} />
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
