import { cn } from '@/lib/utils';
import Link from 'next/link';
import { LuGithub, LuGlobe } from 'react-icons/lu';

type tPCS = {
  title: string;
  description: string;
  github?: string;
  url: string;
  type: string[];
};

const ProjectCardSimple = (props: tPCS) => {
  const { title, description, github, url, type } = props;
  return (
    <li
      className={cn(
        'group flex flex-col select-none break-inside-avoid-column rounded-md gap-3 md:gap-6 border-2 p-4 ',
        'border-zinc-100 hover:border-zinc-200 dark:border-zinc-800 dark:hover:border-zinc-700 w-full',
        'focus-within:border-dark-accent focus-within:dark:border-dark-accent backdrop-blur-[3px] transition-colors'
      )}
    >
      <div className="flex justify-between">
        <h3 className="text-xl font-bold text-zinc-700 group-hover:text-zinc-900 dark:text-zinc-300 dark:group-hover:text-zinc-100">
          {title}
        </h3>
        <div className="flex gap-2 text-lg">
          {!!github && (
            <Link className="outline-none group rounded-full" target="_blank" href={github}>
              <LuGithub
                className={cn(
                  'p-1 w-7 h-7 text-zinc-700 dark:text-zinc-300 dark:group-hover:text-zinc-100',
                  'group-hover:text-zinc-900 group-focus:text-dark-accent dark:group-hover:text-zinc-100'
                )}
              />
            </Link>
          )}
          {!!url && (
            <Link className="outline-none group" target="_blank" href={url}>
              <LuGlobe
                className={cn(
                  'p-1 w-7 h-7 text-zinc-700 dark:text-zinc-300 dark:group-hover:text-zinc-100',
                  'group-hover:text-zinc-900 group-focus:text-dark-accent dark:group-hover:text-zinc-100'
                )}
              />
            </Link>
          )}
        </div>
      </div>
      <p className="text-zinc-700 dark:text-zinc-300">{description}</p>
      <ul className="flex flex-wrap gap-3 mt-1">
        {type.map(ty => (
          <li
            className="px-1.5 py-0.5 text-xs transition-colors rounded-full select-none bg-light-secondary text-zinc-500 dark:bg-dark-secondary dark:text-zinc-400"
            key={ty}
          >
            <code>{ty}</code>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default ProjectCardSimple;
