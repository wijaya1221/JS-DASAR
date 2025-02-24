/*
TODO 1. Apa itu Object?
* Soal:
* Buatlah sebuah object bernama buku yang memiliki properti:

* judul dengan nilai "JavaScript untuk Pemula"
* penulis dengan nilai "John Doe"
* tahunTerbit dengan nilai 2022
* Tampilkan object buku di console.
*/

let buku = {
    judul: "JavaScript untuk Pemula",
    penulis: "John Doe",
    tahunTerbit: 2022
}
console.log(buku);

/*
TODO 2. Cara Membuat Struktur Data Object
* Soal:
* Buatlah sebuah object bernama mobil yang memiliki properti berikut:

* merk: "Toyota"
* model: "Avanza"
* tahun: 2020
* warna: "Hitam"
* Tampilkan seluruh isi object mobil menggunakan console.log()
*/

let mobil = {
    merk: "Toyota",
    model: "Avanza",
    tahun: 2020,
    warna: "Hitam"
}
console.log(mobil);

/*
TODO 3. Cara Memanggil Data dari Object
*Soal:
*Gunakan object mobil dari soal sebelumnya.

*Tampilkan model mobil menggunakan dot notation
*Tampilkan tahun mobil menggunakan bracket notation
*/
console.log(mobil.model);
console.log(mobil["tahun"]);

/*
TODO 4. Cara Membuat Object Berjalan (Method dalam Object)
* Soal:
* Buatlah object pengguna yang memiliki properti berikut:

* nama: "Andi"
* usia: 25
* sapa() (method) yang mengembalikan string:
* "Halo, nama saya Andi dan saya berusia 25 tahun."
* Panggil method sapa() dan tampilkan hasilnya di console.

*/

let pengguna = {
    nama: "Andi",
    usia: 25,
    sapa() {
        return `Halo nama saya ${this.nama} dan saya berusia ${this.usia} tahun.`;
    }
}
console.log(pengguna.sapa());

/*
TODO 5. Cara Memanggil Object di dalam Array
* Soal:
* Buat array produk yang berisi dua object dengan struktur berikut:

* Object pertama:
* nama: "Laptop"
* harga: 7500000
* Object kedua:
* nama: "Mouse"
* harga: 150000
* Tampilkan harga produk kedua menggunakan array dan object.
*/

let produk = [
    {
        nama: "Laptop",
        harga: 7500000
    },
    {
        nama: "Mouse",
        harga: 150000
    }
]

console.log(produk[1].harga)

/*
TODO 6. Soal Gabungan (Mencakup Semua Materi)
* Soal:
* Buat array daftarMahasiswa yang berisi dua object, masing-masing memiliki properti:

* nama: string
* nim: string
* jurusan: string
* perkenalan(): method yang mengembalikan string seperti berikut:
* "Halo, saya [nama] dengan NIM [nim] dari jurusan [jurusan]."
* Lalu:
* 
* Panggil method perkenalan() dari object kedua dalam array.
* Tampilkan hasilnya di console.
*/

let daftarMahasiswa = [
    {
        nama: "Andi",
        nim: "1811101",
        jurusan: "IT",
        perkenalan() {
            return `Halo, saya ${this.nama} dengan NIM ${this.nim} dari jurusan ${this.jurusan}`;
        }
    },
    {
        nama: "Budi",
        nim: "1811102",
        jurusan: "Management",
        perkenalan() {
            return `Halo, saya ${this.nama} dengan NIM ${this.nim} dari jurusan ${this.jurusan}`;
        }
    }
]

console.log(daftarMahasiswa[1].perkenalan());