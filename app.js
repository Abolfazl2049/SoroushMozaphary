let array = [
  "img/4afeae02-0993-4516-ac30-62705a7fc0bf.jpeg",
  "img/957240.jpg",
  "img/1651670998684.jpg",
  "img/1658432500534.jpg",
  "img/ccad2987-a818-463e-8acc-4788d7573e0f.jpg",
  "img/elizabeth_bioshock_by_rawder_beoluve_db12mni.jpg",
  "img/IMG_20211213_155627_126.jpg",
  "img/madness_combat___the_auditor_by_noripie_d4zzgit.jpg",
  "img/Picsart_23-04-13_18-52-32-856.jpg"
];
let currentInex = 0;
function forward() {
    console.log(currentInex)
  if (currentInex > 7) {
    currentInex = 0;
    let el = document.querySelector(".imglast");
    el.src = array[currentInex];
  } else {
    currentInex++;
    let el = document.querySelector(".imglast");
    el.src = array[currentInex];
  }
}
function back() {
    console.log(currentInex)
  if (currentInex < -1) {
    currentInex = 0;
    let el = document.querySelector(".imglast");
    el.src = array[currentInex];
  } else {
    currentInex--;
    let el = document.querySelector(".imglast");
    el.src = array[currentInex];
  }
}
setTimeout(() => {
  let el = document.querySelector(".text-center");
  el.classList.add("animation");
  document.body.style.overflowX = "hidden"
});
setTimeout(() => {
  let el = document.querySelector(".text-center");
  el.classList.remove("animation");
}, 1000);
setTimeout(() => {
  let el = document.querySelector(".text-center");
  el.classList.add("animation");
  el.textContent = "سروش مظفری‌ام";
}, 2000);
setTimeout(() => {
  let el = document.querySelector(".text-center");
  el.classList.remove("animation");
}, 3000);
setTimeout(() => {
  let el = document.querySelector(".text-center");
  el.classList.add("animation");
  el.textContent = "به سایت من خوش اومدی";
}, 4000);
setTimeout(() => {
  let el = document.querySelector(".black-modal");
  el.classList.add("animation2");
}, 6000);
setTimeout(() => {
  let el = document.querySelector(".black-modal");
  el.style.display = "none"
  document.body.style.overflowY = "auto"
}, 6200);
function showNDisMenu() {
  let el = document.querySelector(".mobile-menue");
  el.classList.toggle("display");
}
showNDisMenu()
