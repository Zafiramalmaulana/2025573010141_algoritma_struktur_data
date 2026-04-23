const mahasiswa = {
  nama: "eric garcia",
  umur: 20,
  jurusan: "Teknik Informatika",
  ipk: 3.9,
  aktif: true,
};

console.log("=== Akses Property ===");
console.log("Nama :", mahasiswa.nama);
console.log("Jurusan :", mahasiswa["jurusan"]);
const keyYangDicari = "ipk";
console.log("IPK :", mahasiswa[keyYangDicari]);

mahasiswa.email = "budi@email.com";
mahasiswa.umur = 21;
console.log("\nSetelah diubah:", mahasiswa);

delete mahasiswa.aktif;
console.log("Setelah delete:", mahasiswa);

const dosen = {
  nama: "Dr. Ahmad Fauzi",
  mataKuliah: "Struktur Data",
  pengalaman: 10,

  perkenalan() {
    return "Halo, saya ${this.nama}, mengajar ${this.mataKuliah}.";
  },
  statusSenior() {
    if (this.pengalaman >= 10) {
      return "${this.nama} adalah dosen senior.";
    }
    return "{this.nama} adalah dosen junior.";
  },
};
console.log("\n=== Method Object ===");
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());

console.log("\n=== literasi object ===");
for (const key in dosen) {
  if (typeof dosen[key] !== "function") {
    console.log("{key}:${dosen[key]}");
  }
}
console.log("keys :", Object.keys(mahasiswa));
console.log("values:", Object.values(mahasiswa));

///LATIHAN NO 1///

const buku = {
  judul: "Pemrograman JavaScript",
  pengarang: "Andi Setiawan",
  tahunTerbit: 2022,
  harga: 100000,
  tersedia: true,

  info: function () {
    return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
  },

  diskon: function (persen) {
    return this.harga * (1 - persen / 100);
  },
};

console.log(buku.info());

console.log("Harga setelah diskon 10%: Rp" + buku.diskon(10));

const koleksiBuku = [
  {
    judul: "Belajar HTML",
    pengarang: "Budi Santoso",
    tahunTerbit: 2020,
    harga: 75000,
    tersedia: true,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },

  {
    judul: "Belajar CSS",
    pengarang: "Siti Aminah",
    tahunTerbit: 2021,
    harga: 85000,
    tersedia: false,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },

  {
    judul: "Belajar JavaScript",
    pengarang: "Rudi Hartono",
    tahunTerbit: 2023,
    harga: 95000,
    tersedia: true,

    info: function () {
      return `Judul: ${this.judul}, Pengarang: ${this.pengarang}, Tahun: ${this.tahunTerbit}, Harga: Rp${this.harga}, Tersedia: ${this.tersedia}`;
    },
  },
];

console.log("=== Semua Buku ===");
koleksiBuku.forEach(function (buku) {
  console.log(buku.info());
});

const bukuTersedia = koleksiBuku.filter(function (buku) {
  return buku.tersedia === true;
});

console.log("=== Buku yang Tersedia ===");
bukuTersedia.forEach(function (buku) {
  console.log(buku.info());
});
