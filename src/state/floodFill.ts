export type Position = number[];

export type ValidatorFn<T> = (data: T[][], x: number, y: number) => boolean;
export type AccumulatorFn = (x: number, y: number) => void;

export const IndexOfPosition = (positions: Position[], x: number, y: number) => {
    return positions.findIndex(pos => pos[0] === x && pos[1] === y);
}

// Wrapping the fill method allows us to mock it directly and call it recursively.
export const FloodFill = {
    accumulate: <T>(data: T[][], x: number, y: number, isValid: ValidatorFn<T>, accumulator: AccumulatorFn): void => {
        if (isValid(data, x, y)) {
            accumulator(x, y);
            if (x > 0) FloodFill.accumulate(data, x - 1, y, isValid, accumulator);
            if (x < data[0].length - 1) FloodFill.accumulate(data, x + 1, y, isValid, accumulator);
            if (y > 0) FloodFill.accumulate(data, 0, y - 1, isValid, accumulator);
            if (y < data.length - 1) FloodFill.accumulate(data, 0, y + 1, isValid, accumulator);
        }
    }
}