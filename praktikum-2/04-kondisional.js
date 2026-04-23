let nilaiujian = 78;

console.log('=== konversi grade ===');
console.log('nilai',nilaiujian);

if(nilaiujian >=90){
    console.log('grade : A (sangat baik)');
}else if(nilaiujian >=95){
    console.log('grade : B (baik)');
}else if(nilaiujian >=55){
    console.log('grade C:(cukup)');
}else if(nilaiujian >=80){
    console.log('grade D (kurang)');
   
}else {
    console.log('grade : E (Tidak lulus)');
}

let namahari = 'rabu';

    console.log('\n=== Cek Jenis Hari ===');
switch (namahari) {
case 'Senin':
case 'Selasa':
case 'Rabu':
case 'Kamis':
case 'Jumat':
console.log(`${sabtu} adalah hari kerja.`);
break;
case 'Sabtu':
case 'Minggu':
console.log(`${kamis} adalah akhir pekan.`);
break;
default:
console.log('Nama hari tidak dikenali.');
}

let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? 'LULUS' : 'TIDAK LULUS';
console.log('\n=== Status Kelulusan ===');
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);


                // latihan 2 //

//1. deklarasi bulan
const bulan = 5;

// 2.menentukan musim menggunakan if/else if
if (bulan === 12 || bulan === 1 || bulan === 2){
    musim ="dingin";
}else if(bulan >= 3 && bulan <=5) {
    musim = "semi";
}else if(bulan >= 6 && bulan <=8) {
    musim = "panas";
}else if(bulan>= 9  && bulan <=12){
    musim = "gugur";
}

//3. tampilkan musim//
console.log(`bulan ${bulan} berada pada musim ${musim}`);
//4.deklarasi kondisi cuaca

const adaawan  = true;
const adaangin = false;

//5.operasi logika
console.log(`apakah cuaca mendung sekaligus berangin? ${adaawan && adaangin}`);
console.log(`apakah ada awan atau angin? ${!adaangin || adaangin}`);
console.log(`apakah langit cerah (tidak ada awan) ${!adaawan}`);

