import {
  SiHeadlessui,
  SiMongodb,
  SiNextdotjs,
  SiPlanetscale,
  SiRadixui,
  SiReact,
  SiReactquery,
  SiSwiper,
  SiTailwindcss,
  SiTrpc,
  SiUpstash,
} from 'react-icons/si';

const Icons: { [key: string]: React.ComponentType } = {
  NextJS: SiNextdotjs,
  Tailwind: SiTailwindcss,
  HeadlessUI: SiHeadlessui,
  ReactJS: SiReact,
  RadixUI: SiRadixui,
  MongoDB: SiMongodb,
  ReactQuery: SiReactquery,
  Trpc: SiTrpc,
  Upstash: SiUpstash,
  PlanetScale: SiPlanetscale,
  SwiperJS: SiSwiper,
};

export const Icon: React.FC<React.HTMLProps<SVGSVGElement> & { icon: keyof typeof Icons }> = ({
  icon,
  ...props
}) => {
  const IconComponent = Icons[icon];
  return <IconComponent {...props} />;
};
