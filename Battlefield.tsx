import * as React from 'react';

type CellProps = {
  value: number;
  handleClick: (y: number, x: number) => void;
  x: number;
  y: number;
};
const Cell = ({ handleClick, value, x, y }: CellProps) => {
  return (
    <button type="button" onClick={() => handleClick(y, x)} className={'cell'}>
      {value}
    </button>
  );
};

type BattlefieldProps = {
  matrix: number[][];
  onCellClick: (y: number, x: number) => void;
};

export const Battlefield = ({ matrix, onCellClick }: BattlefieldProps) => {
  return (
    <div>
      {matrix.map((row, i) => (
        <div key={i}>
          {row.map((el, j) => (
            <Cell
              key={`${i}${j}`}
              x={j}
              y={i}
              value={el}
              handleClick={onCellClick}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
