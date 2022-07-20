if (window.location.hostname != "localhost") {
  fetch("https://api.countapi.xyz/hit/hannes-scheibelauer.com/visit3");
}
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});
let x = document.querySelectorAll(".status");
x.forEach((c) => {
  if (c.innerHTML == "Abgeschlossen") {
    c.classList.add("status-green");
  } else {
    c.classList.add("status-red");
  }
});

/*
let divs = [];
const scroll = $("#scrolldiv");
divs[0] = $("#about");
divs[1] = $("#Projekte");
divs[2] = $("#Projekte-h2");
divs[3] = $("#contact");
divs[4] = $("#more-Button");

let check = new Array(10);
check.fill(false);

window.onscroll = () => {
  for (let i = 0; i < divs.length; i++) {
    if (scroll.offset().top - divs[i].offset().top > 0 && !check[i]) {
      divs[i].css("visibility", "visible").hide().fadeIn(2000);
      check[i] = true;
    }
  }
};*/

const div1 = $("#write");
let curstring = "";
let words = ["Hannes Scheibelauer", "Web Developer", "Software Developer"];
let wort = words[0];
let temp = "";
let i = 0;
var j = 0;

write();
function write() {
  let add = setInterval(() => {
    if (i + 1 >= wort.length) {
      clearInterval(add);
      setTimeout(function () {
        let decline = setInterval(() => {
          temp = temp.substring(0, i);
          div1.html(temp + "<span>|</span>");
          i--;
          if (i < 0) {
            clearInterval(decline);
            j++;
            if (j > 2) {
              j = 0;
            }
            wort = words[j];
            i = 0;
            write();
          }
        }, 70);
      }, 3000);
    }
    temp = temp + wort[i];
    div1.html(temp + "<span>|</span>");
    i++;
  }, 100);
}

var r = document.querySelector(":root");
var ModeSwitchCircle = document.getElementById("Mode-Switch-Circel");
function changeMode() {
  var rs = getComputedStyle(r);
  if (rs.getPropertyValue("--MainColor").trim() == "#0c8") {
    setLight();
  } else if (rs.getPropertyValue("--MainColor").trim() == "#f04") {
    setDark();
  }
}
function setLight() {
  ModeSwitchCircle.style.left = "0%";
  r.style.setProperty("--MainColor", "#f04");
  r.style.setProperty("--SecondColor", "#444");
  r.style.setProperty("--BackGroundColor", "#ccc");
  r.style.setProperty("--ButtonColor", "#bbb");
}
function setDark() {
  ModeSwitchCircle.style.left = "50%";
  r.style.setProperty("--MainColor", "#0c8");
  r.style.setProperty("--SecondColor", "#bbb");
  r.style.setProperty("--BackGroundColor", "#111");
  r.style.setProperty("--ButtonColor", "#444");
}
