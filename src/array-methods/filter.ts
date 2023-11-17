export function firstExercise(input: number[]): number[] {
  return input.filter((number) => number > 3);
}

export function secondExercise(input: string[]): string[] {
  return input.filter((word) => word.length > 4);
}

export function thirdExercise(
  input: Array<{ edad: number }>,
): Array<{ edad: number }> {
  return input.filter((person) => person.edad > 18);
}
