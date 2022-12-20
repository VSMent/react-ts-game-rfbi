export const useGameState = () => {
  const reset = () => {
    console.log('r');
  };
  const turn = 0;
  return { turn, reset };
};
