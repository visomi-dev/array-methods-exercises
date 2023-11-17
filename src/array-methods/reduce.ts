// **Ejercicio 1:**

// - Input: **`[1, 2, 3, 4]`**
// - Ejercicio: Suma todos los números.
// - Output Esperado: **`10`**

// **Ejercicio 2:**

// - Input: **`['JavaScript', 'es', 'genial']`**
// - Ejercicio: Concatena todas las palabras en una frase.
// - Output Esperado: **`'JavaScript es genial'`**

// **Ejercicio 3:**

// - Input: **`[{ cantidad: 2 }, { cantidad: 3 }, { cantidad: 5 }]`**
// - Ejercicio: Calcula la suma total de las cantidades.
// - Output Esperado: **`10`**

export function firstExercise(input: number[]): number {
  return input.reduce(function (a, b) {
    return a + b;
  });
}

export function secondExercise(input: string[]): string {
  const espacio = ' ';
  return input.reduce((acc, word) => acc + espacio + word);
}

export function thirdExercise(input: Array<{ cantidad: number }>): number {
  const canti = input.map((number) => number.cantidad);

  return canti.reduce((acc, value) => acc + value);
}
