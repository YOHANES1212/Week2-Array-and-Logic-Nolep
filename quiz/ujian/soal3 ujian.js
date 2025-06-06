// ## Soal 3
// ```js
// /*
// diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
// fungsi ini akan me-return array 2 dimensi
// */
// function groupAnimals(animals) {
//   // you can only write your code here!
// }

// // TEST CASES
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// // [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
// ```

function groupAnimals(arr){
    arr.sort()

    let simpan = []
    for(let i = 0; i < arr.length; i++){
        let hewan = arr[i]
        let hurufAwal = hewan[0]

        let kelompok = false;
        for(let j = 0; j < simpan.length; j++){
            if(simpan[j][0][0] === hurufAwal){
                simpan[j].push(hewan);
                kelompok = true;
                break;
            }
        }

        if(!kelompok){
            simpan.push([hewan])
        }
    }

    return simpan;

}

console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]