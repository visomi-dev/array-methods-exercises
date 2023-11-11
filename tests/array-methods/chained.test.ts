import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/chained';

describe('Chained', () => {
  // Escribe una función que utilice **`filter`** y **`map`** para obtener los nombres de todos los productos de la categoría "Electrónica" que tengan un precio mayor a 250.
  it('First exercise: should return the names of the products', () => {
    const input = [
      { nombre: 'Televisor', precio: 300, categoria: 'Electrónica' },
      { nombre: 'Libro', precio: 20, categoria: 'Literatura' },
      { nombre: 'Computadora', precio: 800, categoria: 'Electrónica' },
      { nombre: 'Silla', precio: 100, categoria: 'Muebles' },
    ];
    const output = ['Televisor', 'Computadora'];

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  // Crea una función que use **`reduce`** para calcular la suma de los números. Luego, utiliza **`find`** para encontrar el primer número que es mayor que la media de la suma.
  it('Second exercise: should return the first number greater than the average', () => {
    const input = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
    const output = 6;

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  // Desarrolla una función que primero use **`every`** para comprobar si todas las palabras tienen más de 5 letras. Luego, utiliza **`join`** para concatenar todas las palabras en una sola cadena, separadas por un guion ("-").
  it('Third exercise: should return the concatenation of the words', () => {
    const input = ['manzana', 'banana', 'cereza', 'datil', 'frambuesa'];
    const output = 'manzana-banana-cereza-datil-frambuesa';

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
