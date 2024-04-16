import { LuGithub, LuGlobe } from 'react-icons/lu';
import { cn } from '@/lib/utils';
import UnstyledLink from './links/unstyledlink';

interface ProjectCardSimpleType {
  title: string;
  description: string;
  github?: string | undefined;
  url?: string;
  type: string[];
}

interface ProjectCardProps extends React.LiHTMLAttributes<HTMLLIElement> {
  project: ProjectCardSimpleType;
}
const ProjectCardSimple = ({ project, className, ...props }: ProjectCardProps) => {
  const { title, description, github, url, type } = project;

  return (
    <li
      className={cn(
        'group relative flex h-fit select-none break-inside-avoid-column flex-col gap-3 rounded-md border p-3.5 md:gap-6',
        'w-full bg-card transition-[border-color] duration-300 ease-linear focus-within:border-accent/50 hover:border-accent/50',
        className,
      )}
      {...props}
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-text/70 transition-colors duration-300 group-focus-within:text-accent group-hover:text-accent/80">
          {title}
        </h3>
        <div className="flex gap-2 text-lg">
          {!!github && (
            <UnstyledLink
              className="group/link rounded-full bg-background outline-none hover:bg-primary/5 focus:bg-primary/5"
              target="_blank"
              href={github}
            >
              <LuGithub
                className={cn(
                  'h-7 w-7 p-1 text-text/70 group-hover/link:text-primary group-focus/link:text-primary',
                )}
              />
            </UnstyledLink>
          )}
          {url && (
            <UnstyledLink
              className="group/link rounded-full bg-background outline-none hover:bg-primary/5 focus:bg-primary/5"
              target="_blank"
              href={url}
            >
              <LuGlobe
                className={cn(
                  'h-7 w-7 p-1 text-text/70 group-hover/link:text-primary group-focus/link:text-primary',
                )}
              />
            </UnstyledLink>
          )}
        </div>
      </div>
      <p className="text-[14px] text-text/80">{description}</p>
      <ul className="mt-1 flex flex-wrap gap-1.5">
        {type.map(ty => (
          <li
            className="select-none rounded-2xl bg-secondary/30 px-1.5 py-0.5 text-xs text-text/50"
            key={ty}
          >
            <code>{ty}</code>
          </li>
        ))}
      </ul>
    </li>
  );
};

export { ProjectCardSimple,type ProjectCardSimpleType };
