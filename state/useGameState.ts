import { createArray } from '../utils/array';

const MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
  createArray(MATRIX_LENGTH, () => createArray(MATRIX_LENGTH, () => 0));

type Vector2 = { x: number; y: number };
const createShip = (shipLength: number, maxLength: number): Vector2[] => {
  return;
};

export const useGameState = () => {
  const reset = () => {
    console.log('r');
  };
  const turn = 0;
  const matrix = createEmptyBattlefield();
  return { turn, reset, matrix };
};
