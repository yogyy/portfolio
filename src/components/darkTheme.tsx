'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export function ThemeButton({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      role="button"
      className={clsx(
        'rounded-md p-1.5 focus:outline-none ',
        'hover:border-yellow-400 hover:text-yellow-400 dark:hover:border-yellow-400 dark:hover:text-yellow-400',
        'border border-hidden',
        'focus:outline-none focus-visible:ring focus-visible:ring-primary-400 py-1',
        className
      )}
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <MoonSun />
    </button>
  );
}

export const Moon = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
};

export const Sun = () => {
  return (
    <svg
      stroke="currentColor"
      fill="none"
      strokeWidth="2"
      viewBox="0 0 24 24"
      strokeLinecap="round"
      strokeLinejoin="round"
      height="1em"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    </svg>
  );
};

const MoonSun = () => {
  return (
    <svg
      width="26"
      height="24"
      viewBox="0 0 26 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="fill-current dark:fill-sky-500"
        d="M18.2841 2.46271C17.6466 2.27521 17.0091 2.12521 16.3341 2.01271C15.8466 1.93771 15.3216 2.20021 15.1341 2.65021C14.9091 3.10021 15.0216 3.66271 15.3966 3.96271C18.0591 6.43771 19.3716 10.5627 18.2841 13.9752C17.0841 17.7627 13.2216 19.9377 9.13412 20.0502C8.60912 20.0502 8.19662 20.3877 8.04662 20.8752C7.89662 21.3627 8.12162 21.8877 8.53412 22.1502C9.47162 22.7127 10.4091 23.1627 11.3466 23.4627C12.4341 23.8002 13.5591 23.9502 14.6841 23.9502C16.5966 23.9502 18.4716 23.4627 20.1591 22.5252C22.8216 21.0627 24.6966 18.7002 25.5216 15.8502C27.1341 10.2252 23.9466 4.33771 18.2841 2.46271ZM23.9091 15.3627C23.2341 17.8002 21.5841 19.7877 19.3716 21.0252C17.0466 22.3002 14.3841 22.5627 11.8716 21.8127C11.6091 21.7377 11.3091 21.6252 11.0466 21.5127C15.0216 20.7252 18.3216 17.8752 19.5591 13.9752C20.6466 10.5252 19.9716 6.88771 17.7591 4.03771C22.5591 5.65021 25.2591 10.6377 23.9091 15.3627Z"
        fill="currentColor"
      />
      <g clipPath="url(#clip0_202_1184)" className="fill-red-400">
        <path
          className="fill-sky-500 dark:fill-current"
          d="M11.1914 7.18465C8.8513 7.31515 7.05415 9.32458 7.18465 11.6647C7.31515 14.0048 9.32459 15.802 11.6647 15.6715C14.0048 15.541 15.802 13.5315 15.6715 11.1914C15.541 8.8513 13.5315 7.05414 11.1914 7.18465ZM11.5864 14.2674C10.0263 14.3544 8.67572 13.1465 8.58872 11.5864C8.50172 10.0263 9.70964 8.67572 11.2697 8.58872C12.8298 8.50171 14.1804 9.70964 14.2674 11.2697C14.3544 12.8298 13.1465 14.1804 11.5864 14.2674Z"
          fill="currentColor"
        />
        <path
          className="fill-sky-500 dark:fill-current"
          d="M11.0679 4.96934C11.4423 4.94846 11.7681 4.6173 11.7455 4.21168L11.6585 2.65161C11.6376 2.27719 11.3064 1.95137 10.9008 1.97399C10.5264 1.99487 10.2006 2.32603 10.2232 2.73165L10.312 4.32293C10.364 4.69561 10.6934 4.99022 11.0679 4.96934Z"
          fill="currentColor"
        />
        <path
          className="fill-sky-500 dark:fill-current"
          d="M6.12997 16.3244L5.18546 17.3473C4.92031 17.6438 4.94467 18.0806 5.24114 18.3458C5.37291 18.4636 5.56534 18.5468 5.75255 18.5364C5.93976 18.5259 6.12348 18.4531 6.23959 18.2901L7.18236 17.236C7.44751 16.9395 7.42315 16.5027 7.12668 16.2375C6.83194 16.0036 6.36392 16.0297 6.12997 16.3244Z"
          fill="currentColor"
        />
        <path
          className="fill-sky-500 dark:fill-current"
          d="M4.96934 11.7882C4.94846 11.4138 4.6173 11.088 4.21168 11.1106L2.65161 11.1976C2.27719 11.2185 1.95137 11.5497 1.97399 11.9553C1.99487 12.3297 2.32603 12.6555 2.73165 12.6329L4.32293 12.5442C4.69735 12.5233 4.99022 12.1627 4.96934 11.7882Z"
          fill="currentColor"
        />
        <path
          className="fill-sky-500 dark:fill-current"
          d="M5.50878 5.18546C5.2123 4.92031 4.77548 4.94467 4.51033 5.24114C4.24518 5.53762 4.26954 5.97444 4.56601 6.23959L5.62014 7.18236C5.75191 7.3002 5.94434 7.38337 6.13154 7.37293C6.31875 7.36249 6.50248 7.28965 6.61859 7.12668C6.88374 6.8302 6.85938 6.39338 6.56291 6.12823L5.50878 5.18546Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_202_1184">
          <rect
            width="20"
            height="20"
            fill="dark"
            transform="translate(0.886757 2.00038) rotate(-3.19194)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
