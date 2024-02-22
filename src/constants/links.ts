import { IoNewspaperSharp } from 'react-icons/io5';
import { SiGithub, SiX } from 'react-icons/si';

const externalUrl = [
  {
    href: 'https://drive.google.com/file/d/1j7mkmbd7mTr80xvBPgV0J1d7jMoztifq/view',
    icon: IoNewspaperSharp,
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
