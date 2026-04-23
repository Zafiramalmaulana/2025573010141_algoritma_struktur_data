const nilaimahasiswa = [75, 90, 55, 82, 68, 95, 48, 77];

console.log("=== forEach: Tampilkan Semua Nilai ===");
nilaimahasiswa.forEach((nilai, indeks) => {
  console.log(` Mahasiswa-${indeks + 1}: ${nilai}`);
});

const gradeHuruf = nilaimahasiswa.map((nilai) => {
  if (nilai >= 90) return "A";
  if (nilai >= 80) return "B";
  if (nilai >= 70) return "C";
  if (nilai >= 60) return "D";
  return "E";
});
console.log("\n=== map: Nilai ke Grade ===");
console.log("Nilai :", nilaimahasiswa);
console.log("Grade :", gradeHuruf);

const nilaiLulus = nilaimahasiswa.filter((nilai) => nilai >= 60);
const nilaiGagal = nilaimahasiswa.filter((nilai) => nilai < 60);
console.log("\n=== filter: Lulus dan Tidak Lulus ===");
console.log("Semua nilai :", nilaimahasiswa);
console.log("Nilai lulus :", nilaiLulus);
console.log("Nilai gagal :", nilaiGagal);

const totalNilai = nilaimahasiswa.reduce((akumulator, nilai) => {
  return akumulator + nilai;
}, 0);
const rataRata = totalNilai / nilaimahasiswa.length;
console.log("\n=== reduce: Statistik Nilai ===");
console.log("Total nilai :", totalNilai);
console.log("Rata-rata :", rataRata.toFixed(2));

const rataratanilailulus = nilaimahasiswa
  .filter((nilai) => (nilai) => 60)
  .reduce((acc, val, idx, arr) => {
    return acc + val / arr.length;
  }, 0);

console.log("\n=== method chaining ===");
console.log("rata-rata nilai lulus:", rataratanilailulus.toFixed(2));

// LATIHAN 4 //

const produk = [
  { nama: "Laptop", harga: 8500000, stok: 5 },
  { nama: "Mouse", harga: 150000, stok: 0 },
  { nama: "Keyboard", harga: 450000, stok: 12 },
  { nama: "Monitor", harga: 3200000, stok: 0 },
  { nama: "Headset", harga: 350000, stok: 8 },
];

const formatRupiah = (angka) => {
  return "Rp" + angka.toLocaleString("id-ID");
};

console.log("=== Analisis Data Produk ===\n");

const produktersedia = produk.filter((item) => item.stok > 0);
console.log("Produk Tersedia:");
console.log(produktersedia);
console.log();

console.log("Nama Produk yang Tersedia:");
console.log(produktersedia);
console.log();

const totalInventaris = produktersedia.reduce(
  (total, item) => total + item.harga * item.stok,
  0,
);
console.log("Total Nilai Inventaris:", formatRupiah(totalInventaris));
console.log();

console.log("Daftar Produk:");
produk.forEach((item) => {
  if (item.stok > 0) {
    console.log(
      `[TERSEDIA] ${item.nama} - ${formatRupiah(item.harga)} (${item.stok} unit)`,
    );
  } else {
    console.log(`[HABIS] ${item.nama} - ${formatRupiah(item.harga)}`);
  }
});
