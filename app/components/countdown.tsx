import React from 'react';

interface Props {
  value: number;
}
export const Countdown: React.FC<Props> = ({ value }) => {
  return (
    <span className="countdown font-mono text-6xl">
      <span style={{ '--value': value } as React.CSSProperties}></span>
    </span>
  );
};
