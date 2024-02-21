import React from 'react';
import {
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiExpress,
  SiGit,
  SiRadixui,
  SiTrpc,
  SiMysql,
  SiPrisma,
} from 'react-icons/si';
import { TypescriptIcons } from '../icons/typescript';
import { m, useInView } from 'framer-motion';
import { easeOutBack } from '@/constants/framer-easing';

const ICON_TYPES = new Map(
  Object.entries({
    javascript: <SiJavascript />,
    typescript: <TypescriptIcons />,
    nodejs: <SiNodedotjs />,
    react: <SiReact />,
    nextjs: <SiNextdotjs />,
    tailwindcss: <SiTailwindcss />,
    express: <SiExpress />,
    git: <SiGit />,
    radixui: <SiRadixui />,
    trpc: <SiTrpc />,
    mysql: <SiMysql />,
    prisma: <SiPrisma />,
  }),
);

export function Icon({ type }: { type: string }) {
  return <>{ICON_TYPES.get(type.toLowerCase())}</>;
}

export const TechSection = (props: React.HTMLAttributes<HTMLDivElement>) => {
  const view = React.useRef(null);
  const inView = useInView(view, { margin: '-15% 0px', once: false });

  return (
    <div id="technologies" {...props}>
      <m.ul
        ref={view}
        initial="hidden"
        animate={inView && 'show'}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1 },
        }}
        className="grid cursor-default grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6"
      >
        {techSkills.map(item => (
          <m.li
            key={item}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1 },
            }}
            transition={{ easings: easeOutBack }}
            className="flex items-center rounded-md border bg-card p-2 hover:bg-primary/30"
          >
            <span className="text-2xl text-inherit">
              <Icon type={item.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '').toLowerCase()} />
            </span>
            <span className="pl-4">{item}</span>
          </m.li>
        ))}
      </m.ul>
    </div>
  );
};

export const techSkills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Express',
  'Prisma',
  'MySQL',
  'Git',
  'Tailwind CSS',
  'Radix UI',
  'tRPC',
];
