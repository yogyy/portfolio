import { cn } from '@/lib/utils';
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
  }),
);

export function Icon({ type }: { type: string }) {
  return <>{ICON_TYPES.get(type.toLowerCase())}</>;
}

const TechSection: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => {
  return (
    <div id="technologies" {...props}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6">
        {techSkills.map((item, index) => {
          return <TechSkillItem key={index} text={item} />;
        })}
      </div>
    </div>
  );
};

export default TechSection;

const TechSkillItem = ({ text }: { text: string }) => {
  const iconType = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '').toLowerCase();
  return (
    <div className="bg-card flex items-center rounded-md border p-2 backdrop-blur-sm hover:border-transparent hover:bg-primary/30">
      <span className="text-2xl text-text">
        <Icon type={iconType} />
      </span>
      <span className="pl-4">{text}</span>
    </div>
  );
};

export const techSkills = [
  'JavaScript',
  'React',
  'TypeScript',
  'Next.js',
  'Node.js',
  'Git',
  'Figma',
  'Tailwind CSS',
];
