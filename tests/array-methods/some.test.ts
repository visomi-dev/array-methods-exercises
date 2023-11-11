import {
  firstExercise,
  secondExercise,
  thirdExercise,
} from '../../src/array-methods/some';

describe('Some', () => {
  it('First exercise: should return false', () => {
    const input = [1, 3, 5, 7, 9];
    const output = false;

    const result = firstExercise(input);

    expect(result).toEqual(output);
  });

  it('Second exercise: should return false', () => {
    const input = ['casa', 'coche', 'ciudad'];
    const output = false;

    const result = secondExercise(input);

    expect(result).toEqual(output);
  });

  it('Third exercise: should return true', () => {
    const input = [{ edad: 18 }, { edad: 22 }, { edad: 30 }];
    const output = true;

    const result = thirdExercise(input);

    expect(result).toEqual(output);
  });
});
