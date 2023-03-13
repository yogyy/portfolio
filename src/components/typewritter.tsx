'use client';

import Typewritter from 'typewriter-effect';
import { Accent } from './accent';

export default function Typewritterz() {
  return (
    <div className={`mt-1  `}>
      <h3 gaya-fade="3" className="flex flex-wrap">
        I&apos;m a <span className="mr-2"> </span>
        <Accent>
          <span className={`flex flex-wrap`}>
            <Typewritter
              gaya-fade="4"
              options={{
                strings: ['Frontend Engineer', 'Web Developer'],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </Accent>
      </h3>
    </div>
  );
}
