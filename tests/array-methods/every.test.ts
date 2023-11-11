import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/every';

describe('Every', () => {
  it('First exercise: should check if all numbers are even', () => {
    const input = [2, 4, 6, 8, 10];
    const output = true;

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should check if all words have more than 3 letters', () => {
    const input = ['gato', 'perro', 'pez'];
    const output = true;

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should check if all elements have the property activo as true', () => {
    const input = [{ activo: true }, { activo: true }, { activo: false }];
    const output = false;

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
