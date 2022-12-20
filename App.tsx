import * as React from 'react';
import './style.css';

const HeaderWithCounter = ({ turn }: { turn: number }) => <h2>{turn}</h2>;
const Battlefield = () => {
  return <div></div>;
};
const ResetButton = ({ reset }: { reset: () => void }) => {
  return (
    <button type="button" onClick={reset}>
      Reset
    </button>
  );
};

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
