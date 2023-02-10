export default function maxIntChain(n: number): number {
  if (n < 5) return -1;
  const half = n / 2;
  const isEven = n % 2 === 0;

  return isEven ? (half + 1) * (half - 1) : Math.ceil(half) * Math.floor(half);
}
