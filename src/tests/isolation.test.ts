import { getFirstNumber, sumNumber } from "../isolation";

const testObject = { first: 1, second: 2 };

describe("isolation", () => {
  test("getFirstNumber should return 1", () => {
    expect(getFirstNumber(testObject)).toBe(1);
  });

  test("sumNumber should return 3 (1 + 2)", () => {
    expect(sumNumber(testObject)).toBe(3);
  });
});
