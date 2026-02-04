// Написать функцию, которая проверяет является ли слово палиндромом

const word1 = "Анна";
const word2 = "Кабак";
const word3 = "Кот";

function checkPalindrome(word: string) {
  return word.toLowerCase().split("").reverse().join("") === word.toLowerCase();
}
console.log(checkPalindrome(word3));
