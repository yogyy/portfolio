import { cn } from '@/lib/utils';
import { Accent } from '@/components/accent';
import ButtonLink from '@/components/links/buttonlink';
import UnstyledLink from '@/components/links/unstyledlink';
import IsLoaded from '@/components/isLoaded';
import { InView } from 'react-intersection-observer';
import ProjectCard from '@/components/project-card';

import { SiGithub, SiX } from 'react-icons/si';
import { IoNewspaperSharp } from 'react-icons/io5';
import { RiCodeSSlashFill, RiTerminalFill } from 'react-icons/ri';

import TechSection from '@/components/tech/techsection';
import Tooltipz from '@/components/tooltip';
import NextSEO from '@/components/Next-SEO';
import { allProjects } from 'contentlayer/generated';
import { useRouter } from 'next/router';

const externalUrl = [
  {
    href: 'https://drive.google.com/file/d/1j7mkmbd7mTr80xvBPgV0J1d7jMoztifq/view',
    icon: IoNewspaperSharp,
    name: 'Resume',
  },
  {
    href: 'https://github.com/yogyy',
    icon: SiGithub,
    name: 'Github',
  },
  {
    href: 'https://twitter.com/yogyxx',
    icon: SiX,
    name: 'Twitter',
  },
];

export default function Home() {
  const {} = useRouter();
  console.log();
  return (
    <NextSEO>
      <IsLoaded className="relative flex flex-col justify-center mb-20 min-h-main lg:min-h-[850px]">
        <article className={`mx-auto layout`}>
          <h1
            className="inline-flex items-center justify-center gap-2 pb-2 text-3xl md:text-4xl 2xl:text-5xl"
            gaya-fade="1"
          >
            <span>Hi, i&apos;m</span>
            <Accent className="pb-2">yogyy</Accent>
          </h1>
          <div className="mt-1">
            <h2 gaya-fade="3" className="flex flex-wrap">
              Frontend Web Developer
            </h2>
          </div>
          <p gaya-fade="4" className="max-w-4xl mt-4 md:mt-6 md:text-lg 2xl:text-xl">
            i&apos;m front-end developer based in Tangerang, Indonesia,
            <br /> with a focus on ReactJS and NextJS.
          </p>
          <div gaya-fade="5" className="mt-8 flex flex-wrap gap-4 md:!text-lg">
            <div className="relative group">
              <div
                className={cn(
                  'absolute -inset-0.5 animate-tilt rounded blur',
                  'bg-gradient-to-r from-light-primary to-light-secondary',
                  'dark:from-dark-primary dark:to-dark-secondary',
                  'opacity-50 transition duration-1000 group-hover:opacity-100 group-hover:duration-200'
                )}
              />
              <ButtonLink
                href="/posts"
                className="bg-light-primary text-light-bg dark:bg-dark-primary dark:text-dark-text dark:border-dark-primary"
              >
                Read The Post
              </ButtonLink>
            </div>
            <ButtonLink
              className="bg-light-secondary text-light-primary dark:bg-dark-secondary dark:text-dark-primary"
              href="/about"
            >
              More about me
            </ButtonLink>
          </div>
          <div gaya-fade="6">
            <ul className="flex flex-wrap items-center gap-4 mt-4 gap-y-2 md:mt-8">
              {externalUrl.map(url => (
                <li key={url.name}>
                  <UnstyledLink
                    className={cn(
                      'inline-flex items-center gap-1 text-sm font-medium md:text-base',
                      'text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-dark-primary dark:focus:text-dark-primary',
                      'focus:outline-none focus:rounded-md focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent',
                      'transition-colors group'
                    )}
                    href={url.href}
                  >
                    <url.icon />
                    <span className={cn(url.name === 'Twitter' && 'invisible')}>{url.name}</span>
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </IsLoaded>

      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className={cn('py-20 layout', inView && 'fade-in-start')}>
            <div className="mt-10">
              <h2 gaya-fade="1">
                <Accent>Skills</Accent>
              </h2>

              <article id="skill" className="mt-6">
                <div className="flex flex-col gap-12 md:flex-row">
                  <div
                    gaya-fade="2"
                    className="flex overflow-hidden flex-1 max-h-[260px] justify-between relative flex-col gap-4 border dark:border-gray-600 p-4 rounded-md h-max"
                  >
                    <div className="bg-blue-600"></div>
                    <div className="flex flex-row items-center gap-3">
                      <RiCodeSSlashFill size={24} className="text-dark-accent" />
                      <h3 className="text-xl">Web development</h3>
                    </div>
                    <p>
                      I have experience in web development with React and Next.js, and I am
                      proficient in HTML, CSS, JavaScript, and TypeScript
                    </p>
                  </div>
                  <div
                    gaya-fade="3"
                    className="flex flex-1 flex-col max-h-[260px] overflow-hidden gap-4 border dark:border-gray-600 p-4 rounded-md"
                  >
                    <div className="flex flex-row items-center gap-3 flex-nowrap">
                      <RiTerminalFill size={24} className="text-dark-accent" />
                      <h3 className="text-xl">Other technologies</h3>
                    </div>
                    <p>
                      Familiar with and frequent user of common software development tools, such as
                      git .
                    </p>
                    <p>
                      Know how to utilise assistive<span className="peer"></span>
                      <Tooltipz
                        content={
                          <p className="text-xs">
                            Yes, they are
                            <br /> Google, <br /> StackOverflow <br /> and ChatGPT!
                          </p>
                        }
                      >
                        technologies
                      </Tooltipz>
                      &nbsp;to enhance productivity.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </section>
        )}
      </InView>
      <InView triggerOnce rootMargin="-40% 0px">
        {({ ref, inView }) => (
          <section ref={ref} className={cn('py-20', inView && 'fade-in-start')}>
            <article gaya-fade="0" className="layout">
              <div>
                <h3 className="mt-14">
                  <Accent>Tech Stack</Accent>
                </h3>
                <TechSection gaya-fade="3" className="mt-6" />
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
                <h2>
                  <Accent>Features Project</Accent>
                </h2>
                <p className="mt-2">Showcase of my works on frontend development.</p>
                <ul
                  gaya-fade="2"
                  className="grid gap-4 mt-6 sm:grid-cols-2 lg:grid-cols-3 !delay-300"
                >
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
