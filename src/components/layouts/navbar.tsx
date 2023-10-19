import { ThemeButton } from '@/components/dark-theme';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { cn } from '@/lib/utils';

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
  // {href: '/library', label: 'Library'},
  // { href: '/about', label: 'About' },
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
        router.pathname && baseRoute !== href
          ? 'text-light-text dark:text-dark-primary hover:text-light-primary/50 dark:hover:text-accent'
          : 'text-light-primary dark:text-accent',
        'focus-visible:ring-light-primary py-1 focus:rounded-sm focus:outline-none focus-visible:ring dark:focus-visible:ring-accent',
      )}
    >
      <span>{children}</span>
    </Link>
  );
}

export default function Navbar({ large = false }: HeaderProps) {
  const { pathname } = useRouter();
  const inPosts = pathname === '/posts/[slug]';

  return (
    <header
      className={cn(
        'z-10 w-full',
        inPosts && 'border-light-accent sticky top-0 border-b-2 dark:border-accent',
      )}
    >
      <a
        href="#skip-nav"
        className={cn(
          'rounded-sm p-2 transition',
          'font-medium text-text',
          'bg-light-bg dark:bg-dark-bg',
          'group dark:hover:text-accent',
          'focus:outline-none focus:ring focus:ring-accent',
          'absolute left-4 top-1 z-20',
          '-translate-y-16 focus:translate-y-0',
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
          <ul className="ml-9 mr-auto flex gap-9">
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
          <ThemeButton className="ml-auto" />
        </div>
      </nav>
    </header>
  );
}
