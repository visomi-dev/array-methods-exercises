// ### **Ejercicio 1: Filtrado y Mapeo**

// **Input:**

// ```jsx
// const productos = [
//   { nombre: "Televisor", precio: 300, categoria: "Electrónica" },
//   { nombre: "Libro", precio: 20, categoria: "Literatura" },
//   { nombre: "Computadora", precio: 800, categoria: "Electrónica" },
//   { nombre: "Silla", precio: 100, categoria: "Muebles" }
// ];
// ```

// **Instrucciones:**
// Escribe una función que utilice **`filter`** y **`map`** para obtener los nombres de todos los productos de la categoría "Electrónica" que tengan un precio mayor a 250.

// **Output esperado:**

// ```jsx
// ["Televisor", "Computadora"]
// ```

// ### **Ejercicio 2: Reducción y Búsqueda**

// **Input:**

// ```jsx
// const numeros = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10];
// ```

// **Instrucciones:**
// Crea una función que use **`reduce`** para calcular la suma de los números. Luego, utiliza **`find`** para encontrar el primer número que es mayor que la media de la suma.

// **Output esperado:**

// ```jsx
// // Suponiendo que la suma es 55 y la media es 5.5, el primer número mayor que 5.5 es 6
// 6
// ```

// ### **Ejercicio 3: Comprobación y Concatenación**

// **Input:**

// ```jsx
// const palabras = ["manzana", "banana", "cereza", "datil", "frambuesa"];
// ```

// **Instrucciones:**
// Desarrolla una función que primero use **`every`** para comprobar si todas las palabras tienen más de 5 letras. Luego, utiliza **`join`** para concatenar todas las palabras en una sola cadena, separadas por un guion ("-").

// **Output esperado:**

// ```jsx
// // Si todas las palabras tienen más de 5 letras, el resultado será:
// "manzana-banana-cereza-datil-frambuesa"
// // De lo contrario, simplemente devuelve false
// false
// ```

// Estos ejercicios ayudarán a practicar la combinación de diferentes métodos de arrays en JavaScript de una manera interesante y desafiante.

export function firstExercise(
  input: Array<{ nombre: string; precio: number; categoria: string }>,
): string[] {
  return input
    .filter(
      (product) => product.categoria === 'Electrónica' && product.precio > 250,
    )
    .map((product) => product.nombre);
}

export function secondExercise(input: number[]): number | undefined {
  const media = input.reduce((acc, el) => acc + el, 0) / input.length;
  console.log(media);
  return input
    .sort(function (a, b) {
      return a - b;
    })
    .find((element) => element > media);
}

export function thirdExercise(input: string[]): string | boolean {
  const condi = input.every((word) => word.length >= 5);

  if (condi) {
    return input.join('-');
  } else {
    return condi;
  }
}
