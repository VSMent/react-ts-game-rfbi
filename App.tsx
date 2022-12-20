import * as React from 'react';
import { Battlefield } from './Battlefield';
import { HeaderWithCounter } from './HeaderWithCounter';
import { ResetButton } from './ResetButton';
import './style.css';

export default function App() {
  const reset = () => {
    console.log('r');
  };
  return (
    <div className="app">
      <HeaderWithCounter turn={0} />
      <Battlefield />
      <ResetButton reset={reset} />
    </div>
  );
}
