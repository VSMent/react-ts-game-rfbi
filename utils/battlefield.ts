import { createArray } from './array';
import { random } from './random';

const createHorizontalShip = (length: number, maxLength: number): Vector2[] => {
  const maxX = maxLength - length;
  const maxY = maxLength;
  const startPos: Vector2 = {
    x: random(0, maxX),
    y: random(0, maxY),
  };
  return createArray(length, (i) => {
    return { x: startPos.x + i, y: startPos.y };
  });
};

const createVerticalShip = (length: number, maxLength: number): Vector2[] => {
  const maxX = maxLength;
  const maxY = maxLength - length;
  const startPos: Vector2 = {
    x: random(0, maxX),
    y: random(0, maxY),
  };
  return createArray(length, (i) => {
    return { x: startPos.x, y: startPos.y + i };
  });
};

type Vector2 = { x: number; y: number };
export const createShip = (
  shipLength: number,
  maxLength: number
): Vector2[] => {
  const axis = random(0, 2) % 2 === 0 ? 'h' : 'v';
  return axis === 'h'
    ? createHorizontalShip(shipLength, maxLength)
    : createVerticalShip(shipLength, maxLength);
};
