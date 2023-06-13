import { switchCases } from "../coverage";

describe("coverage tests", () => {
  test("switchCases should return 1", () => {
    expect(switchCases(1)).toBe(1);
  });

  test("switchCases should return 2", () => {
    expect(switchCases(2)).toBe(2);
  });
});
