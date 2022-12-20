import * as React from 'react';
import { Battlefield } from './Battlefield';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import './style.css';

export default function App() {
  const reset = () => {
    console.log('r');
  };
  const turn = 0;
  return (
    <div className="app">
      <HeaderWithCounter turn={turn} />
      <Battlefield />
      <ResetButton reset={reset} />
    </div>
  );
}
