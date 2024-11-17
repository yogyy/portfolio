import { FileUser } from 'lucide-react';
import { Github, X } from '@/components/icons/simple-icons';

const externalUrl = [
  {
    href: 'https://drive.google.com/file/d/1dx-fxhVOUEDhVIEgY3d5_FTVFFh6wMKg/view',
    icon: FileUser,
    name: 'Resume',
  },
  {
    href: 'https://github.com/yogyy',
    icon: Github,
    name: 'Github',
  },
  {
    href: 'https://twitter.com/yogyyconst',
    icon: X,
    name: 'Twitter',
  },
];

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/projects', label: 'Projects' },
];

export { externalUrl, navLinks };
