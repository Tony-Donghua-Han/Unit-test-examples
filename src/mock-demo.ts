import { v4 as uuidV4 } from "uuid";

export interface ComplexResult {
  number: number;
  id: string;
}

export function getResultWithId(input: number): ComplexResult {
  return { number: input + 1, id: uuidV4() };
}
