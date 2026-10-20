# Undangan Pernikahan Ruqayyah & Roni

**Nama:** Ahmad Jouwdad Aufa Robbani

**NIM:** 25051204163

**Kelas:** TI-D

**Mata Kuliah:** Pemrograman Berbasis Platform (PBP)


---

Website undangan pernikahan digital untuk **Ruqayyah & Roni** dengan nuansa tradisional Jawa.

Proyek ini dibuat sebagai tugas **Ujian Tengah Semester (UTS) Pemrograman Berbasis Platform (PBP)**.

## Fitur

- Halaman pembuka dengan animasi gunungan.
- Nama tamu dapat ditampilkan melalui parameter URL.
- Cerita singkat perjalanan pasangan dengan animasi teks.
- Efek kelopak bunga.
- Informasi mempelai.
- Menu utama dengan beberapa bagian undangan.
- Countdown menuju acara.
- Informasi tanggal dan acara pernikahan.
- Galeri foto dengan thumbnail.
- Navigasi galeri menggunakan tombol dan keyboard.
- Peta lokasi acara.
- Form RSVP dan ucapan.
- Penyimpanan RSVP menggunakan `localStorage`.
- Tombol untuk menyalakan dan mematikan musik gamelan.
- Tombol untuk menyalin nomor rekening.

## Tech Stack

Proyek ini dibuat menggunakan:

- HTML5
- CSS3
- JavaScript
- Bootstrap
- GSAP
- Google Fonts
- Font Awesome
- `localStorage` untuk penyimpanan RSVP sementara

## Struktur Proyek

```text
undangan_pernikahan/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── main.js
│   ├── cerita.js
│   ├── galeri.js
│   └── rsvp.js
├── img/
│   ├── galeri-1.jpeg
│   ├── galeri-2.jpeg
│   ├── ...
│   └── ...
└── audio/
    └── gamelan.mp3
```

## Nama Tamu

Nama tamu dapat diberikan melalui parameter `to` pada URL.

Contoh:

```text
index.html?to=Budi%20Santoso
```

Nama tersebut kemudian akan ditampilkan pada halaman pembuka dan otomatis diisikan ke bagian nama pada form RSVP.

## RSVP

Untuk saat ini, data RSVP dan ucapan disimpan menggunakan `localStorage`.

Artinya, data yang ditambahkan hanya tersimpan pada **browser dan perangkat yang digunakan**. Data tersebut belum dikirim ke server atau database.

Untuk penggunaan pada undangan sungguhan, bagian penyimpanan dapat dikembangkan menggunakan backend atau layanan seperti Google Sheets maupun Firebase.

## Musik

Musik gamelan dapat dimainkan setelah pengguna membuka undangan. Tombol musik tersedia di bagian bawah halaman untuk mengatur pemutaran audio.

## Galeri

Foto galeri menggunakan pola penamaan:

```text
img/galeri-1.jpeg
img/galeri-2.jpeg
img/galeri-3.jpeg
...
```

Jumlah foto dapat diatur melalui `JUMLAH_FOTO` pada `js/galeri.js`.

##  Menjalankan Proyek

Karena proyek ini menggunakan file HTML, CSS, JavaScript, gambar, dan audio secara langsung, proyek dapat dijalankan menggunakan web server lokal.

Contoh dengan VS Code:

1. Buka folder proyek.
2. Jalankan menggunakan Live Server.
3. Buka alamat lokal yang diberikan oleh Live Server.

Atau menggunakan server sederhana dari Python:

```bash
python -m http.server
```

Kemudian buka alamat yang ditampilkan pada terminal.

---

**Ruqayyah & Roni**  
*Undangan Pernikahan Digital*