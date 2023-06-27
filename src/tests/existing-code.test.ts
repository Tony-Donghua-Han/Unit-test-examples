import deepFreeze from "deep-freeze";
import { VeryComplexInput, existingInputPlusOneFunction, existingInputPlusTwoFunction } from "../existing-code"

const mockInput: VeryComplexInput = deepFreeze({
    number: 10,
    extraValue: 271,
    extraValueTwo: 284
});

const mockInputTwo: VeryComplexInput = deepFreeze({
    number: 0,
    extraValue: 0,
    extraValueTwo: 0
});

describe("testing existing code", () => {
    test("existing input plus one should return 1", () => {
        expect(existingInputPlusOneFunction(mockInput)).toBe(11)
    });

    test("existing input plus two should return 2", () => {
        expect(existingInputPlusTwoFunction(mockInput)).toBe(12)
    });

    test("existing input plus one should return a random number between 1 to 4", () => {
        const result = existingInputPlusOneFunction(mockInputTwo);
        expect(result).toBeGreaterThanOrEqual(10);
        expect(result).toBeLessThanOrEqual(14);
    });

    test("existing input plus two should return a random number between 1 to 4", () => {
        const result = existingInputPlusTwoFunction(mockInputTwo);
        expect(result).toBeGreaterThanOrEqual(10);
        expect(result).toBeLessThanOrEqual(14);
    });
});