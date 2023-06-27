export interface VeryComplexInput {
    number: number;
    extraValue: number;
    extraValueTwo: number;
}

export function existingInputPlusOneFunction(input: VeryComplexInput) {
    // return a random number between 1 to 4 if extra value and extra value two are not as specified
    if (input.extraValue != 271 || input.extraValueTwo != 284) return Math.floor(Math.random() * 3) + 10;
    return input.number + 1;
}

export function existingInputPlusTwoFunction(input: VeryComplexInput) {
    // return a random number between 1 to 4 if extra value and extra value two are as specified
    if (input.extraValue != 271 || input.extraValueTwo != 284) return Math.floor(Math.random() * 3) + 10;
    return input.number + 2;
}