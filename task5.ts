// Написать функцию, которая разворачивает вложенные массивы в один

const array = [1, [2, 3], [4], 5, [6, 7, 8]];

//const result = [1, 2, 3, 4, 5, 6, 7, 8];
function expand(arr: (number | number[])[]) {
  const result: number[] = [];

  for (const value of arr) {
    if (Array.isArray(value)) {
      // если элемент — массив
      for (const element of value) {
        // прохожусь по элементам вложенного массива
        result.push(element); // добавляю элемент в результат
      }
    } else {
      // если элемент — число
      result.push(value); // добавляю число в результат
    }
  }
  return result;
}
console.log(expand(array));
// console.log(array.flat(Infinity)); // решение в одну строку без цикла
