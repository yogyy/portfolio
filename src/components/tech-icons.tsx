import { cn } from '@/lib/utils';
import { IoLogoVercel } from 'react-icons/io5';
import {
  SiHeadlessui,
  SiMongodb,
  SiNextdotjs,
  SiReact,
  SiReactquery,
  SiTailwindcss,
  SiTrpc,
  SiUpstash,
  SiPlanetscale,
  SiNodedotjs,
  SiRadixui,
  SiSwiper,
} from 'react-icons/si';
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
          <li className="text-xl" key={current.name}>
            <TooltipProvider delayDuration={300}>
              <Tooltip>
                <TooltipTrigger className="group outline-none">
                  <current.icon
                    className={cn(
                      'transition-colors duration-200 group-hover:text-accent group-focus:text-accent',
                      iconClassName,
                    )}
                  />
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
  swiperjs: {
    icon: SiSwiper,
    name: 'Swiper JS',
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
  radix: {
    icon: SiRadixui,
    name: 'Radix UI',
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
