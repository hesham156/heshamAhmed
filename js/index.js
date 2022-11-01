let lnk = document.getElementById("lnk");
console.log(lnk);
window.onscroll = () => {
  scrollY >= 600 ? console.log("g") : console.log("T");
};
const select = (list, target, classActive) => {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove(classActive);
  }
  list[target].classList.add(classActive);
};
let ul = document.createElement("ul");
ul.classList.add("center", "flex-direction-column", "w-100");
let lnks = ["home", "about me", "project", "connect"];
let icons = [
  "fa-house",
  "fa-address-card",
  "fa-diagram-project",
  "fa-paper-plane",
];

lnks.map((link) => {
  let li = document.createElement("li");
  let i = document.createElement("i");
  let p = document.createElement("p");

  li.classList.add("w-100");
  let a = document.createElement("a");
  a.id = "navhref";
  window.location.hash == "#" + link.replace(" ", "")
    ? a.classList.add("active", "w-100")
    : a.classList.add("w-100");
  i.classList.add("fa-solid", icons[lnks.indexOf(link)]);

  p.innerText = link.toUpperCase();
  a.href = "#" + link.replace(" ", "");
  a.appendChild(p);
  a.appendChild(i);
  li.appendChild(a);
  ul.appendChild(li);
});
lnk.appendChild(ul);
let a = document.getElementsByTagName("a");
window.onscroll = () => {
  if (scrollY >= 0 && scrollY <= window.innerHeight / 2) {
    select(a, 0, "active");
  } else if (
    scrollY >= window.innerHeight / 2 &&
    scrollY <= window.innerHeight
  ) {
    select(a, 1, "active");
  } else if (
    scrollY >= window.innerHeight &&
    scrollY <= 2 * window.innerHeight
  ) {
    select(a, 2, "active");
  } else if (scrollY > 2 * window.innerHeight) {
    select(a, 3, "active");
  }
};
console.log(navhref);
const dark = document.querySelector(".dark");
var r = document.querySelector(":root");

// const chbg = () => {
//   if (localStorage.getItem("them") === "dark") {
//     document.body.style.backgroundColor = "white";
//     document.querySelector(".navebar").style.backgroundColor =
//       "var( --primary-color)";
//     r.style.setProperty("--secondry-color", "#5c00f1");
//     r.style.setProperty("--icon-color", "#5c00f1");
//     r.style.setProperty("--color", "white");
//   } else {
//     document.body.style.backgroundColor = "#03022a";
//     document.body.style.color = "white";
//     document.querySelector(".navebar").style.backgroundColor = "#161832";
//     r.style.setProperty("--secondry-color", "#f2f3fb");
//     r.style.setProperty("--icon-color", "f2f3fb");
//     r.style.setProperty("--color", "black");
//   }
// };
// dark.onclick = () => {
//   if (localStorage.getItem("them") === "dark") {
//     localStorage.setItem("them", "normal");
//   } else {
//     localStorage.setItem("them", "dark");
//   }
//   chbg();
// };
// chbg();
