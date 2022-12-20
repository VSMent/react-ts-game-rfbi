import { useState } from 'react';
import { createArray } from '../utils/array';
import { createShip } from '../utils/battlefield';
import { random } from '../utils/random';

const MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
  createArray(MATRIX_LENGTH, () => createArray(MATRIX_LENGTH, () => 0));

const createBattlefield = () => {
  const battlefield = createEmptyBattlefield();
  const ship = createShip(3, MATRIX_LENGTH);
  ship.forEach(({ x, y }) => {
    battlefield[y][x] = 1;
  });
  return battlefield;
};

export const useGameState = () => {
  const [state, setState] = useState({
    matrix: createBattlefield(),
    turn: 0,
  });

  const reset = () => {
    setState({
      matrix: createBattlefield(),
      turn: 0,
    });
  };

  const fire = (y: number, x: number) => {
    setState({ ...state, turn: state.turn + 1 });
  };

  const { turn, matrix } = state;
  return { turn, reset, matrix, fire };
};
