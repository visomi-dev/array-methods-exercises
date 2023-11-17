export function firstExercise(input: number[]): number[] {
  return input.map((number) => number * 2);
}

export function secondExercise(input: string[]): string[] {
  return input.map((word) => word.toUpperCase());
}

export function thirdExercise(
  input: Array<{ cantidad: number }>,
): Array<{ cantidad: number }> {
  return input.map((cant) => {
    return { cantidad: cant.cantidad + 1 };
  });
}
