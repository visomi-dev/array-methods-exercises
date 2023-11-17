export function firstExercise(input: number[]): boolean {
  return input.some((number) => number % 2 === 0);
}

export function secondExercise(input: string[]): boolean {
  return input.some((word) => word.length < 4);
}

export function thirdExercise(input: Array<{ edad: number }>): boolean {
  return input.some((people) => people.edad > 18);
}
