import clsx from 'clsx';
import * as React from 'react';

type AccentType = React.ComponentPropsWithoutRef<'span'>;

export const Accent = ({ children, className }: AccentType) => {
    return (
        <span
            className={clsx(
                className,
                'transition-colors',
                'text-transparent bg-clip-text bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-blue-500 via-green-700 to-gray-300 scroll-smooth'
                // 'dark:from-primary-300 dark:to-primary-400 dark:bg-clip-text dark:text-transparent'
            )}>
            {children}
        </span>
    );
};
