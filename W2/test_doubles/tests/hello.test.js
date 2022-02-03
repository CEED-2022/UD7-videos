import { hello } from '../src/hello.js';

describe('hello', () => {
  it('helloes', () => {
    expect(hello()).toBe('hello')
  });
});
