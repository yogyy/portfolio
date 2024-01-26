import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Icon } from './custom-icons';
import { HiArrowRight } from 'react-icons/hi';
import { Project } from 'contentlayer/generated';

interface ProjectCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
  project: Project;
}

const ProjectCard = ({ project, className, ...props }: ProjectCardProps) => {
  return (
    <li
      className={cn(
        'project-card group w-full overflow-hidden rounded-md border',
        'bg-card transition-[border] duration-200 ease-in focus-within:border-accent/50 hover:border-accent/50',
        className,
      )}
      {...props}
    >
      <Link
        href={project.slug}
        className="projectcard flex h-full w-full flex-col items-start rounded-md p-4 focus:outline-none"
      >
        <div className="mb-1 flex w-full flex-wrap sm:mb-0">
          <h1 className="mr-auto text-xl text-text/80 transition-colors duration-300 group-focus-within:text-accent group-hover:text-accent">
            {project.title}
          </h1>
          <div className="flex items-center gap-2 text-text">
            {project.techs!.split(', ').map((tech: string, index) => (
              <Icon key={index} icon={tech} />
            ))}
          </div>
        </div>
        <p className="mb-auto text-sm text-text/50">{project.description}</p>
        <figure className="pointer-events-none relative mt-3 hidden aspect-video h-auto w-full items-center bg-background/30 sm:flex">
          <Image
            src={project.banner!}
            alt={project.title}
            width={720}
            height={480}
            className="absolute w-full rounded-md brightness-75 transition-opacity duration-500 ease-in-out group-focus-within:brightness-100 group-hover:brightness-100"
          />
        </figure>
        <p className="animated-underline mt-2 flex items-center gap-1 place-self-end font-medium text-text">
          See more
          <HiArrowRight className="transition-colors group-focus-within:text-accent group-hover:text-accent" />
        </p>
      </Link>
    </li>
  );
};

export default ProjectCard;
