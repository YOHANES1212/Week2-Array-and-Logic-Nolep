```js
/*
Diberikan sebuah function palindrome(kata) yang menerima satu parameter. Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan. Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama. Contoh, 'katak' dibalik tetaplah 'katak'.
*/

function palindrome(kata) {
  // you can only write your code here!
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false
```;
function palindrome(kata) {
  let result = kata.split("").reverse().join("");
  return result === kata;
}

console.log(palindrome("katak"));
console.log(palindrome("blanket"));
console.log(palindrome("civic"));
console.log(palindrome("kasur rusak"));
console.log(palindrome("mister"));
