import { inputPlusOne, inputPlusTwo } from "../mock-demo";

describe("mock demo", () => {
    test("test inputPlus One", () => {
        expect(inputPlusOne(1)).toBe(2);
    });

    test("test inputPlus Two", () => {
        expect(inputPlusTwo(1)).toBe(3);
    });
});