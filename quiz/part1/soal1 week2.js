// ```js
// /*
// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
// Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
// */
// let input = [
//                 ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
//                 ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
//                 ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
//                 ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
//             ]

// /*
// output yang diharapkan

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun
// */
// ```;
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

function dataHandling(data) {
  for (let i = 0; i < data.length; i++) {
    const id = data[i][0];
    const nama = data[i][1];
    const kota = data[i][2];
    const tanggalLahir = data[i][3];
    const hobi = data[i][4];

    console.log(`Nomor ID:  ${id}`);
    console.log(`Nama Lengkap:  ${nama}`);
    console.log(`TTL:  ${kota} ${tanggalLahir}`);
    console.log(`Hobi:  ${hobi}`);
  }
}

// console.log(dataHandling(input));
dataHandling(input);
