import { FileUser } from 'lucide-react';
import { SiGithub, SiX } from 'react-icons/si';

const externalUrl = [
  {
    href: 'https://drive.google.com/file/d/1dx-fxhVOUEDhVIEgY3d5_FTVFFh6wMKg/view',
    icon: FileUser,
    name: 'Resume',
  },
  {
    href: 'https://github.com/yogyy',
    icon: SiGithub,
    name: 'Github',
  },
  {
    href: 'https://twitter.com/yogyyconst',
    icon: SiX,
    name: 'Twitter',
  },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/projects', label: 'Projects' },
];

export { externalUrl, navLinks };
