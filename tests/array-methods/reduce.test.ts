import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/reduce';

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

describe('Reduce', () => {
  it('First exercise: should sum all numbers', () => {
    const input = [1, 2, 3, 4];
    const output = 10;

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should concatenate all words', () => {
    const input = ['JavaScript', 'es', 'genial'];
    const output = 'JavaScript es genial';

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should sum all quantities', () => {
    const input = [{ cantidad: 2 }, { cantidad: 3 }, { cantidad: 5 }];
    const output = 10;

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
