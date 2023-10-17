import { cn } from '@/lib/utils';
import { Project } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { Icon } from './custom-icons';

type ProjectCardProps = {
  project: Project;
} & React.LiHTMLAttributes<HTMLLIElement>;

export default function ProjectCard({ project, className, ...props }: ProjectCardProps) {
  return (
    <li
      className={cn(
        'rounded-md transition-colors duration-200 project-card',
        'border-2 w-full backdrop-blur-sm group',
        className
      )}
      {...props}
    >
      <Link
        href={project.slug}
        className="flex flex-col items-start w-full h-full p-4 rounded-md focus:outline-none projectcard"
      >
        <div className="flex flex-wrap w-full mb-1 sm:mb-0">
          <h1 className="mr-auto text-xl text-zinc-700 dark:text-zinc-300">{project.title}</h1>
          <div className="flex items-center gap-2">
            {project.techs!.split(', ').map((tech: string, index) => (
              <Icon key={index} icon={tech} />
            ))}
          </div>
        </div>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
        <figure className="relative hidden w-full h-auto mt-3 pointer-events-none bg-light-bg/30 dark:bg-dark-bg/30 sm:block aspect-video">
          <Image
            src={project.banner!}
            alt={project.title}
            fill
            className="absolute w-full rounded-md"
          />
        </figure>
        <p className="flex items-center gap-1 mt-2 font-medium animated-underline text-zinc-700 dark:text-dark-primary place-self-end">
          See more
          <HiArrowRight className="transition-colors group-hover:text-dark-accent" />
        </p>
      </Link>
    </li>
  );
}
