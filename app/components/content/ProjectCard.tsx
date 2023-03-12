import { ProjectFrontmatter } from '@/types/frontmatters';
import clsx from 'clsx';
import Image from 'next/image';
import * as React from 'react';
import UnstyledLink from '../links/unstyledlink';
import { Logoreact, TailwindLogo } from '../tech/techstack';

type ProjectCardProps = {
  project: ProjectFrontmatter;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <li
      className={clsx(
        'project-card rounded-md md:w-full',
        'border dark:border-gray-600',
        'scale-100 hover:scale-[1.02] active:scale-[0.97] motion-safe:transform-gpu',
        'transition duration-100',
        'motion-reduce:hover:scale-100',
        'animate-shadow',
        className
      )}
    >
      <UnstyledLink
        href={`${project.slug}`}
        className="flex h-full flex-col items-start rounded-md p-4 focus:outline-none focus-visible:ring focus-visible:ring-primary-300"
      >
        <h4>{project.title}</h4>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">
          {project.description}
        </p>
        <div className="mt-2 flex gap-2 grayscale">
          <Logoreact width={24} />
          <TailwindLogo width={24} />
        </div>

        <Image
          className="pointer-events-none mt-3 w-full bg-white/30  dark:bg-dark/30"
          src={
            'https://res.cloudinary.com/dpegakmzh/image/upload/v1678628147/demo_project.png'
          }
          alt={project.title}
          width={1440}
          height={792}
        />
        <p className="animated-underline mt-2 inline-block font-medium">
          See more →
        </p>
      </UnstyledLink>
    </li>
  );
}
