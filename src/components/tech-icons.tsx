import Link from 'next/link';
import {
  SiHeadlessui,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTrpc,
  SiUpstash,
} from 'react-icons/si';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';

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
          <li className="h-fit w-fit p-2 text-xl" key={current.name}>
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link href={current.link} className="group outline-none" target="_blank">
                    <current.icon
                      className={cn(
                        'transition-colors duration-200 group-hover:text-accent group-focus:text-accent',
                        iconClassName,
                      )}
                    />
                  </Link>
                </TooltipTrigger>
                <TooltipContent sideOffset={8} className="duration-300">
                  <p>{current.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
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
    link: 'https://react.dev/',
  },
  nodejs: {
    icon: SiNodedotjs,
    name: 'Node JS',
    link: 'https://nodejs.org/en',
  },
  nextjs: {
    icon: SiNextdotjs,
    name: 'Next JS',
    link: 'https://nextjs.org/',
  },
  tailwindcss: {
    icon: SiTailwindcss,
    name: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
  },
  mongodb: {
    icon: SiMongodb,
    name: 'MongoDB',
    link: 'https://www.mongodb.com/',
  },
  headui: {
    icon: SiHeadlessui,
    name: 'Headless UI',
    link: 'https://headlessui.com/',
  },
  radix: {
    icon: SiRadixui,
    name: 'Radix UI',
    link: 'https://www.radix-ui.com/',
  },
  reactquery: {
    icon: SiReactquery,
    name: 'React Query',
    link: 'https://tanstack.com/',
  },
  trpc: {
    icon: SiTrpc,
    name: 'tRPC',
    link: 'https://trpc.io/',
  },
  upstash: {
    icon: SiUpstash,
    name: 'Upstash',
    link: 'https://upstash.com/',
  },
};
