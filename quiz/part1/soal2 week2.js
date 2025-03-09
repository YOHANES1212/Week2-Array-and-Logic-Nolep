`pada soal yg kedua, kalian harus belajar method splice, slice, join, 'split', dan lainnya````js
let input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling(input) {

}

dataHandling2(input);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
```;
let input = [
  "0001",
  "Roman Alamsyah ",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling(input) {
  input[1] = "Roman Alamsyah Elsharawy";
  input[2] = "Provinsi " + input[2];
  input.push("Pria", "SMA Internasional Metro");
  console.log(input);

  let dateParts = input[3].split("/");
  let month = dateParts[1];
  let monthName;
  switch (month) {
    case "01":
      monthName = "Januari";
      break;
    case "02":
      monthName = "Februari";
      break;
    case "03":
      monthName = "Maret";
      break;
    case "04":
      monthName = "April";
      break;
    case "05":
      monthName = "Mei";
      break;
    case "06":
      monthName = "Juni";
      break;
    case "07":
      monthName = "Juli";
      break;
    case "08":
      monthName = "Agustus";
      break;
    case "09":
      monthName = "September";
      break;
    case "10":
      monthName = "Oktober";
      break;
    case "11":
      monthName = "November";
      break;
    case "12":
      monthName = "Desember";
      break;
  }
  console.log(monthName);

  let formattedDate = [dateParts[2], dateParts[0], dateParts[1]];
  console.log(formattedDate);

  let hyphenDate = dateParts.join("-");
  console.log(hyphenDate);

  let shortName = input[1].slice(0, 15);
  console.log(shortName);
}
