import * as React from 'react';
import { Battlefield } from './Battlefield';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import { useGameState } from './state/useGameState';
import './style.css';

export default function App() {
  const { turn, reset } = useGameState();
  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield />
      <ResetButton reset={reset} />
    </div>
  );
}
