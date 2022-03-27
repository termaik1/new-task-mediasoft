export const rangeList = (start: number, stop: number, step = 1): number[] =>
  Array(Math.ceil((stop - start) / step))
    .fill(start)
    .map((x, y) => x + y * step);
