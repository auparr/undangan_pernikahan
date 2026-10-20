// Cerita otomatis: babak bergantian -> kelopak -> kartu mempelai -> menu.
// Diadaptasi dari mulaiAnimasiTeks() di birthday.js lama.

gsap.registerPlugin(TextPlugin);

const cerita = document.getElementById("cerita");
const babak = document.querySelectorAll("#panggung .babak");
const btnLewati = document.getElementById("btn-lewati");
const kartu = document.getElementById("kartu");
const menu = document.getElementById("menu");

let tl;
let sudahSelesai = false;

function tampilkan(el) {
  el.hidden = false;

  requestAnimationFrame(() =>
    requestAnimationFrame(() => el.classList.add("tampil")),
  );
}

function hujanKelopak() {
  const wadah = document.getElementById("petals");

  for (let i = 0; i < 24; i++) {
    const k = document.createElement("div");

    k.className = "kelopak";
    k.style.left = Math.random() * 100 + "%";
    k.style.setProperty("--geser", Math.random() * 160 - 80 + "px");
    k.style.animationDuration = 6 + Math.random() * 4 + "s";
    k.style.animationDelay = Math.random() * 2 + "s";

    wadah.append(k);
  }

  setTimeout(() => (wadah.innerHTML = ""), 12000);
}

function akhiriCerita() {
  if (sudahSelesai) return;

  sudahSelesai = true;
  btnLewati.hidden = true;
  cerita.classList.add("selesai");

  hujanKelopak();
  tampilkan(kartu);
}

function mulaiCerita() {
  btnLewati.hidden = false;

  tl = gsap.timeline({ onComplete: akhiriCerita });

  babak.forEach((slide) => {
    const ketik = slide.querySelector(".ketik");

    // Teks asli disimpan di data-teks supaya bisa diputar ulang.
    if (ketik) ketik.textContent = "";

    tl.fromTo(
      slide,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      },
    );

    if (ketik) {
      tl.to(ketik, {
        text: ketik.dataset.teks,
        duration: 4,
        ease: "none",
      }).to(slide, { duration: 2 });
    } else {
      tl.to(slide, { duration: 3 });
    }

    tl.to(
      slide,
      {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.in",
      },
      "-=0.2",
    );
  });
}

btnLewati.addEventListener("click", () => {
  if (tl) tl.kill();
  akhiriCerita();
});

// Kartu mempelai -> menu
document.getElementById("btn-lihat").addEventListener("click", () => {
  kartu.classList.remove("tampil");

  setTimeout(() => {
    kartu.hidden = true;
    tampilkan(menu);
  }, 1000);
});
