import { getResultWithId } from "../mock-demo";

const id = 0.5;

describe("mock demo", () => {
    test("provide 1 to getResultWithId should return 2 with id", () => {
        expect(getResultWithId(1)).toStrictEqual({ number: 2, id });
    });

    test("provide 2 to getResultWithId should return 3 with id", () => {
        expect(getResultWithId(2)).toStrictEqual({ number: 3, id });
    });

    test("provide 3 to getResultWithId should return 4 with id", () => {
        expect(getResultWithId(3)).toStrictEqual({ number: 4, id });
    });
});
