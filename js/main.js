// Nama tamu diambil dari parameter ?to= pada URL.
const tamu = new URLSearchParams(location.search).get("to");

if (tamu) {
  document.getElementById("nama-tamu").textContent = tamu;
}

// Buka undangan, jalankan musik, lalu mulai cerita.
const cover = document.getElementById("cover");
const musik = document.getElementById("gamelan");
const btnMusik = document.getElementById("btn-musik");

document.getElementById("btn-buka").addEventListener("click", () => {
  cover.classList.add("terbuka");
  btnMusik.hidden = false;

  musik.play().catch(() => {
    btnMusik.classList.add("mati");
  });

  // Mulai cerita setelah animasi cover berjalan.
  setTimeout(mulaiCerita, 900);

  setTimeout(() => cover.remove(), 1800);
});

// Tombol untuk menyalakan atau mematikan musik.
btnMusik.addEventListener("click", () => {
  if (musik.paused) {
    musik.play();
    btnMusik.classList.remove("mati");
  } else {
    musik.pause();
    btnMusik.classList.add("mati");
  }
});

// Countdown acara.
const elCountdown = document.getElementById("countdown");
const target = new Date(elCountdown.dataset.tanggal).getTime();

function hitungMundur() {
  const sisa = Math.max(0, target - Date.now());

  const satuan = [
    ["Hari", Math.floor(sisa / 864e5)],
    ["Jam", Math.floor(sisa / 36e5) % 24],
    ["Menit", Math.floor(sisa / 6e4) % 60],
    ["Detik", Math.floor(sisa / 1e3) % 60],
  ];

  elCountdown.innerHTML = satuan
    .map(([label, n]) => `<div><b>${n}</b>${label}</div>`)
    .join("");
}

hitungMundur();
setInterval(hitungMundur, 1000);

// Tombol salin nomor rekening.
document.querySelectorAll("[data-salin]").forEach((btn) => {
  btn.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.salin);
      btn.textContent = "Tersalin";
    } catch {
      btn.textContent = "Salin manual";
    }

    setTimeout(() => (btn.textContent = "Salin nomor"), 2000);
  });
});
