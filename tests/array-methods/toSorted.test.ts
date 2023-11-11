import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/toSorted';

describe('toSorted', () => {
  it('First exercise: should sort numbers', () => {
    const input = [3, 1, 4, 1, 5, 9, 2];
    const output = [1, 1, 2, 3, 4, 5, 9];

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should sort fruits', () => {
    const input = ['banana', 'manzana', 'pera'];
    const output = ['banana', 'manzana', 'pera'];

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should sort people by age', () => {
    const input = [{ edad: 30 }, { edad: 20 }, { edad: 25 }];
    const output = [{ edad: 20 }, { edad: 25 }, { edad: 30 }];

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
