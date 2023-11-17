export function firstExercise(input: number[]): number {
  return input.findIndex((number) => number > 10);
}

export function secondExercise(input: string[]): number {
  return input.findIndex((word) => word.startsWith('m'));
}

export function thirdExercise(input: Array<{ nombre: string }>): number {
  return input.findIndex((person) => person.nombre.length > 5);
}
