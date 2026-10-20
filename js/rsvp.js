// RSVP dan ucapan disimpan di localStorage.
// Data hanya akan terlihat di perangkat yang digunakan.

const KUNCI = "ucapan-undangan";
const form = document.getElementById("form-rsvp");
const daftar = document.getElementById("daftar-ucapan");
const pesan = document.getElementById("rsvp-pesan");
const inputNama = document.getElementById("rsvp-nama");

if (tamu) inputNama.value = tamu; // tamu berasal dari main.js

function muatDari() {
  try {
    return JSON.parse(localStorage.getItem(KUNCI)) || [];
  } catch {
    return [];
  }
}

function simpanKe(data) {
  try {
    localStorage.setItem(KUNCI, JSON.stringify(data));
    return true;
  } catch {
    return false;
  }
}

function tampilkanDaftar() {
  daftar.innerHTML = "";

  const data = muatDari();

  if (!data.length) {
    daftar.innerHTML =
      '<li class="kecil">Belum ada ucapan. Jadilah yang pertama.</li>';
    return;
  }

  data
    .slice()
    .reverse()
    .forEach((u) => {
      const li = document.createElement("li");
      const nama = document.createElement("strong");
      const status = document.createElement("span");
      const isi = document.createElement("span");

      nama.textContent = u.nama;

      status.className = "status";
      status.textContent = `${u.hadir} (${u.jumlah} orang)`;

      isi.textContent = u.ucapan;

      li.append(nama, status, document.createElement("br"), isi);
      daftar.append(li);
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nama = inputNama.value.trim();

  if (!nama) {
    pesan.textContent = "Nama wajib diisi.";
    inputNama.focus();
    return;
  }

  const data = muatDari();

  data.push({
    nama,
    hadir: document.getElementById("rsvp-hadir").value,
    jumlah: Math.min(
      10,
      Math.max(1, Number(document.getElementById("rsvp-jumlah").value) || 1),
    ),
    ucapan: document.getElementById("rsvp-ucapan").value.trim(),
  });

  if (!simpanKe(data)) {
    pesan.textContent = "Gagal menyimpan. Coba lagi.";
    return;
  }

  document.getElementById("rsvp-ucapan").value = "";
  pesan.textContent = "Terima kasih, konfirmasi Anda sudah tercatat.";

  tampilkanDaftar();
});

tampilkanDaftar();
