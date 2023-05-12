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
        'focus:outline-none focus-visible:ring focus-visible:ring-light-primary dark:focus-visible:ring-dark-primary',
        'scale-100 hover:scale-[1.03] active:scale-[0.97] focus:scale-[1.03] motion-safe:transform-gpu',
        'motion-reduce:hover:scale-100 motion-reduce:hover:brightness-90',
        'transition duration-100',
        'animate-shadow',
        {
          'bg-light-primary disabled:bg-gray-200 dark:bg-dark-primary dark:disabled:bg-gray-700':
            variant === 'default',
        },
        className
      )}
    >
      {children}
    </UnstyledLink>
  );
}
