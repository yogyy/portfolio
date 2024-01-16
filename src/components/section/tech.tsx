import React from 'react';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiNodedotjs,
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiFigma,
  SiMongodb,
  SiMarkdown,
  SiExpress,
  SiVuedotjs,
  SiBootstrap,
  SiGit,
  SiRadixui,
  SiTrpc,
  SiMysql,
} from 'react-icons/si';
import { TypescriptIcons } from '../icons/typescript';

const ICON_TYPES = new Map(
  Object.entries({
    html5: <SiHtml5 />,
    css3: <SiCss3 />,
    javascript: <SiJavascript />,
    typescript: <TypescriptIcons />,
    nodejs: <SiNodedotjs />,
    react: <SiReact />,
    nextjs: <SiNextdotjs />,
    markdown: <SiMarkdown />,
    figma: <SiFigma />,
    tailwindcss: <SiTailwindcss />,
    mongodb: <SiMongodb />,
    express: <SiExpress />,
    vuejs: <SiVuedotjs />,
    bootstrap: <SiBootstrap />,
    git: <SiGit />,
    radixui: <SiRadixui />,
    trpc: <SiTrpc />,
    mysql: <SiMysql />,
  }),
);

export function Icon({ type }: { type: string }) {
  return <>{ICON_TYPES.get(type.toLowerCase())}</>;
}

export const TechSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div id="technologies" {...props}>
      <ul className="grid cursor-default grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6">
        {techSkills.map((item, index) => {
          return <TechSkillItem key={index} text={item} />;
        })}
      </ul>
    </div>
  );
};

const TechSkillItem = ({ text }: { text: string }) => {
  const iconType = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '').toLowerCase();
  return (
    <li className="flex items-center rounded-md border bg-card p-2 hover:bg-primary/30">
      <span className="text-2xl text-inherit">
        <Icon type={iconType} />
      </span>
      <span className="pl-4">{text}</span>
    </li>
  );
};

export const techSkills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'MySQL',
  'Git',
  'Tailwind CSS',
  'Radix UI',
  'tRPC',
];
