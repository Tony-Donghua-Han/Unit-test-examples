import { existingInputPlusOneFunction, existingInputPlusTwoFunction } from "./existing-code";

export function inputPlusOne(input: number) {
    return existingInputPlusOneFunction({ number: input, extraValue: 0, extraValueTwo: 0 });
}

export function inputPlusTwo(input: number) {
    return existingInputPlusTwoFunction({ number: input, extraValue: 0, extraValueTwo: 0 });
}