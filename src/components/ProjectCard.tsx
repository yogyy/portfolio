import { ProjectFrontmatter } from '@/../types/frontmatters';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';
import UnstyledLink from './links/unstyledlink';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({
  project,
  className,
  ...rest
}: ProjectCardProps) {
  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] focus-within:scale-[1.02] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow text-light-primary dark:text-dark-primary',
        'hover:text-light-text dark:hover:text-dark-accent focus-within:text-light-text dark:focus-within:text-dark-accent',
        className
      )}
      {...rest}
    >
      <UnstyledLink
        href={`${project.slug}`}
        className="flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-light-accent dark:focus-visible:ring-dark-accent projectcard"
      >
        <h1 className="text-xl">{project.title}</h1>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div>{project.techs}</div>

        <Image
          className="pointer-events-none mt-3 w-full bg-light-bg/30 dark:bg-dark-bg/30"
          src={
            project.banner
              ? project.banner
              : 'https://res.cloudinary.com/dpegakmzh/image/upload/v1678628147/demo_project.png'
          }
          alt={project.title}
          width={1440}
          height={792}
        />
        <p className="animated-underline mt-2 inline-block font-medium text-light-primary dark:text-dark-primary">
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}
