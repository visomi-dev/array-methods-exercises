export function firstExerciseForEach(): void {
  const input = [3, 1, 4, 1, 5, 9, 2];

  input.forEach((item, index) => {
    console.log(`Item ${index}: ${item}`);
  });
}

export function secondExerciseIncludes(): void {
  const input = [3, 1, 4, 1, 5, 9, 2];

  const result = input.includes(3);

  console.log(result);
}

export function thirdExerciseIndexOf(): void {
  const input = [3, 1, 4, 1, 5, 9, 2];

  const result = input.indexOf(3);

  console.log(result);
}

export function fourthExerciseJoin(): void {
  const input = [3, 1, 4, 1, 5, 9, 2];

  const result = input.join('-');

  console.log(result);
}
