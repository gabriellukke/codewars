export default function maxIntChain(n: number): number {
  if (n < 5) return -1;

  let half = 0;
  let biggest = 0;
  let chain = 0;

  const isOdd = n % 2 === 1;
  if (isOdd) {
    half = n / 2;
    biggest = Math.ceil(half);
    chain = biggest - 1;

  } else {
    half = n / 2;
    biggest = half + 1;
    chain = half - 1;
  }
  return biggest * chain;
}
