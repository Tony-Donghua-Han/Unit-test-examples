export interface ComplexResult {
    number: number;
    id: number;
}

export function getResultWithId(input: number): ComplexResult {
    return { number: input + 1, id: Math.random() };
}
