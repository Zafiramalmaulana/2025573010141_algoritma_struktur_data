// SOAL 1
// subArrayJumlah(arr, k)


function subArrayJumlah(arr, k) {
    const prefixMap = new Map();
    prefixMap.set(0, 1);

    let sum = 0;
    let count = 0;

    for (const num of arr) {
        sum += num;

        if (prefixMap.has(sum - k)) {
            count += prefixMap.get(sum - k);
        }

        prefixMap.set(sum, (prefixMap.get(sum) || 0) + 1);
    }

    return count;
}

// SOAL 2
// karakterPertamaUnik(s)
function karakterPertamaUnik(s) {
    const freq = new Map();

    for (const char of s) {
        freq.set(char, (freq.get(char) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
}

// SOAL 3
// topKFrequent(arr, k)

function topKFrequent(arr, k) {
    const freq = new Map();

    for (const num of arr) {
        freq.set(num, (freq.get(num) || 0) + 1);
    }

    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map((item) => item[0]);
}

// TESTING


console.log("=== SOAL 1 ===");
console.log(subArrayJumlah([1, 1, 1], 2)); // 2

console.log(subArrayJumlah([1, 2, 3], 3)); // 2

console.log("\n=== SOAL 2 ===");
console.log(karakterPertamaUnik("leetcode")); // 0

console.log(karakterPertamaUnik("loveleetcode")); // 2

console.log(karakterPertamaUnik("aabb")); // -1

console.log("\n=== SOAL 3 ===");
console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // [1,2]

console.log(topKFrequent([4, 4, 4, 5, 5, 6], 1)); // [4]