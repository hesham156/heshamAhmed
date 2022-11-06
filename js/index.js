let lnk = document.getElementById("lnk");
let about = document.getElementById("aboutme");
let home = document.getElementById("home");
let div = document.createElement("div");

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
    ? a.classList.add("active", "w-100", "center")
    : a.classList.add("w-100", "center");
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
const dark = document.querySelector(".dark");
var r = document.querySelector(":root");

const chbg = () => {
  if (localStorage.getItem("them") === "dark") {
    r.style.setProperty("--icon-color", "aliceblue");
    r.style.setProperty("--primary-color", "#161832");
    r.style.setProperty("--secondry-color", "#d13949");
    r.style.setProperty("--active-color", "#03022a");
    r.style.setProperty("--global-color", "#03022a");
    r.style.setProperty("--card-bg", "#191c29");
  } else {
    r.style.setProperty("--icon-color", "black");
    r.style.setProperty("--primary-color", "#f2f3fb");
    r.style.setProperty("--secondry-color", "#5c00f1");
    r.style.setProperty("--active-color", "#03022a");
    r.style.setProperty("--global-color", "white");
    r.style.setProperty("--card-bg", "aliceblue");
  }
};
dark.onclick = () => {
  if (localStorage.getItem("them") === "dark") {
    localStorage.setItem("them", "normal");
  } else {
    localStorage.setItem("them", "dark");
  }
  chbg();
};
chbg();
let skill = [
  ["HTML", "90%"],
  ["CSS", "90%"],
  ["JS", "85%"],
  ["Bootstrap", "95%"],
  ["ReactJS", "85%"],
];
const createCard = () => {
  for (let i = 0; i < skill.length; i++) {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div4 = document.createElement("div");
    let div3 = document.createElement("div");
    let h4 = document.createElement("h4");
    h4.innerText = skill[i][0];
    div1.classList.add("skill-card");
    div2.classList.add("card-top", "center", "w-100");
    div3.classList.add("card-bottom", "center", "w-100");
    div4.role = "progressbar";
    // div4.ariaValueNow = "65";
    div4.ariaValueMin = "0";
    div4.ariaValueMax = "100";
    div4.style = `--value:${skill[i][1].replace("%", "")}`;
    div3.appendChild(h4);
    div2.appendChild(div4);
    div1.appendChild(div2);
    div1.appendChild(div3);
    about.appendChild(div1);
  }
};
createCard();

// .skill-card::after {
//   position: absolute;
//   content: "";
//   top: calc(var(--card-height) / 6);
//   left: 0;
//   right: 0;
//   z-index: -1;
//   height: 100%;
//   width: 100%;
//   margin: 0 auto;
//   transform: scale(0.8);
//   filter: blur(calc(var(--card-height) / 6));
//   background-image: linear-gradient(
//     var(--rotate),
//     var(--secondry-color),
//     var(--active-color) 43%,
//     var(--secondry-color)
//   );
//   opacity: 1;
//   transition: opacity 0.5s;
//   animation: spine 2.5s linear infinite;
// }
