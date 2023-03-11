'use client';

import clsx from 'clsx';
import UnstyledLink, { UnstyledLinkProps } from './unstyledlink';

enum ButtonVariant {
  'default',
}

export type ButtonLinkProps = {
  variant?: keyof typeof ButtonVariant;
} & UnstyledLinkProps;

export default function ButtonLink({
  children,
  className = '',
  variant = 'default',
  ...rest
}: ButtonLinkProps) {
  return (
    <UnstyledLink
      {...rest}
      className={clsx(
        'inline-flex rounded px-3 py-2 font-bold',
        'border border-gray-300 shadow-sm dark:border-gray-600',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-300',
        'scale-100 hover:scale-[1.03] active:scale-[0.97] motion-safe:transform-gpu',
        'motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90',
        'transition duration-100',
        'animate-shadow',
        {
          'bg-white text-green-600 disabled:bg-gray-200 dark:bg-dark dark:text-gray-100 dark:disabled:bg-gray-700':
            variant === 'default',
        },
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
