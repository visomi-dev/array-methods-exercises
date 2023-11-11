import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/filter';

describe('Filter', () => {
  it('First exercise: should filter numbers greater than 3', () => {
    const input = [1, 2, 3, 4, 5, 6];
    const output = [4, 5, 6];

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should filter fruits with more than 4 letters', () => {
    const input = ['manzana', 'pera', 'banana', 'kiwi'];
    const output = ['manzana', 'banana'];

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should filter people older than 18', () => {
    const input = [{ edad: 18 }, { edad: 20 }, { edad: 22 }, { edad: 17 }];
    const output = [{ edad: 20 }, { edad: 22 }];

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
