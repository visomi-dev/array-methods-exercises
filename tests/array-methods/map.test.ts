import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/map';

describe('Map', () => {
  it('First exercise: should multiply each number by 2', () => {
    const input = [1, 4, 9, 16];
    const output = [2, 8, 18, 32];

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should convert each word to uppercase', () => {
    const input = ['uno', 'dos', 'tres'];
    const output = ['UNO', 'DOS', 'TRES'];

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should increment the quantity by 1', () => {
    const input = [{ cantidad: 2 }, { cantidad: 5 }, { cantidad: 3 }];
    const output = [{ cantidad: 3 }, { cantidad: 6 }, { cantidad: 4 }];

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
