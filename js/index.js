window.onload = () => {
  setTimeout(() => {
    loves.style.display = "none";
  }, 5000);
};
let lnk = document.getElementById("lnk");
let about = document.getElementById("about");
let home = document.getElementById("home");
let div = document.createElement("div");
let btnNave = document.querySelector(".btn-nave");
let navebar = document.querySelector(".navebar");
let love = document.querySelector(".fa-heart");
let loves = document.querySelector(".loves");
let toleft = document.querySelector(".toleft");
let toright = document.querySelector(".toright");
const dark = document.querySelector(".dark");
var r = document.querySelector(":root");
let allPro = document.getElementById("allPro");
let ul = document.createElement("ul");
let lnks = ["home", "skills", "project", "connect"];
let icons = ["fa-house", "fa-star", "fa-diagram-project", "fa-paper-plane"];
let skill = [
  ["HTML", "90%"],
  ["CSS", "90%"],
  ["JS", "85%"],
  ["Bootstrap", "95%"],
  ["ReactJS", "85%"],
];
let pro = [
  [
    "WhatsApp",
    "./asset/img/pro1/Screenshot from 2022-11-07 11-15-31.png",
    ["html", "css", "Js", "Bootstrap"],
    [
      "https://github.com/hesham156/whatsapp",
      "https://hesham156.github.io/whatsapp/",
    ],
  ],
  [
    "Moves",
    "./asset/img/pro2/Screenshot from 2022-11-07 11-18-40.png",
    ["html", "css", "Js", "Bootstrap"],
    [
      "https://github.com/hesham156/moves",
      "https://hesham156.github.io/moves/",
    ],
  ],
  [
    "FWE",
    "./asset/img/pro4/Screenshot from 2022-11-07 13-17-28.png",
    ["html", "css", "Js", "ReactJS", "firebase"],
    ["https://github.com/hesham156/moves", false],
  ],
  [
    "My Proto",
    "./asset/img/pro3/Screenshot from 2022-11-07 11-22-22.png",
    ["html", "css", "Js", "Bootstrap"],
    [
      "https://github.com/hesham156/heshamAhmed",
      "https://hesham156.github.io/heshamAhmed/",
    ],
  ],
  [
    "Library & Todolist",
    "./asset/img/pro5/Screenshot from 2022-11-07 13-35-21.png",
    ["html", "css", "Js", "ReactJS", "Node.js"],
    ["https://github.com/hesham156/heshamAhmed", false],
  ],
  [
    "Azzrak",
    "./asset/img/pro6/Screenshot from 2022-11-18 19-33-00.png",
    ["html", "css", "Js", "fontawesome", "bootstrap"],
    [
      "https://github.com/hesham156/azzrak",
      "https://hesham156.github.io/azzrak/",
    ],
  ],
];
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
toleft.onclick = (e) => {
  e.target.classList.add("active");
  toright.classList.remove("active");
  about.scroll({
    top: 0,
    left: about.scrollLeft - 200,
    behavior: "smooth",
  });
};
toright.onclick = (e) => {
  e.target.classList.add("active");
  toleft.classList.remove("active");
  about.scroll({
    top: 0,
    left: about.scrollLeft + 200,
    behavior: "smooth",
  });
};

love.onmouseover = () => {
  love.style.animation = "loves 2s linear infinite";
  setTimeout(() => {
    love.style.animation = "";
  }, 1000);
};
const showNave = () => {
  console.log(Number(navebar.style.width.replace("px", "")));
  if (navebar.style.width === "0px" || navebar.style.width === "") {
    navebar.style.width = "315px";
    btnNave.innerText = "X";
  } else {
    navebar.style.width = "";
    btnNave.innerText = "|||";
  }
};
btnNave.onclick = () => {
  showNave();
};
navebar.onclick = () => {
  showNave();
};
const select = (list, target, classActive) => {
  for (let i = 0; i < list.length; i++) {
    list[i].classList.remove(classActive);
  }
  list[target].classList.add(classActive);
};
ul.classList.add("center", "flex-direction-column", "w-100");
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
  if (scrollY >= 0 && scrollY <= 500) {
    select(a, 0, "active");
  } else if (scrollY >= 500 && scrollY <= 1100) {
    select(a, 1, "active");
  } else if (scrollY >= 1100 && scrollY <= 2000) {
    select(a, 2, "active");
  } else if (scrollY > 2000) {
    select(a, 3, "active");
  }
};
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
const addProCard = () => {
  pro.map((thePro) => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    let div3 = document.createElement("div");
    let div4 = document.createElement("div");
    let img = document.createElement("img");
    div1.classList.add("pro-card", "center", "flex-column");
    div2.classList.add("pro-imgs-bar", "center", "w-100", "position-relative");
    div3.classList.add("center", "w-100", "h-100");
    div4.classList.add("center", "pro-ditails", "flex-column", "w-100");
    img.classList.add("w-100", "h-100");
    img.alt = thePro[0];
    img.src = thePro[1];
    div4.innerHTML = `
    <div class="w-100 center">
    <h3>${thePro[0]}</h3>
</div>
<div class="about-pro w-100 center justify-content-around">
   ${thePro[2].map((title) => {
     return `<p>${title}</p>`;
   })}
   
  </div>
<div class="pro-icons w-100 center justify-content-around">

 <a href="${thePro[3][0]}"> <i class="fa-brands fa-github"></i></a>
 ${
   thePro[3][1]
     ? `<a href="${thePro[3][1]}"><i class="fa-solid fa-eye"></i> </a>`
     : ""
 }
</div>
    `;
    div3.appendChild(img);
    div2.appendChild(div3);
    div2.appendChild(div4);

    div1.appendChild(div2);
    div1.dataset.aos = "fade-up";
    allPro.appendChild(div1);
  });
};
chbg();
createCard();
addProCard();
