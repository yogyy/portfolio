'use client';

import * as React from 'react';
import { Menu, Switch, Transition } from '@headlessui/react';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

type ThemeButtonProps = React.ComponentPropsWithoutRef<'button'>;

export default function DarkTheme() {
  const [enabled, setEnabled] = React.useState(false);
  const { theme, setTheme } = useTheme();

  console.log(theme);

  const changeTheme = () => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="">
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          !enabled ? 'bg-blue-600' : 'bg-gray-200'
        } relative inline-flex h-6 w-11 items-center rounded-full`}
      >
        <span className="sr-only">Enable notifications</span>
        <span
          className={`${
            enabled ? 'translate-x-6' : 'translate-x-1'
          } inline-block h-4 w-4 transform rounded-full bg-white transition`}
        />
      </Switch>
      <div className="relative ml-4 flex gap-5">
        <button onClick={() => setTheme('dark')}>dark</button>
        <button onClick={() => setTheme('light')}>light</button>
        <button onClick={changeTheme}>hadeh</button>
      </div>
    </div>
  );
}

export function ThemeButtonHeadless() {
  const { setTheme } = useTheme();
  const themes = [
    { name: 'Light', value: 'light', icon: Sun },
    { name: 'Dark', value: 'dark', icon: Moon },
    { name: 'System', value: 'system', icon: null },
  ];
  return (
    <Menu as="div" className="relative">
      <Menu.Button className="w-full text-left pl-5 py-2"> tai </Menu.Button>
      <Transition
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-300"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu.Items className="absolute w-1/2 min-w-[80px] bg-white dark:bg-gray-900 -right-[1px] xl:-right-[152px] xl:-top-[9px] rounded-md py-2 bg-transparent border border-sky-300 dark:border-sky-700 focus:outline-none">
          {themes.map(theme => (
            <Menu.Item
              key={theme.value}
              as="div"
              className=""
              onClick={() => setTheme(theme.value)}
            >
              {({ active }) => (
                <div
                  className={`pl-5 p-2 cursor-pointer ${
                    active ? 'bg-blue-500' : ''
                  }`}
                >
                  {theme.name}
                </div>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

export function ThemeButtonOld({ className, ...rest }: ThemeButtonProps) {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  return (
    <button
      className={clsx(
        'rounded-md focus:outline-none',
        'hover:border-sky-300 hover:text-sky-300 dark:hover:border-sky-300 dark:hover:text-sky-300',
        'focus-visible:border-sky-300 focus-visible:text-sky-300 dark:focus-visible:border-sky-300 dark:focus-visible:text-sky-300',
        'text-lg md:text-xl transition',
        className
      )}
      {...rest}
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {mounted && theme === 'light' ? <Moon /> : <Sun />}
    </button>
  );
}

export const Moon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      className="ionicon"
      viewBox="0 0 512 512"
    >
      <path
        d="M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="32"
      />
    </svg>
  );
};

export const Sun = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1.2em"
      height="1.2em"
      viewBox="0 0 24 24"
    >
      <path
        fill="currentColor"
        d="M12 15q1.25 0 2.125-.875T15 12q0-1.25-.875-2.125T12 9q-1.25 0-2.125.875T9 12q0 1.25.875 2.125T12 15Zm0 2q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM1 13v-2h4v2Zm18 0v-2h4v2Zm-8-8V1h2v4Zm0 18v-4h2v4ZM6.35 7.75L3.875 5.275l1.4-1.4L7.75 6.35Zm12.375 12.375L16.25 17.65l1.4-1.4l2.475 2.475ZM17.65 7.75l-1.4-1.4l2.475-2.475l1.4 1.4ZM5.275 20.125l-1.4-1.4L6.35 16.25l1.4 1.4ZM12 12Z"
      />
    </svg>
  );
};
