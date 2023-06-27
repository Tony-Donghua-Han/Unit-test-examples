interface twoNumbers {
    first: number;
    second: number;
}

export function getFirstNumber(input: twoNumbers) {
    return input.first;
}

export function sumNumber(input: twoNumbers) {
    return input.first + input.second;
}

