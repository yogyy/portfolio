import * as React from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';
import Moon from './icons/moon';
import Sun from './icons/sun';
import { useMounted } from '@/hooks/use-mounted';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <button
      role="button"
      aria-label="dark mode toggle"
      aria-pressed="true"
      className={clsx(
        'rounded-md p-1.5 focus:outline-none text-light-primary dark:text-dark-accent',
        'border border-hidden',
        'focus:outline-none focus-visible:ring focus-visible:ring-light-primary dark:focus-visible:ring-dark-accent py-1',
        className
      )}
      {...rest}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {mounted ? <>{theme === 'light' ? <Moon /> : <Sun />}</> : <Sun />}
    </button>
  );
}
