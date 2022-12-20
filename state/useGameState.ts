import { createArray } from '../utils/array';

const MATRIX_LENGTH = 10;

const createEmptyBattlefield = () =>
  createArray(MATRIX_LENGTH, () => createArray(MATRIX_LENGTH, () => 0));

export const useGameState = () => {
  const reset = () => {
    console.log('r');
  };
  const turn = 0;
  const matrix = createEmptyBattlefield();
  return { turn, reset, matrix };
};
