import { describe, expect, it } from 'vitest'
import {calcSharePrice, getPrimaryPayout, getSecondaryPayout, getSizeFactor} from "./costStructure";

describe("costStructure.ts", () => {
    it("should calculate the proper factor for a company", () => {
        expect(getSizeFactor(1)).toEqual(0);
        expect(getSizeFactor(4)).toEqual(4);
        expect(getSizeFactor(6)).toEqual(6);
        expect(getSizeFactor(20)).toEqual(7);
        expect(getSizeFactor(25)).toEqual(8);
        expect(getSizeFactor(40)).toEqual(9);
        expect(getSizeFactor(41)).toEqual(10);
    })

    it("should calculate the cost of tier 0 companies", () => {
        expect(calcSharePrice(0, 1)).toEqual(0);
        expect(calcSharePrice(0, 2)).toEqual(200);
        expect(calcSharePrice(0, 3)).toEqual(300);
        expect(calcSharePrice(0, 5)).toEqual(500);
        expect(calcSharePrice(0, 6)).toEqual(600);
        expect(calcSharePrice(0, 10)).toEqual(600);
        expect(calcSharePrice(0, 11)).toEqual(700);
        expect(calcSharePrice(0, 20)).toEqual(700);
        expect(calcSharePrice(0, 21)).toEqual(800);
        expect(calcSharePrice(0, 30)).toEqual(800);
        expect(calcSharePrice(0, 31)).toEqual(900);
        expect(calcSharePrice(0, 40)).toEqual(900);
        expect(calcSharePrice(0, 41)).toEqual(1000);
        expect(calcSharePrice(0, 50)).toEqual(1000);
    })

    it("should return 0 if tier is out of bounds", () => {
        expect(calcSharePrice(-1, 5)).toEqual(0);
        expect(calcSharePrice(5, 5)).toEqual(0);
    })

    it("should return 0 if size < 2", () => {
        expect(calcSharePrice(2, -1)).toEqual(0);
        expect(calcSharePrice(2, 0)).toEqual(0);
        expect(calcSharePrice(2, 1)).toEqual(0);
    })

    it("should calculate the maximum payout", () => {
        expect(getPrimaryPayout(2, 50)).toEqual(12000);
    })

    it("should calculate the secondary payout", () => {
        expect(getSecondaryPayout(2, 50)).toEqual(6000);
    })

    it("should calculate the primary payout in case of a 2 person tie", () => {
        expect(getPrimaryPayout(2, 50, 2)).toEqual(9000);
    })

    it("should calculate the secondary payout n case of a 3 person tie", () => {
        expect(getSecondaryPayout(2, 50, 3)).toEqual(2000);
    })

})