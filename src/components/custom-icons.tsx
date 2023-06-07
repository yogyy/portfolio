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
} from 'react-icons/si';

const Icons: { [key: string]: React.ComponentType } = {
  NextJS: SiNextdotjs,
  Tailwind: SiTailwindcss,
  HeadlessUI: SiHeadlessui,
  ReactJS: SiReact,
  MUI: SiMui,
  MongoDB: SiMongodb,
  ReactQuery: SiReactquery,
  Trpc: SiTrpc,
  Upstash: SiUpstash,
};

export const Icon: React.FC<React.HTMLProps<SVGSVGElement> & { icon: keyof typeof Icons }> = ({
  icon,
  ...props
}) => {
  const IconComponent = Icons[icon];
  return <IconComponent {...props} />;
};
