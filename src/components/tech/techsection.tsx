import clsx from 'clsx';
import Marquee from 'react-fast-marquee';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
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
  SiVite,
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
  })
);

export function Icon({ type }: { type: string }) {
  return <>{ICON_TYPES.get(type.toLowerCase())}</>;
}

export default function TechSection({ className }: { className?: string }) {
  return (
    <section id="technologies" className={clsx(className)}>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(10rem,1fr))] gap-6">
        {techSkills.map((item, index) => {
          return <TechSkillItem key={index} text={item} />;
        })}
      </div>
    </section>
  );
}

const TechSkillItem = ({ text }: { text: string }) => {
  const iconType = text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '').toLowerCase();
  return (
    <div className="flex border dark:border-gray-600 items-center p-2 rounded-md hover:bg-gray-300/20 dark:hover:bg-gray-500/20 hover:border-transparent hover:dark:border-transparent backdrop-blur-sm">
      <span className="text-2xl text-dark-bg dark:text-light-bg">
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

const nonSkills = [
  {
    icon: <SiBootstrap />,
    text: 'Bootsrap',
    className: 'flex items-center',
  },
  {
    icon: <SiMarkdown />,
    text: 'MarkDown',
    className: 'flex items-center',
  },
  {
    icon: <SiExpress />,
    text: 'Express',
    className: 'flex items-center',
  },
  {
    icon: <SiMongodb />,
    text: 'MongoDb',
    className: 'flex items-center',
  },
];

export const MarqueeTech = () => {
  return (
    <div gaya-fade="9" className={`h-full`}>
      <Marquee className="overflow-hidden" gradient={false}>
        <TechStacks />
      </Marquee>
    </div>
  );
};

export function TechStacks() {
  return (
    <ul className="flex h-auto text-4xl text-light-text/80 dark:text-dark-primary">
      {skillMarquee.map((item, index) => (
        <li key={index} className="m-10 hover:text-light-accent dark:hover:text-dark-accent">
          {item.icon}
        </li>
      ))}
      <li className="m-10 hover:text-light-accent dark:hover:text-dark-accent">
        <SiReact className="animate-spin-slow" />
      </li>
    </ul>
  );
}

const skillMarquee = [
  {
    icon: <SiNextdotjs />,
  },
  {
    icon: <SiBootstrap />,
  },
  {
    icon: <SiTailwindcss />,
  },
  {
    icon: <SiNodedotjs />,
  },
  {
    icon: <SiGit />,
  },
  {
    icon: <SiHtml5 />,
  },
  {
    icon: <SiCss3 />,
  },
  {
    icon: <SiJavascript />,
  },
  {
    icon: <SiTypescript />,
  },
  {
    icon: <SiVite />,
  },
];
