import * as React from 'react';
import { Battlefield } from './Battlefield';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import { useGameState } from './state/useGameState';
import './style.css';

export default function App() {
  const { turn, reset, matrix } = useGameState();
  const onCellClick = (y: number, x: number) => console.log(y, x);
  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield matrix={matrix} onCellClick={onCellClick} />
      <ResetButton reset={reset} />
    </div>
  );
}
