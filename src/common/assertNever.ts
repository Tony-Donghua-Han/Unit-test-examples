export function assertNever(_x: never, message: string): never {
    throw new Error(message);
}