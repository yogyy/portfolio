import { ThemeButton } from '@/components/dark-theme';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React from 'react';

type HeaderProps = {
  large?: boolean;
};
interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  passHref?: boolean;
  classname?: string;
}

type dink = {
  href: string;
  label: string;
};

const links = [
  { href: '/', label: 'Home' },
  { href: '/posts', label: 'Posts' },
  { href: '/projects', label: 'Projects' },
];

function NavLink({ href, children, ...rest }: NavLinkProps) {
  const router = useRouter();
  const arrOfRoute = router.route.split('/');
  const baseRoute = '/' + arrOfRoute[1];
  return (
    <Link
      href={href}
      passHref
      draggable={false}
      {...rest}
      className={cn(
        router.pathname && baseRoute !== href ? 'text-text hover:text-primary' : 'text-accent',
        'rounded-sm py-1 focus:outline-none focus-visible:ring focus-visible:ring-accent',
      )}
    >
      <span>{children}</span>
    </Link>
  );
}

export default function Navbar({ large = false }: HeaderProps) {
  const { pathname } = useRouter();
  const inPosts = pathname === '/posts/[slug]';
  const { scrollY } = useScroll();
  const [hidden, setHidden] = React.useState(false);

  useMotionValueEvent(scrollY, 'change', latest => {
    const prev = scrollY.getPrevious();
    if (latest > prev && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <motion.header
      variants={{ visible: { y: 0 }, hidden: { y: '-100%' } }}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ duration: 0.25, ease: 'easeInOut' }}
      className={cn('sticky top-0 z-10 w-full', inPosts && 'border-b-2 border-accent')}
    >
      <a
        href="#skip-nav"
        className={cn(
          'rounded-sm p-2 font-medium text-text transition',
          'group absolute left-4 top-1 z-20 -translate-y-16 bg-background',
          'focus:translate-y-0 focus:outline-none focus:ring focus:ring-accent',
        )}
      >
        skip to content
      </a>
      <nav aria-label="Main Menu" className={cn('backdrop-blur-sm', inPosts && 'bg-background')}>
        <div
          className={cn(
            'layout flex items-center justify-between py-4',
            large && 'lg:max-w-[68rem]',
          )}
        >
          <ul className="ml-9 flex gap-9">
            {links.map(({ label, href }: dink) => (
              <li key={`${href} ${label}`}>
                <NavLink href={href}>
                  <span className={cn('text-xs font-semibold transition-colors md:text-base')}>
                    {label}
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
          <ThemeButton />
        </div>
      </nav>
    </motion.header>
  );
}
