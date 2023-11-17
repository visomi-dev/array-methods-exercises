export function firstExercise(input: number[]): number | undefined {
  return input.find((number) => number > 10);
}

export function secondExercise(input: string[]): string | undefined {
  return input.find((word) => word.startsWith('A'));
}

export function thirdExercise(input: Array<{ nombre: string }>): {
  nombre: string;
} {
  const nom = input.find((nomb) => nomb.nombre.length >= 4);
  if (nom !== undefined) {
    return nom;
  } else {
    return { nombre: '' };
  }
}
