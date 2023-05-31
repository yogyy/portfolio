'use client';

import Typewritter from 'typewriter-effect';
import { Accent } from './accent';

export default function Typewritterz() {
  return (
    <div className={`mt-1  `}>
      <h3 gaya-fade="3" className="flex flex-wrap">
        I&apos;m a <span className="mr-2"> </span>
        <Accent className="whoiam">Frontend Web Developer</Accent>
      </h3>
    </div>
  );
}
