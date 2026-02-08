// Написать функцию, которая возвращает объект в виде ключ (элемент массива) и значение (сколько раз элемент повторяется)

const array: string[] = ["orange", "apple", "banana", "apple", "orange", "orange"];

//const result: Record<string, number> = { orange: 3, apple: 2, banana: 1 };

function parseArrray(arr: string[]) {
  const result: Record<string, number> = {};
  for (const value of arr) {
    if (result[value]) {
      result[value]++;
    } else {
      result[value] = 1;
    }
  }
  return result;
}
console.log(parseArrray(array));
