import { Fragment } from 'react';
import {
  SiFastify,
  SiGit,
  SiGraphql,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTrpc,
} from 'react-icons/si';
import { DrizzleIcon, TypeScriptIcon } from '../icons/icons';

const techSkills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Next.js',
  'Tailwind CSS',
  'Node.js',
  'Fastify',
  'Drizzle ORM',
  'PostgreSQL',
  'Graphql',
  'tRPC',
  'Git',
];

const ICON_TYPES = new Map(
  Object.entries({
    javascript: <SiJavascript className="group-hover:text-[#F7DF1E]" />,
    typescript: <TypeScriptIcon className="group-hover:text-[#3178C6]" />,
    nodejs: <SiNodedotjs className="group-hover:text-[#339933]" />,
    react: <SiReact className="group-hover:text-[#61DAFB]" />,
    nextjs: <SiNextdotjs className="group-hover:text-[#000000]" />,
    tailwindcss: <SiTailwindcss className="group-hover:text-[#06B6D4]" />,
    fastify: <SiFastify className="group-hover:text-[#000000]" />,
    git: <SiGit className="group-hover:text-[#F05032]" />,
    trpc: <SiTrpc className="group-hover:text-[#2596BE]" />,
    postgresql: <SiPostgresql className="group-hover:text-[#4169E1]" />,
    drizzleorm: <DrizzleIcon className="group-hover:text-[#C5F74F]" />,
    graphql: <SiGraphql className="group-hover:text-[#E10098]" />,
  }),
);

interface IconProps {
  type: string;
}

export function Icon({ type }: IconProps) {
  const IconComponent = ICON_TYPES.get(type.toLowerCase());
  return <Fragment>{IconComponent}</Fragment>;
}

export const TechSection = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div id="technologies" {...props}>
      <ul className="grid cursor-default grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6">
        {techSkills.map(item => (
          <li
            key={item}
            className="group flex items-center rounded-md border bg-card p-2 transition-colors hover:bg-primary/30"
          >
            <span className="text-2xl text-inherit">
              <Icon type={item.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '')} />
            </span>
            <span className="pl-4">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};
