import * as React from 'react';

export const HeaderWithCounter = ({ turn }: { turn: number }) => (
  <h2>Current turn is: {turn}</h2>
);
