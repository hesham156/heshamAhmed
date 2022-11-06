let lnk = document.getElementById("lnk");
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

const chbg = () => {
  if (localStorage.getItem("them") === "dark") {
    r.style.setProperty("--icon-color", "aliceblue");
    r.style.setProperty("--primary-color", "#161832");
    r.style.setProperty("--secondry-color", "#d13949");
    r.style.setProperty("--active-color", "#5c00f1");
    r.style.setProperty("--global-color", "#03022a");
  } else {
    r.style.setProperty("--icon-color", "black");
    r.style.setProperty("--primary-color", "#f2f3fb");
    r.style.setProperty("--secondry-color", "#5c00f1");
    r.style.setProperty("--active-color", "#d13949");
    r.style.setProperty("--global-color", "white");
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
// typewrite effect
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }
  // console.log(this.txt.length - 1);
  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid black}";
  document.body.appendChild(css);
};
let home = document.getElementById("home");
