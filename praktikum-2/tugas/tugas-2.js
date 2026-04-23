// Deklarasi variabel
const beratBadan = 56; // dalam kg
const tinggiBadan = 1.74; // dalam meter

// Hitung BMI
let bmi = beratBadan / (tinggiBadan * tinggiBadan);

// Membulatkan ke 2 angka desimal
bmi = bmi.toFixed(2);

// Menentukan kategori BMI
let kategori = "";

if (bmi < 18.5) {
    kategori = "Kurus (Underweight)";
} else if (bmi >= 18.5 && bmi <= 24.9) {
    kategori = "Normal (Ideal)";
} else if (bmi >= 25.0 && bmi <= 29.9) {
    kategori = "Kelebihan Berat Badan (Overweight)";
} else {
    kategori = "Obesitas (Obese)";
}

// Menampilkan hasil
console.log(`Berat: ${beratBadan} kg | Tinggi: ${tinggiBadan} m | BMI: ${bmi} | Kategori: ${kategori}`);