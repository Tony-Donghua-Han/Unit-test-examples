import { swichCases } from "../coverage";

describe("coverage tests", () => {
    test("swichCases should return 1", () => {
        expect(swichCases(1)).toBe(1);
    });

    test("swichCases should return 2", () => {
        expect(swichCases(2)).toBe(2);
    });
});