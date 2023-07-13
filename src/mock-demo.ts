import { generateId } from "./common/generateId";

export interface ComplexResult {
  number: number;
  id: string;
}

export function getResultWithId(input: number): ComplexResult {
  return { number: input + 1, id: generateId() };
}
