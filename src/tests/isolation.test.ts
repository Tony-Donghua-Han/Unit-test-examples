import { getFirstNumber, sumNumber } from "../isolation";

const testObject = { first: 1, second: 2 };

describe("isolation", () => {
  test("getTestNumber should return 1", () => {
    expect(getFirstNumber(testObject)).toBe(1);
  });

  test("getTestNumberPlusPlus should return 2", () => {
    expect(sumNumber(testObject)).toBe(3);
  });
});
