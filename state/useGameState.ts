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
  const reset = () => {
    console.log('r');
  };
  const turn = 0;
  const matrix = createBattlefield();
  return { turn, reset, matrix };
};
