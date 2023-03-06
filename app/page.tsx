'use client';
import React, { useEffect } from 'react';
import IonIcons from './components/IonIcons';
import { themeChange } from 'theme-change';

export default function Home() {
  useEffect(() => {
    themeChange(false);
    return window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
  return (
    <>
      <p className="text-secondary">sebaiknya jangan terlalu gegebah</p>
      <div className="gap-2 flex">
        <button data-set-theme="dark" className="btn btn-accent">
          tonjok
        </button>
        <button
          data-act-class="shadow-outline"
          data-set-theme="night"
          className="btn btn-accent"
        >
          Dark
        </button>
        <button
          data-act-class="shadow-outline"
          data-set-theme="fantasy"
          className="btn-accent text-2xl btn text-center flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon h-5 w-5"
            viewBox="0 0 512 512"
          >
            <title>Sunny</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            />
            <circle
              cx="256"
              cy="256"
              r="80"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
            />
          </svg>
        </button>
      </div>
    </>
  );
}
