export default function beeramid(bonus: number, price: number): number {
  let levels = 0;
  let beers = bonus / price;
  while (beers > 0) {
    beers -= Math.pow(levels + 1, 2);
    if (beers >= 0) {
      levels++;
    }
  }
  return levels;
}
