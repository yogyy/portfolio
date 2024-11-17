import {
  Mongodb,
  Nextdotjs,
  Radixui,
  React,
  Reactquery,
  Tailwindcss,
  Upstash,
} from './icons/simple-icons';

const Icons: { [key: string]: React.ComponentType } = {
  NextJS: Nextdotjs,
  Tailwind: Tailwindcss,
  ReactJS: React,
  RadixUI: Radixui,
  MongoDB: Mongodb,
  ReactQuery: Reactquery,
  Upstash: Upstash,
};

interface IconProps extends React.HTMLProps<SVGSVGElement> {
  icon: keyof typeof Icons;
}

export const Icon = ({ icon, ...props }: IconProps) => {
  const IconComponent = Icons[icon];
  return <IconComponent {...props} />;
};
