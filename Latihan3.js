/*
TODO 1. Operator Pembanding & Perbedaan == dan ===
* Soal: Apa output dari kode berikut? Jelaskan alasan di balik hasilnya.

? console.log(5 == "5");  
? console.log(5 === "5");  
? console.log(null == undefined);
? console.log(null === undefined);

answer: 1. True
answer: 2. False
answer: 3. True
answer: 4. False

*/
console.log(5 == "5");
console.log(5 === "5");
console.log(null == undefined);
console.log(null === undefined);

/*
TODO 2. console.alert dan prompt
* Soal: Buatlah program yang meminta pengguna memasukkan nama mereka menggunakan prompt(), lalu tampilkan pesan sambutan menggunakan alert() dengan format:
"Selamat datang, [nama]!"
*/

let message = prompt("Masukkan nama anda: ");
alert(`Selamat datang, ${message}`);

/*
TODO 3. if else Statement
*Soal: Buat program yang meminta pengguna memasukkan umur mereka. Jika umur lebih dari atau sama dengan 18 tahun, tampilkan pesan "Anda sudah dewasa". Jika tidak, tampilkan pesan "Anda masih anak-anak".
*/
let age = Number(prompt("Masukkan umur anda: "));
// alert(age >= 18 ? "Anda sudah dewasa" : "Anda masih anak-anak");

/*
TODO 4. if else Bersarang
*Soal: Modifikasi soal sebelumnya agar:

?Jika umur di atas 60, tampilkan pesan "Anda sudah lansia".
?Jika umur antara 18-60, tampilkan pesan "Anda sudah dewasa".
?Jika umur kurang dari 18, tampilkan pesan "Anda masih anak-anak".
 */
if (age < 18) {
    alert("Anda masih anak-anak ");
} else if (age >= 18 && age <= 60) {
    alert("Anda sudah dewasa");
} else {
    alert("Anda sudah lansia");
}

/*
TODO 5. Operator Logika && (AND)
*Soal: Buat program yang meminta pengguna memasukkan username dan password. Jika username adalah "admin" dan password adalah "12345", tampilkan pesan "Login berhasil". Jika salah satu salah, tampilkan "Login gagal"
*/
let username = prompt("Masukkan username kamu: ").trim();
let password = prompt("Masukkan password kamu: ").trim();

if (!username || !password) {
    alert("username dan password tidak boleh kosong");
} else if (username.toLowerCase() === "admin" && password === "12345") {
    alert("Login berhasil");
} else {
    alert("Login gagal");
}

/*
TODO 6. Operator Logika ! (NOT)
*Soal: Apa output dari kode berikut? Jelaskan.

?let isOnline = false;
?console.log(!isOnline);
?console.log(!!isOnline);


*/
let isOnline = false;
console.log(!isOnline); // true negasi pertama
console.log(!!isOnline); // false negasi gandas

/*
TODO 7. switch Statement
* Soal: Buat program yang meminta pengguna memasukkan angka 1-7, lalu tampilkan nama hari sesuai angka yang dimasukkan. Contoh:

?1 → "Senin"
?2 → "Selasa"
?...
?7 → "Minggu" Jika angka yang dimasukkan di luar rentang 1-7, tampilkan pesan "Angka tidak valid".
*/

let days = Number(prompt("Masukkan angka 1-7 : "));

if (isNaN(days) || days < 1 || days || 7)
    switch (days) {
        case 1:
            alert("Senin");
            break;
        case 2:
            alert("Selasa");
            break;
        case 3:
            alert("Rabu");
            break;
        case 4:
            alert("Kamis");
            break;
        case 5:
            alert("Jum'at");
            break;
        case 6:
            alert("Sabtu");
            break;
        case 7:
            alert("Minggu");
            break;
        default:
            alert("Angka tidak valid");
            break;
    }