const BackButton = document.getElementById('back');
BackButton.addEventListener('click', (v) => {
  v.preventDefault();
  console.log("working");
  location.replace('Noofphotos.html');
})
const collection = document.getElementById('col');
collection.addEventListener('click', (v) => {
  v.preventDefault();
  console.log("working");
  location.replace('collection.html');
})

var prevN = 0;
function displayTheBox(n) {
  console.log(n);
  var products = document.getElementsByClassName("box");
  products[prevN].classList.remove("yes");
  products[n].classList.add("yes");

  prevN = n;
}
displayTheBox(localStorage.getItem('n'));

// Sliders JavaScript

var slidersizeofphotos = document.getElementById("slidersizeofphotos");
var selectorsizeofphotos = document.getElementById("selectorsizeofphotos");
var SelectValuesizeofphotos = document.getElementById("SelectValuesizeofphotos");
var progressbarsizeofphotos = document.getElementById("progressbarsizeofphotos");
SelectValuesizeofphotos.innerHTML = slidersizeofphotos.value;

slidersizeofphotos.oninput = function () {
  SelectValuesizeofphotos.innerHTML = this.value;
  selectorsizeofphotos.style.left = this.value + "%";
  progressbarsizeofphotos.style.width = this.value + "%";
}


/* Layout Border Radius */

var sliderlborrad = document.getElementById("sliderlborrad");
var selectorlborrad = document.getElementById("selectorlborrad");
var SelectValuelborrad = document.getElementById("SelectValuelborrad");
var progressbarlborrad = document.getElementById("progressbarlborrad");
SelectValuelborrad.innerHTML = sliderlborrad.value;

sliderlborrad.oninput = function () {
  SelectValuelborrad.innerHTML = this.value;
  selectorlborrad.style.left = this.value + "%";
  progressbarlborrad.style.width = this.value + "%";
}

// Image Border Radius

var sliderIborrad = document.getElementById("sliderIborrad");
var selectorIborrad = document.getElementById("selectorIborrad");
var SelectValueIborrad = document.getElementById("SelectValueIborrad");
var progressbarIborrad = document.getElementById("progressbarIborrad");
SelectValueIborrad.innerHTML = sliderIborrad.value;

sliderIborrad.oninput = function () {
  SelectValueIborrad.innerHTML = this.value;
  selectorIborrad.style.left = this.value + "%";
  progressbarIborrad.style.width = this.value + "%";
}

// Image Padding 

var sliderpad = document.getElementById("sliderpad");
var selectorpad = document.getElementById("selectorpad");
var SelectValuepad = document.getElementById("SelectValuepad");
var progressbarpad = document.getElementById("progressbarpad");
SelectValuepad.innerHTML = sliderpad.value;

sliderpad.oninput = function () {
  SelectValuepad.innerHTML = this.value;
  selectorpad.style.left = this.value + "%";
  progressbarpad.style.width = this.value + "%";
}

// Image Margin

var slidermar = document.getElementById("slidermar");
var selectormar = document.getElementById("selectormar");
var SelectValuemar = document.getElementById("SelectValuemar");
var progressbarmar = document.getElementById("progressbarmar");
SelectValuemar.innerHTML = slidermar.value;

slidermar.oninput = function () {
  SelectValuemar.innerHTML = this.value;
  selectormar.style.left = this.value + "%";
  progressbarmar.style.width = this.value + "%";
}



