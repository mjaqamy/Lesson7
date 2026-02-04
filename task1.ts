// Написать функцию, которая будет удалять дубликаты из массива, при этом исходный массив не меняется

// Использовать наиболее быстрое решение

const array: number[] = [1, 5, 7, 8, 5, 8, 3];
function deleteDublicates(arr: number[]) {
  const result: number[] = [];
  for (const value of arr) {
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  return result;
}
console.log(deleteDublicates(array));
