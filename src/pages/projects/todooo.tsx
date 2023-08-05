import { projects } from '@/components/clientComponent/project-list';
import { Icon } from '@/components/custom-icons';
import CustomLink from '@/components/links/custom-link';
import NextSEO from '@/components/Next-SEO';
import Tooltipz from '@/components/tooltip';
import { insertSpaces } from '@/lib/helper';
import Image from 'next/image';
import { HiLink, HiUser } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

const Todoooo = () => {
  const project = projects[2];
  return (
    <NextSEO title="To DOoooooooooooo | yogyy" desc="a todo list app, Project Portofolio">
      <div className="h-full pt-16 layout">
        <div className="h-full">
          <Image
            src={project.banner!}
            alt={`Project ${project.description}`}
            width={1440}
            height={792}
          />
          <h1 className="mt-4 dark:text-dark-primary">
            {project.title}
            <span className="text-xs"> (in development)</span>
          </h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{project.description}</p>
          <div className="flex flex-wrap items-center justify-start gap-3 mt-2 text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <HiUser className="text-lg text-gray-800 dark:text-white" />
              <p className="flex items-center justify-start gap-2 mt-2 text-sm text-gray-600 dark:text-gray-300">
                {project.category}
              </p>
            </div>
            <span>-</span>
            <div className="inline-flex items-center gap-2">
              <SiGithub className="text-lg text-gray-800 dark:text-white" />
              <CustomLink href={project.github!} className="mt-1">
                Repository
              </CustomLink>
            </div>
            <span>-</span>
            <div className="inline-flex items-center gap-2">
              <HiLink className="text-lg text-gray-800 dark:text-white" />
              <CustomLink href={project.url} className="mt-1">
                Open Live Site
              </CustomLink>
            </div>
          </div>
          <hr className="mt-4 dark:border-gray-600" />
          <section className="relative flex justify-between">
            <div className="prose">
              <div className="mt-4">
                <h2 className="py-2 ml-4 dark:text-dark-primary">Short Explanation</h2>
                <div className="mt-2 text-gray-600 dark:text-gray-300">
                  <p>
                    &emsp;As part of my introduction to web development, I&apos;ve built a basic
                    To-Do List app. This app enables users to input, update, and track their tasks
                    online. Through this project, I&apos;ve gained hands-on experience in HTML, CSS,
                    and JavaScript, setting the stage for more complex projects in the future.
                  </p>
                </div>
              </div>
              <div className="max-w-2xl mt-4">
                <h2 className="py-2 ml-4 dark:text-dark-primary">Project Goals</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 ">
                  &emsp;The goal of creating a to-do list app is to help users organize their tasks
                  and increase their productivity. A to-do list app can provide several benefits
                  such as creating order in one&apos;s life, prioritizing tasks, breaking down big
                  projects into manageable tasks, and reducing wastage of time.
                </p>
              </div>
              <div className="max-w-2xl mt-4 text-gray-600 dark:text-gray-300">
                <div className="py-2 ml-4">
                  <h2 className="py-2 ml-4 dark:text-dark-primary">Tech Stack Used </h2>
                  <div className="flex gap-2 text-xl">
                    {project.techs.map((tech: string, index: React.Key | null | undefined) => (
                      <Tooltipz
                        content={
                          <p className="text-light-primary dark:text-dark-accent">
                            {insertSpaces(tech)}
                          </p>
                        }
                        key={index}
                        className="group"
                        trigger={
                          <Icon
                            className="dark:group-focus:text-dark-accent group-focus:text-light-text hover:text-light-text dark:hover:text-dark-accent"
                            icon={tech}
                          />
                        }
                      />
                    ))}
                  </div>
                </div>
                <div className="">
                  <p className="mt-2">
                    This project uses a range of technologies & libraries, including:
                  </p>
                  <ul className="list-disc ">
                    <li>
                      Next.js: Used as the main framework for building the project, providing
                      server-side rendering, easy routing, and optimized builds.
                    </li>
                    <li>
                      Tailwind CSS: Used as the main styling framework to rapidly build and style UI
                      components.
                    </li>
                    <li>Clerk: Used for Authentication.</li>
                    <li>
                      React Query: Used for data fetching and caching in a performant and
                      easy-to-use way.
                    </li>
                    <li>
                      TRPc: Used for write endpoints that can safely use in both the front and
                      backend of app.
                    </li>
                    <li>
                      Upstash: Used to prevent the frequency of an operation from exceeding a
                      defined limit and causing server errors.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <aside className="relative">
              <div className="fixed"></div>
            </aside>
          </section>
        </div>
      </div>
    </NextSEO>
  );
};

export default Todoooo;
