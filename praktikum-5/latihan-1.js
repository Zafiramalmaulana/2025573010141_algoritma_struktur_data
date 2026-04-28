function hitungKompleksitas(n, fn) {
  const start = Date.now();
  fn(n);
  const end = Date.now();
  console.log(`Waktu eksekusi untuk n=${n}: ${end - start} ms`);
}

// Fungsi A
function fnA(n) {
  return n * 2;
}
// Big O: O(1)
// Alasan: Operasi tetap, tidak bertambah walaupun n besar

// Fungsi B

// Nested loop (2 lapis)
function fnB(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(i, j);
    }
  }
}
// Big O: O(n^2)
// Alasan: Loop dalam loop → n * n = n²

// Fungsi C
function fnC(n) {
  for (let i = 1; i < n; i *= 2) {
    console.log(i);
  }
}
// Big O: O(log n)
// Alasan: Pertumbuhan eksponensial (1 → 2 → 4 → 8 ...)

// Fungsi D
function fnD(n) {
  const arr = Array.from({ length: n }, (_, i) => i);

  arr.forEach((x) => {
    arr.forEach((y) => {
      arr.forEach((z) => {
        console.log(x, y, z);
      });
    });
  });
}
// Big O: O(n^3)
// Alasan: 3 loop bersarang → n * n * n = n³

const n = 1000;

console.log("=== Fungsi A ===");
hitungKompleksitas(n, fnA);

console.log("=== Fungsi B ===");

hitungKompleksitas(n, fnB);

console.log("=== Fungsi C ===");
hitungKompleksitas(n, fnC);

console.log("=== Fungsi D ===");
