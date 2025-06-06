// ## Soal 1
// ```js
// /*
// Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', ' ', 'o', ' ', ' ', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.
// */
// function targetTerdekat(arr) {
//   // you can only write your code here!
// }

// // TEST CASES
// console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
// console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
// console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
// console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
// console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1
// ```

function targetTerdekat(arr){
    let posisiO;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'o'){
            posisiO = i;
            break;
        }
    }

    if(posisiO === undefined) return 0;

    let result = Infinity;

    for(let j = 0; j < arr.length; j++){
        if(arr[j] === 'x'){
            let jarak = Math.abs(j - posisiO);
            if(jarak < result){
                result = jarak;
            }
        }
    }

    if(result === Infinity) return 0;

    return result;
}


console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', 'o', ' ', 'x'])); // 1