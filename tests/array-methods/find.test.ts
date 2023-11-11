import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/find';

describe('Find', () => {
  it('First exercise: should find the first number greater than 10', () => {
    const input = [5, 12, 8, 130, 44];
    const output = 12;

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should find the first framework that starts with A', () => {
    const input = ['React', 'Vue', 'Angular'];
    const output = 'Angular';

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should find the first person whose name has 4 letters', () => {
    const input = [{ nombre: 'Ana' }, { nombre: 'Luis' }, { nombre: 'Carlos' }];
    const output = { nombre: 'Luis' };

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
