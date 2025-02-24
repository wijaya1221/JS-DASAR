/*
TODO Latihan 1: Manipulasi String
* Buat variabel text dengan nilai " jAVAscript iTU mUdAh ".

? Gunakan metode yang sudah kamu pelajari untuk menghapus spasi di awal dan akhir string.
? Ubah huruf pertama menjadi huruf besar, sementara sisanya menjadi huruf kecil.
? Tampilkan hasilnya di console.
Ekspektasi Output:
"Javascript itu mudah"


*/

let message = " jAVAscript iTU mUdAh ".trim().toLowerCase();
message = message.charAt(0).toUpperCase() + message.slice(1);
console.log(message);

/*
TODO Latihan 2: Hitung Panjang String
* Buat variabel kalimat dengan nilai "Belajar JavaScript sangat menyenangkan!".

? Gunakan metode untuk menghitung panjang string tersebut.
? Tampilkan hasilnya di console.
Ekspektasi Output:
38
*/

let kalimat = "Belajar JavaScript sangat menyenangkan!";
console.log(kalimat.length);

/*
TODO Latihan 3: Cek Nilai Null atau Undefined
Buat dua variabel:
let nilai1 = null;
let nilai2; // Tidak diberi nilai
? Gunakan console.log() untuk menampilkan jenis nilai dari nilai1 dan nilai2.
? Apakah null dan undefined dianggap sama jika dibandingkan dengan == dan ===?
*/

let nilai1 = null;
let nilai2;
console.log(nilai1, nilai2);
console.log(nilai1 == nilai2)
console.log(nilai1 === nilai2);

/*
TODO Latihan 4: Menggunakan Math Object
* Gunakan Math.random() untuk menghasilkan angka acak antara 0 dan 1, lalu tampilkan hasilnya di console.
* Gunakan Math.floor() untuk membulatkan angka 4.7 ke bawah.
* Gunakan Math.ceil() untuk membulatkan angka 3.2 ke atas.
* Gunakan Math.round() untuk membulatkan angka 5.5 ke angka terdekat.
Ekspektasi Output (contoh, bisa bervariasi untuk angka acak):
0.382937492 (contoh angka acak)
4
4
6
*/

function randomNumber(min, max) {
    return Math.floor
}

let method = 125.678
console.log(Math.random(10, 100));
console.log(Math.floor(4.9)); // Pembulatan ke bawah
console.log(Math.ceil(3.1)); // Pembulatan ke atas
console.log(Math.round(5.5)); // Pembulatan terdekat
console.log(Math.trunc(4.8)); // Menghapus decimal
console.log(method.toFixed(1)); // Pembulatan ke banyak digit decimal
console.log(method.toPrecision(4)); // Pembulatan ke n digit tanpa mempedulikan koma
/*
TODO Latihan 5: Ambil Karakter dari String
* Buat variabel kata dengan nilai "PROGRAMMING".

* Gunakan metode yang sesuai untuk mengambil karakter pertama dan terakhir dari string tersebut.
* Tampilkan hasilnya di console.
Ekspektasi Output:

"P"
"G"

*/

let kata = "PROGRAMMING";
console.log(kata.charAt(0));
console.log(kata.charAt(kata.length - 1));

let umur = prompt("Masukkan umur anda: ");
console.log(umur >= 18 ? "Anda sudah dewasa" : "Anda masih anak-anak");
