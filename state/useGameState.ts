import { useState } from 'react';
import { createArray } from '../utils/array';
import { createShip } from '../utils/battlefield';
import { NO_SHIP, SHIP, SHIP_SHOT, WATER } from './cellstate';

const MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
  createArray(MATRIX_LENGTH, () => createArray(MATRIX_LENGTH, () => 0));

const createBattlefield = () => {
  const battlefield = createEmptyBattlefield();
  const ship = createShip(3, MATRIX_LENGTH);
  ship.forEach(({ x, y }) => {
    battlefield[y][x] = SHIP;
  });
  return battlefield;
};

export const useGameState = () => {
  const [state, setState] = useState({
    matrix: createBattlefield(),
    turn: 0,
    won: false,
  });

  const reset = () => {
    setState({
      matrix: createBattlefield(),
      turn: 0,
      won: false,
    });
  };

  const fire = (y: number, x: number) => {
    const cell = state.matrix[y][x];
    if (cell === NO_SHIP || cell == SHIP_SHOT) {
      return;
    }
    const newState = cell === WATER ? NO_SHIP : SHIP_SHOT;
    state.matrix[y][x] = newState;
    const won = state.matrix.every((row) => row.every((el) => el !== SHIP));

    setState({ ...state, turn: state.turn + 1, won });
  };

  const { turn, matrix, won } = state;
  return { turn, reset, matrix, fire, won };
};
