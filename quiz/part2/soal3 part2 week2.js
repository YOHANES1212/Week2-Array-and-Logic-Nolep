// ```js
// function hitungJumlahKata(kalimat) {
//   // you can only write your code here!
// }

// // TEST CASES
// console.log(hitungJumlahKata('I have a dream')); // 4
// console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
// console.log(hitungJumlahKata('A song to sing')); // 4
// console.log(hitungJumlahKata('I')); // 1
// console.log(hitungJumlahKata('I believe I can code')); // 5
// ```

function hitungJumlahKata(kalimat){
    let kalimat_hitung = kalimat.split(" ").length
    return kalimat_hitung;
}

console.log(hitungJumlahKata('I have a dream')); 
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); 
console.log(hitungJumlahKata('A song to sing')); 
console.log(hitungJumlahKata('I')); 
console.log(hitungJumlahKata('I believe I can code')); 