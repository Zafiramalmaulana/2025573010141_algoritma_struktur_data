let a = 17;
let b = 5;

console.log('=== Aritmatika ===');
console.log(`${a} + ${b} = ${a + b}`); 
console.log(`${a} - ${b} = ${a - b}`);
console.log(`${a} * ${b} = ${a * b}`); 
console.log(`${a} / ${b} = ${a / b}`); 
console.log(`${a} % ${b} = ${a % b}`); 
console.log(`${a} ** ${b} = ${a ** b}`);

console.log('=== Perbandingan ===');
console.log('10 > 5 :', 10 > 5); 
console.log('10 < 5 :', 10 < 5); 
console.log('10 >= 10 :', 10 >= 10);
console.log('10 <= 9 :', 10 <= 9); 

console.log('--- Perbedaan == dan === ---');
console.log('5 == "5" :', 5 == '5'); 
console.log('5 === "5" :', 5 === '5'); 
console.log('5 !== 3 :', 5 !== 3); 

console.log('=== Logika ===');
let sudahMakan = true;
let punyaUang = false;

console.log('Makan && Uang :', sudahMakan && punyaUang); 

console.log('Makan || Uang :', sudahMakan || punyaUang);

console.log('!sudahMakan :', !sudahMakan);
console.log('!punyaUang :', !punyaUang); 


            //latihan 1 //
            // Program Rotasi Titik

let x = 5;
let y = 3;
let sudut = 33.42; // derajat

// konversi derajat ke radian
let rad = sudut * Math.PI / 180;

// rumus rotasi
let xBaru = x * Math.cos(rad) - y * Math.sin(rad);
let yBaru = x * Math.sin(rad) + y * Math.cos(rad);

console.log("Titik awal :", x, y);
console.log("Sudut rotasi :", sudut, "derajat");
console.log("Titik setelah rotasi :");
console.log("x' =", xBaru.toFixed(2));
console.log("y' =", yBaru.toFixed(2));