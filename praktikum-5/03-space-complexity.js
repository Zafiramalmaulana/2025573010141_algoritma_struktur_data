// --- O(1) Space: hanya pakai variabel tambahan konstan ---
function jumlahArray(arr) {
    let total = 0; // hanya 1 variabel tambahan
    for (const x of arr) total += x;
    return total;
}
// --- O(n) Space: membuat struktur baru sebesar input ---
function duplikasiArray(arr) {
    const baru = []; // array baru tumbuh seiring arr
    for (const x of arr) baru.push(x * 2);
    return baru;
}
// --- O(n) Space: rekursi (call stack) ---
function faktorialRekursif(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursif(n - 1); // n frame di call stack
}
// --- O(1) Space: faktorial iteratif ---
function faktorialIteratif(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i; // hanya 2 variabel
    return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Jumlah array :', jumlahArray(arr)); // O(1) space
console.log('Duplikasi array:', duplikasiArray(arr)); // O(n) space
console.log('Faktorial 10 rekursif :', faktorialRekursif(10));
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));
// Visualisasi: hitung elemen unik (O(n) space)
function hitungUnik(arr) {
    const seen = new Set(); // Set tumbuh hingga n elemenfor (const x of arr) seen.add(x);
    return seen.size;
}
const dataAcak = [1, 2, 3, 2, 1, 4, 5, 3, 6, 4, 7];
console.log('Elemen unik:', hitungUnik(dataAcak)); // 7


// 1. METODE LAMBAT (NESTED LOOP)
function cariPasanganLambat(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}

// Big O Time: O(n²)
// Alasan: Nested loop → bandingkan semua pasangan
// Big O Space: O(1)
// Alasan: Tidak pakai struktur data tambahan

// 2. METODE CEPAT (SET)

function cariPasanganCepat(arr, target) {
  const seen = new Set();

  for (let num of arr) {
    const pasangan = target - num;

    if (seen.has(pasangan)) {
      return [pasangan, num];
    }

    seen.add(num);
  }

  return null;
}
// latihan Class bank//
// Big O Time: O(n)
// Alasan: Hanya 1 loop
// Big O Space: O(n)
// Alasan: Menyimpan data di Set

// 3. TEST CASE KECIL

const arrTest = [2, 7, 11, 15];
const targetTest = 9;

console.log("=== TEST KECIL ===");
console.log("Lambat:", cariPasanganLambat(arrTest, targetTest));
console.log("Cepat:", cariPasanganCepat(arrTest, targetTest));

// 4. FUNGSI UKUR WAKTU

function ukurWaktu(fn, arr, target) {
  const start = Date.now();
  const result = fn(arr, target);
  const end = Date.now();

  console.log(`${fn.name} → waktu: ${end - start} ms, hasil:`, result);
}

// 5. TEST BESAR (50.000 DATA)

const ukuran = 50000;

// buat array random
const arrBesar = Array.from({ length: ukuran }, () =>
  Math.floor(Math.random() * 100000),
);

// target yang hampir pasti tidak ada
const targetBesar = -1;

console.log("\n=== TEST BESAR ===");

// WARNING
ukurWaktu(cariPasanganCepat, arrBesar, targetBesar);
