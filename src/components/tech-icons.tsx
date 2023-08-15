import { cn } from '@/lib/utils';
import * as React from 'react';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiHeadlessui,
  SiMongodb,
  SiMui,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTrpc,
  SiUpstash,
  SiPlanetscale,
  SiNodedotjs,
} from 'react-icons/si';
import Tooltipz from './tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
  iconClassName?: string | undefined;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechMdx({ className, techs, iconClassName }: TechIconsProps) {
  return (
    <ul className={cn('flex gap-2', className)}>
      {techs.map(tech => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <li className="text-xl" key={current.name}>
            <Tooltipz className="group" content={<p>{current.name}</p>}>
              <current.icon
                className={cn(
                  'transition-colors duration-200 group-focus:text-dark-accent group-hover:text-dark-accent',
                  iconClassName
                )}
              />
            </Tooltipz>
          </li>
        );
      })}
    </ul>
  );
}

const techList = {
  react: {
    icon: SiReact,
    name: 'React',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node JS',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next JS',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
  },
  planetscale: {
    icon: SiPlanetscale,
    name: 'PlanetScale',
  },
  swr: {
    icon: IoLogoVercel,
    name: 'SWR',
  },
  headui: {
    icon: SiHeadlessui,
    name: 'Headless UI',
  },
  mui: {
    icon: SiMui,
    name: 'MUI',
  },
  reactquery: {
    icon: SiReactquery,
    name: 'React Query',
  },
  trpc: {
    icon: SiTrpc,
    name: 'tRPC',
  },
  upstash: {
    icon: SiUpstash,
    name: 'Upstash',
  },
};
