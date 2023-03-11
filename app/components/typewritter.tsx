'use client';

import Typewritter from 'typewriter-effect';

export default function Typewritterz() {
  return (
    <div className={`mt-1  `}>
      <h3 gaya-fade="3" className="flex flex-wrap">
        I&apos;m a <span className="mr-2"> </span>
        <span className={`flex flex-wrap text-primary-400`}>
          <Typewritter
            gaya-fade="4"
            options={{
              strings: ['Frontend Engineer', 'Web Developer'],
              autoStart: true,
              loop: true,
            }}
          />
        </span>
      </h3>
    </div>
  );
}
