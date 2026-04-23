const dataMahasiswa = [
  { nama: "zafir", nilai: 80 },
  { nama: "nopal", nilai: 75 },
  { nama: "riyan", nilai: 80 },
  { nama: "daniel", nilai: 90 },
  { nama: "donadoni", nilai: 70 },
  { nama: "ridwan", nilai: 85 },
];
function hitungStatistik(arrMahasiswa) {
  const total = arrMahasiswa.length;
  const sum = arrMahasiswa.reduce((acc, mhs) => acc + mhs.nilai, 0);
  const rataRata = sum / total;

  const nilaiList = arrMahasiswa.map((mhs) => mhs.nilai);
  const tertinggi = Math.max(...nilaiList);
  const terendah = Math.min(...nilaiList);

  return {
    total,
    rataRata,
    tertinggi,
    terendah,
  };
}
function filterLulus(arrMahasiswa, batasLulus) {
  return arrMahasiswa.filter((mhs) => mhs.nilai >= batasLulus);
}
function tambahGrade(arrMahasiswa) {
  return arrMahasiswa.map((mhs) => {
    let grade = "";

    if (mhs.nilai >= 85) grade = "A";
    else if (mhs.nilai >= 75) grade = "B";
    else if (mhs.nilai >= 65) grade = "C";
    else if (mhs.nilai >= 50) grade = "D";
    else grade = "E";

    return {
      ...mhs,
      grade,
    };
  });
}

const statistik = hitungStatistik(dataMahasiswa);
const mahasiswaLulus = filterLulus(dataMahasiswa, 75);
const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

console.log("=== Statistik ===");
Object.entries(statistik).forEach(([key, value]) => {
  console.log(`${key}: ${value}`);
});

console.log("\n=== Mahasiswa Lulus ===");
mahasiswaLulus.forEach((mhs) => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}`);
});

console.log("\n=== Mahasiswa dengan Grade ===");
mahasiswaDenganGrade.forEach((mhs) => {
  console.log(`Nama: ${mhs.nama}, Nilai: ${mhs.nilai}, Grade: ${mhs.grade}`);
});
