
    // LATIHAN 3 //
// Bagian A : Segitiga Bintang

console.log("Segitiga Bintang:");

for (let i = 1; i <= 5; i++) {      
    let bintang = "";

    for (let j = 1; j <= i; j++) {  
        bintang += "*";
    }

    console.log(bintang);
}



// Bagian B : Deret Bilangan Prima //

console.log("\nBilangan Prima 1 - 50:");

for (let i = 1; i <= 50; i++) {
    let prima = true;

    if (i < 2) {
        prima = false;
    } else {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prima = false;
                break;
            }
        }
    }

    if (prima) {
        console.log(i);
    }
}
