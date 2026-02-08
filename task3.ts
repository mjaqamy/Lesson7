// Напишите функцию, которая найдет максимальное и минимальное число в массиве

const array: number[] = [5, 2, -4, -8, 23, 55, 34, 0, 8];

function findMinMax(arr: number[]) {
  if (!arr.length) {
    return " ";
  }
  let min = arr[0] as number;
  let max = arr[0] as number;

  for (const value of arr) {
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
  }
  return `min value: ${min}, max value: ${max}`;
}
console.log(findMinMax(array));
