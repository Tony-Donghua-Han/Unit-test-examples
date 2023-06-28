import { v4 as uuidv4 } from "uuid";

export interface ComplexResult {
    number: number;
    id: string;
}

export function getResultWithId(input: number): ComplexResult {
    return { number: input + 1, id: uuidv4() };
}

