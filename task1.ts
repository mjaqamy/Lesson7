// Написать функцию, которая будет удалять дубликаты из массива, при этом исходный массив не меняется

// Использовать наиболее быстрое решение

const array: number[] = [1, 5, 7, 8, 5, 8, 3];
function deleteDuplicates(arr: number[]) {
  const result: Record<string, number> = {};
  for (const value of arr) {
    if (!result[value]) {
      result[value] = value;
    }
  }
  return Object.values(result);
}
console.log(deleteDuplicates(array));
