import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export const Accent = ({ children, className }: AccentType) => {
  return (
    <span
      className={clsx(
        className,
        'transition-colors',
        'text-transparent bg-clip-text bg-gradient-to-r from-light-primary to-light-accent scroll-smooth',
        'dark:from-dark-primary dark:to-dark-accent dark:bg-clip-text dark:text-transparent'
      )}
    >
      {children}
    </span>
  );
};
