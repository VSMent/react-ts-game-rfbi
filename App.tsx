import * as React from 'react';
import { Battlefield } from './Battlefield';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import { useGameState } from './state/useGameState';
import './style.css';

export default function App() {
  const { turn, reset, matrix, fire, won } = useGameState();
  if (won) {
    setTimeout(() => alert('MOSCOW DOWN!'), 0);
  }
  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield matrix={matrix} onCellClick={!won ? fire : () => {}} />
      <br />
      <ResetButton reset={reset} />
    </div>
  );
}
