function sapa() {
  console.log("Halo! Selamat datang di praktikum JavaScript.");
}
sapa();
sapa();
function sapaNama(nama) {
  console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama("Budi");
sapaNama("Siti");

function tambah(angka1, angka2) {
  const hasil = angka1 + angka2;
  return hasil;
}
const hasilPenjumlahan = tambah(10, 25);
console.log("10 + 25 =", hasilPenjumlahan);
console.log("7 + 13 =", tambah(7, 13));

function hitung(nilai, pengali = 2) {
  return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));
const pesanGlobal = "Saya ada di mana saja";
function cekScope() {
  const pesanLokal = "Saya hanya ada di dalam function ini"; // local scope
  console.log(pesanGlobal);
  console.log(pesanLokal);
}
cekScope();
console.log(pesanGlobal);


//LATIHAN NO 1//
function tambah(a, b) {
  return a + b;
}
function kurang(a, b) {
  return a - b;
}
function perkalian(a, b) {
  return a * b;
}
function pembagian(a, b) {
  if (b === 0) {
    console.log("error:tidak bisa dibagi dengan nol");
    return null;
  }
  return a / b;
}
function kalkulator(a, operator, b) {
  switch (operator) {
    case "+":
      return tambah(a, b);
    case "-":
      return kurang(a, b);
    case "*":
      return perkalian(a, b);
    case "/":
      return pembagian(a, b);
    default:
      console.log("operator tidak ditemukan");
      return null;
  }
}
console.log("10+15 =", kalkulator(10, "+", 15));
console.log("100-30 =", kalkulator(100, "-", 30));
console.log("25*55 =", kalkulator(25, "*", 55));
console.log("10/2=", kalkulator(10, "/", 2));
console.log("20/0=", kalkulator(20, "/", 0));
