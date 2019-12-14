// 1
const f1 = function() {
  const chbox = document.getElementById("one");
  if (chbox.checked) {
    console.log("checked");
  } else {
    console.log("Not-checked");
  }
};
const f2 = function() {
  const radi = document.getElementsByName("r1");
  for (let i = 0; i < radi.length; i++) {
    if (radi[i].checked) {
      console.log("Checked " + i + " element");
    }
  }
};

// 2
const f3 = function() {
  const sel = document.getElementById("mySelect").selectedIndex;
  const opt = document.getElementById("mySelect").options;
  console.log("Selected opt " + opt[sel].text);
};
const f4 = function() {
  const rng = document.getElementById("ran1");
  const div = document.getElementById("test");
  div.style.width = rng.value+'px';
};

// 3
const f5 = function() {
  const rtl = document.getElementById("rtl").value;
  const ttl = document.getElementById("ttl");

  const rtr = document.getElementById("rtr").value;
  const ttr = document.getElementById("ttr");

  const rbr = document.getElementById("rbr").value;
  const tbr = document.getElementById("tbr");

  const rbl = document.getElementById("rbl").value;
  const tbl = document.getElementById("tbl");

  const block = document.getElementById("block");

  ttl.value = rtl;
  ttr.value = rtr;
  tbr.value = rbr;
  tbl.value = rbl;

  block.style.borderRadius = rtl + 'px ' + rtr + 'px ' + rbr + 'px ' + rbl + 'px ';
};

// 4
const nav = document.getElementById("nav");
const submenu = document.getElementsByClassName("submenu");
nav.onmouseover = function(event) {
  const target = event.target;
  if (target.className == "menu-item") {
    const s = target.getElementsByClassName("submenu");
    closeMenu();
    s[0].style.display = "block";
  }
};
document.onmouseover = function (event) {
  const target = event.target;
  if (target.className != 'menu-item' && target.className != 'submenu') {
      closeMenu();
    }
};
const closeMenu = function() {
  for ( let i = 0; i < submenu.length; i++) {
    submenu[i].style.display = "none";
  }
};

// 5
const tabContent = document.getElementsByClassName("tabContent");
const tab = document.getElementsByClassName("tab");

const hideTabsContent = function(a) {
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add('hide');
    tab[i].classList.remove('whiteborder');
  }
};

hideTabsContent(1);

const showTabsContent = function(b) {
  if (tabContent[b].classList.contains('hide')) {
    hideTabsContent(0);
    tab[b].classList.add('whiteborder');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}

const f6 = function(argument) {
  let target = event.target;
  if (target.className == 'tab') {
    for (let i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
};
document.getElementById('tabs').addEventListener("click", f6);

// 6
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const spanMod = document.getElementsByClassName("closeMod")[0];

const f7 = function() {
  modal.style.display = "block";
}

const f8 = function() {
  modal.style.display = "none";
}

const f9 = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

window.addEventListener("click", f9);

spanMod.addEventListener("click", f8);
btn.addEventListener("click", f7);

// 7
const anim = document.getElementById("anim");

const f10 = function() {
  const elem = document.getElementById("myAnimation");
  let pos = 0;
  const id = setInterval(frame, 10);
  function frame() {
    if (pos == 350) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.top = pos + 'px';
      elem.style.left = pos + 'px';
    }
  }
};

anim.addEventListener("click", f10);

// 8
const dots = document.getElementsByClassName("dot");
const slides = document.getElementsByClassName("mySlides");
let slideIndex = 1;

showSlides(slideIndex);

function plusSlider(n) {
  showSlides(slideIndex += n);
}

function currentSlider(n) {
  showSlides(slideIndex = n)
}

function showSlides(n) {
  let i;

  if (n > slides.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active","");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeSlide";
}

// 9
function f11() {
  const input = document.getElementById("filterInput");
  const filter = input.value.toUpperCase();
  const ul = document.getElementById("myUl");
  const li = ul.getElementsByTagName("li");

  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    }
    else li[i].style.display = "none";
  }
}

// 10
let out = document.getElementById("out");

function plus() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  let result = n1 + n2;
  out.innerHTML = result;
}

function minus() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  let result = n1 - n2;
  out.innerHTML = result;
}

function multiply() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  let result = n1 * n2;
  out.innerHTML = result;
}

function divide() {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  let result = n1 / n2;
  out.innerHTML = result;
}

// 11
function initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 50.401699, lng: 30.252512,},
    scrollwheel: true,
    zoom: 8
  });
}

// 12
const mod = document.getElementById("modalImg");
const img = document.getElementById("myImg");
const modalImg = document.getElementById("img01");
const captionText = document.getElementById("caption");
const spanM = document.getElementsByClassName("modalClose")[0];

img.onclick = function() {
  mod.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt;
}

spanM.onclick = function() {
  mod.style.display = "none";
}

// 13
function move() {
  const elemen = document.getElementById("bar");
  const id = setInterval(frame, 10);
  let width = 10;

  function frame() {
    if(width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elemen.style.width = width + '%';
      document.getElementById("label").innerHTML = width * 1 + '%';
    }
  }
};

// 14
function f12() {
  const popup = document.getElementById('popup');
  popup.classList.toggle('showP');
}

// 15
const acc = document.getElementsByClassName("accordion");

for (let i = 0; i < acc.length; i++) {
  acc[i].onclick = function() {
    this.classList.toggle("active");

    this.nextElementSibling.classList.toggle("showAcc");
  }
}

// 16
function moneyConverter(valNum) {
  document.getElementById("outputrub").innerHTML = valNum * 62;
  document.getElementById("outputuah").innerHTML = valNum * 24;
  document.getElementById("outputeuro").innerHTML = valNum * 1.11;
}
