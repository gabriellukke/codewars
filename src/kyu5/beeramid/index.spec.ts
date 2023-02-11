import beeramid from '.';

describe('beeramid', () => {
  it('should return the number of complete levels', () => {
    expect(beeramid(9, 2)).toBe(1);
    expect(beeramid(10, 2)).toBe(2);
    expect(beeramid(11, 2)).toBe(2);
    expect(beeramid(21, 1.5)).toBe(3);
    expect(beeramid(454, 5)).toBe(5);
    expect(beeramid(455, 5)).toBe(6);
    expect(beeramid(4, 4)).toBe(1);
    expect(beeramid(3, 4)).toBe(0);
    expect(beeramid(0, 4)).toBe(0);
    expect(beeramid(-1, 4)).toBe(0);
  });
});

