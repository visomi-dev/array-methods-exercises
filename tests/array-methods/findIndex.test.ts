import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/findIndex';

describe('FindIndex', () => {
  it('First exercise: should return the index of the first number greater than 10', () => {
    const input = [5, 12, 8, 130, 44];
    const output = 1;

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should return the index of the first fruit that starts with m', () => {
    const input = ['pera', 'manzana', 'plátano'];
    const output = 1;

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should return the index of the first person whose name has 5 letters', () => {
    const input = [{ nombre: 'Ana' }, { nombre: 'Bob' }, { nombre: 'Charlie' }];
    const output = 2;

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
