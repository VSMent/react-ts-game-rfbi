export function createArray<T>(length: number, callback: () => T) {
  return [...new Array(length)].map(callback);
}
