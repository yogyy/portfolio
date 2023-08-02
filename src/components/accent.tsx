import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export const Accent = ({ children, className }: AccentType) => {
  return (
    <span className={clsx(className, 'text-light-accent dark:text-dark-accent transition-colors')}>
      {children}
    </span>
  );
};
