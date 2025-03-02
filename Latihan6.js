/*
TODO 1. Pengenalan Perulangan
* Soal:
* Buatlah perulangan for yang mencetak angka 1 hingga 5 di console.
*/
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

/*
TODO 2. Contoh Lain Perulangan For
* Soal:
* Buatlah perulangan for yang mencetak bilangan genap dari 2 hingga 10.
*/

for (let i = 2; i <= 10; i += 2) {
    console.log(i)
}

/*
TODO 3. Awas Perulangan Tanpa Henti
* Soal:
* Perbaiki kode berikut agar tidak menjadi perulangan tak terbatas:

* for (let i = 1; i > 0; i--) {  
*     console.log(i);  
* }
* Berikan solusi yang benar agar perulangan berjalan dengan benar dan tetap memiliki akhir.
*/


/*
TODO 4. Mendapatkan Data dari Array dengan Perulangan
* Soal:
* Buatlah array buah yang berisi ["Apel", "Mangga", "Jeruk", "Pisang"].
* Gunakan for loop untuk mencetak semua elemen dalam array.
*/

let buah = ["Apel", "Mangga", "jeruk", "Pisang"];
for (let i = 0; i < buah.length; i++) {
    console.log(buah[i]);
}

/*
TODO 5. Pengenalan Nested Loop
* Soal:
* Gunakan nested loop (for di dalam for) untuk mencetak pola berikut:
*
**
***
****
*****
 */

for (let i = 1; i <= 5; i++) {
    let bintang = ""
    for (let j = 1; j <= i; j++) {
        bintang += "*"
    }
    console.log(bintang);
}

/*
TODO Diberikan array berikut:

* let angka = [
*     [1, 2, 3],
*     [4, 5, 6],
*     [7, 8, 9]
* ];
Gunakan nested loop untuk mencetak semua angka dalam array.
*/

let angka = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

for (let i = 0; i < 3; i++) {
    let hasil = angka[i].join(" "); // Gabungkan angka dalam satu baris
    console.log(hasil);
}

for (let i = 0; i < 3; i++) {
    let hasil = ""
    for (let j = 0; j < 3; j++) {
        hasil += angka[i][j]
    }
    console.log(hasil);
};

/*
TODO 7. Perulangan Menggunakan Perintah While
* Soal:
* Gunakan perulangan while untuk mencetak angka 1 hingga 5.
 */
let i = 1;
while (i <= 5) {
    console.log(i);
    i++
}

/*
TODO 8. Kata Kunci Break untuk Memberhentikan Perulangan
* Soal:
* Gunakan perulangan for dan break untuk menghentikan perulangan jika i bernilai 5.
*/

for (let i = 1; i <= 5; i++) {
    if (i == 5) {
        break;
    }
    console.log(i);
}

/*
TODO 9. Membuat Game Tebak-Tebakan Angka dengan While
* Soal:
* Buat game sederhana yang meminta pengguna menebak angka 7.
* Gunakan while loop hingga pengguna menebak angka yang benar.
* (Hint: Gunakan prompt() untuk mengambil input pengguna).

*/

const answer = 7;
let input = parseInt(prompt("Masukkan tebakan angka? "));


while (input !== answer) {
    if (input > answer) {
        input = parseInt(prompt("Angka terlalu tinggi masukkan angka lagi? "));
    } else if (input < answer) {
        input = parseInt(prompt("Angka terlalu kecil masukkan angka lagi? "));
    }
}
alert("Selamat, tebakan kamu benar!");

/*
TODO 10. Cara Elegan Melakukan Perulangan pada Array (For...Of)
* Soal:
* Gunakan for...of untuk mencetak semua elemen dari array:

* let warna = ["Merah", "Biru", "Hijau", "Kuning"];
*/

let warna = ["Merah", "Biru", "Hijau", "Kuning"];
for (const color of warna) {
    console.log(color);
}

/*
TODO 11. Melakukan Perulangan pada Object dengan Elegan (For...In)
* Soal:
* Diberikan object berikut:

let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Informatika"
};
* Gunakan for...in untuk mencetak semua key dan value dalam object.
*/

let mahasiswa = {
    nama: "Andi",
    umur: 20,
    jurusan: "Informatika"
};

for (const Data in mahasiswa) {
    console.log(`${Data}: ${mahasiswa[Data]}`);
}

/*
TODO 12. Soal Gabungan (Mencakup Semua Materi)
* Soal:
* Buat program yang:

* Memiliki array siswa yang berisi beberapa object, masing-masing memiliki properti * nama dan nilai.
* Gunakan for...of untuk mencetak semua nama siswa.
* Gunakan for...in untuk mencetak semua nilai siswa.
* Gunakan while untuk menampilkan nilai siswa satu per satu hingga habis.
* Gunakan break untuk berhenti menampilkan jika ditemukan nilai di bawah 50.
*/

let siswa = [
    { nama: "Ari", nilai: 80 },
    { nama: "Budi", nilai: 45 },
    { nama: "Cici", nilai: 70 },
    { nama: "Lala", nilai: 50 },
    { nama: "Po", nilai: 100 },
];



for (const data of siswa) {
    console.log(data.nama);
}

for (const data in siswa) {
    console.log(siswa[data].nilai);
}
