function adaduplikatlambat(arr) {
    const seen = new Set();
    for (const x of arr) {
        if (seen.has(x)) return true;
    }
    return false;
}
function frekuensiLambat(arr) {
    const unik = [];
    const hitung = [];
    for (const x of arr) {
        const idx = unik.indexOf(x);
        if (idx === -1) {
            unik.push(x);
            hitung.push(1);
        } else hitung[idx]++;
    }
    return Object.fromEntries(unik.map((u, i) => [u, hitung[i]]));
}
function frekuensiCepat(arr) {
    const counter = {};
    for (const x of arr) counter[x] = (counter[x] || 0) + 1;
    return counter;
}

const besar = Array.from({ length: 20000 }, () =>
    Math.floor(Math.random() * 1000),
);

let t = Date.now();
adaduplikatlambat(besar);
console.log('duplikat CEPAT 0(n):', Date.now() - t, 'ms');

const kata = ['a', 'b', 'a', 'c', 'b', 'a', 'd'];
console.log('\nfrekuensi :', frekuensiCepat(kata));
