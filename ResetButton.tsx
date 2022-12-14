import * as React from 'react';

export const ResetButton = ({ reset }: { reset: () => void }) => {
  console.log('ResetButton component called');
  return (
    <button type="button" className="btn" onClick={reset}>
      Reset
    </button>
  );
};
