import { assertNever } from "./common/assertNever";

export enum Cases {
  caseOne = 1,
  caseTwo = 2,
}

export function switchCases(input: Cases) {
  switch (input) {
    case Cases.caseOne:
      return 1;
    case Cases.caseTwo:
      return 2;
    default:
      assertNever(input, "This should never happen");
  }
}
