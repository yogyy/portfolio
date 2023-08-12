import { insertSpaces } from '@/lib/helper';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
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
} from 'react-icons/si';
import Tooltipz from './tooltip';

export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export default function TechMdx({ className, techs }: TechIconsProps) {
  return (
    <ul className={cn(className, 'flex gap-2')}>
      {techs.map(tech => {
        if (!techList[tech]) return;

        const current = techList[tech];

        return (
          <Tooltipz className="group" key={current.name} content={<p>{current.name}</p>}>
            <li className="text-xl">
              <current.icon className="transition-colors duration-200 group-focus:text-dark-accent group-hover:text-dark-accent" />
            </li>
          </Tooltipz>
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
