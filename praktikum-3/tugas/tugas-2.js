function pangkat(basis, eksponen) {
  if (eksponen === 0) return 1;

  return basis * pangkat(basis, eksponen - 1);
}
function balikstring(str) {
  if (str === "" || str.lenght === 1) return str;

  return str[str.length - 1] + balikstring(str.slice(0, str.lenght - 1));
}
function cekpalindrom(str) {
  const hasilbalik = balikstring(str);
  return str === hasilbalik;
}

console.log("===pangkat====");
console.log("2^3= ${pangkat(2,3)}");
console.log("5^2= ${pangkat(5,2)}");
console.log("7^0 =${pangkat(7,0)}");

console.log("\n=== balik string ===");
console.log(`halo -> ${balikstring("halo")}`);
console.log(`data -> ${balikstring("data")}`);

console.log("\n=== cek palindrom ===");
const katalist = ["katak", "civic", "level", "halo"];

katalist.forEach((kata) => {
  console.log(
    '${kata} -> ${cekpalindrom(kata) ? "palindrom" : "bukan palindrom"}',
  );
});
