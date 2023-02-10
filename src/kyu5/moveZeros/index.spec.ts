import moveZeros from '.';

describe('moveZeros', () => {
  it('should move zeros to the end', () => {
    expect.assertions(3);

    expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toStrictEqual([
      false, 1, 1, 2, 1, 3, 'a', 0, 0,
    ]);
    expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([
      1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
    ]);
    expect(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])).toStrictEqual([
      1, 2, 1, 1, 3, 1, 0, 0, 0, 0,
    ]);
  });
});

