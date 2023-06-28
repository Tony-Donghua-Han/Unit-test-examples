import { getResultWithId } from "../mock-demo";

const id = "1234-5678-9012-3456";

describe("mock demo", () => {
    test("provide 1 to getResultWithId should return 2 with id", () => {
        expect(getResultWithId(1)).toBe({ number: 2, id });
    });

    test("provide 2 to getResultWithId should return 3 with id", () => {
        expect(getResultWithId(2)).toBe({ number: 3, id });
    });

    test("provide 3 to getResultWithId should return 4 with id", () => {
        expect(getResultWithId(3)).toBe({ number: 4, id});
    });
});