import { cn } from '@/lib/utils';
import { Project } from 'contentlayer/generated';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRight } from 'react-icons/hi';
import { Icon } from './custom-icons';

type ProjectCardProps = {
  project: Project;
} & React.ComponentPropsWithoutRef<'li'>;

export default function ProjectCard({ project, className, ...rest }: ProjectCardProps) {
  return (
    <li
      className={cn(
        'rounded-md transition-colors duration-200 project-card',
        'border-2 w-full after:w-fit backdrop-blur-sm'
      )}
      {...rest}
    >
      <Link
        href={project.slug}
        className="flex flex-col items-start h-full p-4 rounded-md focus:outline-none w-full projectcard"
      >
        <h1 className="text-xl">{project.title}</h1>
        <p className="mb-auto text-sm text-gray-700 dark:text-gray-300">{project.description}</p>
        <div className="flex gap-2 mt-2">
          {project.techs!.split(', ').map((tech: string, index) => (
            <Icon key={index} icon={tech} />
          ))}
        </div>
        <figure className="w-full mt-3 pointer-events-none bg-light-bg/30 dark:bg-dark-bg/30 h-auto">
          <Image
            src={project.banner!}
            alt={project.title}
            width={400}
            height={225}
            className="rounded-md w-full"
          />
        </figure>
        <p className="flex items-center gap-1 mt-2 font-medium animated-underline text-zinc-700 dark:text-dark-primary place-self-end">
          See more
          <HiArrowRight className="group-hover:text-dark-accent transition-colors delay-150" />
        </p>
      </Link>
    </li>
  );
}
