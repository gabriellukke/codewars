import maxIntChain from '.';

describe('maxIntChain', () => {
  it("Example Test Cases", () => {
    expect(maxIntChain(6)).toStrictEqual(8);
    expect(maxIntChain(10)).toStrictEqual(24);
    expect(maxIntChain(26)).toStrictEqual(168);
    expect(maxIntChain(32)).toStrictEqual(255);
    expect(maxIntChain(36)).toStrictEqual(323);
    expect(maxIntChain(39)).toStrictEqual(380);
  });

  it("Prime Integers", () => {
    expect(maxIntChain(5)).toStrictEqual(6);
    expect(maxIntChain(7)).toStrictEqual(12);
    expect(maxIntChain(11)).toStrictEqual(30);
    expect(maxIntChain(13)).toStrictEqual(42);
    expect(maxIntChain(17)).toStrictEqual(72);
  });

  it("Starting integer less than 5", () => {
    expect(maxIntChain(1)).toStrictEqual(-1);
    expect(maxIntChain(2)).toStrictEqual(-1);
    expect(maxIntChain(3)).toStrictEqual(-1);
    expect(maxIntChain(4)).toStrictEqual(-1);
  });
});

