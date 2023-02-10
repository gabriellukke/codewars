export default function moveZeros(arr: Array<string|number|boolean>): Array<string|number|boolean> {
  const zeros = arr.filter((el) => el === 0);
  const nonZeros = arr.filter((el) => el !== 0);
  return [...nonZeros, ...zeros];
}

