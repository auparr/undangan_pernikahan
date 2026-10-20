// Galeri: foto besar, thumbnail, dan tombol sebelumnya/berikutnya.
// Foto disimpan di img/galeri-1.jpeg, img/galeri-2.jpeg, dst.

const JUMLAH_FOTO = 6;

const foto = Array.from({ length: JUMLAH_FOTO }, (_, i) => ({
  src: `img/galeri-${i + 1}.jpeg`,
  alt: `Foto prewedding ${i + 1}`,
}));

const besar = document.getElementById("galeri-besar");
const info = document.getElementById("g-info");
const wadahThumb = document.getElementById("galeri-thumb");

let aktif = 0;

function tandaiKosong(img) {
  img.addEventListener("error", () => {
    img.classList.add("kosong");
  });

  img.addEventListener("load", () => {
    img.classList.remove("kosong");
  });
}

function tampil(i) {
  aktif = (i + foto.length) % foto.length;

  besar.src = foto[aktif].src;
  besar.alt = foto[aktif].alt;
  info.textContent = `${aktif + 1} / ${foto.length}`;

  wadahThumb
    .querySelectorAll(".thumb")
    .forEach((t, n) => t.classList.toggle("aktif", n === aktif));
}

tandaiKosong(besar);

foto.forEach((f, i) => {
  const kolom = document.createElement("div");
  kolom.className = "col";

  const tombol = document.createElement("button");
  tombol.className = "thumb";
  tombol.setAttribute("aria-label", f.alt);

  const img = document.createElement("img");
  img.src = f.src;
  img.alt = "";
  img.loading = "lazy";

  tandaiKosong(img);

  tombol.append(img);
  tombol.addEventListener("click", () => tampil(i));
  kolom.append(tombol);
  wadahThumb.append(kolom);
});

document.getElementById("g-prev").addEventListener("click", () => {
  tampil(aktif - 1);
});

document.getElementById("g-next").addEventListener("click", () => {
  tampil(aktif + 1);
});

document.getElementById("m-galeri").addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") tampil(aktif - 1);
  if (e.key === "ArrowRight") tampil(aktif + 1);
});

tampil(0);
