import {afterEach, describe, expect, it, vi} from 'vitest'
import {AccumulatorFn, FloodFill, IndexOfPosition, Position} from "./floodFill";

describe("floodFill.ts", () => {
    const data = [
        [0, 0, 0, 1, 0, 2],
        [0, 0, 1, 1, 0, 0],
        [3, 3, 1, 1, 1, 0]
    ]
    const maxX = data[0].length - 1;
    const maxY = data.length - 1;

    afterEach(() => {
        vi.clearAllMocks()
    })


    it("should call the isValid function", () => {
        const positions: Position[] = [];
        const validator = vi.fn().mockImplementation((data: number[][], x, y) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        })
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        FloodFill.accumulate(data, 0, 0, validator, accumulator);
        expect(validator).toHaveBeenCalled();
    })

    it("should accumulate valid values", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = vi.fn().mockImplementation((x, y) => positions.push([x, y]));
        FloodFill.accumulate(data, 0, 0, validator, accumulator);
        expect(accumulator).toHaveBeenCalled();
    })

    it("should not accumulate invalid values", () => {
        const validator = vi.fn().mockReturnValue(false);
        const accumulator = vi.fn();
        FloodFill.accumulate(data, 0, 0, validator, accumulator);
        expect(accumulator).not.toHaveBeenCalled();
    })

    it("should go to x-1", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, 1, 0, validator, accumulator);
        expect(spy).toHaveBeenCalledWith(data, 0, 0, validator, accumulator);
    })

    it("should not go past minX", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, 0, 0, validator, accumulator);
        expect(spy).not.toHaveBeenCalledWith(data, -1, 0, validator, accumulator);
    })

    it("should go to x\+1", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, maxX - 1, 0, validator, accumulator);
        expect(spy).toHaveBeenCalledWith(data, maxX, 0, validator, accumulator);
    })

    it("should not go past maxX", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, maxX, 0, validator, accumulator);
        expect(spy).not.toHaveBeenCalledWith(data, maxX + 1, 0, validator, accumulator);
    })

    it("should go to y-1", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, 0, 1, validator, accumulator);
        expect(spy).toHaveBeenCalledWith(data, 0, 0, validator, accumulator);
    })

    it("should not go past minY", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, 0, 0, validator, accumulator);
        expect(spy).not.toHaveBeenCalledWith(data, 0, -1, validator, accumulator);
    })

    it("should go to y\+1", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, 0, maxY - 1, validator, accumulator);
        expect(spy).toHaveBeenCalledWith(data, 0, maxY, validator, accumulator);
    })

    it("should not go past maxY", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return positions.find(pos => pos[0] === x && pos[1] === y) === undefined
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        const spy = vi.spyOn(FloodFill, "accumulate");
        FloodFill.accumulate(data, 0, maxY, validator, accumulator);
        expect(spy).not.toHaveBeenCalledWith(data, 0, maxY + 1, validator, accumulator);
    })

    it("should find island of same value", () => {
        const positions: Position[] = [];
        const validator = (data: number[][], x: number, y: number) => {
            return data[x][y] === 0 && IndexOfPosition(positions, x, y) === -1;
        }
        const accumulator: AccumulatorFn = (x, y) => positions.push([x, y]);
        FloodFill.accumulate(data, 0, 0, validator, accumulator);
        expect(positions.length).toEqual(5);

    })
})