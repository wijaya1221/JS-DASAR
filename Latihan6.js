/*
TODO 1. Pengenalan Perulangan
* Soal:
* Buatlah perulangan for yang mencetak angka 1 hingga 5 di console.
*/
for (let i = 0; i < 5; i++) {
    console.log(i + 1);
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