export function firstExercise(input: number[]): boolean {
  return input.every((number) => number % 2 === 0);
}

export function secondExercise(input: string[]): boolean {
  return input.every((word) => word.length >= 3);
}

export function thirdExercise(input: Array<{ activo: boolean }>): boolean {
  return input.every((property) => property.activo);
}
