/*
TODO 1. Mengenal Struktur Data Array:
* Buatlah array bernama buah yang berisi nama-nama buah berikut: "Apel", "Mangga", "Pisang", "Jeruk". Kemudian, tampilkan isi array tersebut ke dalam console.
*/

let buah = ["Apel", "Mangga", "Pisang", "Jeruk"];
console.log(buah);

/*
TODO 2. Mendapatkan Nilai dengan Index dan Mengubah Isinya
* Soal:
* Diberikan array berikut:
* let angka = [10, 20, 30, 40, 50];
* Ambil dan cetak nilai di index ke-2.
* Ubah nilai index ke-3 menjadi 100.
* Cetak kembali array setelah perubahan.
*/
let angka = [10, 20, 30, 40, 50];
console.log(angka[2]);
angka[3] = 100;
console.log(angka);

/*
TODO 3. Method Array push dan pop
* Soal:
* Diberikan array berikut:

* let hewan = ["Kucing", "Anjing", "Kelinci"];
* Tambahkan "Burung" ke dalam array menggunakan push().
* Hapus elemen terakhir dari array menggunakan pop() dan simpan dalam variabel hewanTerhapus.
* Cetak hewanTerhapus dan array setelah perubahan.
*/

let hewan = ["Kucing", "Anjing", "Kelinci"];
hewan.push("Burung");
let hewanTerhapus = hewan.pop();
console.log(hewanTerhapus);
console.log(hewan);

/*
TODO 4. Method Array unshift dan shift
* Soal:
* Diberikan array berikut:

* let warna = ["Merah", "Biru", "Hijau"];
* Tambahkan "Kuning" di awal array menggunakan unshift().
* Hapus elemen pertama dari array menggunakan shift() dan simpan dalam variabel warnaTerhapus.
* Cetak warnaTerhapus dan array setelah perubahan.
*/

let warna = ["Merah", "Biru", "Hijau"];
warna.unshift("Kuning");
let warnaTerhapus = warna.shift();
console.log(warnaTerhapus);
console.log(warna);

/*
TODO 5. Beberapa Method Array Lain yang Sering Digunakan
* Soal:
* Diberikan array berikut:

* let angka = [1, 2, 3, 4, 5];
* Lakukan operasi berikut:

* Gabungkan semua elemen menjadi string dengan tanda - di antara angka menggunakan join().
* Buat array baru dengan elemen yang lebih besar dari 2 menggunakan filter().
* Urutkan array dari terbesar ke terkecil menggunakan sort().
*/
let angka = [1, 2, 3, 4, 5];
console.log("Hasil Join: ", angka.join("-"));

let angkaBaru = angka.filter(num => num > 2);
console.log("Hasil Filter: ", angkaBaru);

let angkaTerurut = [...angka.sort((a, b) => b - a)];
console.log("Hasil Sort: ", angkaTerurut);

/*
TODO 6. Mengubah Nilai const dengan Array
* Soal:
* Diberikan array const berikut:

* const nama = ["Ali", "Budi", "Cici"];
* Tambahkan "Doni" ke dalam array menggunakan push().
* Ubah elemen pertama "Ali" menjadi "Andi".
* Cetak array setelah perubahan.
*/

const nama = ["Ali", "Budi", "Cici"];

nama.push("Doni");
nama[0] = "Andi";

console.log(nama);

/*
TODO 7. Array Multidimensi (Nested Array)
* Soal:
* Diberikan array dua dimensi berikut:

* let matriks = [
*     [1, 2, 3],
*     [4, 5, 6],
*     [7, 8, 9]
* ];
* Ambil nilai 5 dari array matriks dan cetak ke console.
* Ubah nilai 9 menjadi 99.
* Cetak kembali array setelah perubahan.
*/

let matriks = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriks[1][1]);
matriks[2][2] = 99;
console.log(matriks)

/*
TODO 8. Soal Gabungan (Mencakup Semua Materi)
Soal:
* Buatlah array kosong bernama daftarBelanja. Lakukan langkah-langkah berikut secara berurutan:

* Tambahkan "Beras", "Gula", "Minyak" menggunakan push().
* Tambahkan "Telur" di awal array menggunakan unshift().
* Hapus elemen terakhir dari array menggunakan pop() dan simpan dalam variabel barangTerhapus.
* Ganti "Gula" menjadi "Garam".
* Tambahkan "Mie Instan" dan "Teh" di akhir array.
* Tampilkan array dalam bentuk string dengan pemisah koma menggunakan join().
*/

let daftarBelanja = [];
daftarBelanja.push("Beras", "Gula", "Minyak");
daftarBelanja.unshift("Telur");
let barangTerhapus = daftarBelanja.pop();
daftarBelanja[2] = "Garam";
daftarBelanja.push("Mie Instan", "Teh");
console.log(daftarBelanja.join(","));