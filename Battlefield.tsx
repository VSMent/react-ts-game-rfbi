import * as React from 'react';

type BattlefieldProps = {
  matrix: number[][];
};

export const Battlefield = ({ matrix }: BattlefieldProps) => {
  return (
    <div>
      {matrix.map((row, i) => (
        <div key={i}>{row}</div>
      ))}
    </div>
  );
};
