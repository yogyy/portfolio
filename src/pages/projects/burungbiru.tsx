import { projects } from '@/components/clientComponent/project-list';
import { Icon } from '@/components/custom-icons';
import CustomLink from '@/components/links/custom-link';
import NextSEO from '@/components/Next-SEO';
import Tooltipz from '@/components/tooltip';
import { insertSpaces } from '@/lib/helper';
import Image from 'next/image';
import { HiLink, HiUser } from 'react-icons/hi';
import { SiGithub } from 'react-icons/si';

const BurungBiru = () => {
  const project = projects[1];
  return (
    <NextSEO title="BurungBiru | yogyy" desc="burbir, a clone twitter, Project Portofolio">
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
                    &emsp;This project is a small-scale social media platform that aims to resemble
                    Twitter in terms of functionality and design. It provides users with a platform
                    to express their thoughts, share updates, and engage in conversations with other
                    users. The main goal is to create a simplified version of Twitter with limited
                    features.
                  </p>
                  <p className="py-2">
                    &emsp;My project is a social media built using NextJs. Some of the features that
                    have been implemented include:
                  </p>
                  <ul className="list-disc">
                    <li>🔒 User Registration and Authentication.</li>
                    <li>✉️ Posting Tweets.</li>
                    <li>👤 User Profiles.</li>
                  </ul>
                  <p className="py-2">
                    However, there are still some features that I plan to add in the future:
                  </p>
                  <ul className="list-disc">
                    <li>👥 Follow Functionality</li>
                    <li>❤️ Like and Comment on Tweets.</li>
                  </ul>
                </div>
              </div>
              <div className="max-w-2xl mt-4">
                <h2 className="py-2 ml-4 dark:text-dark-primary">Project Goals</h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300 ">
                  &emsp;The project aims to replicate essential features of Twitter, including
                  posting tweets, following/unfollowing users, liking tweets, commenting on tweets,
                  and displaying personalized feeds. The platform should closely emulate the user
                  experience of Twitter, providing a familiar environment for users.
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

export default BurungBiru;
