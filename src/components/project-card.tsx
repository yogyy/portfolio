import { cn } from '@/lib/utils';
import clsx from 'clsx';
import { Project } from 'contentlayer/generated';
import Image from 'next/image';
import * as React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import { Icon } from './custom-icons';
import UnstyledLink from './links/unstyledlink';

type ProjectCardProps = {
  project: Project;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className, ...rest }: ProjectCardProps) {
  return (
    <li
      className={cn(
        'project-card rounded-md md:w-full transition-all duration-200',
        'border-2 w-full after:w-fit backdrop-blur-[3px]',
        'animate-shadow text-zinc-600 dark:text-zinc-300',
        'border-zinc-100 hover:border-zinc-200 dark:border-zinc-800 dark:hover:border-zinc-700',
        'dark:focus-within:border-dark-accent focus-within:border-dark-accent',
        'hover:text-dark-accent dark:hover:text-dark-accent focus-within:text-dark-accent dark:focus-within:text-dark-accent',
        className
      )}
      {...rest}
    >
      <UnstyledLink
        href={`${project.slug}`}
        className={cn(
          'flex flex-col items-start h-full p-4 rounded-md focus:outline-none',
          'projectcard'
        )}
      >
        <h1 className="text-xl">{project.title}</h1>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
        <div className="flex gap-2 mt-2">
          {project.techs!.split(', ').map((tech: string, index) => (
            <Icon key={index} icon={tech} />
          ))}
        </div>
        <Image
          className="w-full mt-3 pointer-events-none bg-light-bg/30 dark:bg-dark-bg/30"
          src={
            project.banner
              ? project.banner
              : 'https://res.cloudinary.com/dpegakmzh/image/upload/v1678628147/demo_project.png'
          }
          alt={project.title}
          width={502}
          height={255}
        />
        <p className="flex items-center gap-1 mt-2 font-medium animated-underline text-zinc-700 dark:text-dark-primary">
          See more
          <HiArrowRight className="group-hover:text-dark-accent transition-colors delay-150" />
        </p>
      </UnstyledLink>
    </li>
  );
}
