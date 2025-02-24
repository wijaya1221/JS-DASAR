/* 
Todo Soal 1: Tipe Data Numbers & NaN
* Buat variabel hargaProduk dengan nilai 15000. Lalu buat variabel jumlahBeli dengan nilai "tiga". Hitung total harga dengan mengalikan keduanya, lalu cek apakah hasilnya adalah NaN.
*/
let hargaProduk = 15000;
let jumlahBeli = "tiga";
let totalHarga = hargaProduk * jumlahBeli;
console.log(isNaN(totalHarga)); // true
console.log(totalHarga); // NaN
/*
Fix Solusi jika ingin konversi string ke angka gunakan Number(), parseInt(), atau parseFloat() dan walaupun dalam bentuk string pastikan inputan berapa angka
let hargaProduk = 15000;
let jumlahBeli = "3";
let totalHarga = hargaProduk * jumlahBeli;
console.log(isNaN(totalHarga)); // false
console.log(totalHarga); // 45000
* Pada javascript jika variabel string bernilai murni angka seperti "3" akan otomatis di konversi
let hargaProduk = 15000;
let jumlahBeli = parseInt("3 pcs");
let totalHarga = hargaProduk * jumlahBeli;
console.log(isNaN(totalHarga)); // true
console.log(totalHarga); // 45000
*/

/* 
Todo Soal 2: Variabel (let, const, var)
* Buatlah variabel berikut sesuai dengan aturan yang benar:

*Gunakan const untuk menyimpan nama toko (misalnya "Toko Maju Jaya").
*Gunakan let untuk menyimpan jumlah stok barang (misalnya 100).
*Gunakan var untuk menyimpan diskon produk (misalnya 10%).
*Ubah nilai jumlah stok barang menjadi 95 (karena ada yang terjual).
? Pertanyaan:

? 1.Apa yang terjadi jika kamu mencoba mengubah nilai variabel yang dideklarasikan dengan const?
? 2.Apakah masih disarankan menggunakan var? Kenapa?
*/
const toko = "Toko Maju Jaya";
let jumlahStokBarang = 100;
var diskonProduk = "10%";
jumlahStokBarang = 95;
var diskonProduk = "20%";
//toko = "Maju Jaya"
/*
1. Hasilnya error dikarenakan const tidak bisa di ubah nilainya
2. Tidak disarankan karena bisa menginisialisasikan variabel baru yang sama tanpa adanya error
*/

/*
TODO Soal 3: Tipe Data Boolean
* Buat variabel stokTersedia yang bernilai true jika jumlah stok lebih dari 0, dan false jika stok habis.

* Tambahkan logika:
* Jika stokTersedia adalah true, cetak "Barang tersedia!". Jika false, cetak "Barang habis!".
*/
let jumlahStok = 0;
let stokTersedia = jumlahStok > 0;
console.log(stokTersedia);
console.log(stokTersedia ? "Barang tersedia!" : "Barang habis!");


/*
* Perbaiki kode berikut agar mengikuti aturan penamaan variabel yang benar dalam JavaScript:

let 1jumlahBarang = 10;
const nama-toko = "Maju Jaya";
var diskon%produk = 5;
? Petunjuk:

? nama variabel agar valid.
? Gunakan gaya camelCase untuk variabel yang bukan const.
*/

let jumlahBarang = 10;
const NAMA_TOKO = "Maju Jaya";
let diskonsProduk = 5;