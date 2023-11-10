import { helloWorld } from '../src/index';

describe('helloWorld', () => {
  it('should return true when input is positive', () => {
    expect(helloWorld()).toBe('Hello, world!');
  });
});
